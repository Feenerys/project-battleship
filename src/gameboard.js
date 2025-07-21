export class Gameboard {
  constructor() {
    this.newBoard();
    this._ships = [];
  }

  newBoard() {
    this.board = [];
    for (let row = 0; row < 10; row++) {
      let row = [];
      for (let col = 0; col < 10; col++) {
        row.push(0);
      }
      this.board.push(row);
    }
  }

  addShip(ship, row, col, orientation = "H") {
    const letterParse = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
    };
    row = row - 1;
    col = letterParse[col];
    const [MAX_ROW, MAX_COL] = [this.board.length, this.board[0].length];

    for (let index = 0; index < ship.length; index++) {
      if (orientation == "H") {
        if (col + index >= MAX_COL || this.board[row][col + index] != 0) {
          console.error("Out of bounds or there is a ship in the way");
          return false;
        }
      } else if (orientation == "V") {
        if (row + index >= MAX_ROW || this.board[row + index][col] != 0) {
          console.error("Out of bounds or there is a ship in the way");
          return false;
        }
      }
    }

    this._ships.push(ship);

    for (let index = 0; index < ship.length; index++) {
      if (orientation == "H") {
        this.board[row][col + index] = ship;
      } else if (orientation == "V") {
        this.board[row + index][col] = ship;
      }
    }

    return true;
  }

  //TODO: receiveAttack(), track missed attacks, report whether all ships are still alive or not
}
