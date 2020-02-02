'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#ffffff'
var SHADOW_GAP = 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_MARGIN_LEFT = 20;
var TEXT_MARGIN_TOP = 30;
var TEXT_LINE_HEIGHT = 20;
var TEXT_FONT = '16px PT Mono';
var TEXT_COLOR = '#000000';
var TEXT_FIRST_LINE = 'Ура вы победили!';
var TEXT_SECOND_LINE = 'Список результатов:';

var textHorizontalPosition = CLOUD_X + TEXT_MARGIN_LEFT;
var textVerticalPosition = CLOUD_Y + TEXT_MARGIN_TOP;

var renderRectangle = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect (x, y, width, heigth);
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect (x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var renderText = function (ctx, x, y) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.fillText = ('text', x, y);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud (ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, SHADOW_COLOR);
  renderCloud (ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  renderText (ctx, 120, 50);
};
