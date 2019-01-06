// Works due to hoisting.
module.exports.longestCommonSubSequences = longestCommonSubSequences;


function longestCommonSubSequences (s1, s2)
{
    // Find sub-seq based on s1.
    var subSeq1 = longestCommonSubSequencesHelper (s1, s2);
    // Find sub-seq based on s2.
    var subSeq2 = longestCommonSubSequencesHelper (s2, s1);

    // Get longest sub seq.
    return (subSeq1.length < subSeq2.length) ? subSeq2 : subSeq1;
}


/**
 * This function finds the sub sequence from 2 strings by
 * iterating each character from s1 and compare it with each
 * character from s2.
 */
function longestCommonSubSequencesHelper (s1, s2)
{
    // If 1 of the string is empty, return an
    // empty string.
    if (s1.length==0 || s2.length==0)
        return "";


    var result = "";
    var nextS2Index = 0;

    for (var i=0; i<s1.length; ++i)
    {
        for (var j=nextS2Index; j<s2.length; ++j)
        {
            if (s1[i] === s2[j])
            {
                result += s1[i];
                nextS2Index = j+1;

                // Return immediately if this is last char of
                // s2 and there is a match.
                if ( nextS2Index === s2.length )
                {
                    return result;
                }

                break;
            }
        }
    }

    return result;
}