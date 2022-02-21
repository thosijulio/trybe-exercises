import random


WORDS = [
    "cat",
    "elephant",
    "dog",
    "monkey",
    "duck",
    "chameleon",
    "bear",
    "moose",
]

ATTEMPTS = 3

def create_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word

def create_guesses(scrambled_word):
    guesses = []
    print("Scrambled word is:", scrambled_word)
    for attempt in range(ATTEMPTS):
        choise = input('choise a word:')
        guesses.append(choise)
    return guesses

def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print("Parabéns! A palavra sorteada era:", secret_word)
    else:
        print("Você errou! A palavra era:", secret_word)

if __name__ == "__main__":
    secret_word, scrambled_word = create_secret_word(WORDS)
    guesses = create_guesses(scrambled_word)
    check_game_result(secret_word, guesses)