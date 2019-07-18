<script>
  let elems = [];
  let outputDirPath = "/output/";
  let iterationCount = 80;

  let filepath = index => `${outputDirPath}perm_${index}.svg`;
  let i = 0;

  let requests = [];
  for (let i = 0; i < iterationCount; i++) {
    requests.push(fetch(filepath(i)));
  }

  Promise.all(requests)
    .then((values) => {
      let texts = values.map(v => v.text());
      return Promise.all(texts);
    })
    .then((texts) => {
      elems = texts;
    });
</script>

{#each elems as e}
  {@html e}
{/each}
