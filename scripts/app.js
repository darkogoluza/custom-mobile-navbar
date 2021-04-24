function openAnimation(duration, easing = "linear", delay = 0) {
  $("#overlay").css("pointer-events", "none");

  // Right panel open
  gsap
    .fromTo(
      "#right-panel",
      { width: "50%" },
      { width: "0%", duration: duration, ease: easing }
    )
    .delay(delay);

  // Left panel open
  gsap
    .fromTo(
      "#left-panel",
      { width: "50%" },
      { width: "0%", duration: duration, ease: easing }
    )
    .delay(delay);
}

function closeAnimation(duration, easing = "linear", delay = 0) {
  $("#overlay").css("pointer-events", "initial");

  // Right panel open
  gsap
    .fromTo(
      "#right-panel",
      { width: "0%" },
      { width: "50%", duration: duration, ease: easing }
    )
    .delay(delay);

  // Left panel open
  gsap
    .fromTo(
      "#left-panel",
      { width: "0%" },
      { width: "50%", duration: duration, ease: easing }
    )
    .delay(delay);

  setTimeout(() => {
    animateContentIn(0.4, "power4");
  }, (duration + delay) * 1000);
}

function animateContentIn(duration, easing = "linear", delay = 0) {
  gsap
    .fromTo(
      ".panel-wrapper",
      { opacity: "0" },
      { opacity: "1", duration: duration, ease: easing }
    )
    .delay(delay);
}

function animateContentOut(duration, easing = "linear", delay = 0) {
  gsap
    .fromTo(
      ".panel-wrapper",
      { opacity: "1" },
      { opacity: "0", duration: duration, ease: easing }
    )
    .delay(delay);
  setTimeout(() => {
    openAnimation(0.4, "power4");
  }, (duration + delay) * 1000);
}

openAnimation(0.4, "power4", 0.2);

$(".burger-menu:not(#burger-menu-close)").click(function (e) {
  e.preventDefault();
  closeAnimation(0.4, "power4");
  console.log("nesto");
});

$("#burger-menu-close").click(function (e) {
  e.preventDefault();
  animateContentOut(0.4, "power4");
});
