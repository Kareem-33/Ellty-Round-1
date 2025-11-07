const selectAllButton = document.getElementById("all-pages");
const pagesOptions = Array.from(document.querySelectorAll(".page-option"));
const doneButton = document.getElementById("done-btn");

selectAllButton.addEventListener("change", (event) => {
  pagesOptions.forEach((checkbox) => {
    checkbox.checked = event.target.checked;
  });
});
pagesOptions.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (!checkbox.checked) {
      selectAllButton.checked = false;
    } else if (pagesOptions.every((cb) => cb.checked)) {
      selectAllButton.checked = true;
    }
  });
});

doneButton.addEventListener("click", () => {
  const selectedPages = pagesOptions
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.id);
  console.log("Selected pages:", selectedPages);
  pagesOptions.forEach((checkbox) => {
    checkbox.checked = false;
  });
  selectAllButton.checked = false;
});
