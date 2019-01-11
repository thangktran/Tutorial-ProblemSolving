/**
 * This function finds the sub sequence from 2 strings by
 * iterating each character from s1 and compare it with each
 * character from s2.
 * @param {string} s1 : First string to be compared.
 * @param {string} s2 : Second string to be compared.
 * @return {string} : longest common sub sequence.
 */
const longestCommonSubSequences = (s1, s2) => {
  // Find sub-seq based on s1.
  const subSequences1 = getSubSequences(s1, s2);
  // Find sub-seq based on s2.
  const subSequences2 = getSubSequences(s2, s1);

  const subSequences = [...subSequences1, ...subSequences2];

  const isLongestSubsequence = (sub1, sub2) => {
    return (sub1.length > sub2.length) ? sub1 : sub2;
  };

  return subSequences.reduce(isLongestSubsequence);
};

const getSubsequence = (s1, s2, i1 = 0, i2 = 0, subSequence = ``) => {
  const repeatS2 = i1 != s1.length && i2 == s2.length;
  const isMatch = s1[i1] === s2[i2];
  const areEmpty = s1.length == 0 || s2.length == 0;
  const isDone = areEmpty || (i1 == s1.length && i2 == s2.length);


  return isDone ? subSequence :
          repeatS2 ? getSubsequence(s1, i1+1, s2, 0, subSequence) :
          isMatch ? getSubsequence(s1, i1+1, s2, i2+1, subSequence + s1[i1])
                    : getSubsequence(s1, i1, s2, i2+1, subSequence);
};

const getSubSequences = (s1, s2, subSequences = []) => {
  const subSeq = getSubsequence(s1, s2);
  const isDone = s1.length == 0;
  const subSeqIsEmpty = subSeq.length == 0;

  return isDone ? subSequences :
          subSeqIsEmpty ? getSubSequences(s1.substring(1), s2, subSequences)
                        : getSubSequences(s1.substring(1),
                            s2, [...subSequences, subSeq]);
};

// Works due to hoisting.
module.exports.longestCommonSubSequences = longestCommonSubSequences;
