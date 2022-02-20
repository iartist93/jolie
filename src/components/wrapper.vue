<template>
  <section class="wrapper">
    <span class="section-title">Try it out</span>
    <slot></slot>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  margin-top: 30px;
  border-radius: 6px;
  border: 1px solid rgb(167, 134, 189);
  box-shadow: 4px 4px 5px rgb(226, 226, 226);
  padding: 30px 20px;
  position: relative;

  .section-title {
    position: absolute;
    top: -10px;
    left: 30px;
    background-color: white;
    padding: 2px;
    user-select: none;
    color: rgb(56, 54, 54);
  }
}
</style>
