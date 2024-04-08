document.addEventListener('DOMContentLoaded', function() {
  // Get references to the elements
  const trigger = document.getElementById('trigger');
  const target = document.getElementById('target');

  // Add event listener for mouseenter
  trigger.addEventListener('mouseenter', function() {
    // Change the image source when mouse enters
    target.src = 'img/picB.jpg';
  });

  // Add event listener for mouseleave
  trigger.addEventListener('mouseleave', function() {
    // Change the image source back when mouse leaves
    target.src = 'img/picA.jpg';
  });
});