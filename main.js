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

  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}