PROCESS/UNDERSTANDING: - takes 2 strings as arguments - determines the longer of the two strings - returns result of concatenating SHORT + LONG + SHORT strings - strings assumed to be different lengths

---

EXAMPLES/TESTS:

shortLongShort('abc', 'defgh'); // "abcdefghabc"
shortLongShort('abcde', 'fgh'); // "fghabcdefgh"
shortLongShort('', 'xyz'); // "xyz"
shortLongShort('xyz', ''); // "xyz"

---

ALGO:

    START

    # given 2 strings as arguments

    SET stringOne = length of stringOne
    SET stringTwo = length of stringTwo

    # compare lengths of each string

    IF stringOne > stringTwo
    	SET longerString = stringOne
        SET shorterString = stringTwo
    ELSE
    	SET longerString = stringTwo
        SET shorterString = stringOne

    SET finalString = shorterString + longerString + shorterString
    PRINT finalString
