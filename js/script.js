$(document).ready(function () {
  // Hamburger Menu Toggle
  document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.main-nav').classList.toggle('active');
  });

  // Form Validation
  $('.contact-form').submit(function (e) {
    e.preventDefault();
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
      $('.contact-form').prepend('<p class="error-message">Please fill out all fields correctly.</p>');
      return;
    }

    $('.error-message').remove();
    alert('Message sent!');
    this.reset();
  });

  // Read More Button for Blog
  $('.read-more').click(function () {
    const post = $(this).siblings('.full-post');
    const button = $(this);
    post.slideToggle(300, function () {
      button.text(post.is(':visible') ? 'Read Less' : 'Read More');
    });
  });

  // Set 'All' Filter as Active on Load
  $('.filter-btn[data-category="all"]').addClass('active-filter');

  // Portfolio Filtering
  $('.filter-btn').on('click', function () {
    const category = $(this).data('category');
    $('.filter-btn').removeClass('active-filter');
    $(this).addClass('active-filter');

    if (category === 'all') {
      $('.gallery-item').show();
    } else {
      $('.gallery-item').hide();
      $(`.gallery-item[data-category="${category}"]`).fadeIn();
    }
  });

  // Image Viewer
  let currentIndex = -1;
  const items = $('.portfolio-gallery .gallery-item img');

  function showImage(index) {
    if (index >= 0 && index < items.length) {
      const src = $(items[index]).attr('src');
      $('#full-image').attr('src', src);
      currentIndex = index;
      $('#viewer').fadeIn();
    }
  }

  items.click(function () {
    currentIndex = items.index(this);
    showImage(currentIndex);
  });

  $('#close').click(function () {
    $('#viewer').fadeOut();
  });

  $('#prev').click(function () {
    showImage(currentIndex - 1);
  });

  $('#next').click(function () {
    showImage(currentIndex + 1);
  });

  $(document).keydown(function (e) {
    if ($('#viewer').is(':visible')) {
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      else if (e.key === 'ArrowRight') showImage(currentIndex + 1);
      else if (e.key === 'Escape') $('#viewer').fadeOut();
    }
  });

  // Slider
  let sliderIndex = 0;
  const slides = $('.slide');
  const totalSlides = slides.length;

  function updateSlider(index) {
    const slideWidth = $('.hero-slider').width();
    $('.slides-wrapper').css('transform', `translateX(${-index * slideWidth}px)`);
    $('.dot').removeClass('active');
    $(`.dot[data-slide="${index}"]`).addClass('active');
    sliderIndex = index;
  }

  function nextSlide() {
    const newIndex = (sliderIndex + 1) % totalSlides;
    updateSlider(newIndex);
  }

  function prevSlide() {
    const newIndex = (sliderIndex - 1 + totalSlides) % totalSlides;
    updateSlider(newIndex);
  }

  // Auto-slide every 3 seconds
  let sliderInterval = setInterval(nextSlide, 3000);

  // Slider Controls
  $('.next').click(function () {
    clearInterval(sliderInterval);
    nextSlide();
  });

  $('.prev').click(function () {
    clearInterval(sliderInterval);
    prevSlide();
  });

  $('.dot').click(function () {
    clearInterval(sliderInterval);
    const index = $(this).data('slide');
    updateSlider(index);
  });

  // Resize Fix for Slider
  $(window).resize(function () {
    updateSlider(sliderIndex);
  });

  // Scroll to Top Button
  const goTopBtn = document.getElementById('goTopBtn');

  window.addEventListener('scroll', function () {
    goTopBtn.classList.toggle('show', window.pageYOffset > 300);
  });

  goTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

  // Smooth Scrolling for Anchor Links
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $($(this).attr('href'));

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 600); 
    }
  });