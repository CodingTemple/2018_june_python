import os
from IPython.display import clear_output
from collections import Counter

def show_instructions():
    print("Enter 'ADD' to add to your list of items")
    print("Enter 'SHOW' to see your list of items")
    print("Enter 'HELP' to see instructions")
    print("Enter 'CLEAR' to clear your list")
    print("Enter 'DELETE' to delete an item from your list")
    print("Enter 'DONE' when you're finished adding to your list")

# Specifically for the terminal/command prompt
def clear_screen():
    os.system("cls" if os.name == 'nt' else 'clear')
    
class ListItem:
    def __init__(self, name):
        self.name = name
        self.quantity = 1
        
    def __str__(self):
        return f"<ListItem: {self.name}>"

def addItem(a_list, new_item): # added a_list argument
    a_list.append(new_item)
    clear_screen()
    clear_output()
    
def show_list(a_list): # added a_list argument
    for k, v in Counter(a_list).items():
        print(f"{k} {[v]}")
