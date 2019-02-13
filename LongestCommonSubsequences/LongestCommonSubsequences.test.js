const {longestCommonSubSequences} = require(`./LongestCommonSubsequences`);

test(`'ABAZDC', 'BACBAD'`, () => {
  expect(longestCommonSubSequences(`ABAZDC`, `BACBAD`))
      .toBe(`ABAD`);
});

test(`'aaaaaa', 'aa'`, () => {
  expect(longestCommonSubSequences(`aaaaaa`, `aa`))
      .toBe(`aa`);
});

test(`'AGGTAB', 'GXTXAYB'`, () => {
  expect(longestCommonSubSequences(`AGGTAB`, `GXTXAYB`))
      .toBe(`GTAB`);
});

test(`'BACBAD', 'ABAZDC'`, () => {
  expect(longestCommonSubSequences(`BACBAD`, `ABAZDC`))
      .toBe(`ABAD`);
});

test(`'aa', 'aaaaaa'`, () => {
  expect(longestCommonSubSequences(`aa`, `aaaaaa`))
      .toBe(`aa`);
});

test(`'GXTXAYB', 'AGGTAB'`, () => {
  expect(longestCommonSubSequences(`GXTXAYB`, `AGGTAB`))
      .toBe(`GTAB`);
});

test(`'AXJSHDKASRD', 'RXJSHDERASDJAB'`, () => {
  expect(longestCommonSubSequences(`AXJSHDKASRD`, `RXJSHDERASDJAB`))
      .toBe(`XJSHDASD`);
});

test(`'RXJSHDERASDJAB', 'AXJSHDKASRD'`, () => {
  expect(longestCommonSubSequences(`RXJSHDERASDJAB`, `AXJSHDKASRD`))
      .toBe(`XJSHDASD`);
});

test(`'JASHDERASDJAB', 'JASHDERASDJAB'`, () => {
  expect(longestCommonSubSequences(`JASHDERASDJAB`, `JASHDERASDJAB`))
      .toBe(`JASHDERASDJAB`);
});

test(`'nematode knowledge', 'empty bottle'`, () => {
  expect(longestCommonSubSequences(`nematode knowledge`, `empty bottle`))
      .toBe(`emt ole`);
});

test(`'empty bottle', 'nematode knowledge'`, () => {
  expect(longestCommonSubSequences(`empty bottle`, `nematode knowledge`))
      .toBe(`emt ole`);
});
