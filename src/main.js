import './style.css'

document.querySelector('#app').innerHTML = `

`
const slides = document.querySelectorAll('.testimonial-slide');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('hidden', idx !== i);
  });
}

document.getElementById('next').onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.getElementById('prev').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

// Optional auto-play
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 6000);

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.30 }
  );

  reveals.forEach(el => observer.observe(el));
});
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('bg-black/70');
    header.classList.remove('bg-black/40');
  } else {
    header.classList.add('bg-black/40');
    header.classList.remove('bg-black/70');
  }
});

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.30 }
);

reveals.forEach(el => observer.observe(el));