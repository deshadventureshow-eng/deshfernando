(function() {
  var cursor = document.getElementById('cursor');
  var ring = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;
  cursor.style.left = '-100px'; cursor.style.top = '-100px';
  ring.style.left = '-100px'; ring.style.top = '-100px';
  document.addEventListener('mousemove', function(e) {
    document.body.classList.add('custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    ring.style.left   = e.clientX + 'px';
    ring.style.top    = e.clientY + 'px';
  });
  document.querySelectorAll('a, button').forEach(function(el) {
    el.addEventListener('mouseenter', function() { ring.style.width='52px'; ring.style.height='52px'; ring.style.opacity='0.9'; });
    el.addEventListener('mouseleave', function() { ring.style.width='32px'; ring.style.height='32px'; ring.style.opacity='0.5'; });
  });
})();
