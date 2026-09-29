// Shared nav + footer for the v2 mock pages. Each page has <header id="nav"></header> and <footer id="footer"></footer>.
const page = location.pathname.split('/').pop() || 'home.html';
const tabs = [
  ['home.html#capabilities', 'Technology', []],
  ['ai-agent.html', 'AI Agronomist', ['ai-agent.html', 'chat.html']],
  ['nutrients.html', 'Nutrients', ['nutrients.html']],
  ['hardware.html', 'Hardware', ['hardware.html']],
];
const tabLinks = tabs
  .map(([href, label, pages]) => `<a href="${href}"${pages.includes(page) ? ' aria-current="page"' : ''}>${label}</a>`)
  .join('');

document.getElementById('nav').outerHTML = `
<nav class="nav">
  <div class="wrap">
    <a href="home.html" class="wordmark">JoME</a>
    <div class="tabs">${tabLinks}</div>
    <div class="nav-end">
      <a href="#" class="lang">فارسی</a>
      <a href="#" class="link">Request a quote <span class="arrow">→</span></a>
      <a href="#" class="btn btn-solid btn-sm">Get started</a>
    </div>
    <details class="menu">
      <summary><span class="open">Menu</span><span class="close">Close</span></summary>
      <div class="menu-panel">
        ${tabLinks}
        <div class="row-end"><a href="#" class="lang muted">فارسی</a><a href="#" class="btn btn-solid btn-sm">Get started</a></div>
      </div>
    </details>
  </div>
</nav>`;

document.getElementById('footer').outerHTML = `
<footer class="footer">
  <div class="wrap">
    <div class="foot">
      <div><span class="wordmark">JoME</span><p>Empowering farmers with AI-driven insights and autonomous control systems for a sustainable future.</p></div>
      <div class="cols">
        <div><span class="label">Product</span><a href="home.html#capabilities">Features</a><a href="hardware.html">Tech specs</a><a href="ai-agent.html">AI Agent</a></div>
        <div><span class="label">Company</span><a href="#">About us</a><a href="#">Careers</a></div>
        <div><span class="label">Legal</span><a href="#">Privacy policy</a><a href="#">Terms of service</a></div>
      </div>
    </div>
    <div class="legal">
      <span>© 2024 JoME Autonomous Irrigation. All rights reserved.</span>
      <span class="social"><a href="#">Like</a><a href="#">Share</a></span>
    </div>
  </div>
</footer>`;
