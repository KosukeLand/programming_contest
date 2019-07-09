package main

import (
	"fmt"
)

var S string
var ans, cnt int

func main() {
	fmt.Scan(&S)

	var flag bool
	for i := 0; i < len(S); i++ {
		if string(S[i]) == "0" {
			flag = true
		}
		if string(S[i]) == "+" {
			if flag == false {
				cnt++
			} else {
				flag = false
			}
		}
	}
	if flag == false {
		cnt++
	}

	fmt.Println(cnt)
}
