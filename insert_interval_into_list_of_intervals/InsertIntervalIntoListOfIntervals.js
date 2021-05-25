
const insertInterval = (interval, listOfIntervals) => {
  if (interval.length == 0 && listOfIntervals.length == 0) {
    return [];
  } else if (interval.length == 0) {
    return listOfIntervals;
  } else if (listOfIntervals.length == 0) {
    return [interval];
  }

  const intervalsToCheck =
        sortListOfIntervals( [...listOfIntervals, interval] );

  let resultArray = [[]];

  for (let i = 0; i < intervalsToCheck.length; ++i) {
    const currentInterval = intervalsToCheck[i];
    const lastResult = resultArray.pop();

    const mergedInterval = mergeInterval(lastResult, currentInterval);

    resultArray = resultArray.concat(mergedInterval);
  }

  return resultArray;
};

const sortListOfIntervals = (listOfIntervals) => {
  const compareFunc = (ele1, ele2) => {
    const ele1LValue = ele1[0];
    const ele2LValue = ele2[0];

    if (ele1LValue<ele2LValue) {
      return -1;
    } else if (ele1LValue>ele2LValue) {
      return 1;
    } else {
      return 0;
    }
  };

  const sortedArray = listOfIntervals.concat()
      .sort(compareFunc);

  return sortedArray;
};

// return array of 1 array if 2 interval can be merge .
// return array of 2 arrays (sorted) if they cannot be merge.
const mergeInterval = (interval1, interval2) => {
  if (interval1.length == 0 && interval2.length == 0) {
    return [];
  } else if (interval1.length == 0) {
    return [interval2];
  } else if (interval2.length == 0) {
    return [interval1];
  }

  const resultArray = [];

  const lvalueIsOutsideOnTheLeft = interval1[0] < interval2[0];
  const lvalueIsOutsideOnTheRight = interval1[0] > interval2[1];
  const lvalueIsInside = ((interval1[0]-1) == interval2[1]) ||
        (!lvalueIsOutsideOnTheLeft && !lvalueIsOutsideOnTheRight);

  const rvalueIsOutsideOnTheLeft = interval1[1] < interval2[0];
  const rvalueIsOutsideOnTheRight = interval1[1] > interval2[1];
  const rvalueIsInside = (interval1[1] == (interval2[0]-1)) ||
        (!rvalueIsOutsideOnTheLeft && !rvalueIsOutsideOnTheRight);

  if (lvalueIsInside && rvalueIsInside) {
    resultArray.push(interval2);
  } else if (lvalueIsOutsideOnTheLeft && rvalueIsInside) {
    resultArray.push([interval1[0], interval2[1]]);
  } else if (lvalueIsInside && rvalueIsOutsideOnTheRight) {
    resultArray.push([interval2[0], interval1[1]]);
  } else if (lvalueIsOutsideOnTheLeft && rvalueIsOutsideOnTheLeft) {
    resultArray.push(interval1);
    resultArray.push(interval2);
  } else if (lvalueIsOutsideOnTheRight && rvalueIsOutsideOnTheRight) {
    resultArray.push(interval2);
    resultArray.push(interval1);
  } else if (lvalueIsOutsideOnTheLeft && rvalueIsOutsideOnTheRight) {
    resultArray.push(interval1);
  }

  return resultArray;
};

module.exports.insertInterval = insertInterval;
