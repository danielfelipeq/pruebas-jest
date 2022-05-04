const createRobot = require("./robot");

test("the robot should increase Y by 1", () => {
  expect(createRobot(7, 2).moveUp()).toEqual([7, 3]);
});
test("the robot should dicrease Y by -1", () => {
  expect(createRobot(6, 8).moveDown()).toEqual([6, 7]);
});
test("the robot should dicrease X by -1", () => {
  expect(createRobot(4, 9).moveLeft()).toEqual([3, 9]);
});
test("the robot should increase X by 1", () => {
  expect(createRobot(3, 2).moveRight()).toEqual([4, 2]);
});
test("the robot should return X", () => {
  expect(createRobot(3, 2).getX()).toBe(3);
});
test("the robot should return Y", () => {
  expect(createRobot(5, 9).getY()).toBe(9);
});
test("the robot should return Error", () => {
  expect(createRobot(7, 10).moveUp()).toEqual("ERROR");
});
