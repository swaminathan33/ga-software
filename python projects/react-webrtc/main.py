a = [2,3,1,6,7,4,33,82,21,34,12]

true = 0

while true <= len(a):
    for i in range(0,len(a)-1):
        if (a[i] > a[i+1]):
            a[i],a[i+1] = a[i+1],a[i]
        else:
            true += 1
        print(a)