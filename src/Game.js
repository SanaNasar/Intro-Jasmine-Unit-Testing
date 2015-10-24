var moveRight = function() {
  player.x += 1;
};

var moveLeft = function() {
  player.x -= 1;
};

var moveDown = function() {
  player.y += 1;
};

var moveUp = function() {
  player.y -= 1;
};

var checkWin = function() {

  if (player.x == 10 && player.y === 0) {
    renderWin();
  }
};

var checkBounds = function() {

  if(player.x == -1 || player.y == -1) {
    renderBounds();
  }
};