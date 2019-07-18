import { permutationsWithRepetition } from './permutations.js';
import fs from 'fs';
import path from 'path';

let svgCode = `
<svg width="497" height="127" viewBox="0 0 497 127" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <!--
  <path d="M248.659 17L236.461 55.2149C232.483 67.5124 229.301 78.0909 227.047 87.2149C224.793 78.7521 221.611 68.0413 217.5 55.2149L205.17 17H176V110.884H193.767V63.281C193.767 52.7025 193.634 42.2562 193.369 31.8099C194.96 37.0992 196.949 43.5785 199.468 51.1157C200.927 55.6116 202.253 59.7107 203.446 63.281L218.826 110.884H235.002L250.117 63.281C254.493 49.3967 257.807 38.686 259.796 31.4132L259.664 41.8595C259.531 51.3802 259.398 58.5207 259.398 63.281V110.884H277.431V17H248.659Z" fill="black"></path>
  <path d="M322.932 98.4546C311.662 98.4546 305.431 91.9752 303.84 81.5289H352.5C352.632 79.5455 352.765 77.2975 352.765 74.7851C352.765 53.6281 341.362 41.0661 321.076 41.0661C299.995 41.0661 287.001 56.405 287.001 77.4298C287.001 98.9835 300.657 113 322.535 113C334.07 113 343.219 109.43 352.765 99.7769L343.086 89.1983C338.843 92.7686 335.396 95.1488 332.744 96.4711C329.96 97.7934 326.778 98.4546 322.932 98.4546ZM320.546 54.5537C329.694 54.5537 335.263 60.1074 335.926 69.2314H304.237C306.226 60.1074 311.662 54.5537 320.546 54.5537Z" fill="black"></path>
  <path d="M397.258 41.0661C388.242 41.0661 381.215 44.6364 376.839 50.9835V43.3141H360.796V110.884H378.032V70.157C378.032 61.6942 383.734 55.876 391.689 55.876C399.777 55.876 404.285 60.7686 404.285 69.7603V110.884H421.522V64.6033C421.522 50.4546 412.638 41.0661 397.258 41.0661Z" fill="black"></path>
  <path d="M479.763 17V50.3223C475.123 44.3719 468.361 41.4628 459.477 41.4628C442.241 41.4628 429.38 55.4793 429.38 77.1653C429.38 98.5868 441.976 112.868 459.345 112.868C468.891 112.868 476.051 109.298 480.957 102.025V110.884H497V17H479.763ZM463.322 98.0579C453.246 98.0579 446.881 89.8595 446.881 77.1653C446.881 64.4711 453.511 56.405 463.455 56.405C473.399 56.405 480.426 64.3388 480.426 77.1653C480.426 89.8595 473.399 98.0579 463.322 98.0579Z" fill="black"></path>
  -->
  <path class="target" fill-rule="evenodd" clip-rule="evenodd" d="M0 87.7957V68.1936C0 57.3678 8.77599 48.5914 19.6022 48.5914V48.5914C30.4284 48.5914 39.2044 57.3678 39.2044 68.1936V87.7957H58.8065C69.6323 87.7957 78.4087 96.5719 78.4087 107.398V107.398C78.4087 118.224 69.6323 127 58.8065 127C49.0054 127 39.2044 127 39.2044 127H0V87.7957Z" fill="#000000"></path>
  <path class="target" fill-rule="evenodd" clip-rule="evenodd" d="M53.5612 0H127V73.4391H87.8328V39.1675H53.5612V0Z" fill="#000000"></path>
</svg>
`;

let svgWithStrokeCode = `
<svg width="497" height="127" viewBox="0 0 497 127" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <!--
  <path d="M248.659 17L236.461 55.2149C232.483 67.5124 229.301 78.0909 227.047 87.2149C224.793 78.7521 221.611 68.0413 217.5 55.2149L205.17 17H176V110.884H193.767V63.281C193.767 52.7025 193.634 42.2562 193.369 31.8099C194.96 37.0992 196.949 43.5785 199.468 51.1157C200.927 55.6116 202.253 59.7107 203.446 63.281L218.826 110.884H235.002L250.117 63.281C254.493 49.3967 257.807 38.686 259.796 31.4132L259.664 41.8595C259.531 51.3802 259.398 58.5207 259.398 63.281V110.884H277.431V17H248.659Z" fill="black"></path>
  <path d="M322.932 98.4546C311.662 98.4546 305.431 91.9752 303.84 81.5289H352.5C352.632 79.5455 352.765 77.2975 352.765 74.7851C352.765 53.6281 341.362 41.0661 321.076 41.0661C299.995 41.0661 287.001 56.405 287.001 77.4298C287.001 98.9835 300.657 113 322.535 113C334.07 113 343.219 109.43 352.765 99.7769L343.086 89.1983C338.843 92.7686 335.396 95.1488 332.744 96.4711C329.96 97.7934 326.778 98.4546 322.932 98.4546ZM320.546 54.5537C329.694 54.5537 335.263 60.1074 335.926 69.2314H304.237C306.226 60.1074 311.662 54.5537 320.546 54.5537Z" fill="black"></path>
  <path d="M397.258 41.0661C388.242 41.0661 381.215 44.6364 376.839 50.9835V43.3141H360.796V110.884H378.032V70.157C378.032 61.6942 383.734 55.876 391.689 55.876C399.777 55.876 404.285 60.7686 404.285 69.7603V110.884H421.522V64.6033C421.522 50.4546 412.638 41.0661 397.258 41.0661Z" fill="black"></path>
  <path d="M479.763 17V50.3223C475.123 44.3719 468.361 41.4628 459.477 41.4628C442.241 41.4628 429.38 55.4793 429.38 77.1653C429.38 98.5868 441.976 112.868 459.345 112.868C468.891 112.868 476.051 109.298 480.957 102.025V110.884H497V17H479.763ZM463.322 98.0579C453.246 98.0579 446.881 89.8595 446.881 77.1653C446.881 64.4711 453.511 56.405 463.455 56.405C473.399 56.405 480.426 64.3388 480.426 77.1653C480.426 89.8595 473.399 98.0579 463.322 98.0579Z" fill="black"></path>
  -->
  <path class="target" fill-rule="evenodd" clip-rule="evenodd" d="M0 87.7957V68.1936C0 57.3678 8.77599 48.5914 19.6022 48.5914V48.5914C30.4284 48.5914 39.2044 57.3678 39.2044 68.1936V87.7957H58.8065C69.6323 87.7957 78.4087 96.5719 78.4087 107.398V107.398C78.4087 118.224 69.6323 127 58.8065 127C49.0054 127 39.2044 127 39.2044 127H0V87.7957Z" fill="#000000" stroke="yellow" stroke-width="5"></path>
  <path class="target" fill-rule="evenodd" clip-rule="evenodd" d="M53.5612 0H127V73.4391H87.8328V39.1675H53.5612V0Z" fill="brown" stroke="#000000" stroke-width="5"></path>
</svg>
`;

/**
 * Represents the fill/stroke combination for a single SVG element.
 */
class AttributeSet {
  constructor (fill, stroke) {
    this.fill = fill;
    this.stroke = stroke;
  }
}

function computePermutationLength(attributeSets) {
  let l = 0;
  for (const attrSet of attributeSets) {
    if (attrSet.fill && attrSet.fill !== 'none') {
      l++;
    }

    if (attrSet.stroke && attrSet.stroke !== 'none') {
      l++;
    }
  }

  return l;
}

function hasNonNullAttribute(element, attrName) {
  let attr = element.getAttribute(attrName);

  return attr && attr !== 'none';
}

test('parsing svg', () => {
  let parser = new DOMParser();
  let svgDoc = parser.parseFromString(svgWithStrokeCode, 'image/svg+xml');
  let allElements = svgDoc.querySelectorAll('*');

  // expect(allElements.length).toBe(3);

  // 1. Parse SVG to retrieve attribute sets

  // This is a 2D array on the form `[[Bool, Bool], [Bool, Bool], ...]`
  // where each entry at index `i` specifies whether the corresponding node at 
  // index `i` has a fill and a stroke respectively.
  let attrSets = [];

  let nonNullAttributeCount = 0;
  allElements.forEach((e) => {
    let entry = ['fill', 'stroke'].map((a) => hasNonNullAttribute(e, a));

    // Count of all `true` occurrences to calculate the permutation count.
    nonNullAttributeCount += entry.filter(v => v).length;

    attrSets.push(entry);
  });

  expect(attrSets.length).toBe(allElements.length);
  expect(nonNullAttributeCount).toBe(4);

  // 2. Generate color permutations
  let colors = [
    'blue',
    'red',
    'green',
  ];

  // Ex: 4 non-null, non-none `fill`s and 2 non-null, non-none `stroke`s
  // requires 6 colors in total.
  let permutationLength = nonNullAttributeCount;

  expect(permutationLength).toBe(4);

  /*
  Example:
    Given
    - Permutation length 4
    - Colors [blue, green, red]
    the `colorPermutations` array is approximately on the form (sequence 
    non-critical):
      [
        [blue, blue, blue, blue],
        [blue, blue, blue, green],
        ...
      ]
  */
  let colorPermutations = permutationsWithRepetition(colors, permutationLength);

  expect(colorPermutations.length).toBe(Math.pow(colors.length, permutationLength));

  // Loop over the color permutations and apply the colors in sequence to a
  // clone of the original SVG.
  let svgPerms = [];
  for (const cp of colorPermutations) {
    let copy = svgDoc.cloneNode(true);

    // Use `colorIndex` to traverse the current color permutation. Whenever a
    // color is used, we increment the `colorIndex` by 1.
    let colorIndex = 0;
    copy.querySelectorAll('*').forEach((node, i) => {
      let [hasFill, hasStroke] = attrSets[i];
      if (hasFill) {
        node.setAttribute('fill', cp[colorIndex++]);
      }

      if (hasStroke) {
        node.setAttribute('stroke', cp[colorIndex++]);
      }
    });

    svgPerms.push(copy);
  }

  expect(svgPerms.length).toBe(colorPermutations.length);

  let filePath = index => `./src/logic/output/perm_${index}.svg`;

  // Write to output files
  cleanOutputFolder();
  for (let i = 0; i < svgPerms.length; i++) {
    fs.writeFileSync(filePath(i), svgPerms[i].documentElement.outerHTML, console.log);
  }
});

function cleanOutputFolder() {
  let outputDir = `./src/logic/output/`;
  let files = fs.readdirSync(outputDir);
  for (const f of files) {
    fs.unlinkSync(path.join(outputDir, f), (err) => {
      if (err) throw err;
    });
  }
}