import { permsWithRep, permutationsWithRepetition } from "./permutations";

test('Permutations are correctly produced', () => {
  let sequence = ['a', 'red', 'Jonas'];
  let permutationLength = 3;
  let result = permutationsWithRepetition(sequence, permutationLength);
  
  let expectedLength = Math.pow(sequence.length, permutationLength);
  expect(result.length).toBe(expectedLength);

  // Check that array contains only unique values
  let hasDuplicates = (new Set(result)).size !== result.length;
  expect(hasDuplicates).toBe(false);

  for (const r of result) {
    expect(r.length).toBe(permutationLength);
  }
});

test('Empty sequence yields no permutations.', () => {
  let sequence = [];
  let permutationLength = 100;
  let result = permutationsWithRepetition(sequence, permutationLength);

  expect(result.length).toBe(0);
});
