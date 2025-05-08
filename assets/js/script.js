(function ($) {
    "use strict";

    // ===Datepicker===
    if ($("#datepicker").length) {
        $("#datepicker").datepicker();
    }

    // ===Price Filter===
    function priceFilter() {
        if ($(".price-ranger").length) {
            $(".price-ranger #slider-range").slider({
                range: true,
                min: 0,
                max: 5000,
                values: [0, 3000],
                slide: function (event, ui) {
                    $(".price-ranger .ranger-min-max-block .min").val("" + ui.values[0]);
                    $(".price-ranger .ranger-min-max-block .max").val("" + ui.values[1]);
                },
            });
            $(".price-ranger .ranger-min-max-block .min").val(
                "" + $(".price-ranger #slider-range").slider("values", 0)
            );
            $(".price-ranger .ranger-min-max-block .max").val(
                "" + $(".price-ranger #slider-range").slider("values", 1)
            );
        }
    }

    // ===Quantity Btn===
    $(".add").on("click", function () {
        if ($(this).prev().val() < 999) {
            $(this)
                .prev()
                .val(+$(this).prev().val() + 1);
        }
    });
    $(".sub").on("click", function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1)
                $(this)
                    .next()
                    .val(+$(this).next().val() - 1);
        }
    });

    // ===Checkout Payment===
    if ($(".checkout__payment__title").length) {
        $(".checkout__payment__item").find(".checkout__payment__content").hide();
        $(".checkout__payment__item--active").find(".checkout__payment__content").show();

        $(".checkout__payment__title").on("click", function (e) {
            e.preventDefault();

            $(this)
                .parents(".checkout__payment")
                .find(".checkout__payment__item")
                .removeClass("checkout__payment__item--active");
            $(this).parents(".checkout__payment").find(".checkout__payment__content").slideUp();

            $(this).parent().addClass("checkout__payment__item--active");
            $(this).parent().find(".checkout__payment__content").slideDown();
        });
    }

    //Image Reveal Animation
    if ($(".reveal").length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none",
                },
            });
            tl.set(container, {
                autoAlpha: 1,
            });
            tl.from(container, 1.5, {
                xPercent: -100,
                ease: Power2.out,
            });
            tl.from(image, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out,
            });
        });
    }

    // ===Main Slider / Banner Carousel===
    if ($(".slider-one__carousel").length) {
        $(".slider-one__carousel").owlCarousel({
            loop: true,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            margin: 0,
            nav: true,
            dots: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-right-arrow2"></span>',
                '<span class="icon-right-arrow21"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                800: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
            },
        });
    }

    //Brand One Carousel
    if ($(".brand-one__carousel").length) {
        $(".brand-one__carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 3000,
            navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-left-arrow right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
            },
        });
    }

    //Testimonial One Carousel
    if ($(".testimonial-one__carousel").length) {
        $(".testimonial-one__carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
                1200: {
                    items: 1,
                },
                1320: {
                    items: 1,
                },
            },
        });
    }

    //Team One Carousel
    if ($(".team-one__carousel").length) {
        $(".team-one__carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
                1320: {
                    items: 3,
                },
            },
        });
    }

    //Service One Carousel
    if ($(".service-one__carousel").length) {
        $(".service-one__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
                1320: {
                    items: 3,
                },
            },
        });
    }

    //Testimonial Two Carousel
    if ($(".testimonial-two__carousel").length) {
        $(".testimonial-two__carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 2,
                },
                1320: {
                    items: 2,
                },
            },
        });
    }

    //Testimonial Three Carousel
    if ($(".testimonial-three__carousel").length) {
        $(".testimonial-three__carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-right-arrow2"></span>',
                '<span class="icon-right-arrow21"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
                1200: {
                    items: 1,
                },
                1320: {
                    items: 1,
                },
            },
        });
    }

    //Service Two Carousel
    if ($(".service-two__carousel").length) {
        $(".service-two__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
                1320: {
                    items: 3,
                },
            },
        });
    }

    //Features Two Carousel
    if ($(".features-two__carousel").length) {
        $(".features-two__carousel").owlCarousel({
            loop: true,
            margin: 50,
            nav: false,
            dots: false,
            autoplay: true,
            autoPlayTimeout: 0,
            smartSpeed: 10000,
            autoHeight: true,
            autoplayHoverPause: false,
            navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
            },
        });
    }


    // Quote One Tab
    if ($(".quote-tab").length) {
        $(".quote-tab .tabs-button-box .tab-btn-item").on("click", function (e) {
            e.preventDefault();
            var target = $($(this).attr("data-tab"));

            if ($(target).hasClass("actve-tab")) {
                return false;
            } else {
                $(".quote-tab .tabs-button-box .tab-btn-item").removeClass("active-btn-item");
                $(this).addClass("active-btn-item");
                $(".quote-tab .tabs-content-box .tab-content-box-item").removeClass(
                    "tab-content-box-item-active"
                );
                $(target).addClass("tab-content-box-item-active");
            }
        });
    }

    //Progress Count Bar
    if ($(".count-bar").length) {
        $(".count-bar").appear(
            function () {
                var el = $(this);
                var percent = el.data("percent");
                $(el).css("width", percent).addClass("counted");
            }, {
            accY: -50,
        }
        );
    }

    //Progress Bar / Levels
    if ($(".progress-levels .progress-box .bar-fill").length) {
        $(".progress-box .bar-fill").each(
            function () {
                $(".progress-box .bar-fill").appear(function () {
                    var progressWidth = $(this).attr("data-percent");
                    $(this).css("width", progressWidth + "%");
                });
            }, {
            accY: 0,
        }
        );
    }

    //Fact Counter + Text Count
    if ($(".count-box").length) {
        $('.count-box').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).find(".count-text").attr("data-stop")
            }, {

                //chnage count up speed here
                duration: 10000,
                easing: 'swing',
                step: function (now) {
                    $(this).find(".count-text").text(Math.ceil(now));
                }
            });
        });
    }

    // Accrodion
    if ($(".accrodion-grp").length) {
        var accrodionGrp = $(".accrodion-grp");
        accrodionGrp.each(function () {
            var accrodionName = $(this).data("grp-name");
            var Self = $(this);
            var accordion = Self.find(".accrodion");
            Self.addClass(accrodionName);
            Self.find(".accrodion .accrodion-content").hide();
            Self.find(".accrodion.active").find(".accrodion-content").show();
            accordion.each(function () {
                $(this)
                    .find(".accrodion-title")
                    .on("click", function () {
                        if ($(this).parent().hasClass("active") === false) {
                            $(".accrodion-grp." + accrodionName)
                                .find(".accrodion")
                                .removeClass("active");
                            $(".accrodion-grp." + accrodionName)
                                .find(".accrodion")
                                .find(".accrodion-content")
                                .slideUp();
                            $(this).parent().addClass("active");
                            $(this).parent().find(".accrodion-content").slideDown();
                        }
                    });
            });
        });
    }

    if ($(".contact-form-validated").length) {
        $(".contact-form-validated").each(function () {
            let self = $(this);
            self.validate({
                // initialize the plugin
                rules: {
                    name: {
                        required: true,
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    message: {
                        required: true,
                    },
                    subject: {
                        required: true,
                    },
                },
                submitHandler: function (form) {
                    // sending value with ajax request
                    $.post($(form).attr("action"), $(form).serialize(), function (response) {
                        $(form).parent().find(".result").append(response);
                        $(form).find('input[type="text"]').val("");
                        $(form).find('input[type="email"]').val("");
                        $(form).find("textarea").val("");
                    });
                    return false;
                },
            });
        });
    }

    if ($(".video-popup").length) {
        $(".video-popup").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false,
        });
    }

    if ($(".img-popup").length) {
        var groups = {};
        $(".img-popup").each(function () {
            var id = parseInt($(this).attr("data-group"), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });

        $.each(groups, function () {
            $(this).magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                },
            });
        });
    }

    function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split("/").reverse()[0];

        selector.find("li").each(function () {
            let anchor = $(this).find("a");
            if ($(anchor).attr("href") == FileName) {
                $(this).addClass("current");
            }
        });
        // if any li has .current elmnt add class
        selector.children("li").each(function () {
            if ($(this).find(".current").length) {
                $(this).addClass("current");
            }
        });
        // if no file name return
        if ("" == FileName) {
            selector.find("li").eq(0).addClass("current");
        }
    }

    if ($(".main-menu__list").length) {
        // dynamic current class
        let mainNavUL = $(".main-menu__list");
        dynamicCurrentMenuClass(mainNavUL);
    }

    if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
        let navContent = document.querySelector(".main-menu__list").outerHTML;
        let mobileNavContainer = document.querySelector(".mobile-nav__container");
        mobileNavContainer.innerHTML = navContent;
    }

    if ($(".sticky-header__content").length) {
        let navContent = document.querySelector(".main-menu").innerHTML;
        let mobileNavContainer = document.querySelector(".sticky-header__content");
        mobileNavContainer.innerHTML = navContent;
    }

    if ($(".mobile-nav__container .main-menu__list").length) {
        let dropdownAnchor = $(".mobile-nav__container .main-menu__list .dropdown > a");
        dropdownAnchor.each(function () {
            let self = $(this);
            let toggleBtn = document.createElement("BUTTON");
            toggleBtn.setAttribute("aria-label", "dropdown toggler");
            toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
            self.append(function () {
                return toggleBtn;
            });
            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("expanded");
                self.parent().toggleClass("expanded");
                self.parent().parent().children("ul").slideToggle();
            });
        });
    }

    if ($(".mobile-nav__toggler").length) {
        $(".mobile-nav__toggler").on("click", function (e) {
            e.preventDefault();
            $(".mobile-nav__wrapper").toggleClass("expanded");
            $("body").toggleClass("locked");
        });
    }

    if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function (e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
            $(".mobile-nav__wrapper").removeClass("expanded");
            $("body").toggleClass("locked");
        });
    }

    if ($(".odometer").length) {
        var odo = $(".odometer");
        odo.each(function () {
            $(this).appear(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }

    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: "wow", // animated element css class (default is wow)
            animateClass: "animated", // animation css class (default is animated)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    if ($(".tabs-box").length) {
        $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
            e.preventDefault();
            var target = $($(this).attr("data-tab"));

            if ($(target).is(":visible")) {
                return false;
            } else {
                target
                    .parents(".tabs-box")
                    .find(".tab-buttons")
                    .find(".tab-btn")
                    .removeClass("active-btn");
                $(this).addClass("active-btn");
                target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0);
                target
                    .parents(".tabs-box")
                    .find(".tabs-content")
                    .find(".tab")
                    .removeClass("active-tab");
                $(target).fadeIn(300);
                $(target).addClass("active-tab");
            }
        });
    }

    function SmoothMenuScroll() {
        var anchor = $(".scrollToLink");
        if (anchor.length) {
            anchor.children("a").bind("click", function (event) {
                if ($(window).scrollTop() > 10) {
                    var headerH = "90";
                } else {
                    var headerH = "90";
                }
                var target = $(this);
                $("html, body")
                    .stop()
                    .animate({
                        scrollTop: $(target.attr("href")).offset().top - headerH + "px",
                    },
                        1200,
                        "easeInOutExpo"
                    );
                anchor.removeClass("current");
                anchor.removeClass("current-menu-ancestor");
                anchor.removeClass("current_page_item");
                anchor.removeClass("current-menu-parent");
                target.parent().addClass("current");
                event.preventDefault();
            });
        }
    }
    SmoothMenuScroll();

    function OnePageMenuScroll() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 117) {
            var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
            menuAnchor.each(function () {
                var sections = $(this).attr("href");
                $(sections).each(function () {
                    if ($(this).offset().top <= windscroll + 100) {
                        var Sectionid = $(sections).attr("id");
                        $(".one-page-scroll-menu").find("li").removeClass("current");
                        $(".one-page-scroll-menu").find("li").removeClass("current-menu-ancestor");
                        $(".one-page-scroll-menu").find("li").removeClass("current_page_item");
                        $(".one-page-scroll-menu").find("li").removeClass("current-menu-parent");
                        $(".one-page-scroll-menu")
                            .find("a[href*=\\#" + Sectionid + "]")
                            .parent()
                            .addClass("current");
                    }
                });
            });
        } else {
            $(".one-page-scroll-menu li.current").removeClass("current");
            $(".one-page-scroll-menu li:first").addClass("current");
        }
    }

    /*-- Handle Scrollbar --*/
    function handleScrollbar() {
        const bodyHeight = $("body").height();
        const scrollPos = $(window).innerHeight() + $(window).scrollTop();
        let percentage = (scrollPos / bodyHeight) * 100;
        if (percentage > 100) {
            percentage = 100;
        }
        $(".scroll-to-top .scroll-to-top__inner").css("width", percentage + "%");
    }

    // window load event
    $(window).on("load", function () {
        function handlePreloader() {
            if ($(".loader-wrap").length) {
                $(".loader-wrap").delay(2000).fadeOut(500);
            }
        }

        if ($(".preloader-close").length) {
            $(".preloader-close").on("click", function () {
                $(".loader-wrap").delay(200).fadeOut(500);
            });
        }

        priceFilter();
        tg_title_animation();
        handlePreloader();

        // Curved Circle
        if ($(".about-one__curved-circle").length) {
            $(".about-one__curved-circle").circleType({
                position: "absolute",
                dir: 1,
                radius: 75,
                forceHeight: true,
                forceWidth: true,
            });
        }

        if ($(".curved-circle").length) {
            $(".curved-circle").circleType({
                position: "absolute",
                dir: 1,
                radius: 90,
                forceHeight: true,
                forceWidth: true,
            });
        }
    });

    // window scroll event
    $(window).on("scroll", function () {
        if ($(".stricked-menu").length) {
            var headerScrollPos = 130;
            var stricky = $(".stricked-menu");
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass("stricky-fixed");
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass("stricky-fixed");
            }
        }

        OnePageMenuScroll();
    });

    $(window).on("scroll", function () {
        handleScrollbar();
        if ($(".sticky-header--one-page").length) {
            var headerScrollPos = 120;
            var stricky = $(".sticky-header--one-page");
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass("active");
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass("active");
            }
        }

        var scrollToTopBtn = ".scroll-to-top";
        if (scrollToTopBtn.length) {
            if ($(window).scrollTop() > 500) {
                $(scrollToTopBtn).addClass("show");
            } else {
                $(scrollToTopBtn).removeClass("show");
            }
        }
    });

    /*=============================================
        Tg Title Animation	      
    =============================================*/

    gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
    });

    function tg_title_animation() {
        var tg_var = jQuery(".tg-heading-subheading");
        if (!tg_var.length) {
            return;
        }
        const quotes = document.querySelectorAll(".tg-heading-subheading .tg-element-title");

        quotes.forEach((quote) => {
            //Reset if needed
            if (quote.animation) {
                quote.animation.progress(1).kill();
                quote.split.revert();
            }

            var getclass = quote.closest(".tg-heading-subheading").className;
            var animation = getclass.split("animation-");
            if (animation[1] == "style4") return;

            quote.split = new SplitText(quote, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });
            gsap.set(quote, {
                perspective: 400,
            });

            if (animation[1] == "style1") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                    y: "90%",
                    rotateX: "-40deg",
                });
            }
            if (animation[1] == "style2") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                    x: "50",
                });
            }
            if (animation[1] == "style3") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                });
            }
            quote.animation = gsap.to(quote.split.chars, {
                scrollTrigger: {
                    trigger: quote,
                    start: "top 90%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                opacity: 1,
                duration: 1,
                ease: Back.easeOut,
                stagger: 0.02,
            });
        });
    }
    ScrollTrigger.addEventListener("refresh", tg_title_animation);

    $("select:not(.ignore)").niceSelect();

    if ($(".marquee_mode").length) {
        $(".marquee_mode").marquee({
            speed: 30,
            gap: 0,
            delayBeforeStart: 0,
            direction: "left",
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }
})(jQuery);


$(document).ready(function () {
    // Gallery data structure - unchanged from your original structure
    const galleryData = {
        '2025': {
            'New Year Celebration': [
                'assets/images/Gallery_Events/2025/New_Year/1.jpg',
                'assets/images/Gallery_Events/2025/New_Year/2.jpg'
            ],
            'Pongal Celebration': [
                'assets/images/Gallery_Events/2025/Pongal_Celebration/1.jpg',
                'assets/images/Gallery_Events/2025/Pongal_Celebration/2.jpg'
            ],
            'Sports Day': [
                'assets/images/Gallery_Events/2025/SPORTS_DAY/NGK_8092.JPG',
                'assets/images/Gallery_Events/2025/SPORTS_DAY/NGK_8200.JPG',
                'assets/images/Gallery_Events/2025/SPORTS_DAY/NGK_8317.JPG',
                'assets/images/Gallery_Events/2025/SPORTS_DAY/NGK_8332.JPG',
                'assets/images/Gallery_Events/2025/SPORTS_DAY/NGK_8344.JPG',
                'assets/images/Gallery_Events/2025/SPORTS_DAY/NGK_8370.JPG',
                'assets/images/Gallery_Events/2025/SPORTS_DAY/NGK_8373.JPG'
            ],
            'CRRI': [
                'assets/images/CSR & Training/CRRI/20240625_134850.jpg',
                'assets/images/CSR & Training/CRRI/Group pic.jpg',
                'assets/images/CSR & Training/CRRI/IMG_5019.JPG',
                'assets/images/CSR & Training/CRRI/IMG_5075.JPG',
                'assets/images/CSR & Training/CRRI/IMG_5113.JPG',
                'assets/images/CSR & Training/CRRI/IMG_5163.JPG',
                'assets/images/CSR & Training/CRRI/Karthikeyan.jpg',
                'assets/images/CSR & Training/CRRI/Siva.jpg',
                'assets/images/CSR & Training/CRRI/Vasu.jpg'
            ],
        },
        '2024': {
            '15th Anniversary': [
                'assets/images/Gallery_Events/2024/15th_Anniversary/41c39abc-8cae-4f49-8014-2a0cba8a4293.jfif',
                'assets/images/Gallery_Events/2024/15th_Anniversary/4e8ecce6-9bc4-4ee6-a649-4a01f63fec78.jfif',
                'assets/images/Gallery_Events/2024/15th_Anniversary/9c58250e-c84b-4a92-bc59-c96798d181b3.jfif',
                'assets/images/Gallery_Events/2024/15th_Anniversary/IMG20240205164903.jpg',
                'assets/images/Gallery_Events/2024/15th_Anniversary/IMG20240205165343.jpg',
                'assets/images/Gallery_Events/2024/15th_Anniversary/ImportedPhoto_1707369732199.jpg'
            ],
            'Convene': [
                'assets/images/Gallery_Events/2024/Convene/DSC00459.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC00543.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC00545.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC00549.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC00554.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC00556.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC04848.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC04883.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC05022.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC05037.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC05331.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC05432.JPG',
                'assets/images/Gallery_Events/2024/Convene/DSC05507.JPG'
            ],
            'CRRI Training': [
                'assets/images/Gallery_Events/2024/CRRI_Training/Benkelmenn beam deflection method1.JPG',
                'assets/images/Gallery_Events/2024/CRRI_Training/GPR1.JPG',
                'assets/images/Gallery_Events/2024/CRRI_Training/Group pic.JPG',
                'assets/images/Gallery_Events/2024/CRRI_Training/Karthikeyan.JPG',
                'assets/images/Gallery_Events/2024/CRRI_Training/Siva.JPG',
                'assets/images/Gallery_Events/2024/CRRI_Training/Vasu.JPG'
            ],
            'IRC 2024': [
                'assets/images/Gallery_Events/2024/IRC_2024/IMG_20241108_112225731.JPG',
                'assets/images/Gallery_Events/2024/IRC_2024/IMG_20241108_165726995.JPG',
                'assets/images/Gallery_Events/2024/IRC_2024/IMG_20241109_110250970.JPG',
                'assets/images/Gallery_Events/2024/IRC_2024/IMG_20241109_122024499.JPG',
                'assets/images/Gallery_Events/2024/IRC_2024/IMG_20241109_153532755.JPG',
                'assets/images/Gallery_Events/2024/IRC_2024/IMG_20241109_154440303.JPG',
                'assets/images/Gallery_Events/2024/IRC_2024/IMG_20241109_155523575.JPG',
                'assets/images/Gallery_Events/2024/IRC_2024/IMG_20241109_173147906.JPG'
            ],
            'Michael Visit': [
                'assets/images/Gallery_Events/2024/Michael_Visit/IMG_20241104_135124107.JPG',
                'assets/images/Gallery_Events/2024/Michael_Visit/IMG_20241104_142450336.JPG',
                'assets/images/Gallery_Events/2024/Michael_Visit/IMG_20241104_143142764.JPG',
                'assets/images/Gallery_Events/2024/Michael_Visit/IMG_20241104_143142764.JPG'
            ],
            'NTRO Training': [
                'assets/images/Gallery_Events/2024/NTRO_Training/3a887ed2-c622-4e73-bf2c-e2ff6316a0b5.JFIF',
                'assets/images/Gallery_Events/2024/NTRO_Training/20240223_104729.JPG',
                'assets/images/Gallery_Events/2024/NTRO_Training/20240223_104816.JPG',
                'assets/images/Gallery_Events/2024/NTRO_Training/20240223_165822.JPG',
                'assets/images/Gallery_Events/2024/NTRO_Training/IMG_20240223_165217.JPG',
                'assets/images/Gallery_Events/2024/NTRO_Training/IMG_20240223_141329.JPG',
                'assets/images/Gallery_Events/2024/NTRO_Training/IMG_20240225_155519.JPG'
            ],
            'Pongal Celebration': [
                'assets/images/Gallery_Events/2024/Pongal_Celebration/1705146086549.JPG',
                'assets/images/Gallery_Events/2024/Pongal_Celebration/IMG-20240113-WA0009.JPG',
                'assets/images/Gallery_Events/2024/Pongal_Celebration/IMG-20240113-WA0024.JPG',
                'assets/images/Gallery_Events/2024/Pongal_Celebration/IMG20240113130206.JPG'
            ]
        }
    };

    const csrData = {
        'CSR': {
            'CSR': [
                'assets/images/CSR & Training/CSR-2024/IMG_20230204_110849.jpg',
                'assets/images/CSR & Training/CSR-2024/IMG_20230204_115845.jpg',
                'assets/images/CSR & Training/CSR-2024/NGK_5592.JPG',
                'assets/images/CSR & Training/CSR-2024/NGK_5602.JPG',
                'assets/images/CSR & Training/CSR-2024/NGK_5625.JPG',
                'assets/images/CSR & Training/CSR-2024/NGK_5634.JPG',
                'assets/images/CSR & Training/CSR-2024/NGK_5654.JPG',
                'assets/images/CSR & Training/CSR-2024/NGK_5678.JPG',
                'assets/images/CSR & Training/CSR-2024/NGK_5688.JPG',
                'assets/images/CSR & Training/CSR-2025/IMG20250403155754.jpg',
                'assets/images/CSR & Training/CSR-2025/IMG20250403160955.jpg',
                'assets/images/CSR & Training/CSR-2025/IMG20250403162231.jpg',
                'assets/images/CSR & Training/CSR-2025/IMG20250403162256.jpg',
                'assets/images/CSR & Training/CSR-2025/IMG20250403162322.jpg',
                'assets/images/CSR & Training/CSR-2025/IMG20250403163608.jpg',
                'assets/images/CSR & Training/CSR-2025/IMG20250403164915.jpg',
                'assets/images/CSR & Training/CSR-2025/IMG20250403165345.jpg',
                'assets/images/CSR & Training/CSR-AARADANA/0.jpg',
                'assets/images/CSR & Training/CSR-AARADANA/13.JPG',
                'assets/images/CSR & Training/CSR-AARADANA/19.JPG',
                'assets/images/CSR & Training/CSR-AARADANA/22.JPG',
                'assets/images/CSR & Training/CSR-AARADANA/30.JPG',
                'assets/images/CSR & Training/CSR-AARADANA/33.JPG',
                'assets/images/CSR & Training/CSR-AARADANA/37.JPG',
                'assets/images/CSR & Training/CSR-AARADANA/39.JPG',
                'assets/images/CSR & Training/CSR-AARADANA/4.JPG',
                'assets/images/CSR & Training/CSR-AARADANA/40.JPG',
                'assets/images/CSR & Training/CSR-AARADANA/41.JPG',
                'assets/images/CSR & Training/CSR-AARADANA/43.JPG',
                'assets/images/CSR & Training/CSR-AARADANA/7.JPG'
            ]
        }
    };

    // Add CSS for the gallery and lightbox
    const galleryStyles = `
<style>
    .event-container {
        margin-bottom: 40px;
    }
    
    .event-heading {
        color: #1e293b;
        margin-bottom: 20px;
        font-size: 24px;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 10px;
        width: 100%;
    }
    
    .image-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .gallery-item {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        background-color: white;
        cursor: pointer;
        height: 250px;
    }
    
    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }
    
    .gallery-item:hover img {
        transform: scale(1.05);
    }
    
    /* Lightbox styles */
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 90vh;
        display: block;
    }
    
    .close-lightbox {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 30px;
        cursor: pointer;
    }
    
    .lightbox-nav {
        position: absolute;
        top: 50%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        transform: translateY(-50%);
    }
    
    .lightbox-nav button {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 24px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .lightbox-nav button:hover {
        background: rgba(255, 255, 255, 0.4);
    }
</style>
`;

    // Append styles to head
    $('head').append(galleryStyles);

    // Add lightbox to the document
    const lightboxHTML = `
<div class="lightbox" id="lightbox">
    <div class="lightbox-content">
        <span class="close-lightbox" id="closeLightbox">&times;</span>
        <img id="lightboxImg" src="" alt="Enlarged image">
        <div class="lightbox-nav">
            <button id="prevImg">&larr;</button>
            <button id="nextImg">&rarr;</button>
        </div>
    </div>
</div>
`;

    $('body').append(lightboxHTML);

    // Lightbox variables
    let currentImageIndex = 0;
    let currentImages = [];

    // Show events for a specific year
    function showYearEvents(year, data) {
        // Update year heading
        //$('#currentYear').text(year + ' Events');

        // Clear existing content
        $('#eventContainer').empty();

        // Check if year exists in our data
        if (!data[year] || Object.keys(data[year]).length === 0) {
            $('#eventContainer').html('<div class="col-12"><p>No events found for this year.</p></div>');
            return;
        }

        let i = 1;
        // Loop through each event in the selected year
        for (const eventName in data[year]) {
            const images = data[year][eventName];
            const id = `splide${i}`;
            if (images.length === 0) continue;

            // Create event container
            const eventContainer = $('<div class="event-container"></div>');

            // Add event heading
            eventContainer.append(`<h3 class="event-heading">${eventName}</h3>`);

            // Create image gallery
            const imageGallery = $('<div class="container"></div>');

            let imagesSplide = `<div id="${id}" class="splide">
                                    <div class="splide__track">
                                        <ul class="splide__list">`;

            // Add images to gallery
            images.forEach((imgSrc, index) => {
                imagesSplide += `<li class="splide__slide"><img src="${imgSrc}" alt="${eventName}" style='max-height: 350px; max-width: 500px; width: auto; margin: auto;'></li>`;
            });

            imagesSplide += `       </ul>
                                </div>
                            </div>`;

            imageGallery.append(imagesSplide);
            eventContainer.append(imageGallery);
            $('#eventContainer').append(eventContainer);

            const splide = new Splide(`#${id}`, {
                type: 'loop',
                perPage: 2,
                drag: 'smooth',
                focus: 'center',
                autoplay: true,
                interval: 1000,
                autoScroll: {
                    speed: 0.5,
                },
                flickMaxPages: 1,
                pagination: false,
                padding: '5%',
                margin: '25',
                throttle: 10,
            });

            splide.mount();

            i++;
        }
    }

    // Open lightbox
    function openLightbox(images, index) {
        currentImages = images;
        currentImageIndex = index;
        $('#lightboxImg').attr('src', images[index]);
        $('#lightbox').css('display', 'flex');
    }

    // Set up lightbox controls
    $('#closeLightbox').on('click', function () {
        $('#lightbox').css('display', 'none');
    });

    $('#prevImg').on('click', function () {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        $('#lightboxImg').attr('src', currentImages[currentImageIndex]);
    });

    $('#nextImg').on('click', function () {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        $('#lightboxImg').attr('src', currentImages[currentImageIndex]);
    });

    // Close lightbox when clicking outside the image
    $('#lightbox').on('click', function (e) {
        if (e.target === this) {
            $(this).css('display', 'none');
        }
    });

    // Keyboard navigation
    $(document).on('keydown', function (e) {
        if ($('#lightbox').css('display') === 'flex') {
            if (e.key === 'ArrowLeft') {
                $('#prevImg').click();
            } else if (e.key === 'ArrowRight') {
                $('#nextImg').click();
            } else if (e.key === 'Escape') {
                $('#closeLightbox').click();
            }
        }
    });

    // Set up click handlers for year filter
    $('#year-filter li').on('click', function () {
        // Remove active class from all items
        $('#year-filter li').removeClass('active');

        // Add active class to clicked item
        $(this).addClass('active');

        // Load images for selected year
        const selectedYear = $(this).data('year');
        showYearEvents(selectedYear);
    });

    if ($('.events-page').length)
        showYearEvents('2025', galleryData);

    if ($('.csr-page').length)
        showYearEvents('CSR', csrData);

    // Log a message to confirm script has loaded
    console.log('Gallery script successfully loaded and initialized');
});




document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery-img');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    let currentIndex = 0;
    let imagesArray = [];

    // Create array of all gallery images
    galleryImages.forEach((img, index) => {
        imagesArray.push(img.src);

        // Add click event to each image
        img.addEventListener('click', function () {
            currentIndex = index;
            openModal(this.src);
        });
    });

    function openModal(src) {
        modal.style.display = 'block';
        modalImg.src = src;
    }
});

$(document).ready(function () {
    // For top-level dropdowns (About Us, Services, Gallery)
    $('.main-menu__list > li.dropdown > a').on('click', function (e) {
        e.preventDefault();
        var $parentLi = $(this).parent('li');

        $('.main-menu__list > li.dropdown').not($parentLi).removeClass('active');

        $parentLi.toggleClass('active');
    });

    // For nested dropdowns like Functional Evaluation
    $('.main-menu__list li li.dropdown > a').on('click', function (e) {
        e.preventDefault();

        var $currentLi = $(this).closest('li');

        $currentLi.siblings('.dropdown').removeClass('active');

        $currentLi.toggleClass('active');
    });


    // Close menu when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.main-menu__list').length) {
            $('.main-menu__list li').removeClass('active');
        }
    });

    // Close menu on scroll
    $(window).on('scroll', function () {
        $('.main-menu__list li').removeClass('active');
    });

    if ($('#announcementModal').length) {
        $('#announcementModal').modal('show');
        setTimeout(
            RemoveAnnouncementModal, 15000
        );
    }

    if ($(".banner-two__img2").length) {
        setTimeout(
            RemoveFloatingClass, 4750
        )
    }
});

function RemoveFloatingClass() {
    $(".banner-two__img2").removeClass('float-bob-x1');
    $(".banner-two__img2").removeClass('float-bob-x2');
}

function RemoveAnnouncementModal() {
    $('#announcementModal').modal('hide');
}