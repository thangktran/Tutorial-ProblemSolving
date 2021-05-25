const {insertInterval} =
    require(`./InsertIntervalIntoListOfIntervals`);

describe(`test default behavior`, () => {
  test(`[] into []`, () => {
    expect(insertInterval([],
        []))
        .toEqual([]);
  });

  test(`[] into [[1,5], [10,15], [20,25]]`, () => {
    expect(insertInterval([], [[1, 5], [10, 15], [20, 25]]))
        .toEqual([[1, 5], [10, 15], [20, 25]]);
  });

  test(`[12,27] into []`, () => {
    expect(insertInterval([12, 27], []))
        .toEqual([[12, 27]]);
  });
});


describe(`test sorted and merged listOfIntervals`, () => {
  test(`[12,27] into [[1,5], [8,10], [29,35]]`, () => {
    expect(insertInterval([12, 27], [[1, 5], [8, 10], [29, 35]]))
        .toEqual([[1, 5], [8, 10], [12, 27], [29, 35]]);
  });

  test(`[12,27] into [[1,5], [10,15], [20,25]]`, () => {
    expect(insertInterval([12, 27], [[1, 5], [10, 15], [20, 25]]))
        .toEqual([[1, 5], [10, 27]]);
  });

  test(`[12,27] into [[1,5], [10,15], [28,30]]`, () => {
    expect(insertInterval([12, 27], [[1, 5], [10, 11], [28, 30]]))
        .toEqual([[1, 5], [10, 30]]);
  });

  test(`[12,27] into [[13,15], [25, 26]]`, () => {
    expect(insertInterval([12, 27], [[13, 15], [25, 26]]))
        .toEqual([[12, 27]]);
  });

  test(`[12,27] into [[11,15], [28, 30], [35, 40]]`, () => {
    expect(insertInterval([12, 27], [[11, 15], [28, 30], [35, 40]]))
        .toEqual([[11, 30], [35, 40]]);
  });

  test(`[12,27] into [[11,15], [27, 30], [35, 40]]`, () => {
    expect(insertInterval([12, 27], [[11, 15], [28, 30], [35, 40]]))
        .toEqual([[11, 30], [35, 40]]);
  });

  test(`[12,27] into [[11,12], [27, 30], [35, 40]]`, () => {
    expect(insertInterval([12, 27], [[11, 12], [27, 30], [35, 40]]))
        .toEqual([[11, 30], [35, 40]]);
  });

  test(`[12,12] into [[11,12], [29, 30], [35, 40]]`, () => {
    expect(insertInterval([12, 12], [[11, 12], [29, 30], [35, 40]]))
        .toEqual([[11, 12], [29, 30], [35, 40]]);
  });

  test(`[29, 29] into [[11,12], [29, 30], [35, 40]]`, () => {
    expect(insertInterval([29, 29], [[11, 12], [29, 30], [35, 40]]))
        .toEqual([[11, 12], [29, 30], [35, 40]]);
  });
});

describe(`test unsorted and unmerged listOfIntervals`, () => {
  test(`[12,27] into [[29,35], [1,5], [8,10]]`, () => {
    expect(insertInterval([12, 27], [[29, 35], [1, 5], [8, 10]]))
        .toEqual([[1, 5], [8, 10], [12, 27], [29, 35]]);
  });

  test(`[12,27] into [[29,35], [2,5], [1,2], [8,10]]`, () => {
    expect(insertInterval([12, 27],
        [[29, 35], [2, 5], [1, 2], [8, 10]]))
        .toEqual([[1, 5], [8, 10], [12, 27], [29, 35]]);
  });

  test(`[29, 29] into ` +
    `[[37, 38], [11,11], [39, 40], [35, 37], [12, 12], [29, 30]]`, () => {
    expect(insertInterval([29, 29], [[11, 12], [29, 30], [35, 40]]))
        .toEqual([[11, 12], [29, 30], [35, 40]]);
  });
});
