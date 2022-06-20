<template>
  <div class="board">
    <h1>1번 게시판입니다</h1>
  </div>
</template>

<script>
export default {
  name: "BoardA",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.board {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
}
</style>
