class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        count = 0
        for i, num in enumerate(nums):
            if num == val:
                nums[i] = "_"
            else:
                count += 1
                
        nums.sort()
        return count