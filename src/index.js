const card = document.querySelector(".card");

card.addEventListener("click", ({ currentTarget }) => {
  const currentVisibleSide = currentTarget.dataset.side;

  currentTarget.setAttribute(
    "data-side",
    currentVisibleSide === "front" ? "back" : "front"
  );
});
