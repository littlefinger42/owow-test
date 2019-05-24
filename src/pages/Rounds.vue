<template>
  <ul id="rounds" class="list-unstyled">
    <Round
      v-for="round in cup.rounds"
      :key="round.id"
      :id="`${round.id}`"
      :title="round.name"
      :ends="round.ending_at"
    />
  </ul>
</template>

<script>
import Round from "../components/Round";

export default {
  name: "Rounds",
  props: {
    msg: String
  },
  components: {
    Round
  },
  data: function() {
    return {
      isLoading: false,
      cup: {}
    };
  },
  beforeMount() {
    this.fetchCupData(this.$route.params.id)
  },
  watch: {
    $route(to, from) {
      if (from.params.id != to.params.id) this.fetchCupData(to.params.id)
    }
  },
  methods: {
    fetchCupData(id) {
      if (!id) return false
      fetch(`${this.endpointUrl}/cups/${id}`, {
        method: "GET"
      })
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.cup = json;
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