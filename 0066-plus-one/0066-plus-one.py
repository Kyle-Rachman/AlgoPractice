class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        j = len(digits) - 1
        digits[j] += 1
        digits[j] %= 10
        
        while digits[j] == 0:
            j -= 1
            if j == -1:
                digits.insert(0,1)
                break
            else:
                digits[j] += 1
                digits[j] %= 10
        
        return digits