class Solution(object):
    def findRotation(self, mat, target):
        """
        :type mat: List[List[int]]
        :type target: List[List[int]]
        :rtype: bool
        """
        
        if mat == target:
            return True
        
        def rotate(matrix):
            n = len(matrix)
            for i in range(n//2):
                matrix[i], matrix[n-1-i] = matrix[n-1-i], matrix[i]

            for i in range(n):
                for j in range(i+1,n):
                    matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
            
            return matrix
        
        for i in range(3):
            rotate(mat)
            if mat == target:
                return True
            
        return False