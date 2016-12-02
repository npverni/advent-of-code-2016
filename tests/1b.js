import expect from 'expect';

import {
  coordsUpTo,
  findDupe,
} from '../1b';

const testXAxisUp = () => {
  const startCoord = { x: -2, y: 0 };
  const endCoord = { x: 5, y: 0 };
  const exp = [
    { x: -1, y: 0},
    { x: 0, y: 0},
    { x: 1, y: 0},
    { x: 2, y: 0},
    { x: 3, y: 0},
    { x: 4, y: 0},
    { x: 5, y: 0},
  ];
  expect(coordsUpTo(startCoord, endCoord)).toEqual(exp);
}
testXAxisUp();

const testXAxisDown = () => {
  const startCoord = { x: 5, y: 0 };
  const endCoord = { x: -2, y: 0 };
  const exp = [
    { x: 4, y: 0},
    { x: 3, y: 0},
    { x: 2, y: 0},
    { x: 1, y: 0},
    { x: 0, y: 0},
    { x: -1, y: 0},
    { x: -2, y: 0},
  ];
  expect(coordsUpTo(startCoord, endCoord)).toEqual(exp);
}
testXAxisDown();

const testYAxisUp = () => {
  const startCoord = { x: 0, y: -2 };
  const endCoord = { x: 0, y: 5 };
  const exp = [
    { x: 0, y: -1},
    { x: 0, y: 0},
    { x: 0, y: 1},
    { x: 0, y: 2},
    { x: 0, y: 3},
    { x: 0, y: 4},
    { x: 0, y: 5},
  ];
  expect(coordsUpTo(startCoord, endCoord)).toEqual(exp);
}
testYAxisUp();

const testYAxisDown = () => {
  const startCoord = { x: 0, y: 5 };
  const endCoord = { x: 0, y: -2};
  const exp = [
    { x: 0, y: 4},
    { x: 0, y: 3},
    { x: 0, y: 2},
    { x: 0, y: 1},
    { x: 0, y: 0},
    { x: 0, y: -1},
    { x: 0, y: -2},
  ];
  expect(coordsUpTo(startCoord, endCoord)).toEqual(exp);
}
testYAxisDown();

const testFindDupe = () => {
  //const arr = [1, 2, 3, 4, 5, 6, 3, 6];
  const arr = [
    [0, 0],
    [1, 0],
    [0, 3],
    [1, 0],
    [5, 0],
    [5, 0],
  ];
  expect(findDupe(arr)).toEqual([1, 0]);
};
testFindDupe();

console.log("!!!!!!!!!!!!!!!!!!!!");
console.log("!! All tests Pass !!");
console.log("!!!!!!!!!!!!!!!!!!!!");
