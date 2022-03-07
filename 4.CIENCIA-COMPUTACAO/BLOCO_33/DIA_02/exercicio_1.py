def show_name(name):
    count = len(name)
    
    while count >= 0:
        print(name[0:count])
        count -= 1

show_name('Bruno')