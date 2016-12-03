import { data } from './inputs/day3data';

let lines = data.split("\n");

lines = lines.map(l => l.split(/\s/).filter(x => x !== '').map(i => parseInt(i)));

const validTriangle = tri => (
  (tri[0] + tri[1] > tri[2]) &&
  (tri[0] + tri[2] > tri[1]) &&
  (tri[1] + tri[2] > tri[0])
);

const invalidTriangle = tri => !validTriangle(tri);


const buildTriangles = lines => {
  let tris = []
  let tri1 = []
  let tri2 = []
  let tri3 = []

  lines.forEach(l => {
    tri1.push(l[0]);
    tri2.push(l[1]);
    tri3.push(l[2]);
    if (tri1.length === 3) {
      tris.push(tri1);
      tris.push(tri2);
      tris.push(tri3);
      tri1 = []
      tri2 = []
      tri3 = []
    }
  });
  return tris;
};

const triangles = buildTriangles(lines);

const valid = triangles.filter(l => validTriangle(l));
const invalid = triangles.filter(invalidTriangle);

console.log(valid.length);
console.log(invalid.length);
console.log(lines.length);
