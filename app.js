const dateHtml = document.querySelector(".attention");
const videoHtml = document.querySelector("#my-video");
const commentsSection = document.querySelector(".main__comments--section");

const comments = [
  {
    id: "1",
    name: "Nina Costa",
    photo: "woman_8",
    comment:
      "Achei muito bom, realmente foi um valor muito abaixo por todo o material oferecido 😍 Muito obrigada",
  },
  {
    id: "2",
    name: "Edileusa Couto",
    photo: "woman_7",
    comment:
      "Estava em crise com meu marido, ele estava frio, diferente e brigávamos todos os dias, até que, há uns meses atrás, ele me disse que queria o divórcio. Foi então que conheci esse método e desde então nosso relacionamento é outro, finalmente nós conseguimos ter conversas sem brigar, somos um casal feliz e nem parece que passamos por aquele momento tão conturbado, é como se estivéssemos vivendo o início do relacionamento novamente. Eu nem tenho palavras pra agradecer, simplesmente mudou totalmente minha visão e salvou nosso casamento. 😍🌹",
  },
  {
    id: "3",
    name: "Marta Gomes",
    photo: "woman_2",
    comment:
      "Não tenho costume de fazer compras na internet, mas senti que valeria a pena adquirir esse método... Graças a Deus chegou tudo certinho 😍😍 Já estou colocando tudo em prática aqui em casa!",
  },
  {
    id: "4",
    name: "Letícia Silva",
    photo: "woman_9",
    comment:
      "Tive dificuldades para baixar o material, mas me responderam rapidamente no suporte, estou amando! 🥰",
  },
];

const insertCommentsOnScreen = () => {
  commentsSection.innerHTML = comments
    .map(
      (comment) =>
        `<div class="main__comments--section__profile" key=${comment.id}>
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

/*function URLToArray(url) {
  var request = {};

  if (url.indexOf("?") !== -1) {
    var pairs = url.substring(url.indexOf("?") + 1).split("&");
  }

  for (var i = 0; i < pairs.length; i++) {
    if (!pairs[i]) continue;
    var pair = pairs[i].split("=");
    request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return request;
}

function CamposUTM(modal) {
  if (modal == undefined) {
    modal = false;
  }

  const formularios = Array.from(
    document.querySelectorAll((modal ? ".gpc_modal " : "") + "form")
  );

  utm = URLToArray(window.location.href);
  let link_usar = "";

  if (Object.entries(utm).length) {
    for (var [key, value] of Object.entries(utm)) {
      link_usar += key + "=" + value + "&";
    }
  }

  if (link_usar.length) {
    link_usar = link_usar.substr(0, link_usar.length - 1);
  }

  formularios.map((formulario) => {
    $(formulario)
      .find(".gpc_campo")
      .each(function (campo) {
        if ($(campo).val() == "{utm_source}") {
          if (utm["utm_source"]) {
            $(campo).val(utm["utm_source"]);
          } else {
            $(campo).val("");
          }
        }
      });
  });

  if ($(campo).val() == "{utm_medium}") {
    if (utm["utm_medium"]) {
      $(campo).val(utm["utm_medium"]);
    } else {
      $(campo).val("");
    }
  }

  if ($(campo).val() == "{utm_campaign}") {
    if (utm["utm_campaign"]) {
      $(campo).val(utm["utm_campaign"]);
    } else {
      $(campo).val("");
    }
  }

  if ($(campo).val() == "{utm_term}") {
    if (utm["utm_term"]) {
      $(campo).val(utm["utm_term"]);
    } else {
      $(campo).val("");
    }
  }

  if ($(campo).val() == "{utm_content}") {
    if (utm["utm_content"]) {
      $(campo).val(utm["utm_content"]);
    } else {
      $(campo).val("");
    }
  }

  let botao = $(formulario).find(".gpc_botao");
  let concat;

  if (botao.attr("gpc-link") !== undefined && botao.attr("gpc-link") !== "") {
    concat = "?";
  }

  if (botao.attr("gpc-link").indexOf("?") !== -1) {
    concat = "&";
  }
  botao.attr("gpc-link", botao.attr("gpc-link") + concat + link_usar);

  if (link_usar != "") {
    const botoes = Array.from(
      document.querySelectorAll((modal ? ".gpc_modal " : "") + ".link_externo")
    );

    botoes.map((link) => {
      $(link).each(function (i, href) {
        let concat = "?";
        if ($(href).attr("href").indexOf("?") !== -1) {
          concat = "&";
        }
        $(href).attr("href", $(href).attr("href") + concat + link_usar);
      });
    });
  }
}

CamposUTM();

$("body").on("click", ".link_popup", function () {
  setTimeout(() => {
    CamposUTM(true);
  }, 200);
});
*/
