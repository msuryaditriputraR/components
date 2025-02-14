/* ==================== DROPDOWN ===================== */
const showDropdownMenu = (contentId, buttonId) => {
  const dropdownContent = document.getElementById(contentId),
    dropdownButton = document.getElementById(buttonId);

  dropdownButton.addEventListener("click", () => {
    dropdownContent.classList.toggle("show-dropdown");
  });
};

showDropdownMenu("dropdown-content", "dropdown-button");
