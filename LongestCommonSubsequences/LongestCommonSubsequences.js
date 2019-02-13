/**
 * This function finds the sub sequence from 2 strings by
 * iterating each character from s1 and compare it with each
 * character from s2.
 * @param {string} s1 : First string to be compared.
 * @param {string} s2 : Second string to be compared.
 * @return {string} : longest common sub sequence.
 */
const longestCommonSubSequences = (s1, s2) => {
  if (s1.length === 0 || s2.length === 0) {
    return ``;
  }

  // We need null-terminator in our algorithm.
  s1 += `\0`;
  s2 += `\0`;

  const subSequenceLengthMatrix = getSubSequenceLengthMatrix(s1, s2);
  const subSequence = getSubSequence(subSequenceLengthMatrix, s1, s2);
  return subSequence;
};


const getSubSequenceLengthMatrix = (s1, s2) => {
  // Allocate memory for matrix.
  let lengthMatrix = new Array(s1.length);
  for (let i=0; i<s1.length; ++i) {
    lengthMatrix[i] = new Array(s2.length);
  }

  for (let i=s1.length-1; i>=0; --i) {
    for (let j=s2.length-1; j>=0; --j) {
      const endLine = s1[i]===`\0` || s2[j]===`\0`;
      const match = s1[i]===s2[j] && !endLine;

      lengthMatrix[i][j] = endLine ? 0 :
                            match ? 1 + lengthMatrix[i+1][j+1] :
                            Math.max(lengthMatrix[i+1][j],
                                lengthMatrix[i][j+1]);
    }
  }

  return lengthMatrix;
};


const getSubSequence = (subSequenceLengthMatrix, s1, s2, i1=0, i2=0) => {
  let subSequence = ``;
  const endLine = s1[i1]===`\0` || s2[i2]===`\0`;
  const match = s1[i1] === s2[i2];
  const moveDown = endLine ? false : subSequenceLengthMatrix[i1+1][i2] >=
  subSequenceLengthMatrix[i1][i2+1];
  subSequence +=
  endLine ? `` :
  match ? s1[i1] + getSubSequence(subSequenceLengthMatrix, s1, s2, ++i1, ++i2) :
  moveDown ? getSubSequence(subSequenceLengthMatrix, s1, s2, ++i1, i2) :
             getSubSequence(subSequenceLengthMatrix, s1, s2, i1, ++i2);

  return subSequence;
};

module.exports.longestCommonSubSequences = longestCommonSubSequences;
