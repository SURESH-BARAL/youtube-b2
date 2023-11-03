#include<stdio.h>
int main()
{
    int n,i,j,isprime;
    printf("enter the number");
    scanf("%d,&n");
    printf("prime number from 1 to %d are",n);
    for(i=2;i<=n;i++)
    {
        isprime=1;
        for(j=2;j<1;j++)
        {
            if(i%j==0)
            {
                isprime=0;
                break;
            }
        }
        if(isprime==1)
        {
            printf("%d",i);
        
        }
          
        
    }
    return 0;
}
