let appHeader = `
<header class="fixed w-full lg:px-[5em] z-50 bg-white overflow-x-hidden drop-shadow-sm">
    <div class="container max-w-screen-xl mx-auto flex justify-between items-center p-5 lg:py-0">
        <a href="./"><img src="./src/img/aimed-removed.png" alt="brand logo"
                style="max-width: 160px; height: auto" /></a>
        <nav class="lg:block" aria-labelledby="header-nav-desktop">
            <ul class="flex gap-3">
                <li>
                    <a class="block px-3 py-5 relative after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                        href="./">Home</a>
                </li>
                <li>
                    <a class="block px-3 py-5 relative after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                        href="./extract-text.html">Scan Prescription</a>
                </li>
                <li>
                    <a class="block px-3 py-5 relative after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                        href="./image-inference.html">Scan Tool</a>
                </li>
                <li>
                    <a class="block px-3 py-5 relative after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                        href="./predictor.html">Prediction</a>
                </li>
                <li>
                    <a class="block px-3 py-5 relative after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                        href="./blogs.html">Blog</a>
                </li>
                
            </ul>
        </nav>
        <div class="lg:block">
            <a class="ds-btn ds-btn-primary ds-btn-wide" href="./LoginSignup.html">Login | Signup</a>
        </div>

        <!-- burger icon on mobile 
        <nav class="nav__icon lg:hidden" aria-labelledby="header-nav-mobile">
            <span></span>
            <span></span>
            <span></span>
        </nav>-->
    </div>
</header>
`;
document.getElementById("app-header").innerHTML = appHeader;