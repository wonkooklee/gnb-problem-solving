<template>
  <nav>
    <div>
      <h2>카테고리</h2>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: dodgerblue;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;

    h2 {
      margin: 0;
      color: #fff;
    }
  }
}
</style>
