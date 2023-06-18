
function updateCurrentYear() {
  const currentYear = new Date().getFullYear();
  const currentYearSpan = document.getElementById("currentYear");
  currentYearSpan.textContent = currentYear;
}
function updateLastModified() {
  const lastModified = new Date(document.lastModified).toLocaleDateString();
  const lastModifiedParagraph = document.getElementById("lastModified");
  lastModifiedParagraph.textContent = "Last modified: " + lastModified;
}

updateCurrentYear();
updateLastModified();
