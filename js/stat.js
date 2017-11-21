'use strict';

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

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  ctx.fillText('Худшее время: ' + max.toFixed(0) + ' мс у игрока ' + names[maxIndex], 120, 80);
  var initialX = 120;
  var lineWidth = 40;
  var lineSpace = 50;
  var lineDistance = lineSpace + lineWidth;
  var textNamesY = 275;
  var textTimesY = 110;
  var heightworkspace = 260;

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1.0)';
    }
    else {
      ctx.fillStyle = 'rgba(0, 0, 225, 0.7)';
    }
    ctx.fillRect(initialX + lineDistance * i, heightworkspace - (times[i] * step), lineWidth, times[i] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillText(names[i], initialX + lineDistance * i, textNamesY);
    ctx.fillText(times[i].toFixed(0), initialX + lineDistance * i, textTimesY);
  }
};
