import unittest
from MaxConsecutive1Bit import bit_shift, string_split

measurePerf  = True

class TestMaxConsecutiveOneBit(unittest.TestCase):
    test_1 = 5
    expect_1 = 1
    test_2 = 6
    expect_2 = 2

    def test_bit_shift(self):
        self.assertEqual( bit_shift(self.test_1, measurePerf), self.expect_1 )
        self.assertEqual( bit_shift(self.test_2, measurePerf), self.expect_2 )

    def test_string_split(self):
        self.assertEqual( string_split(self.test_1, measurePerf), self.expect_1)
        self.assertEqual( string_split(self.test_2, measurePerf), self.expect_2)


if __name__ == "__main__":
    unittest.main()
