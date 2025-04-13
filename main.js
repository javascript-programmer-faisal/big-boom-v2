window.onload = () => {
    const currentPage = location.pathname.split("/").pop(); // e.g. index.html
    const navLinks = document.querySelectorAll(".nav a, .sidebar a");

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  };