function presentacion() {
  const presentacionContainerEl = document.querySelector(
    ".section-one__container"
  );
  const presentacionEl = document.createElement("div");
  const datosPresentacionEl = fetch(
    "https://cdn.contentful.com/spaces/2y0o65mqltcx/environments/master/entries/4UXYTHytsDHx6tPTAOoFiu?access_token=DwTVL1LKcm4YBap7bb-xOrmwAxTuJlmTmgKPgIYC61c"
  )
    .then((data) => {
      return data.json();
    })
    .then((p) => {
      const titulo = p.fields.titleContent;
      const sobreMi = p.fields.paragraphContent;
      const imagen = p.fields.image;
      presentacionEl.classList.add("section-one__container");
      presentacionEl.innerHTML = `
      
      <h2 class="subtitle">${titulo}</h2>
      <p class="paragraph">${sobreMi}</p>
        `;
      presentacionContainerEl.appendChild(presentacionEl);
    });
}
presentacion();
