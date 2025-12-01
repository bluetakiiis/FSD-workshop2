document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const navMenu = document.getElementById("navMenu");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("nav-menu-active");
    });
  }

  const contactForm = document.getElementById("contact-form");
  const contactSection = document.getElementById("section3");

  if (contactForm && contactSection) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      contactSection.innerHTML = "";

      const thankYouMessage = document.createElement("div");
      thankYouMessage.style.textAlign = "center";
      thankYouMessage.style.height = "100%";
      thankYouMessage.style.display = "flex";
      thankYouMessage.style.flexDirection = "column";
      thankYouMessage.style.justifyContent = "center";
      thankYouMessage.style.alignItems = "center";

      thankYouMessage.innerHTML = `
                <h2 style="color: #90a1bf; font-size: 2em; margin-bottom: 20px; padding: 0;">Thank You!</h2>
                <p style="color: #5f748c; font-size: 1.2em; padding: 0;">Your message has been received. I'll get back to you soon.</p>
            `;

      contactSection.appendChild(thankYouMessage);

      alert("Message Sent! Thank you for contacting me.");
    });
  }
});
