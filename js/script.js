/* Hamburger Button For Small screen */
document.querySelector('.hamburger').addEventListener('click', function () {
  document.querySelector('.main-nav').classList.toggle('active');
});

/* Read More Button for Blog Page */
$(document).ready(function () {
  $('.read-more').click(function () {
    const post = $(this).siblings('.full-post');
    const button = $(this);

    post.slideToggle(300, function () {
      const isVisible = post.is(':visible');
      button.text(isVisible ? 'Read Less' : 'Read More');
    });
  });

  // Set 'All' filter as active on page load
  $('.filter-btn[data-category="all"]').addClass('active-filter');
});

/* Portfolio Filtering */
$('.filter-btn').on('click', function () {
  const category = $(this).data('category');

  // Highlight only the clicked button
  $('.filter-btn').removeClass('active-filter');
  $(this).addClass('active-filter');

  // Filter items
  if (category === 'all') {
    $('.gallery-item').show();
  } else {
    $('.gallery-item').hide();
    $(`.gallery-item[data-category="${category}"]`).fadeIn();
  }
});
