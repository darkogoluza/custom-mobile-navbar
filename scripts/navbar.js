//----------
// Functions
//----------

// Open overlay panels
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

// Close overlay panels
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

// Animate overlay content in
function animateContentIn(duration, easing = "linear", delay = 0) {
  const tl = gsap.timeline();
  $("#overlay-content").css("opacity", "1");
  tl.fromTo(
    ".panel-wrapper",
    { opacity: "0" },
    { opacity: "1", duration: duration, ease: easing }
  );
  $(".nav-links-wrapper p")
    .each(function () {
      tl.fromTo(
        this,
        { opacity: 0 },
        { opacity: 1, duration: duration / 4, ease: "power4" }
      );
    })
    .delay(delay);
}

// Animate overlay content out
function animateContentOut(duration, easing = "linear", delay = 0) {
  const tl = gsap.timeline({
    onComplete: () => {
      openAnimation(0.4, "power4");
      $("#overlay-content").css("opacity", "0");
      console.log("nesto");
    },
  });
  $(".nav-links-wrapper p").each(function () {
    tl.fromTo(
      this,
      { opacity: 1 },
      { opacity: 0, duration: duration / 4, ease: "power4" }
    );
  });
  tl.fromTo(
    ".panel-wrapper",
    { opacity: 1 },
    { opacity: 0, duration: duration, ease: easing }
  ).delay(delay);
}

// Load another page with animations
function loadPage(duration, src, easing = "linear", delay = 0) {
  const tl = gsap.timeline({
    onComplete: () => {
      window.location.href = src;
    },
  });
  $(".nav-links-wrapper p").each(function () {
    tl.fromTo(
      this,
      { opacity: 1 },
      { opacity: 0, duration: duration / 4, ease: "power4" }
    );
  });
  tl.fromTo(
    ".panel-wrapper",
    { opacity: 1 },
    { opacity: 0, duration: duration, ease: easing }
  ).delay(delay);
}

//----------
// Callbacks
//----------

// Open nav menu
$(".burger-menu:not(#burger-menu-close)").click(function (e) {
  e.preventDefault();
  closeAnimation(0.4, "power4");
});

// Close nav menu
$("#burger-menu-close").click(function (e) {
  e.preventDefault();
  animateContentOut(0.4, "power4");
});

// Go to another pange
$(".nav-links-wrapper p").click(function (e) {
  e.preventDefault();
  const src = $(this).attr("href");
  loadPage(0.4, src, "power4");
});

openAnimation(0.4, "power4", 0.2);
