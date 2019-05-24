<template>
  <div class="match">
    <div class="match-player" :class="{ active: winner === user1.team}">
      <span><img v-if="user1.images[0].default" :src="user1.images[0].default"/> {{user1.first_name}} {{user1.last_name}}</span>
      <span class="match-player-win-tag">WIN</span>
    </div>
    <div class="match-player" :class="{ active: winner === user2.team}">
      <span class="match-player-win-tag">WIN</span>
      <span>{{user2.first_name}} {{user2.last_name}} <img :src="user2.images[0].default"/></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Match",
  props: {
    user1: Object,
    user2: Object,
    winner: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.match {
  display: flex;
  margin-bottom: $padding-xs;
  &-player {
    flex: 1 1 50%;
    display: flex;
    justify-content: space-between;
    box-shadow: $box-shadow;
    border: $border-colour solid 1px;
    padding: $padding-xs;
    line-height: 48px;
    &-win-tag {
        font-weight: bold;
        opacity: 0;
        .active & {
            opacity: 1;
        }
    }
    img {
        height: 48px;
        border-radius: 24px;
        padding: $padding-xs;
    }
    &.active {
      background-color: $primary-color;
      color: $text-color-alt;
      overflow: hidden;
    }
    &:nth-child(1) {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
      border-right: 0;
    }
    &:nth-child(2) {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      border-left: 0;
    }
  }
}
</style>
