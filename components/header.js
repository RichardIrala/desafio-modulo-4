function addHeader() {
  const headerContainerEl = document.querySelector(".header-container");
  const newEl = document.createElement("header");
  newEl.classList.add("header");
  newEl.innerHTML = `
  <div>
    <img class="mi-logo" src="./imgs/logo.png" alt="" />
  </div>
  <div class="header__menu-container">
    <img class="header__menu" src="./imgs/menu.png" />
    <div class=header__nav-container>
     <div class="header__nav--close-menu-container">
     <img class="header__nav--close-menu" src="./imgs/close-menu.png" />
     </div>
     <nav class="header__nav">
     <ul class="header__ul">
       <a class="header__a" href="./index.html">Inicio</a>
       <a class="header__a" href="./portfolio.html">Porfolio</a>
       <a class="header__a" href="./servicios.html">Servicios</a>
       <a class="header__a" href="./contacto.html">Contacto</a>
     </ul>
     </nav>
    </div>
  </div>
  
  `;
  headerContainerEl.appendChild(newEl);
  const menuListaEl = newEl.querySelector(".header__nav-container");
  const menuEl = newEl.querySelector(".header__menu");
  const closeMenuEl = newEl.querySelector(".header__nav--close-menu-container");

  menuEl.addEventListener("click", () => {
    const cantidadClasesMenuEl = menuListaEl.classList.length;
    for (let x = 0; x < cantidadClasesMenuEl; x++) {
      if (menuListaEl.classList[x] == "header__nav-container--on-off") {
        menuListaEl.classList.remove("header__nav-container--on-off");
      } else {
        menuListaEl.classList.add("header__nav-container--on-off");
      }
    }
  });
  closeMenuEl.addEventListener("click", () => {
    const cantidadClasesMenuEl = menuListaEl.classList.length;
    for (let x = 0; x < cantidadClasesMenuEl; x++) {
      if (menuListaEl.classList[x] == "header__nav-container--on-off") {
        menuListaEl.classList.remove("header__nav-container--on-off");
      } else {
        menuListaEl.classList.add("header__nav-container--on-off");
      }
    }
  });
}
