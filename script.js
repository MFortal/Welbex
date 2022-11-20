// На descktop изменен текст в списке. Вместо "30 виджетов" -> "виджеты"
const wigetItem = document.querySelector("#item-widget");
const monthItem = document.querySelector("#item-month");
const gratitudeItem = document.querySelector("#item-gratitude");

const REPLACEMENT_TEXT = {
  wiget: {
    default: "30 виджетов",
    changeValue: "виджеты",
  },
  mounth: { default: "Месяц аmoCRM", changeValue: "35 дней" },
  gratitude: {
    default: "Благодарность клиентов",
    changeValue: "Благодарственные письма",
  },
};

const pointScreen = 1439;

if (screen.width > pointScreen) {
  wigetItem.innerHTML = REPLACEMENT_TEXT.wiget.changeValue;
  monthItem.innerHTML = REPLACEMENT_TEXT.mounth.changeValue;
  gratitudeItem.innerHTML = REPLACEMENT_TEXT.gratitude.changeValue;
}

window.onresize = function () {
  if (screen.width > pointScreen) {
    wigetItem.innerHTML = REPLACEMENT_TEXT.wiget.changeValue;
    monthItem.innerHTML = REPLACEMENT_TEXT.mounth.changeValue;
    gratitudeItem.innerHTML = REPLACEMENT_TEXT.gratitude.changeValue;
  } else {
    wigetItem.innerHTML = REPLACEMENT_TEXT.wiget.default;
    monthItem.innerHTML = REPLACEMENT_TEXT.mounth.default;
    gratitudeItem.innerHTML = REPLACEMENT_TEXT.gratitude.default;
  }
};
