import { beforeEach, describe, expect, it } from "@jest/globals";
import { Ship } from "./ship";

describe("Ship Test", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(4);
  });

  it("should not sink after 1 hit", () => {
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
  });

  it("should sink after 4 hits", () => {
    for (let index = 0; index < 4; index++) {
      ship.hit();
    }
    expect(ship.isSunk()).toBeTruthy();
  });
});