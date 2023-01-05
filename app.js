const dateHtml = document.querySelector(".attention");

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
