class Solution:
    def _expandCenter(self, s: str, left: int, right:int) -> int:
        while left>=0 and right<len(s) and s[left]==s[right]:
            left = left-1
            right = right+1
            
        return (right-1)-(left+1)+1
        

    def longestPalindrome(self, s: str) -> str:
        strLen = len(s)
        
        if strLen == 0:
            return ""
        
        if strLen == 1:
            return s
        
        start = 0
        end = 0
        
        for i in range(0, len(s)):
            lenOddCenter = self._expandCenter(s, i, i)
            lenEvenCenter = self._expandCenter(s, i, i+1)
            maxLen = max(lenOddCenter, lenEvenCenter)
            
            if maxLen > (end-start+1):
                start = i - int((maxLen-1)/2)
                end = i + int(maxLen/2)
            
                    
        return s[start:end+1]

s = Solution()
resultStr = s.longestPalindrome("babad")
print(resultStr)
resultStr = s.longestPalindrome("baab")
print(resultStr)