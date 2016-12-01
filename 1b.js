const input = "L4, L1, R4, R1, R1, L3, R5, L5, L2, L3, R2, R1, L4, R5, R4, L2, R1, R3, L5, R1, L3, L2, R5, L4, L5, R1, R2, L1, R5, L3, R2, R2, L1, R5, R2, L1, L1, R2, L1, R1, L2, L2, R4, R3, R2, L3, L188, L3, R2, R54, R1, R1, L2, L4, L3, L2, R3, L1, L1, R3, R5, L1, R5, L1, L1, R2, R4, R4, L5, L4, L1, R2, R4, R5, L2, L3, R5, L5, R1, R5, L2, R4, L2, L1, R4, R3, R4, L4, R3, L4, R78, R2, L3, R188, R2, R3, L2, R2, R3, R1, R5, R1, L1, L1, R4, R2, R1, R5, L1, R4, L4, R2, R5, L2, L5, R4, L3, L2, R1, R1, L5, L4, R1, L5, L1, L5, L1, L4, L3, L5, R4, R5, R2, L5, R5, R5, R4, R2, L1, L2, R3, R5, R5, R5, L2, L1, R4, R3, R1, L4, L2, L3, R2, L3, L5, L2, L2, L1, L2, R5, L2, L2, L3, L1, R1, L4, R2, L4, R3, R5, R3, R4, R1, R5, L3, L5, L5, L3, L2, L1, R3, L4, R3, R2, L1, R3, R1, L2, R4, L3, L3, L3, L1, L2";

const dirs = input.split(",").map(i => i.trim());

const nextFace = (curFacing, dirToTurn) => {
  const rightMoves = ['N', 'E', 'S', 'W'];
  const leftMoves = ['N', 'E', 'S', 'W'].reverse();
  const moves = (dirToTurn === 'R') ? rightMoves : leftMoves;
  const curIndex = moves.indexOf(curFacing);
  return nextOrFirstInArray(moves, curIndex);
};

const nextOrFirstInArray = (arr, i) =>
  (i === (arr.length - 1)) ? arr[0] : arr[i + 1];

const splitDir = dir => ({
  dirToTurn: dir.slice(0, 1),
  blockCount: parseInt(dir.slice(1)),
});

const nextCord = (f, x, y, i) => {
  switch (f) {
    case 'N':
      return { x: x + i, y: y };
    case 'S':
      return { x: x - i, y: y };
    case 'E':
      return { x: x, y: y + i };
    case 'W':
      return { x: x, y: y - i };
  };
};

let pos = { x: 0, y: 0, facing: 'N' };
let allPos = [];
let dupe;

dirs.forEach(dir => {
  let dupe;
  const { dirToTurn, blockCount } = splitDir(dir);
  const { x, y, facing } = pos;
  const nowFacing = nextFace(facing, dirToTurn);
  const coord = nextCord(nowFacing, x, y, blockCount);
  pos = {
    ...coord,
    facing: nowFacing,
  };
  if (!dupe) {
    const p = [pos.x, pos.y];
    console.log(`Finding:`)
    console.log(p)
    console.log(`In:`)
    console.log(allPos)
    if (allPos.indexOf(p) >= 0) {
      console.log('hi');
      dupe = p;
    } else {
      allPos.push(p);
    };
  }
});

console.log(`Final Coord:`);
console.log(pos);
console.log(`First Dupe:`);
console.log(dupe);
console.log(`Total Blocks: ${pos.x + pos.y}`);
