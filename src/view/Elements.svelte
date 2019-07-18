<script>
  let elementCount = 5;
  
  function updateElementCount(delta) {
    let val = elementCount + delta;
    elementCount = val >= 0 ? val : 0;
    elementCount += delta;
  }
</script>

<style>
  #element-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 5px;
    margin-right: 5px;
  }

  .element {
    width: 100px;
    height: 100px;
    background-color: blueviolet;
    border-radius: 4px;
    flex: 0 0 1;
    margin: 5px;
  }
</style>

<button on:click={() => updateElementCount(1)}>+</button>
<button on:click={() => updateElementCount(-1)}>-</button>

<p>{elementCount}</p>

<div id="element-container">
  {#each { length: elementCount } as _, i}
    <div class="element" />
  {/each}
</div>
