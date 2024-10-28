document.addEventListener("DOMContentLoaded", () => {
  let currentSection = 0;
  const sections = document.querySelectorAll(".page");
  const totalSections = sections.length;

  function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
  }
  window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      if (currentSection < totalSections - 1) {
        currentSection++;
        scrollToSection(currentSection);
      }
    } else {
      if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    }
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      if (currentSection < totalSections - 1) {
        currentSection++;
        scrollToSection(currentSection);
      }
    } else if (event.key === "ArrowUp") {
      if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    }
  });
});
