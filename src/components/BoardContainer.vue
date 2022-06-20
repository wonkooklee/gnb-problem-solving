<template>
  <div class="board">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "BoardC",
};
</script>

<style scoped lang="scss">
.board {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
}
</style>
