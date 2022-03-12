function addForm() {
  const formContainerEl = document.querySelector(".form-container");
  const newEl = document.createElement("form");
  newEl.classList.add("form");
  newEl.innerHTML = `
<div class="form__title">
  <h2>Escribime</h2>
</div>
<div class="form__label-container">
 <label class="form__label">
   <span>NOMBRE</span>
   <input id="form-nombre" class="form__label__input" type="text" />
 </label>
 <label class="form__label">
   <span>EMAIL</span>
   <input id="form-email" class="form__label__input" type="email" />
 </label>
 <label class="form__label">
   <span>Mensaje</span>
   <textarea id="form-mensaje" class="form__label__textarea" rows="3"></textarea>
 </label>
 <div>
   <button class="form__button">Enviar</button>
 </div>
</div>
    `;
  formContainerEl.appendChild(newEl);
  //
  newEl.addEventListener("submit", (evento) => {
    evento.preventDefault();
    evento.target["form-mensaje"].value;
    const mensaje = {
      to: "richardirala47@hotmail.com",
      message:
        "Soy: " +
        evento.target["form-nombre"].value +
        "." +
        " Mi email es: " +
        evento.target["form-email"].value +
        "." +
        " Te quiero comunicar lo siguiente: " +
        evento.target["form-mensaje"].value,
    };
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "content-type": "application/json" },
    }).catch((error) => {
      console.log(error);
    });
  });
}
