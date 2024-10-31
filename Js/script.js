const tooltipTriggers = document.querySelectorAll("#copyButton");
tooltipTriggers.forEach((button) => {
  let tooltipInstance = new bootstrap.Tooltip(button);
  button.addEventListener("click", () => {
    alert("The Text has been Copied");
    button.setAttribute("data-bs-title", "Copied!");
    tooltipInstance.dispose();
    tooltipInstance = new bootstrap.Tooltip(button);
    tooltipInstance.show();
  });
});
