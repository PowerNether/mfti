$(".header-content__parallax").parallax();
$(window).scroll(function () {
  $(".organization").toggleClass(
    "org-active",
    $(this).scrollTop() > $(".organization").offset().top * 0.75
  );
  $(".architecture__image").toggleClass(
    "architecture__image-active",
    $(this).scrollTop() > $(".architecture__image").offset().top * 0.75
  );
});
$(".lvl-slider").slick({
  autoplay: true,
  arrows: false,
  dots: true,
});
$(".interface-slider").slick({
  autoplay: true,
  arrows: false,
  dots: true,
});
$(".review-block__image").on("click tap", function () {
  $(".review-block__image").toggleClass("active");
});
$(".lvl-slider__item, .interface-slider__item").on("click tap", function () {
  $(".modal").toggleClass("hidden");
  $(".modal").html(
    "<img src='" + $(this).children("img").attr("src") + "' alt='modalimage' />"
  );
});
$(".modal").on("click", function () {
  $(this).toggleClass("hidden");
});
