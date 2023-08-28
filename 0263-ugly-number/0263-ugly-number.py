class Solution(object):
    def isUgly(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n == 0:
            return False
        
        p_2, p_3, p_5 = 0, 0, 0
        test_2, test_3, test_5 = n, n, n
        
        while (test_2 % 2) == 0:
            p_2 += 1
            test_2 /= 2
            
        while (test_3 % 3) == 0:
            p_3 += 1
            test_3 /= 3
            
        while (test_5 % 5) == 0:
            p_5 += 1
            test_5 /= 5
            
        return n == (2**p_2 * 3**p_3 * 5**p_5)