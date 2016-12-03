import { data } from './inputs/day3data';

let lines = data.split("\n");

lines = lines.map(l => l.split(/\s/).filter(x => x !== '').map(i => parseInt(i)));

const validTriangle = tri => (
  (tri[0] + tri[1] > tri[2]) &&
  (tri[0] + tri[2] > tri[1]) &&
  (tri[1] + tri[2] > tri[0])
);

const invalidTriangle = tri => !validTriangle(tri);

const valid = lines.filter(l => validTriangle(l));
const invalid = lines.filter(invalidTriangle);
console.log(valid.length);
console.log(invalid.length);
console.log(lines.length);
