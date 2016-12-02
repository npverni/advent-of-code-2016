let inputs = [
  'UULLULLUULLLURDLDUURRDRRLDURDULLRURDUDULLLUULURURLRDRRRRULDRUULLLLUUDURDULDRRDRUDLRRLDLUDLDDRURURUURRRDDDLLRUDURDULUULLRRULLRULDUDRDRLDLURURUDDUDLURUDUDURLURURRURLUDDRURRDLUURLLRURRDUDLULULUDULDLLRRRDLRDLDUDRDDDRRUURRRRRUURRDRRDLURDRRURDLLUULULLRURDLDDDRRLLRRUURULURUUDDLRRUDDRURUUDLRLRDLRURRRDULLDLRUDDUULRDULURUURDULUDLLRRLDDLRDLRUDRLDDRLRRRDURDULLRRRDRRLUURURDRRDRRLDLUDURURLDUURDRUDRDDRLDRRLDLURURULLUURUDUUDLRLL',
  'LLLULLULDDULRLLURLLLRUUDDLRUULRLULLDLLRRDRLRLRLLDRUUURULDRDDLUDLLDUDULLLRLULLLRULDRDRUDLLRLRLLUDULRRRLDRUULDDULLDULULLUDUDLDRDURDLDLLDUDRRRDLUURRUURULLURLDURLRRLLDDUUULDRLUUDUDLURLULUDURRDRLLDDDDDRRULLRLDULULDDRUURRDLUDDDUDURDDRDRULULLLLUURDURUUUULUDLRURRULRDDRURURLLRLUUDUUURDLLDDLUDRLLLUDLLLLULRLURDRRRDUUDLLDLDDDURRDDRURUURDDRURRLDDDURDLLUURUUULRLUURRUDRLLDLURDUDRLULDLRLULULUDDLRDUDRUDLUULUULDURDRRRRLRULLUDRDDRDLDUDRDRRLDLLLLUDDLRULDLLDDUULDDRRULRRUURUDRDURLLLDDUUDRUUDLULLDR',
  'UDUUULLDDDDLUDLDULRLRDLULLDDRULDURRLURRUDLRRUDURRDUDRRRUULRLLRLUDLDRRDUURDDRDRDUUUDUDLDLLRRLUURLUUUDDDUURLULURRLURRRDRDURURUDRLRUURUDRUDDDRDRDLDRDURDLDRRDUUDLLURLDDURRRLULDRDRLLRLLLRURLDURDRLDRUURRLDLDRLDDDRLDLRLDURURLLLLDDRDUDLRULULLRDDLLUDRDRRLUUULDRLDURURDUDURLLDRRDUULDUUDLLDDRUUULRRULDDUDRDRLRULUUDUURULLDLLURLRRLDDDLLDRRDDRLDDLURRUDURULUDLLLDUDDLDLDLRUDUDRDUDDLDDLDULURDDUDRRUUURLDUURULLRLULUURLLLLDUUDURUUDUULULDRULRLRDULDLLURDLRUUUDDURLLLLDUDRLUUDUDRRURURRDRDDRULDLRLURDLLRRDRUUUURLDRURDUUDLDURUDDLRDDDDURRLRLUDRRDDURDDRLDDLLRR',
  'ULDRUDURUDULLUDUDURLDLLRRULRRULRUDLULLLDRULLDURUULDDURDUUDLRDRUDUDDLDRDLUULRRDLRUULULUUUDUUDDRDRLLULLRRDLRRLUDRLULLUUUUURRDURLLRURRULLLRLURRULRDUURRLDDRRDRLULDDRRDRLULLRDLRRURUDURULRLUDRUDLUDDDUDUDDUDLLRDLLDRURULUDRLRRULRDDDDDRLDLRRLUUDLUURRDURRDLDLDUDRLULLULRLDRDUDLRULLULLRLDDRURLLLRLDDDLLLRURDDDLLUDLDLRLUULLLRULDRRDUDLRRDDULRLLDUURLLLLLDRULDRLLLUURDURRULURLDDLRRUDULUURRLULRDRDDLULULRRURLDLRRRUDURURDURDULURULLRLDD',
  'DURLRRRDRULDLULUDULUURURRLULUDLURURDDURULLRRUUDLRURLDLRUDULDLLRRULLLLRRLRUULDLDLLRDUDLLRLULRLLUUULULRDLDLRRURLUDDRRLUUDDRRUDDRRURLRRULLDDULLLURRULUDLRRRURRULRLLLRULLRRURDRLURULLDULRLLLULLRLRLLLDRRRRDDDDDDULUUDUDULRURDRUDRLUULURDURLURRDRRRRDRRLLLLUDLRRDURURLLULUDDLRLRLRRUURLLURLDUULLRRDURRULRULURLLLRLUURRULLLURDDDRURDUDDULLRULUUUDDRURUUDUURURRDRURDUDRLLRRULURUDLDURLDLRRRRLLUURRLULDDDUUUURUULDLDRLDUDULDRRULDRDULURRUURDU',
]

const nextFor1 = dir => {
  switch (dir) {
    case 'U': return 1
    case 'R': return 1
    case 'D': return 3
    case 'L': return 1
  };
};

const nextFor2 = dir => {
  switch (dir) {
    case 'U': return 2
    case 'R': return 3
    case 'D': return 6
    case 'L': return 2
  };
};

const nextFor3 = dir => {
  switch (dir) {
    case 'U': return 1
    case 'R': return 4
    case 'D': return 7
    case 'L': return 2
  };
};

const nextFor4 = dir => {
  switch (dir) {
    case 'U': return 4
    case 'R': return 4
    case 'D': return 8
    case 'L': return 3
  };
};

const nextFor5 = dir => {
  switch (dir) {
    case 'U': return 5
    case 'R': return 6
    case 'D': return 5
    case 'L': return 5
  };
};

const nextFor6 = dir => {
  switch (dir) {
    case 'U': return 2
    case 'R': return 7
    case 'D': return 'A'
    case 'L': return 5
  };
};

const nextFor7 = dir => {
  switch (dir) {
    case 'U': return 3
    case 'R': return 8
    case 'D': return 'B'
    case 'L': return 6
  };
};

const nextFor8 = dir => {
  switch (dir) {
    case 'U': return 4
    case 'R': return 9
    case 'D': return 'C'
    case 'L': return 7
  };
};

const nextFor9 = dir => {
  switch (dir) {
    case 'U': return 9
    case 'R': return 9
    case 'D': return 9
    case 'L': return 8
  };
};

const nextForA = dir => {
  switch (dir) {
    case 'U': return 6
    case 'R': return 'B'
    case 'D': return 'A'
    case 'L': return 'A'
  };
};

const nextForB = dir => {
  switch (dir) {
    case 'U': return 7
    case 'R': return 'C'
    case 'D': return 'D'
    case 'L': return 'A'
  };
};

const nextForC = dir => {
  switch (dir) {
    case 'U': return 8
    case 'R': return 'C'
    case 'D': return 'C'
    case 'L': return 'B'
  };
};

const nextForD = dir => {
  switch (dir) {
    case 'U': return 'B'
    case 'R': return 'D'
    case 'D': return 'D'
    case 'L': return 'D'
  };
};

const nextFor = (num, dir) => {
  switch(num) {
    case 1: return nextFor1(dir)
    case 2: return nextFor2(dir)
    case 3: return nextFor3(dir)
    case 4: return nextFor4(dir)
    case 5: return nextFor5(dir)
    case 6: return nextFor6(dir)
    case 7: return nextFor7(dir)
    case 8: return nextFor8(dir)
    case 9: return nextFor9(dir)
    case 'A': return nextForA(dir)
    case 'B': return nextForB(dir)
    case 'C': return nextForC(dir)
    case 'D': return nextForD(dir)
  }
}


const getNumFromLine = chars => {
  let result = 5;
  console.log('RESULT IS: ' + result)
  chars.forEach(dir => {
    result = nextFor(result, dir)
  });
  return result;
};

inputs = inputs.map(a => a.split(""))

const results = inputs.map(getNumFromLine);

console.log(results.join(""));
