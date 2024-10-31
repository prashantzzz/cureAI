let phone_nav = `
<div class="nav__mobile-menu">
    <ul class="flex flex-col items-center gap-4">
      <li>
        <a href="./LoginSignup.html" class="ds-btn ds-btn-primary ds-btn-wide px-2 py-4">Login / Signup</a>
      </li>
      <li>
        <div class="dropdown bg-gray-100 border p-2 rounded-md" id="google_translate_element"></div>
      </li>
      <li>
        <a href="./" class="font-tertiary text-primary hover:text-secondary">Home</a>
      </li>
      <li>
        <a href="./predictor.html" class="font-tertiary text-primary hover:text-secondary">Predictor</a>
      </li>
      <li>
        <a href="./image-inference.html" class="font-tertiary text-primary hover:text-secondary">Scan Tool</a>
      </li>
      <li>
        <a href="./extract-text.html" class="font-tertiary text-primary hover:text-secondary">Scan Prescription</a>
      </li>
      <li>
        <a href="./blogs.html" class="font-tertiary text-primary hover:text-secondary">Blog</a>
      </li>
    </ul>
</div>
`;
document.getElementById("app-phone-nav").innerHTML = phone_nav;