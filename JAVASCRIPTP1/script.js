window.addEventListener("mousemove", function (datails) {
    let q = document.querySelector("#box");
  let c = gsap.utils.mapRange(
    0,
    window.innerWidth,
    300+q.getBoundingClientRect().width/2,
    window.innerWidth - (300+q.getBoundingClientRect().width/2),
    datails.clientX
  );

  gsap.to("#box", {
    left: c + "px",
    ease: Power3,
  });
});
