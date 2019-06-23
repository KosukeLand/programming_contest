package main

import "fmt"

func main() {
	var x, y int
	var ans uint64
	fmt.Scan(&x, &y)

	i := x
	for i <= y {
		i *= 2
		ans++
	}
	fmt.Println(ans)
}
