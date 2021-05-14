months=['Jan','Feb','Mar','Apr','May','Jun']
days=[31,28,31,30,31,30]
for month,day in zip(months,days):
    print(f'The month of {month} has {day} days')


months2=('Jan','Feb','Mar','Apr','May','Jun')
days2=(31,28,31,30,31,30)
for month,day in zip(months2,days2):
     print(f'The month of {month} has {day} days')


months3={'Jan': 31,
        'Feb': 28,
        'Mar': 31,
        'Apr': 30,
        'May': 31,
        'Jun': 30  
                        }
for k in months3:
    print(k,months3[k]) 
    
     
def find_days_in_months(month):                          
    months3={'Jan': 31,
        'Feb': 28,
        'Mar': 31,
        'Apr': 30,
        'May': 31,
        'Jun': 30  
                        }
    return months3[month]
print(find_days_in_months('Jan'))                        