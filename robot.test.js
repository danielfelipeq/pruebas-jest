const robot = require("./robot");

test("the robot should increase Y by 1", () => {
  expect(robot.moveUp(7, 2)).toEqual([7, 3]);
});
test("the robot should dicrease Y by -1", () => {
  expect(robot.moveDown(6, 8)).toEqual([6, 7]);
});
test("the robot should dicrease X by -1", () => {
  expect(robot.moveLeft(5, 7)).toEqual([4, 7]);
});
test("the robot should increase X by 1", () => {
  expect(robot.moveRight(3, 2)).toEqual([4, 2]);
});
test("the robot should increase X by 1", () => {
  expect(robot.moveRight(3, 2)).toEqual([4, 2]);
});
test("the robot should return X", () => {
  expect(robot.getX(3, 2)).toBe(3);
});
test("the robot should return Y", () => {
  expect(robot.getY(5, 9)).toBe(9);
});
test("the robot should return Error", () => {
  expect(robot.moveUp(7, 10)).toEqual("ERROR");
});
