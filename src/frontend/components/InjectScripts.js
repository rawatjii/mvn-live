export default function injectScripts(html) {
  const container = document.createElement('div');
  container.innerHTML = html;
  const scripts = container.querySelectorAll('script');

  scripts.forEach((script) => {
    const s = document.createElement('script');
    if (script.src) {
      s.src = script.src;
      s.async = true;
    } else {
      s.text = script.textContent || '';
    }
    document.head.appendChild(s);
  });
}