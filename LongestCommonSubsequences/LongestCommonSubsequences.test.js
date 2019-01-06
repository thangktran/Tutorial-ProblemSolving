const {longestCommonSubSequences} = require('./LongestCommonSubsequences');

test (`'ABAZDC', 'BACBAD'`, () => {
    expect(longestCommonSubSequences ('ABAZDC', 'BACBAD'))
    .toBe('ABAD');
});

test (`'aaaaaa', 'aa'`, () => {
    expect(longestCommonSubSequences ('aaaaaa', 'aa'))
    .toBe('aa');
});

test (`'AGGTAB', 'GXTXAYB'`, () => {
    expect(longestCommonSubSequences ('AGGTAB', 'GXTXAYB'))
    .toBe('GTAB');
});

test (`'BACBAD', 'ABAZDC'`, () => {
    expect(longestCommonSubSequences ('BACBAD', 'ABAZDC'))
    .toBe('ABAD');
});

test (`'aa', 'aaaaaa'`, () => {
    expect(longestCommonSubSequences ('aa', 'aaaaaa'))
    .toBe('aa');
});

test (`'GXTXAYB', 'AGGTAB'`, () => {
    expect(longestCommonSubSequences ('GXTXAYB', 'AGGTAB'))
    .toBe('GTAB');
});