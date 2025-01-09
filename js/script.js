const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Obsługa kliknięcia
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active"); // Dodaj lub usuń klasę `active`
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".rotate-if-needed").forEach((img) => {
    img.onload = () => {
      if (img.naturalWidth > img.naturalHeight) {
        img.style.transform = "rotate(90deg)";
        img.style.transformOrigin = "center";
      }
    };
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("scroll-container");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  const scrollAmount = window.innerWidth; // Przewijanie o szerokość ekranu

  // Funkcja do przewijania w lewo
  leftArrow.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  // Funkcja do przewijania w prawo
  rightArrow.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("scroll-container");
  const pages = document.querySelectorAll(".page");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  let currentPage = 0;

  const updateScroll = () => {
    const pageWidth = scrollContainer.offsetWidth;
    scrollContainer.scrollTo({
      left: pageWidth * currentPage,
      behavior: "smooth",
    });
  };

  leftArrow.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updateScroll();
    }
  });

  rightArrow.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updateScroll();
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const aboutLink = document.getElementById("about-link");
  const aboutModal = document.getElementById("about-modal");
  const closeButton = document.querySelector(".close-button");

  // Otwieranie modala
  aboutLink.addEventListener("click", (e) => {
    e.preventDefault(); // Zapobiega domyślnemu działaniu linku
    aboutModal.style.display = "flex"; // Wyświetl modal
  });

  // Zamykanie modala
  closeButton.addEventListener("click", () => {
    aboutModal.style.display = "none"; // Ukryj modal
  });

  // Zamykanie modala po kliknięciu w tło
  window.addEventListener("click", (e) => {
    if (e.target === aboutModal) {
      aboutModal.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");
  const pages = document.querySelectorAll(".page");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  let currentPage = 0; // Indeks aktualnej strony

  // Funkcja aktualizująca widoczną stronę
  const updatePage = () => {
    const pageWidth = scrollContainer.offsetWidth; // Szerokość jednej strony
    scrollContainer.scrollTo({
      left: pageWidth * currentPage,
      behavior: "smooth",
    });
  };

  // Wyłączanie strzałek na końcach
  const updateArrows = () => {
    leftArrow.style.display = currentPage === 0 ? "none" : "block";
    rightArrow.style.display =
      currentPage === pages.length - 1 ? "none" : "block";
  };

  // Obsługa strzałki w lewo
  leftArrow.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updatePage();
      updateArrows();
    }
  });

  // Obsługa strzałki w prawo
  rightArrow.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updatePage();
      updateArrows();
    }
  });

  // Obsługa klawiszy na klawiaturze
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      // Strzałka w lewo
      if (currentPage > 0) {
        currentPage--;
        updatePage();
        updateArrows();
      }
    } else if (event.key === "ArrowRight") {
      // Strzałka w prawo
      if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
        updateArrows();
      }
    }
  });

  // Pierwsza aktualizacja przy załadowaniu
  updateArrows();
});
