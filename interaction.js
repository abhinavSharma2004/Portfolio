const container = document.querySelector('.hero-illustration-1');
const imi = document.querySelector('.bw-abhinav-2-icon');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    imi.style.transform = `scale(${1 + (scrollPosition / 300)})`;
    const opacity = Math.min(scrollPosition / 100, 1);
    imi.style.opacity = opacity.toString();
  });

  // const plane = document.querySelector('.plane-1-icon');
  
  // window.addEventListener('scroll', function() {
  //     const scrollPosition = window.scrollY;
  //     plane.style.transform = `translateY(${1 + (scrollPosition / 300)})`;
  //   });

    // Get the container and image elements
const contain = document.getElementById('plane-1-icon');
const image = document.getElementById('plane-1-icon');

// Set the initial position of the image
let scrollPosition = 0;

// Define the animation function
function animate() {
  // Update the scroll position
  scrollPosition += 5; // Change this value to adjust the scrolling speed
  
  // If the image has scrolled completely out of view, reset the position
  if (scrollPosition > image.width - contain.offsetWidth) {
    scrollPosition = 0;
  }
  
  // Set the new scroll position
  contain.scrollLeft = scrollPosition;
  
  // Request the next animation frame
  window.requestAnimationFrame(animate);
}

// Start the animation
animate();
