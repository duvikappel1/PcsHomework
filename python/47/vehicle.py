class Vehicle:
    def __init__(self, color) -> None:
        self._color=color
        
    def go(self, speed):
        self._speed=speed
        print(f'The vehicle is now going at speed {self._speed}')

    def __str__(self) -> str:
        return f'The vehicle is {self._color} and is going {self._speed} miles an hour'

v1=Vehicle('blue')
v1.go(10)
print(v1)

class Plane(Vehicle):
    def __init__(self, color) -> None:
        super().__init__(color)

    def go(self, speed):
        self._speed=speed
        print(f'The vehicle is now flying at speed {self._speed}')

v2=Plane('red')
v2.go(20)
print(v2)