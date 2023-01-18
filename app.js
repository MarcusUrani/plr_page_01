const dateHtml = document.querySelector(".attention");
const videoHtml = document.querySelector("#my-video");
const commentsSection = document.querySelector(".main__comments--section");

const comments = [
  {
    id: "1",
    name: "Edileusa Couto",
    photo: "woman_7",
    comment:
      "Estava em crise com meu marido, ele estava frio, diferente e brigávamos todos os dias, até que, há uns meses atrás, ele me disse que queria o divórcio. Foi então que conheci esse método e desde então nosso relacionamento é outro, finalmente nós conseguimos ter conversas sem brigar, somos um casal feliz e nem parece que passamos por aquele momento tão conturbado, é como se estivéssemos vivendo o início do relacionamento novamente. Eu nem tenho palavras pra agradecer, simplesmente mudou totalmente minha visão e salvou nosso casamento. 😍🌹",
  },
  {
    id: "2",
    name: "Marta Gomes",
    photo: "woman_2",
    comment:
      "Salvou meu casamento e agora estamos felizes como nunca, nosso relacionamento mudou da água pro vinho 🥰💞",
  },
  {
    id: "3",
    name: "Letícia Silva",
    photo: "woman_9",
    comment:
      "Depois de muito desgaste, brigas constantes e várias ameaças de divórcio, conheci o método e nosso relacionamento foi transformado.",
  },
  {
    id: "4",
    name: "Nina Costa",
    photo: "woman_4",
    comment:
      "Consegui impedir o divórcio e salvar meu casamento, agora nosso relacionamento está nas nuvens, é como se todo dia fosse o primeiro dia de relacionamento, tudo é lindo, maravilhoso e estamos muito felizes. 👩‍❤️‍👨",
  },
  {
    id: "5",
    name: "Fabianna Leme",
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
    name: "Mary Santos",
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
    name: "Valentina Macedo",
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
