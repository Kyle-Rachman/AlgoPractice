class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        return [math.comb(rowIndex,k) for k in range(rowIndex+1)]