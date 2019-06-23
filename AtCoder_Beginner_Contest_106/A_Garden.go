package main
import "fmt"

func main()  {
	var A, B int;
	fmt.Scan(&A,&B);
	fmt.Printf("%d\n",A*B-A-B+1);
}