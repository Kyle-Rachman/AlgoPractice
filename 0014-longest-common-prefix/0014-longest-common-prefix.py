class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        def prefix_two(str1, str2):
            prefix = ""
            i = 0
            while i < min(len(str1),len(str2)) and (str1[i] == str2[i]):
                prefix += str1[i]
                i += 1
            return prefix
        
        common_prefix=strs[0]
        for i in range(len(strs)-1):
            common_prefix = prefix_two(common_prefix,strs[i+1])
            
        return common_prefix