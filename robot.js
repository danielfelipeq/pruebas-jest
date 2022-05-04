const createRobot = (x, y) => {
  x = x;
  y = y;
  return {
    moveUp: () => {
      y += 1;
      if (y >= 0 && y <= 10) {
        return [x, y];
      } else {
        return "ERROR";
      }
    },
    moveDown: () => {
      y -= 1;
      if (y >= 0 && y <= 10) {
        return [x, y];
      } else {
        return "ERROR";
      }
    },
    moveLeft: () => {
      x -= 1;
      if (x >= 0 && x <= 10) {
        return [x, y];
      } else {
        return "ERROR";
      }
    },
    moveRight: () => {
      x += 1;
      if (x >= 0 && x <= 10) {
        return [x, y];
      } else {
        return "ERROR";
      }
    },
    getX: () => {
      if (x >= 0 && x <= 10) {
        return x;
      } else {
        return "ERROR";
      }
    },
    getY: () => {
      if (y >= 0 && y <= 10) {
        return y;
      } else {
        return "ERROR";
      }
    },
  };
};
module.exports = createRobot;
