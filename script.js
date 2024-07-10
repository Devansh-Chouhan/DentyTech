tl = gsap.timeline();

tl.from("#nav #nav-part1", {
  y: -10,
  duration: 0.2,
  delay: 0.3,
  opacity: 0,
});

tl.from("#nav #nav-part2", {
  y: -10,
  duration: 0.2,
  opacity: 0,
});

tl.from("#nav #nav-part3", {
  y: -10,
  duration: 0.2,
  opacity: 0,
});

tl.from("#main h1", {
  x: -10,
  duration: 0.3,
  opacity: 0,
});

tl.from("#main img", {
  y: 10,
  duration: 0.3,
  rotate: 45,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#main #btm-left", {
  y: 10,
  duration: 0.1,
  opacity: 0,
});

tl.from("#main #right-footer-icon", {
  y: 10,
  duration: 0.1,
  opacity: 0,
});
