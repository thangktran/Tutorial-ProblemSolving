import unittest
from maximum_subarray_sum import brute_force, kadane_algo

measurePerf = False

class TestMaxSubArray(unittest.TestCase):
    testList_1 = [-1, 2, 4, -3, 5, 2, -5, 2]
    testList_2 = [-2, -5, 6, -2, -3, 1, 5, -6]
    testList_3 = [1, 5, -1, 0, 10]
    testList_4 = [0, -1, -5, 0, -4]
    testList_5 = [-2, -5, -1, -3, -10]

    def test_brute_force(self):
        self.assertEqual( brute_force(self.testList_1, measurePerf), 10 )
        self.assertEqual( brute_force(self.testList_2, measurePerf), 7 )
        self.assertEqual( brute_force(self.testList_3, measurePerf), 15 )
        self.assertEqual( brute_force(self.testList_4, measurePerf), 0 )
        self.assertEqual( brute_force(self.testList_5, measurePerf), -1 )

    def test_kadane_algo(self):
        self.assertEqual( kadane_algo(self.testList_1, measurePerf), 10 )
        self.assertEqual( kadane_algo(self.testList_2, measurePerf), 7 )
        self.assertEqual( kadane_algo(self.testList_3, measurePerf), 15 )
        self.assertEqual( kadane_algo(self.testList_4, measurePerf), 0 )
        self.assertEqual( kadane_algo(self.testList_5, measurePerf), -1 )

if __name__ == "__main__":
    unittest.main()