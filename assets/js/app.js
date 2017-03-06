"use strict";

$(function () {
  var Timer = document.getElementById("timer");

  if (Timer) {
    var timer; // Interval
    var endDate = new Date(Timer.getAttribute("data-date"));
    var firstTime = true;

    var updateTimer = function updateTimer() {
      var nowDate = new Date();
      var diff = Date.parse(endDate) - Date.parse(nowDate);

      var info = {};
      info.day = Math.floor(diff / (1000 * 60 * 60 * 24));
      info.hour = Math.floor(diff / (1000 * 60 * 60) % 24);
      info.minute = Math.floor(diff / 1000 / 60 % 60);

      var text = info.day + " Gün " + info.hour + " Saat " + info.minute + " Dakika";

      if (Timer.innerText === "") {
        timer = setInterval(updateTimer, 1000);
      }

      if (text !== Timer.innerText) {
        Timer.innerText = text;

        if (firstTime) {
          clearInterval(timer);
          timer = setInterval(updateTimer, 60000);
          firstTime = false;
        }
      }
    };

    updateTimer();
  }

  $(".c-schedule .c-schedule__list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    }]
  });

  $(".c-gallery .c-gallery__carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0",
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $(".c-gallery .slick-slide").on("click", function (e) {
    var slideIndex = $(this).data("slick-index");
    $(this).closest(".slick-slider").slick("slickGoTo", slideIndex);
  });

  $(".c-contact__form").slick({
    slidesToShow: 1,
    arrows: false,
    infinite: false
  });

  $(".c-header__register__form").slick({
    slidesToShow: 1,
    arrows: false,
    infinite: false
  });

  $(".c-places__button").click(function () {
    $(".c-places__list").toggleClass("active");
  });

  var formCheck = function formCheck(element, event) {
    if (element.validity.valid) {
      $(element).closest(".slick-slider").slick("slickNext");

      if ($(element).closest(".slick-slide").is(":last-child")) {
        console.log("form gönderilecek");
        $("input").unbind("keydown", inputKeyDown);
      }
    } else {
      element.reportValidity();
    }
  };

  var inputKeyDown = function inputKeyDown() {
    if (event.which === 13 || event.metaKey) {
      formCheck(this, event);
    }
  };

  $("input").keydown(inputKeyDown);

  $("input + .icon").click(function (event) {
    formCheck($(this).prev("input")[0], event);
  });

  $(".c-header .c-header__button").click(function () {
    $(".c-header").addClass("form-open");
  });

  $(".c-header .c-header__register__button").click(function () {
    $(".c-header").removeClass("form-open");
  });

  $(".c-header__register__form, .c-contact__form").on("afterChange", function () {
    $(this).find(".slick-current.slick-active input").focus();
  });

  $(".fancybox").fancybox({
    protect: false,
    iframe: {
      css: {
        maxHeight: "80%",
        maxWidth: "80%",
        width: "600px",
        height: "600px"
      }
    }
  });
});