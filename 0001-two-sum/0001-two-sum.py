class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        seen = {}
        
        for i, num in enumerate(nums):
            if (target - num) not in seen:
                seen[num] = i
            else:
                return [i,seen[target-num]]