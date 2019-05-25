#include<iostream>
#include<map>
#include<vector>
using namespace std;

int main() {
	int N, M;
	cin >> N >> M;
	vector<int> A(N);
	for (int i = 0; i < A.size(); i++)
	{
		cin >> A[i];
	}
	
	map<int, int> m;
	vector<int> SUM(N + 1);
	SUM[0] = 0;
	for (int i = 0; i < N; i++)
	{
		SUM[i + 1] = (SUM[i] + A[i]) % M;
        cout << SUM[i+1] << endl;
	}

	long ans = 0;
    
    cout << "---" << endl;
	
    for (int i = 0; i < SUM.size(); i++)
	{
        cout << m[SUM[i]] << endl;

      	ans += m[SUM[i]];
		m[SUM[i]]++;
	}

    cout << "---" << endl;
	cout << ans << endl;
}
