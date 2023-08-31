class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        j = 0
        if (len(s) <= numRows) or (numRows == 1):
            return s
        numCols = (numRows - 1) * (len(s) // (2*(numRows - 1))) + numRows - 1
        matrixOutput = []
        
        for i in range(numCols):
            if (i % (numRows-1)) == 0:
                matrixOutput.append([char for char in s[j*(numRows-1):j*(numRows-1)+numRows]])
                j += 2
            else:
                k = i % (numRows-1)
                newCol = ["_"] * numRows
                if 2*i+(numRows-2)-((i-(j/2))%(numRows-2)) <= len(s)-1:
                    newCol[numRows-1-k] = s[2*i+(numRows-2)-((i-(j/2))%(numRows-2))]
                    matrixOutput.append(newCol)
        
        if not matrixOutput[-1]:
            matrixOutput.pop()
        
        if len(matrixOutput[len(matrixOutput)-1]) < numRows:
            matrixOutput[len(matrixOutput)-1] += ["_"] * (numRows - len(matrixOutput[len(matrixOutput)-1]))
        
        def transpose(matrix):
            matrixT = [[0 for x in range(len(matrix))] for y in range(len(matrix[0]))]
            for i in range(len(matrix[0])):
                for j in range(len(matrix)):
                    matrixT[i][j] = matrix[j][i]
            return matrixT
            
        return "".join(["".join(row) for row in transpose(matrixOutput)]).replace("_","")