/* erosoft — shared behaviors */
(function () {
  'use strict';

  /* ---- mobile nav ---- */
  var burger = document.querySelector('.nav .burger');
  var links = document.querySelector('.nav .links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- hide nav on scroll down, show on scroll up ---- */
  var nav = document.querySelector('.nav');
  var lastY = window.scrollY;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (nav) {
      if (y > lastY && y > 140) nav.classList.add('hidden');
      else nav.classList.remove('hidden');
    }
    lastY = y;
  }, { passive: true });

  /* ---- reveal on scroll ---- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (reduced) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- starfield sparks (elements with .starfield) ---- */
  var SPARK = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="currentColor"/></svg>';
  document.querySelectorAll('.starfield').forEach(function (field) {
    var n = parseInt(field.dataset.count || '12', 10);
    for (var i = 0; i < n; i++) {
      var s = document.createElement('div');
      s.className = 's';
      var size = 8 + Math.random() * 16;
      s.style.left = (Math.random() * 96) + '%';
      s.style.top = (Math.random() * 92) + '%';
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.animationDelay = (Math.random() * 5) + 's';
      s.style.animationDuration = (3.5 + Math.random() * 3) + 's';
      s.innerHTML = SPARK;
      field.appendChild(s);
    }
  });

  /* ---- video placeholder play button (game page) ---- */
  var playBtn = document.querySelector('.videoframe .play');
  if (playBtn) {
    playBtn.addEventListener('click', function () {
      var frame = playBtn.closest('.videoframe');
      var vid = frame.querySelector('video');
      if (vid) {
        frame.classList.add('playing');
        playBtn.style.display = 'none';
        vid.controls = true;
        vid.play();
      } else {
        // no video file yet — gentle nudge
        playBtn.animate(
          [{ transform: 'scale(1)' }, { transform: 'scale(0.92)' }, { transform: 'scale(1)' }],
          { duration: 260, easing: 'ease-out' }
        );
      }
    });
  }
})();
