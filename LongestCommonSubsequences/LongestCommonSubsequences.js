// Works due to hoisting.
module.exports.longestCommonSubSequences = longestCommonSubSequences;


/**
 * This function finds the sub sequence from 2 strings by
 * iterating each character from s1 and compare it with each
 * character from s2.
 * @param {string} s1 : First string to be compared.
 * @param {string} s2 : Second string to be compared.
 * @return {string} : longest common sub sequence.
 */
function longestCommonSubSequences(s1, s2) {
  // Find sub-seq based on s1.
  const subSeq1 = longestCommonSubSequencesImpl(s1, s2);
  // Find sub-seq based on s2.
  const subSeq2 = longestCommonSubSequencesImpl(s2, s1);

  // Get longest sub seq.
  return (subSeq1.length < subSeq2.length) ? subSeq2 : subSeq1;
}


/**
 * This is the implementation of longestCommonSubSequences.
 * @param {string} s1 : First string to be compared.
 * @param {string} s2 : Second string to be compared.
 * @return {string} : longest common sub sequence.
 */
function longestCommonSubSequencesImpl(s1, s2) {
  // If 1 of the string is empty, return an
  // empty string.
  if (s1.length == 0 || s2.length == 0) {
    return ``;
  }


  const result = [];

  for (let i = 0; i < s1.length; ++i) {
    // Different start character gives different sub-sequence.
    const newS1 = s1.substring(i);
    let nextS2Index = 0;
    let resultTemp = ``;

    for (let k = 0; k < newS1.length; ++k) {
      for (let j = nextS2Index; j < s2.length; ++j) {
        if (newS1[k] === s2[j]) {
          resultTemp += newS1[k];
          nextS2Index = j + 1;

          break;
        }
      }

      // Return immediately if this is last char of
      // s2 and there is a match.
      if (nextS2Index === s2.length) {
        break;
      }
    }

    result.push(resultTemp);
  }

  const returnFunction = function(a, b) {
    return (a.length>b.length ? a:b);
  };
  return result.reduce( returnFunction );
}