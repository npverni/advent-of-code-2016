import rawData from './inputs/day4data';

const splitLines = data => data.split("\n");

const splitDashes = data => data.map(l => l.split("-"));

const checksum = str => {
  return {
    sector: str.substring(0, 3),
    checksum: str.substring(4, 9),
  }
};

const isolateChecksums = data => data.map(d => {
  return {
    letters: d.slice(0, -1).join(""),
    ...checksum(d[d.length -1]),
  }
});

const data = isolateChecksums(splitDashes(splitLines(rawData)));

console.log(data);
