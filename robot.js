const createRobot = (x, y) => {
  x = x;
  y = y;
  return {
    moveUp: (x, y) => {
      y += 1;
      if (y >= 0 && y <= 10) {
        return [x, y];
      } else {
        return "ERROR";
      }
    },
    moveDown: (x, y) => {
      y -= 1;
      if (y >= 0 && y <= 10) {
        return [x, y];
      } else {
        return "ERROR";
      }
    },
    moveLeft: (x, y) => {
      x -= 1;
      if (x >= 0 && x <= 10) {
        return [x, y];
      } else {
        return "ERROR";
      }
    },
    moveRight: (x, y) => {
      x += 1;
      if (x >= 0 && x <= 10) {
        return [x, y];
      } else {
        return "ERROR";
      }
    },
    getX: (x, y) => {
      if (x >= 0 && x <= 10) {
        return x;
      } else {
        return "ERROR";
      }
    },
    getY: (x, y) => {
      if (y >= 0 && y <= 10) {
        return y;
      } else {
        return "ERROR";
      }
    },
  };
};
const robot = createRobot();

module.exports = robot;

console.log(robot.moveUp(10, 9));
console.log(robot.moveLeft(4, 9));
console.log(robot.getY(8, 5));
