'use strict';
var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
// document.querySelector('.setup').classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getWizards = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards.push({
      name: names[getRandom(0, names.length)] + surnames[getRandom(0, surnames.length)],
      coatColor: coatColors[getRandom(0, coatColors.length)],
      eyesColor: eyesColors[getRandom(0, eyesColors.length)]
    });
  }
  return wizards;
};
var wizardFriends = getWizards(4);

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardFriends.length; i++) {
    fragment.appendChild(getWizardElement(wizardFriends[i]));
  }
  similarListElement.appendChild(fragment);
};
renderWizards();
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
// кнопка открыть
var setupOpen = document.querySelector('.setup-open');
// окно
var setup = document.querySelector('.setup');
// функция закрыть окно клавишей Esc
var popupEscHendler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    popupCloseHendler();
  }
};
// функция открыть окно
var popupOpenHendler = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscHendler);
};
// функция закрыть окно
var popupCloseHendler = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscHendler);
};
// событие нажатие кнопки вызов окна и закрытие клавишей
setupOpen.addEventListener('click', function () {
  popupOpenHendler();
});
// событие открыть окно клавишей
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    popupOpenHendler();
  }
});
// кнопка закрыть внутри окна
var setupClose = setup.querySelector('.setup-close');
// событие нажатие кнопки закрытие окна
setupClose.addEventListener('click', function () {
  popupCloseHendler();
});
// событие закрыть окно клавишей
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    popupCloseHendler();
  }
});
// поле ввода имени персонажа
var userNameInput = setup.querySelector('.setup-user-name');
// удаление события если активно поле ввода имени персонажа
userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', popupEscHendler);
});
userNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', popupEscHendler);
});
// событие показывать ошибки заполнения формы
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});
// изменение цвета мантии
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = coatColors[getRandom(0, coatColors.length)];
});
// изменение цвета глаз
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = eyesColors[getRandom(0, eyesColors.length)];
});
// изменение цвета фаербола
var wizardFireball = document.querySelector('.setup-fireball-wrap');
wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor = fireballColors[getRandom(0, fireballColors.length)];
});
