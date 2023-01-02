// 7 kyu: Two fighters, one winner.
// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
  if (
    Math.ceil(fighter1.health / fighter2.damagePerAttack) >
    Math.ceil(fighter2.health / fighter1.damagePerAttack)
  ) {
    return fighter1.name;
  } else if (
    Math.ceil(fighter2.health / fighter1.damagePerAttack) >
    Math.ceil(fighter1.health / fighter2.damagePerAttack)
  ) {
    return fighter2.name;
  } else if (
    Math.ceil(fighter1.health / fighter2.damagePerAttack) ==
    Math.ceil(fighter2.health / fighter1.damagePerAttack)
  ) {
    return firstAttacker;
  }
}

// 7 kyu: Simple Fun #176: Reverse Letter
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  return str
    .split('')
    .reverse()
    .join('')
    .replace(/[^a-z]/gi, '');
}
