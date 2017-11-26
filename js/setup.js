'use strict';
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
document.querySelector('.setup').classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getWizards = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards.push({
      name: names[getRandom(0, names.length)] + surnames[getRandom(0, surnames.length)],
      coatColor: coatColors[getRandom(0, coatColors.length)],
      eyesColor: eyesColors[getRandom(0, eyesColors.length)]
    })
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
