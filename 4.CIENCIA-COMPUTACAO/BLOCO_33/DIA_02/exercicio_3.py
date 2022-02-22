import random

def get_word(words_list):
    print(words_list)
    word = random.choice(words_list)
    return word


def get_scrambled_word(word):
    return "".join(random.sample(word, len(word)))


def get_guesses(attempts):
    guesses = []

    for attempt in range(attempts):
        guess = input("Digite uma palavra:")
        guesses.append(guess)
    
    return guesses

with open("words.txt", mode="r") as file:
    words_list = []

    for line in file:
        words_list.append(line.splitlines()[0])

    print("Jogo de adivinhação de palavra")
    word = get_word(words_list)
    scramble_word = get_scrambled_word(word)

    print("Palavra embaralhada:", scramble_word)
    guesses = get_guesses(3)
    if word in guesses:
        print("Parabéns, você ganhou! Palavra sorteada:", word)
    else:
        print("Voce errou! A palavra sorteada era:", word)
