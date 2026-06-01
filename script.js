const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', revealSections);

function revealSections(){
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if(top < window.innerHeight - 80){
      section.classList.add('active');
    }
  });
}

revealSections();

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
  glow.style.left = `${e.clientX - 150}px`;
  glow.style.top = `${e.clientY - 150}px`;
});
