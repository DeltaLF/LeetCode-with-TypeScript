import { snakesAndLadders } from "../909_Snakes_and_Ladders";

it("play a snakesAndLadders game", () => {
  expect(
    snakesAndLadders([
      [-1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, 35, -1, -1, 13, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, 15, -1, -1, -1, -1],
    ])
  ).toBe(4);

  expect(
    snakesAndLadders([
      [-1, -1],
      [-1, 1],
    ])
  ).toBe(1);

  expect(
    snakesAndLadders([
      [1, 1, -1],
      [1, 1, 1],
      [-1, 1, 1],
    ])
  ).toBe(-1);

  expect(
    snakesAndLadders([
      [-1, 1, 1, 1],
      [-1, 7, 1, 1],
      [16, 1, 1, 1],
      [-1, 1, 9, 1],
    ])
  ).toBe(3);

  expect(
    snakesAndLadders([
      [-1, 42, 12, -1, 1, -1, -1], //
      [-1, -1, 5, -1, -1, 46, 44], // 36
      [18, 22, 6, 39, -1, -1, -1], // 35
      [-1, -1, 40, -1, -1, -1, 37], // 22
      [49, 38, 24, -1, 14, 29, -1], // 21
      [-1, -1, 6, -1, -1, -1, 20], // 8
      [-1, -1, 12, 10, -1, 5, 26], // 7
    ])
  ).toBe(2);
});
