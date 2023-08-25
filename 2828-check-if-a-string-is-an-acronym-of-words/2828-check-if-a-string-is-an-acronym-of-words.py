class Solution(object):
    def isAcronym(self, words, s):
        """
        :type words: List[str]
        :type s: str
        :rtype: bool
        """
        acronym_list = [word[0] for word in words]
        return (''.join(acronym_list) == s)