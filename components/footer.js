function addFooter() {
  const formContainerEl = document.querySelector(".footer-container");
  const newEl = document.createElement("footer");
  newEl.classList.add("footer");
  newEl.innerHTML = `
  <div class="footer-all-content--container">
    <div class="footer-logo-copyright-container">
      <img
        class="footer-logo-copyright-container__logo"
        src="./imgs/logo.png"
      />
      <h5>© 2022 Richard</h5>
    </div>
    <div class="redes-sociales">
      <div class="redes-sociales-container">
        <a href="./no-tengo-instagram.html">
          <img
            class="redes-sociales-container--size-img"
            src="./S-M-I/Instagram-icon.png"
          />
        </a>
        <a
          class="redes-sociales--text-link"
          href="./no-tengo-instagram.html"
          >Instagram</a
        >
      </div>
      <div class="redes-sociales-container">
        <a
          href="https://www.linkedin.com/in/richard-miguel-irala-5139a2217/"
        >
          <img
            class="redes-sociales-container--size-img"
            src="./S-M-I/Linkedin-icon.png"
          />
        </a>
        <a
          class="redes-sociales--text-link"
          href="https://www.linkedin.com/in/richard-miguel-irala-5139a2217/"
          >Linkedin</a
        >
      </div>
      <div class="redes-sociales-container">
        <a href="https://github.com/RichardIrala">
          <img
            class="redes-sociales-container--size-img"
            src="./S-M-I/Github-icon.png"
          />
        </a>
        <a
          class="redes-sociales--text-link"
          href="https://github.com/RichardIrala"
          >Github</a
        >
      </div>
    </div>
  </div>
      `;
  formContainerEl.appendChild(newEl);
}
