area = 53

def exerc5 (area):
    litersNecessary = area / 3
    paintCanNecessary = litersNecessary // 18
    if litersNecessary % 18:
        paintCanNecessary += 1
    print((paintCanNecessary, paintCanNecessary * 80))

exerc5(area)
