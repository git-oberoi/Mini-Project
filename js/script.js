
/*Hamburger Button For Small screen */

document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.main-nav').classList.toggle('active');
});

/*Read More Button for Blog Page*/

console.log("Script loaded!");  // This should appear in the console.
$(document).ready(function () {
  $('.read-more').click(function () {
    const post = $(this).siblings('.full-post');
    const button = $(this);

    post.slideToggle(300, function () {
      const isVisible = post.is(':visible');
      
      if (isVisible) {
        button.text('Read Less');
      } else {
        button.text('Read More');
      }
    });
  });
});

