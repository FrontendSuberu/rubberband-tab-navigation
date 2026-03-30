const links = document.querySelectorAll("[data-links]");
const indicator = document.querySelector("[data-nav-indicator]");
let currentTab = 0;

const move = (target, ac) => {
  const { offsetHeight, offsetWidth, offsetTop, offsetLeft } = target;
  console.log(target.offsetHeight);

  indicator.style.setProperty("--width", offsetWidth + "px");
  indicator.style.setProperty("--height", offsetHeight + "px");
  indicator.style.setProperty("--left", offsetLeft + "px");
  indicator.style.setProperty("--top", offsetTop + "px");

  currentTab = ac;
};

move(links[0], 0);

function removeDefaultLink() {
  links.forEach((link, idx) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });

    link.addEventListener("mouseover", ({ target }) => {
      move(target, idx);
    });

    // link.addEventListener("mouseleave", () => {
    //   indicator.style.removeProperty("--width", 0 + "px");
    //   indicator.style.setProperty("--height", 0 + "px");
    //   indicator.style.setProperty("--left", 0 + "px");
    //   indicator.style.setProperty("--top", 0 + "px");
    // });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  removeDefaultLink();
});
