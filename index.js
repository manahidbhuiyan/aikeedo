// sidebar js
document.addEventListener("DOMContentLoaded", function () {
    var humberger = document.querySelector('.navbar-toggler')
    var sidebar = document.querySelector('.mobile-sidebar')
    var overLay = document.querySelector('.nav-overlay')
    var crossButton = document.querySelector('.cross')

    humberger.addEventListener("click", function () {
        if (window.innerWidth >= 576 && window.innerWidth < 768) {
            sidebar.style.width = "55%";
        } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
            sidebar.style.width = "42%";
        } else {
            sidebar.style.width = "80%";
        }
        // sidebar.style.padding = "30px"; // Uncomment if needed
        overLay.style.width = "100%";
        // sidebar.classList.toggle("mobile-active");
        sidebar.classList.add("sidebar-padding");
    });

    crossButton.addEventListener("click", function () {
        sidebar.style.width = "0"
        // sidebar.style.padding = "0"
        overLay.style.width = "0"
        sidebar.classList.remove("sidebar-padding");

    });

    // search show hide
    var overlayer = document.querySelector('.overlayer')
    var searchBar = document.querySelector('.search-bar')
    var fakeOverlay = document.querySelector('.fakeOverlay')
    var mobileSearchIcon = document.querySelector('.mobile-search-icon')
    searchBar.addEventListener('click', function () {
        overlayer.style.display = 'block'
    });
    mobileSearchIcon.addEventListener('click', function () {
        overlayer.style.display = 'block'
    });
    fakeOverlay.addEventListener('click', function () {
        overlayer.style.display = 'none'

    });
})


//   scroll 
$(document).ready(function () {
    $(".left-side-bar").scroll(function () {
        $(".right-content").scrollTop($(this).scrollTop());
    });

    $(".right-content").scroll(function () {
        $(".left-side-bar").scrollTop($(this).scrollTop());
    });
});

