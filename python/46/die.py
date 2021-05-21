import random

class Die:

    def __init__(self, sides):
      self._sides= sides 
      #print(sides)    

    def roll_die(self):
      print(random.randint(1, self._sides)) 


die1= Die(12) 
die2= Die(6)  
die1.roll_die()
die2.roll_die() 

class SixSidedDie(Die):
    def __init__(self):
        super().__init__(6)

dieSix = SixSidedDie()
dieSix.roll_die()
