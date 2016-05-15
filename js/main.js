/* Animations ----------------------------------- */
$(".work-items-container a").hover(
  function () {
    $(this).find("i").addClass("slideLeftSm");
    $(this).find("i").removeClass("slideRightSm");
    $(this).find("span:nth-child(2n)").addClass("work-items-container-second-span-hover");
    $(this).find("span:nth-child(3n)").addClass("slideLeftSm");
    $(this).find("span:nth-child(3n)").removeClass("slideRightSm");
  },
  function () {
    $(this).find("i").removeClass("slideLeftSm");
    $(this).find("i").addClass("slideRightSm");
    $(this).find("span:nth-child(2n)").removeClass("work-items-container-second-span-hover");
    $(this).find("span:nth-child(3n)").removeClass("slideLeftSm");
    $(this).find("span:nth-child(3n)").addClass("slideRightSm");

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
