function addWorks() {
  const works = document.querySelector(".all-content-cms");
  const templateEl = document.querySelector(".template--work");
  fetch(
    "https://cdn.contentful.com/spaces/2y0o65mqltcx/environments/master/entries?access_token=DwTVL1LKcm4YBap7bb-xOrmwAxTuJlmTmgKPgIYC61c"
  )
    .then((data) => {
      return data.json();
    })
    .then((dataJson) => {
      console.log(dataJson);
      const datosLength = dataJson.items.length;
      for (let x = 0; x < datosLength; x++) {
        if (dataJson.items[x].sys.contentType.sys.id == "work") {
          const workData = dataJson.items[x].fields;

          const ClonedtemplateEl = templateEl.content.cloneNode("true");
          console.log(ClonedtemplateEl);
          const childsTemplate = ClonedtemplateEl.querySelectorAll([
            "img",
            "h2",
            "p",
          ]);
          childsTemplate[1].textContent = workData.titulo;
          childsTemplate[2].textContent = workData.description;

          works.appendChild(ClonedtemplateEl);
        }
      }
    });
}
