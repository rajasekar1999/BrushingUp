#include <iostream>
using namespace std;

int leapyear(int y)
{
    if(y%4!=0)
        return 0;
    else if(y%100==0 && (y/100)%4!=0)
        return 0;
    else
        return 1;
}

int medcorrect(int m,int d, int yt)
{
    if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12)
        return 1+((31-d)/2);
    else if(m==02)
        if(yt==0)
            return 1+((28+31-d)/2);
        else
            return 1+((29-d)/2);
    else
        return 1+((61-d)/2);
}

int main() {
	int t;
	cin>>t;
	while(t!=0)
	{
	    int flag = 0;
	    int y,m,d;
	    char c;
	    cin>>y;
	    cin>>c;
	    cin>>m;
	    cin>>c;
	    cin>>d;
	    cin>>c;
	    int yt = leapyear(y);
	    int diff = medcorrect(m,d,yt);
	    cout<<diff<<"\n";
	    t--;
	}
	return 0;
}
