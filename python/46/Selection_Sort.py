import random

my_list = []
list2=[]

def fill_list(list):
    length=10
    for i in range(length):
        list.insert(i, random.randint(1, 100))
    print(list)   

fill_list(my_list)  

def selection_sort(list):
    for i in range(len(list)):
        min_index=i
        for x in range(i+1, len(list)):
            if list[min_index] > list[x]:
                min_index = x
        temp = list[min_index]
        list[min_index] = list[i]
        list[i] = temp
    print(list)             
      

selection_sort(my_list) 

def selection_sort2(list):
    divide_index=0
    while divide_index < len(list)-1:
        min_index = divide_index
        for i in range(divide_index + 1, len(list)):
          if list[i] < list[min_index]:
              min_index=i
        if list[min_index] < list[divide_index]:   
            temp=list[divide_index]
            list[divide_index]=list[min_index]
            list[min_index] = temp      
        divide_index =+1
    print(list) 
    

fill_list(list2)
selection_sort2(list2)  