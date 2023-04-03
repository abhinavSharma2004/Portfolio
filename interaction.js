const container = document.querySelector('.hero-illustration-1');
const imi = document.querySelector('.bw-abhinav-2-icon');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    imi.style.transform = `scale(${1 + (scrollPosition / 300)})`;
    const opacity = Math.min(scrollPosition / 100, 1);
    imi.style.opacity = opacity.toString();
  });

function flight(){
  const {scrollTop, scrollHeight} = document.documentElement;
  const dist = scrollTop / (scrollHeight - window.innerHeight) * 92.3 + '%';
  document.querySelector('.plane-1-icon').style.setProperty('--progress', dist);
  console.log(scrollPercent);
}

document.addEventListener('scroll', flight);
