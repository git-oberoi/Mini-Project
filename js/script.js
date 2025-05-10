// Hamburger Button For Small screen 
document.querySelector('.hamburger').addEventListener('click', function () {
  document.querySelector('.main-nav').classList.toggle('active');
});

// Read More Button for Blog Page 
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


  // Show or hide the button on scroll
  const goTopBtn = document.getElementById("goTopBtn");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      goTopBtn.classList.add("show");
    } else {
      goTopBtn.classList.remove("show");
    }
  });

  // Scroll to top on click
  goTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


//slider
 $(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function updateSlider(index) {
      const slideWidth = $('.hero-slider').width();
      $('.slides-wrapper').css('transform', 'translateX(' + (-index * slideWidth) + 'px)');
      $('.dot').removeClass('active');
      $('.dot[data-slide="' + index + '"]').addClass('active');
      currentIndex = index;
    }

    function nextSlide() {
      let newIndex = (currentIndex + 1) % totalSlides;
      updateSlider(newIndex);
    }

    function prevSlide() {
      let newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider(newIndex);
    }

    // Auto-slide every 4 seconds
    let sliderInterval = setInterval(nextSlide, 4000);

    // Controls
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
      let index = $(this).data('slide');
      updateSlider(index);
    });

    // Resize fix
    $(window).resize(function () {
      updateSlider(currentIndex);
    });
  });