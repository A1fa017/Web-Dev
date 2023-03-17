n = int(input())
m = int(input())
if n*m >= 0:
    print((n*m)%109)
else:
    print((109+((n*m)%109))%109)