package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	var S string
	fmt.Scan(&S)
	s := strings.Split(S, "")

	w, _ := strconv.Atoi(s[0])
	x, _ := strconv.Atoi(s[1])
	y, _ := strconv.Atoi(s[2])
	z, _ := strconv.Atoi(s[3])

	// MM
	if 0 < w*10+x && w*10+x <= 12 {
		if 0 < y*10+z && y*10+z <= 12 {
			fmt.Println("AMBIGUOUS")
		} else {
			fmt.Println("MMYY")
		}
	} else {
		if 0 < y*10+z && y*10+z <= 12 {
			fmt.Println("YYMM")
		} else {
			fmt.Println("NA")
		}
	}
}
