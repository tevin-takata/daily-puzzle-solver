# The Daily Puzzle Solver

The Daily Puzzle is a mobile game created by Typosaurus. This is an unofficial solver of some of the games on this app (WIP) such as Nine Letter, Honeycomb, Letter Box, etc.

## How It Works

A user types letters on a keyboard and inputs letters into the different boards. Clicking "SOLVE" will check all permutations of the given letters to display all solutions. There is no mobile support for this app yet, so inputting letters would be difficult. The functions recursively checks different combinations of letters with the words in `words.js`, marking off all visited letters to ensure no letters are reused.

## Honeycomb

This solver was the easiest to implement as it is essentially an anagram solver. As the solver is recursing, it only counts the word as a solved word if it is longer than three letters and includes the letter in the center hexagon.

## Nine Letter

This solver uses coordinates to check the moves across the 3x3 grid. Since the letters are entered into a single array, the moves are checked if the pointer moves to a valid coordinate before being converted to an array address. If the word is longer than three letters and contains the letter in the center box, it is considered valid.

## Letter Box

WIP
