/*Scroll sections active */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelector("header navbar a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header navbar a[href *=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
const moveup = document.querySelector('#home')

moveup.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default jump behavior
  console.log("clicked on arrow icon");
  const targetId = document.querySelector("#home");
  console.log(targetId)
  // Scroll to the target section smoothly
  window.scrollTo({
    top: targetId.offsetTop,
    behavior: "smooth",
  });
});
