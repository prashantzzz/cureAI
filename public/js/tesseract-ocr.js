// script.js

$(document).ready(function() {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName) {
                label.querySelector('span').innerHTML = fileName;

                let reader = new FileReader();
                reader.onload = function () {
                    let dataURL = reader.result;
                    $("#selected-image").attr("src", dataURL);
                }
                let file = this.files[0];
                reader.readAsDataURL(file);
                recognizeAndResizeImage(file);
            } else {
                label.innerHTML = labelVal;

                $("#log").empty();
            }
        });

        // Firefox bug fix
        input.addEventListener('focus', function () { input.classList.add('has-focus'); });
        input.addEventListener('blur', function () { input.classList.remove('has-focus'); });
    });
});

$("#startLink").click(function() {
    var img = document.getElementById('selected-image');
    recognizeAndResizeImage(img);
});

function progressUpdate(packet) {
    var log = document.getElementById('log');

    if (log.firstChild && log.firstChild.status === packet.status) {
        if ('progress' in packet) {
            var progress = log.firstChild.querySelector('progress')
            progress.value = packet.progress
        }
    } else {
        var line = document.createElement('div');
        line.status = packet.status;
        var status = document.createElement('div')
        status.className = 'status'
        status.appendChild(document.createTextNode(packet.status))
        line.appendChild(status)

        if ('progress' in packet) {
            var progress = document.createElement('progress')
            progress.value = packet.progress
            progress.max = 1
            line.appendChild(progress)
        }

        if (packet.status == 'done') {
            log.innerHTML = ''
            var pre = document.createElement('pre')
            const txt=packet.data.text.replace(/\n\s*\n/g, '\n');
            console.log(txt);
            pre.appendChild(document.createTextNode(txt))
            line.innerHTML = ''
            line.appendChild(pre)
            document.getElementById("analyze-it").classList.remove("hidden");
        }
        log.insertBefore(line, log.firstChild);
        
    }
}

function recognizeAndResizeImage(file) {
    $("#log").empty();
    resizeImage(file).then(resizedBlob => {
        const corePath = window.navigator.userAgent.indexOf("Edge") > -1 ?
            'js/tesseract-core.asm.js' :
            'js/tesseract-core.wasm.js';
        const worker = new Tesseract.TesseractWorker({
            corePath,
        });
        worker.recognize(resizedBlob, $("#langsel").val())
            .progress(function(packet) {
                // console.info(packet);
                progressUpdate(packet);
            })
            .then(function(data) {
                console.log(data);
                progressUpdate({ status: 'done', data: data });
            });
        // Display resized image
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('selected-image').src = event.target.result;
        };
        reader.readAsDataURL(resizedBlob);
    });
}


function resizeImage(file) {
    return new Promise((resolve, reject) => {
        const maxDimension = 1000;
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.src = event.target.result;
            img.onload = function() {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > maxDimension) {
                        height *= maxDimension / width;
                        width = maxDimension;
                    }
                } else {
                    if (height > maxDimension) {
                        width *= maxDimension / height;
                        height = maxDimension;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                canvas.toBlob(function(blob) {
                    resolve(blob);
                }, file.type);
            };
        };
        reader.readAsDataURL(file);
    });
}
