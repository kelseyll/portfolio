$(".work-items-container a").hover(
  function () {
    $(this).find("li").addClass("work-items-container-li-hover");
    $(this).find("span:first-child").addClass("work-items-container-span-hover");
    $(this).find("span:nth-child(2n)").addClass("work-items-container-second-span-hover");
    $(this).find("span:nth-child(3n)").addClass("work-items-container-third-span-hover");
  },
  function () {
    $(this).find("li").removeClass("work-items-container-li-hover");
    $(this).find("span:first-child").removeClass("work-items-container-span-hover");
    $(this).find("span:nth-child(2n)").removeClass("work-items-container-second-span-hover");
    $(this).find("span:nth-child(3n)").removeClass("work-items-container-third-span-hover");
  }
);
