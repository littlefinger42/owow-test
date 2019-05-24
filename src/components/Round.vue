<template>
  <b-media tag="li" v-b-toggle="id">
    <div class="round-header">
      <span class="mb-1 round-header-title">{{title}} <Stretch v-if="isLoading === true"/></span>
      <span>
        <span class="mb-0 round-header-ends">{{ends}}</span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="chevron-up"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="svg-inline--fa fa-chevron-up fa-w-14 fa-2x"
        >
          <path
            fill="currentColor"
            d="M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z"
            class
          ></path>
        </svg>
      </span>
    </div>
    <b-collapse :id="id" class="mt-2">
      <b-card class="round-card">
        <ul v-if="isLoading === false && matches.length > 0" id="matches" class="list-unstyled">
          <Match
            v-for="match in matches"
            v-bind:key="match.id"
            v-bind:user1="match.users[0]"
            v-bind:user2="match.users[1]"
            v-bind:winner="match.match.winning_team"
          />
        </ul>
      </b-card>
    </b-collapse>
  </b-media>
</template>

<script>
import Match from "./Match";
import {Stretch} from "vue-loading-spinner"

export default {
  name: "Round",
  props: {
    title: String,
    ends: String,
    id: String
  },
  components: {
    Match,
    Stretch
  },
  data: function() {
    return {
      isLoading: false,
      matches: []
    };
  },
  mounted() {
    this.$root.$on("bv::collapse::state", (collapseId, isJustShown) => {
      if (isJustShown && this.matches.length < 1 && this.id === collapseId)
        this.fetchMatchData(collapseId);
    });
  },
  methods: {
    fetchMatchData(id) {
      this.isLoading = true;
      return fetch(`${this.endpointUrl}/rounds/${id}/cup-matches`, {
        method: "GET"
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          this.matches = json;
          this.isLoading = false;
        })
        .catch(error => {
          console.log("ERROR in fetch: " + error);
          this.isLoading = false;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.round-header {
  display: flex;
  justify-content: space-between;
  padding: $padding-xs;
  border-bottom: $border-colour solid 1px;
  &-title {
    display: inline;
    text-transform: uppercase;
  }
  &-ends {
    color: $text-color-lighter;
    padding-right: $padding-xs;
  }
  .fa-chevron-up {
    height: 1em;
    transition: transform 0.3s;
    .collapsed & {
      transform: rotate(180deg);
    }
  }
  @include responsive("sm") {
    padding: $padding-sm;
  }
  @include responsive("md") {
    padding: $padding-md;
  }
}

.round-card {
  border: 0;
}
</style>
