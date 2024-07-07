let appFooter = `
<footer class="bg-primary p-10 md:p-[3em]" id="footerid">
    <div class="max-w-screen-xl mx-auto flex flex-wrap justify-between gap-3 lg:items-stretch lg:gap-0">
      <!-- col 1 -->
      <div class="w-full flex flex-col justify-between items-center gap-5 lg:w-1/5 lg:pr-5">
        <!-- <img src="./src/img/aimed-icon.png" alt="brand logo" style="max-width: 60px; height: auto;"/> -->
        <nav aria-labelledby="social-media-links">
          <ul class="flex gap-5 my-2 lg:my-auto">
            <li>
              <a class="text-white hover:text-secondary text-xl lg:text-lg"
                href="https://www.hackerrank.com/profile/prashantzz"
                aria-label="Facebook profile of <b>AI</b>MED">
                <i class="fa-brands fa-hackerrank"></i>
              </a>
            </li>
            <li>
              <a class="text-white hover:text-secondary text-xl lg:text-lg"
                href="https://www.github.com/prashantzzz" aria-label="Youtube account of <b>AI</b>MED">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a class="text-white hover:text-secondary text-xl lg:text-lg"
                href="https://www.linkedin.com/in/prashantzz/"
                aria-label="Twitter profile of <b>AI</b>MED">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a class="text-white hover:text-secondary text-xl lg:text-lg"
                href="https://www.instagram.com/prashant.zz/"
                aria-label="Instagram profile of <b>AI</b>MED">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- col 2 -->
      <div class="w-full flex flex-col gap-16 lg:w-1/5 lg:pr-5">
        <nav aria-labelledby="footer-nav-1">
          <ul class="flex flex-col items-center gap-3 lg:items-start lg:gap-4">
            <li>
              <a class="text-white hover:text-secondary" href="./">Home</a>
            </li>
            <li>
              <a class="text-white hover:text-secondary" href="./blogs.html">Blog</a>
            </li>
            <li>
              <a class="text-white hover:text-secondary" href="./review.html">Review | Suggestion</a>
            </li>
          </ul>
        </nav> 
      </div>
      <!-- col 3 -->
      <div class="w-full flex flex-col gap-16 lg:w-1/5 lg:pr-5">
        <nav aria-labelledby="footer-nav-2">
          <ul class="flex flex-col items-center gap-3 lg:items-start lg:gap-4">
            <li>
              <a class="text-white hover:text-secondary"
                href="https://www.linkedin.com/in/prashantzzz/">Contact Developer</a>
            </li>
            <li>
              <a href="https://www.upload-apk.com/daN7mWgvAnh10VM" class="flex w-40 h-14 bg-blue-900 text-white rounded-lg items-center justify-center cursor-pointer">
                <div class="mr-3">
                    <svg viewBox="30 336.7 120.9 129.2" width="20">
                        <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"/>
                        <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"/>
                        <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"/>
                        <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"/>
                    </svg> 
                </div>
                <div>
                    <div class="text-xs">Download the</div>
                    <div class="font-semibold font-sans -mt-1">Andriod App</div>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- col 4 -->
      <div class="w-full flex flex-col items-center lg:items-end lg:w-2/5">
        <!-- <a class="ds-btn ds-btn-primary ds-btn-wide my-3 lg:my-auto" href="#">Start Diagnosing</a> -->
  
        <span class="mt-3 mb-1 text-white">© cure<b>AI</b>. All Rights Reserved</span>
        <!--div class="text-xs lg:text-right text-white">
          Developed by
          <a class="text-secondary" target="_blank"
            href="https://www.linkedin.com/in/prashantzzz/">Prashant</a>
        </div-->
      </div>
    </div>
  </footer>
  `;
document.getElementById("app-footer").innerHTML = appFooter;