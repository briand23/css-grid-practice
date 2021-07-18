// When we click the toggle button we want to add the outergrid expanded class
function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  console.log(outerGrid.classList);
  outerGrid.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
