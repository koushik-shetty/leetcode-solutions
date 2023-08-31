package main

func letterCombinations(digits string) []string {
	kp := map[string]string{"0": "", "1": "", "2": "abc", "3": "dfe", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"}
	out := make([]string, 0)

	//for each digit
	for _, digit := range digits {
		out = merge(out, kp[string(digit)])
	}

	return out
}

func merge(c []string, d string) []string {
	out := make([]string, 0)
	if len(c) == 0 {
		for _, v := range d {
			out = append(out, string(v))
		}
		return out
	} else if len(d) == 0 {
		return c
	}
	for _, dv := range d {
		for _, char := range c {
			out = append(out, char+string(dv))
		}
	}
	return out
}
