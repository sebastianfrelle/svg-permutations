/**
 * Returns all possible permutations of length `permutationLength`
 * based on a sequence `sequence` with repetition.
 */
export function permutationsWithRepetition(sequence, permutationLength) {
  let base = sequence.map(s => [s]);

  return permsWithRep(sequence, permutationLength, base, 1);
}

function permsWithRep(sequence, permutationLength, result, index) {
  if (index >= permutationLength) {
    return result;
  }

  let permutations = [];
  for (const r of result) {
    for (const s of sequence) {
      permutations.push(r.concat(s));
    }
  }

  return permsWithRep(sequence, permutationLength, permutations, index + 1);
}