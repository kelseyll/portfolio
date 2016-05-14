/* Animations ----------------------------------- */
$(".work-items-container a").hover(
  function () {
    $(this).find("i").addClass("slideLeftSm");
    $(this).find("i").removeClass("slideRightSm");
    $(this).find("span:nth-child(2n)").addClass("work-items-container-second-span-hover");
  },
  function () {
    $(this).find("i").removeClass("slideLeftSm");
    $(this).find("i").addClass("slideRightSm");
    $(this).find("span:nth-child(2n)").removeClass("work-items-container-second-span-hover");
  }
);
$(".footer-text-container li").hover(
  function () {
    $(this).find("i").addClass("slideLeftSm");
    $(this).find("i").removeClass("slideRightSm");
  },
  function () {
    $(this).find("i").removeClass("slideLeftSm");
    $(this).find("i").addClass("slideRightSm");
  }
);
