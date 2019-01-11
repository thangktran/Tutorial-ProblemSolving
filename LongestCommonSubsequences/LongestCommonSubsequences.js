const _ = require(`lodash`);
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

  const uniqueSubSequences = _.uniq(subSequences);

  return uniqueSubSequences.reduce( (sub1, sub2) => {
    return (sub1.length > sub2.length) ? sub1 : sub2;
  }, ``);
};

const getSubsequence = (s1, s2, i1 = 0, i2 = 0, lastMatched = false,
    i2LastMatched = 0, subSequence = ``) => {
  const isMatch = s1[i1] === s2[i2];
  const isEmpty = s1.length == 0 || s2.length == 0;
  const repeatS2 = i1 != s1.length && i2 == s2.length;
  const isDone = i2 == s2.length && ((i1 == s1.length) || lastMatched);


  return isEmpty ? `` :
          isDone ? subSequence :
          repeatS2 ? getSubsequence(s1, s2, i1+1, i2LastMatched + 1, isMatch,
              i2LastMatched, subSequence) :
          isMatch ? getSubsequence(s1, s2, i1+1, i2+1, isMatch,
              i2, subSequence + s1[i1])
                    : getSubsequence(s1, s2, i1, i2+1, isMatch,
                        i2LastMatched, subSequence);
};

const getSubSequences = (s1, s2, subSequences = []) => {
  const subSeq = getSubsequence(s1, s2);
  const isDone = s1.length == 0;
  const subSeqIsEmpty = subSeq.length == 0;

  const resultSubsequences = subSeqIsEmpty ? subSequences
                                            : [...subSequences, subSeq];

  return isDone ? subSequences
                : getSubSequences(s1.substring(1), s2, resultSubsequences);
};

module.exports.longestCommonSubSequences = longestCommonSubSequences;
