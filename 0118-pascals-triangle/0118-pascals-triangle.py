class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        rows = []
        for i in range(numRows):
            rows.append([math.comb(i,k) for k in range(i+1)])
        
        return rows