const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    // console.log(now - prev, delay);
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

const imageSources = [
  "https://images.unsplash.com/photo-1548393488-ae8f117cbc1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlnaHQlMjBzdHVkeXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pZ2h0JTIwc3R1ZHl8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5pZ2h0JTIwc3R1ZHl8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    let div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      imageSources[Math.floor(Math.random() * imageSources.length)]
    );
    div.appendChild(img);

    document.body.appendChild(div);
    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: 0.3,
    });
    gsap.to(img, {
      y: "100%",
      delay: 0.7,
      ease: Power2,
      duration: 0.3,
    });

    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 500)
);
