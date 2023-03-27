function setYear() {
  const yearEl = document.querySelector("footer .year");
  const currentYear = new Date().getFullYear();

  yearEl.textContent = currentYear;
}

setYear();
