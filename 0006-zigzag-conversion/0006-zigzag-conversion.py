class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if (len(s) <= numRows) or (numRows == 1):
            return s
        
        output = [""] * numRows
        i = 0
        step = 1
        
        for char in s:
            output[i] += char
            if i == 0:
                step = 1
            if i == numRows - 1:
                step = -1
            i += step
            
        return "".join(output)