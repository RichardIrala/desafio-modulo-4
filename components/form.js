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
   <input class="form__label__input" type="text" />
 </label>
 <label class="form__label">
   <span>EMAIL</span>
   <input class="form__label__input" type="email" />
 </label>
 <label class="form__label">
   <span>Mensaje</span>
   <textarea class="form__label__textarea" rows="3"></textarea>
 </label>
 <div>
   <button class="form__button">Enviar</button>
 </div>
</div>
    `;
  formContainerEl.appendChild(newEl);
}
