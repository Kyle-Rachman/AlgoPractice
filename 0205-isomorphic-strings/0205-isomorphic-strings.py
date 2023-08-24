class Solution(object):
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        s_letter_places = {}
        t_letter_places = {}
        
        for i, char in enumerate(s):
            if char in s_letter_places:
                s_letter_places[char].add(i)
            else:
                s_letter_places[char] = {i}
                
        for i, char in enumerate(t):
            if char in t_letter_places:
                t_letter_places[char].add(i)
            else:
                t_letter_places[char] = {i}
                
        s_arrangement = {frozenset(val) for val in s_letter_places.values()}
        t_arrangement = {frozenset(val) for val in t_letter_places.values()}
            
        return s_arrangement == t_arrangement