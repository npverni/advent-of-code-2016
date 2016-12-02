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

export const coordsUpTo = (startCoord, endCoord) => {
  if (startCoord.x === endCoord.x) {
    if (endCoord.y > startCoord.y) {
      return [...Array(endCoord.y - startCoord.y).keys()].map((c, i) => (
        { x: startCoord.x, y: startCoord.y + (i + 1) }
      ));
    } else {
      return [...Array(startCoord.y - endCoord.y).keys()].map((c, i) => (
        { x: startCoord.x, y: startCoord.y - (i + 1) }
      ));
    }
  } else {
    if (endCoord.x > startCoord.x) {
      return [...Array(endCoord.x - startCoord.x).keys()].map((c, i) => (
        { x: startCoord.x + (i + 1), y: startCoord.y }
      ));
    } else {
      return [...Array(startCoord.x - endCoord.x).keys()].map((c, i) => (
        { x: startCoord.x - (i + 1), y: startCoord.y }
      ));
    }
  }
};

const nextCords = (f, x, y, i) => {
  switch (f) {
    case 'N':
      return coordsUpTo({ x, y }, { x: x + i , y });
    case 'S':
      return coordsUpTo({ x, y }, { x: x - i , y });
    case 'E':
      return coordsUpTo({ x, y }, { x, y: y + i });
    case 'W':
      return coordsUpTo({ x, y }, { x, y: y - i });
  };
};

export const findDupe = arr => {
  const found = [];
  let dupe;
  arr.forEach(y => {
    if (found.findIndex(i => i[0] === y[0] && i[1] === y[1]) > 0) {
      if (!dupe) {
        dupe = y;
      };
    } else {
      found.push(y);
    }
  });
  return dupe;
};

let allPos = [ { x: 0, y: 0, facing: 'N' } ];

dirs.forEach(dir => {
  const pos = allPos[allPos.length - 1];
  const { dirToTurn, blockCount } = splitDir(dir);
  const { x, y, facing } = pos;
  const nowFacing = nextFace(facing, dirToTurn);
  const coords = nextCords(nowFacing, x, y, blockCount);

  allPos = allPos.concat(
   coords.map(c => ({
      ...c,
      facing: nowFacing,
   }))
  )
});

const points = allPos.map(p => [p.x,  p.y ]);
console.log(points)
const dupe = findDupe(points);
console.log(`Dupe: ${dupe[0] + dupe[1]}`);
console.log(dupe)
