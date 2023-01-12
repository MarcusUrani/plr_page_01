const dateHtml = document.querySelector(".attention");
const videoHtml = document.querySelector("#my-video");

const playVideoHtml = () => {
  videoHtml.addEventListener("click", () => {
    if (videoHtml.paused) {
      videoHtml.play();
    } else {
      videoHtml.pause();
    }
  });
};

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
playVideoHtml();
