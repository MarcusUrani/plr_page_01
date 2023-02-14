const dateHtml=document.querySelector(".attention"),videoHtml=document.querySelector("#my-video"),commentsSection=document.querySelector(".main__comments--section"),comments=[{id:"1",name:"Nina Costa",photo:"woman_8",comment:"Achei muito bom, realmente foi um valor muito abaixo por todo o material oferecido \uD83D\uDE0D Muito obrigada"},{id:"2",name:"Edileusa Couto",photo:"woman_7",comment:"Estava em crise com meu marido, ele estava frio, diferente e brig\xe1vamos todos os dias, at\xe9 que, h\xe1 uns meses atr\xe1s, ele me disse que queria o div\xf3rcio. Foi ent\xe3o que conheci esse m\xe9todo e desde ent\xe3o nosso relacionamento \xe9 outro, finalmente n\xf3s conseguimos ter conversas sem brigar, somos um casal feliz e nem parece que passamos por aquele momento t\xe3o conturbado, \xe9 como se estiv\xe9ssemos vivendo o in\xedcio do relacionamento novamente. Eu nem tenho palavras pra agradecer, simplesmente mudou totalmente minha vis\xe3o e salvou nosso casamento. \uD83D\uDE0D\uD83C\uDF39"},{id:"3",name:"Marta Gomes",photo:"woman_2",comment:"N\xe3o tenho costume de fazer compras na internet, mas senti que valeria a pena adquirir esse m\xe9todo... Gra\xe7as a Deus chegou tudo certinho \uD83D\uDE0D\uD83D\uDE0D J\xe1 estou colocando tudo em pr\xe1tica aqui em casa!"},{id:"4",name:"Let\xedcia Silva",photo:"woman_9",comment:"Tive dificuldades para baixar o material, mas me responderam rapidamente no suporte, estou amando! \uD83E\uDD70"},],insertCommentsOnScreen=()=>{commentsSection.innerHTML=comments.map(e=>`<div class="main__comments--section__profile" key=${e.id}>
    <div class="main__comments--section__profile__user--data">
      <figure class="main__comments--section__profile__user--data__figure">
        <img
          class="main__comments--section__profile__user--data__figure__photo"
          src="./images/${e.photo}.png"
          loading="lazy"
        />
      </figure>
      <p class="main__comments--section__profile__user--data__name">
        ${e.name}
      </p>
    </div>
    <p class="main__comments--section__profile__user--data__comment">
      ${e.comment}
    </p>
  </div>`).join("")};function mostrar(){document.querySelector(".main__promotion--container").style.display="block",document.querySelector(".main__promotion--container").style.visibility="visible"}let tMin=6,tSeg=25,tPitch=6e4*tMin+1e3*tSeg;function insertDateInHtml(){let e=new Date,o=e.getDate(),t=e.getMonth()+1,a=e.getFullYear();o<10&&(o="0"+o),t<10&&(t="0"+t),dateHtml.textContent=`${o}/${t}/${a}`}setTimeout("mostrar()",tPitch),insertDateInHtml(),insertCommentsOnScreen();