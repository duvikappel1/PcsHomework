x='Duvi Kappel'
y='26 Jule ct.'
z=['Moshe Katz','Avrohom Friedman','Dovid Cohen' ]
print(f'MY Name: {x} Address:{y} Friends:{z} ' )
print(x[2::3])
print(z[-2][1:-1:])
for i in range(1,11):
    for j in range(1,11): 
     print(i,'x',j,'=',i*j)  
import random     
print('Guess a number from 1-100')
num=random.randint(1,100)
guess=-1
while guess != num:
    try:  
     guess=int(input())
    except:
        print('Guess numbers only') 
    if guess < num:
        print('Too low')    
    elif guess > num: 
        print('Too high')
print('You won')      