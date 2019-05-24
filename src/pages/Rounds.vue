<template>
  <ul id="rounds" class="list-unstyled">
    <Round
      v-for="round in rounds"
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
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    Round
  },
  data: function() {
    return {
      id: 74,
      name: "Henri-Chapelle Knockout",
      is_bcko: true,
      creator_id: 3103,
      url: "https://app.wearematchplay.com/cups/74",
      course_id: 19061,
      starting_at: "2019-02-11 00:00:00",
      ending_at: "2019-05-12 23:59:59",
      started_at: "2019-02-11 00:14:39",
      course: {
        id: 19061,
        club_id: null,
        name: "Gcc Henri Chapelle - La Chapelle",
        country: "Belgium",
        state: null,
        city: "Henri Chapelle",
        lat: "50.68293854",
        lng: "5.93680412",
        created_at: "2018-05-15 16:54:08",
        updated_at: "2018-03-21 14:45:19",
        deleted_at: null
      },
      rounds: [
        {
          id: 291,
          name: "Preround",
          ending_at: "2019-03-03 23:59:59"
        },
        {
          id: 292,
          name: "Round of 16",
          ending_at: "2019-03-24 23:59:59"
        },
        {
          id: 293,
          name: "Quarterfinals",
          ending_at: "2019-04-14 23:59:59"
        },
        {
          id: 294,
          name: "Semifinals",
          ending_at: "2019-04-28 23:59:59"
        },
        {
          id: 295,
          name: "Final",
          ending_at: "2019-05-12 23:59:59"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
