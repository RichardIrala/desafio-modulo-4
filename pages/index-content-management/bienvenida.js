function bienvenida() {
  const bienvenidaContainerEl = document.querySelector(
    ".principal-content__titles-container"
  );
  const bienvenidaEl = document.createElement("div");
  const datosBienvenida = fetch(
    "https://cdn.contentful.com/spaces/2y0o65mqltcx/environments/master/entries/5oQH1IhBSZjNxbspSCtS3H?access_token=DwTVL1LKcm4YBap7bb-xOrmwAxTuJlmTmgKPgIYC61c"
  )
    .then((data) => {
      return data.json();
    })
    .then((p) => {
      const titulo = p.fields.titleContent;
      const subtitulo = p.fields.subtitleContent;
      bienvenidaEl.classList.add("principal-content__titles");
      bienvenidaEl.innerHTML = `
        <h1 class="title">${titulo}</h1>
        <h2 class="subtitle">${subtitulo}</h2>
      `;
      bienvenidaContainerEl.appendChild(bienvenidaEl);
    });
}
bienvenida();
