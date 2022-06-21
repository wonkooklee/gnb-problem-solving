<template>
  <div class="board-container">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardId: this.$route.params.id,
    };
  },
  name: "BoardContainer",
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
