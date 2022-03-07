def get_number_by_expression(expression):
    number = []
    for symbol in expression:
        if symbol in ["0", "1", "-"]:
            number.append(symbol)
        elif symbol in ["A", "B", "C"]:
            number.append("2")
        elif symbol in ["D", "E", "F"]:
            number.append("3")
        elif symbol in ["G", "H", "I"]:
            number.append("4")
        elif symbol in ["J", "K", "L"]:
            number.append("5")
        elif symbol in ["M", "N", "O"]:
            number.append("6")
        elif symbol in ["P", "Q", "R", "S"]:
            number.append("7")
        elif symbol in ["T", "U", "V"]:
            number.append("8")
        elif symbol in ["W", "X", "Y", "Z"]:
            number.append("9")
    return "".join(number)

print(get_number_by_expression("1-HOME-SWEET-HOME"))