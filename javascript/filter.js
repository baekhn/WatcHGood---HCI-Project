const filterButtons = document.querySelectorAll(".filter-button");
const hovercards = document.querySelectorAll(".hovercard");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.dataset.filter;
    filterValue.backgroundcolor = "black";

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    hovercards.forEach((card) => {
      const cardFilter = card.dataset.filter;

      if (filterValue === "all" || cardFilter === filterValue) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
