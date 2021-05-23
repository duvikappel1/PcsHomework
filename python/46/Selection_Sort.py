import random

my_list = []

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
 