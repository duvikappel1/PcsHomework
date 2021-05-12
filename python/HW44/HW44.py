x='Duvi Kappel'
y='26 Jule ct.'
z=['Moshe Katz','Avrohom Friedman','Dovid Cohen' ]
print(f'MY Name: {x} Address:{y} Friends:{z} ' )
print(x[2::3])
print(z[-2][1:-1:])
for i in range(1,11):
    for j in range(1,11): 
     print(i,'x',j,'=',i*j)  
print('Guess a number from 1-100')
w=-1
while w != 50:
     w=int(input())
     if w != 50:
      print('Guess again')
     else :   
       print('You won')      