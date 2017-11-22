'use strict';
var getColor = function (condition) {
  if (condition) {
    return 'rgba(255, 0, 0, 1.0)';
  } else {
    return 'rgba(0, 0, 225, 0.7)';
  }
};

var getMaxItem = function (times) {
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgb(255, 0, 0)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  ctx.fillStyle = 'rgb(0, 0, 0)';

  var histogramHeight = 150;
  var step = histogramHeight / (getMaxItem(times) - 0);

  var initialX = 120;
  var lineWidth = 40;
  var lineSpace = 50;
  var lineDistance = lineSpace + lineWidth;
  var textNamesY = 275;
  var textTimesY = 10;
  var heightworkspace = 260;

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = getColor(names[i] === 'Вы');
    ctx.fillRect(initialX + lineDistance * i, heightworkspace - (times[i] * step), lineWidth, times[i] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillText(names[i], initialX + lineDistance * i, textNamesY);
    ctx.fillText(Math.floor(times[i]), initialX + lineDistance * i, heightworkspace - (times[i] * step) - textTimesY);
  }
};
