
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
document.addEventListener("DOMContentLoaded", function() {
  let visitCount = localStorage.getItem("visitCount");
  if (visitCount) {
    visitCount = parseInt(visitCount) + 1;
  } else {
    visitCount = 1;
  }
  localStorage.setItem("visitCount", visitCount);
  document.getElementById("visit-counter").textContent = visitCount + " visits";
});
