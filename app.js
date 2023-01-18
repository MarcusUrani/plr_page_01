const dateHtml = document.querySelector(".attention");
const videoHtml = document.querySelector("#my-video");
const commentsSection = document.querySelector(".main__comments--section");

const comments = [
  {
    id: "1",
    name: "Edileusa Silva",
    photo: "woman_7",
    comment:
      "Sensacional, finalmente pude me livrar das dívidas e construir um patrimônio que me deixa seguro. 🤩",
  },
  {
    id: "2",
    name: "Elizabete Bete",
    photo: "woman_2",
    comment:
      "Nunca tinha conseguido me livrar das dívidas e quase perdi minha esposa por isso, mais agora finalmente consegui sair do aperto e agradeço muito por isso",
  },
  {
    id: "3",
    name: "Marta Gomes",
    photo: "woman_9",
    comment:
      "Depois de anos no aperto e recebendo cobranças todos os dias, finalmente me livrei das dívidas e agora posso dizer q tenho uma vida confortável e sem preocupação",
  },
  {
    id: "4",
    name: "Cleide dos Santos",
    photo: "woman_4",
    comment: "Consegui me livrar das dívidas 🥳🥳",
  },
  {
    id: "5",
    name: "Brunna Nunes",
    photo: "woman_3",
    comment:
      "Posso ter uma vida tranquila agora e sem me preocupar com os boletos 😜",
  },
  {
    id: "6",
    name: "Andressa Fernandes Melo",
    photo: "woman_1",
    comment:
      "Tinha muitos problemas com dívidas, mas agora elas não são mais um problema pra mim e posso dormir tranquila",
  },
  {
    id: "7",
    name: "Luíza Melo",
    photo: "woman_6",
    comment:
      "Finalmente um método que REALMENTE FUNCIONA, agora estou livre das dívidas 🚀",
  },
  {
    id: "8",
    name: "Nessa Mendes",
    photo: "woman_5",
    comment: "Agora não preciso mais me preocupar com os boletos",
  },
  {
    id: "9",
    name: "Valentina Santos",
    photo: "woman_8",
    comment:
      "Estava prestes a perder tudo, mas hoje agradeço muito todos os dias por ter encontrado esse método 🙏🏼",
  },
];

const insertCommentsOnScreen = () => {
  commentsSection.innerHTML = comments
    .map(
      (comment) =>
        `<div class="main__comments--section__profile">
    <div class="main__comments--section__profile__user--data">
      <figure class="main__comments--section__profile__user--data__figure">
        <img
          class="main__comments--section__profile__user--data__figure__photo"
          src="./images/${comment.photo}.png"
        />
      </figure>
      <p class="main__comments--section__profile__user--data__name">
        ${comment.name}
      </p>
    </div>
    <p class="main__comments--section__profile__user--data__comment">
      ${comment.comment}
    </p>
  </div>`
    )
    .join("");
};

function mostrar() {
  document.querySelector(".main__promotion--container").style.display = "block";

  document.querySelector(".main__promotion--container").style.visibility =
    "visible";
}

let tMin = 6; //coloque aqui o minuto

let tSeg = 25; //coloque aqui o segundo

let tPitch = tMin * 60000 + tSeg * 1000;

setTimeout("mostrar()", tPitch);

function insertDateInHtml() {
  let date = new Date();
  let actualDay = date.getDate();
  let actualMonth = date.getMonth() + 1;
  let actualYear = date.getFullYear();

  if (actualDay < 10) {
    actualDay = "0" + actualDay;
  }

  if (actualMonth < 10) {
    actualMonth = "0" + actualMonth;
  }

  dateHtml.textContent = `${actualDay}/${actualMonth}/${actualYear}`;
}

insertDateInHtml();
insertCommentsOnScreen();
