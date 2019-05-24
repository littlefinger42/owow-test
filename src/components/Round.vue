<template>
  <b-media tag="li" v-b-toggle="id">
    <h5 class="mt-b mb-1">{{title}}</h5>
    <p class="mb-0">{{ends}}</p>
    <b-collapse :id="id" class="mt-2">
      <b-card>
        <ul id="matches" class="list-unstyled">
          <Match
            v-for="match in matches"
            v-bind:key="match.id"
            v-bind:users="match.users"
            v-bind:status="match.status"
          />
        </ul>
      </b-card>
    </b-collapse>
  </b-media>
</template>

<script>
import Match from "./Match";

export default {
  name: "Round",
  props: {
    title: String,
    ends: String,
    id: String
  },
  components: {
    Match
  },
  data: () => {
    return {
      matches: [
        {
          id: 1799,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4854,
              cup_user_id: null,
              first_name: "Michel",
              last_name: "Honay",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4842,
              cup_user_id: null,
              first_name: "Damien",
              last_name: "Billen",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 1,
              forfeit: false
            }
          ],
          match: {
            id: 1500,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 1,
            played_at: "2019-02-24 00:00:00",
            verified_at: "2019-02-24 19:00:58",
            forfeit: false
          },
          next_id: 1815
        },
        {
          id: 1800,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4170,
              cup_user_id: null,
              first_name: "Alexander",
              last_name: "Balsam",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/3967/medialibraryBe8Mtr-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/3967/medialibraryBe8Mtr-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/3967/medialibraryBe8Mtr-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/3967/medialibraryBe8Mtr-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4165,
              cup_user_id: null,
              first_name: "Marita",
              last_name: "Birgelen",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/3958/medialibrarysKbr1D-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/3958/medialibrarysKbr1D-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/3958/medialibrarysKbr1D-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/3958/medialibrarysKbr1D-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 1,
              forfeit: false
            }
          ],
          match: {
            id: 1391,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 1,
            played_at: "2019-02-24 00:00:00",
            verified_at: "2019-02-24 17:49:00",
            forfeit: false
          },
          next_id: 1815
        },
        {
          id: 1801,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4857,
              cup_user_id: null,
              first_name: "Mohammed",
              last_name: "Bouami",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4855,
              cup_user_id: null,
              first_name: "Jean-Pierre",
              last_name: "Meessen",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/4085/medialibrarybGe0gV-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/4085/medialibrarybGe0gV-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/4085/medialibrarybGe0gV-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/4085/medialibrarybGe0gV-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            }
          ],
          match: {
            id: 1521,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 1,
            played_at: "2019-02-25 13:59:36",
            verified_at: "2019-02-25 13:59:36",
            forfeit: false
          },
          next_id: 1816
        },
        {
          id: 1802,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4860,
              cup_user_id: null,
              first_name: "Gerd",
              last_name: "Renardy",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/4026/medialibraryUs0Uol-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/4026/medialibraryUs0Uol-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/4026/medialibraryUs0Uol-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/4026/medialibraryUs0Uol-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4849,
              cup_user_id: null,
              first_name: "Rolf",
              last_name: "Gerhards",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 3,
              forfeit: false
            }
          ],
          match: {
            id: 1480,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 2,
            played_at: "2019-02-24 00:00:00",
            verified_at: null,
            forfeit: false
          },
          next_id: 1816
        },
        {
          id: 1803,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4177,
              cup_user_id: null,
              first_name: "Philippe",
              last_name: "Janclaes",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4846,
              cup_user_id: null,
              first_name: "Peter",
              last_name: "de Pauw",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 1,
              forfeit: false
            }
          ],
          match: {
            id: 1522,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 1,
            played_at: "2019-02-25 14:34:03",
            verified_at: "2019-02-25 14:34:03",
            forfeit: false
          },
          next_id: 1817
        },
        {
          id: 1804,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4848,
              cup_user_id: null,
              first_name: "Philippe",
              last_name: "GERARD",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/4115/medialibrarydsgyU1-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/4115/medialibrarydsgyU1-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/4115/medialibrarydsgyU1-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/4115/medialibrarydsgyU1-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4856,
              cup_user_id: null,
              first_name: "Gregor",
              last_name: "Mescherowsky",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 3,
              forfeit: false
            }
          ],
          match: {
            id: 1456,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 1,
            played_at: "2019-02-24 00:00:00",
            verified_at: null,
            forfeit: false
          },
          next_id: 1817
        },
        {
          id: 1805,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4853,
              cup_user_id: null,
              first_name: "Paul",
              last_name: "Hocks",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4861,
              cup_user_id: null,
              first_name: "Dominique",
              last_name: "Visocchi",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 1,
              forfeit: false
            }
          ],
          match: {
            id: 1523,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 1,
            played_at: "2019-02-25 14:34:32",
            verified_at: "2019-02-25 14:34:33",
            forfeit: false
          },
          next_id: 1818
        },
        {
          id: 1806,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4173,
              cup_user_id: null,
              first_name: "Ute",
              last_name: "Ruppert",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/3973/medialibraryyD3usS-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/3973/medialibraryyD3usS-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/3973/medialibraryyD3usS-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/3973/medialibraryyD3usS-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4862,
              cup_user_id: null,
              first_name: "Guido",
              last_name: "Wendland",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 3,
              forfeit: false
            }
          ],
          match: {
            id: 1492,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 2,
            played_at: "2019-02-24 00:00:00",
            verified_at: null,
            forfeit: false
          },
          next_id: 1818
        },
        {
          id: 1807,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4843,
              cup_user_id: null,
              first_name: "Christophe",
              last_name: "Breuer",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/3991/medialibraryw3jo6G-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/3991/medialibraryw3jo6G-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/3991/medialibraryw3jo6G-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/3991/medialibraryw3jo6G-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4844,
              cup_user_id: null,
              first_name: "Pierre",
              last_name: "Cerfontaine",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 3,
              forfeit: false
            }
          ],
          match: {
            id: 1417,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 1,
            played_at: "2019-02-24 00:00:00",
            verified_at: null,
            forfeit: false
          },
          next_id: 1819
        },
        {
          id: 1808,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4852,
              cup_user_id: null,
              first_name: "Michaël",
              last_name: "Hick",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/3996/medialibrarygwWdbO-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/3996/medialibrarygwWdbO-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/3996/medialibrarygwWdbO-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/3996/medialibrarygwWdbO-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4845,
              cup_user_id: null,
              first_name: "Xavier",
              last_name: "Cornet",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 3,
              forfeit: false
            }
          ],
          match: {
            id: 1493,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 2,
            played_at: "2019-02-24 00:00:00",
            verified_at: null,
            forfeit: false
          },
          next_id: 1819
        },
        {
          id: 1809,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4159,
              cup_user_id: null,
              first_name: "Frank",
              last_name: "Wierts",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/4096/medialibraryl9Exgr-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/4096/medialibraryl9Exgr-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/4096/medialibraryl9Exgr-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/4096/medialibraryl9Exgr-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4858,
              cup_user_id: null,
              first_name: "Philippe",
              last_name: "RECULE",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/4075/medialibrarynUVZ4U-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/4075/medialibrarynUVZ4U-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/4075/medialibrarynUVZ4U-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/4075/medialibrarynUVZ4U-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 1,
              forfeit: false
            }
          ],
          match: {
            id: 1418,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 2,
            played_at: "2019-02-24 00:00:00",
            verified_at: "2019-02-24 12:55:28",
            forfeit: false
          },
          next_id: 1820
        },
        {
          id: 1810,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4847,
              cup_user_id: null,
              first_name: "Benoît",
              last_name: "Gavage",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/4305/medialibraryIz18nx-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/4305/medialibraryIz18nx-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/4305/medialibraryIz18nx-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/4305/medialibraryIz18nx-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4158,
              cup_user_id: null,
              first_name: "Thomas",
              last_name: "Demoulin",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/3952/medialibrary5pPsjK-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/3952/medialibrary5pPsjK-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/3952/medialibrary5pPsjK-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/3952/medialibrary5pPsjK-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 1,
              forfeit: false
            }
          ],
          match: {
            id: 1419,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 1,
            played_at: "2019-02-24 00:00:00",
            verified_at: "2019-02-24 21:06:25",
            forfeit: false
          },
          next_id: 1820
        },
        {
          id: 1811,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4163,
              cup_user_id: null,
              first_name: "Michael",
              last_name: "Klepp",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/3959/medialibraryJVOegy-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/3959/medialibraryJVOegy-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/3959/medialibraryJVOegy-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/3959/medialibraryJVOegy-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4850,
              cup_user_id: null,
              first_name: "Werner",
              last_name: "Haring",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 3,
              forfeit: false
            }
          ],
          match: {
            id: 1429,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 2,
            played_at: "2019-02-24 00:00:00",
            verified_at: null,
            forfeit: false
          },
          next_id: 1821
        },
        {
          id: 1813,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4167,
              cup_user_id: null,
              first_name: "Mireille",
              last_name: "Blanchy",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/3961/medialibraryi4NkpX-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/3961/medialibraryi4NkpX-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/3961/medialibraryi4NkpX-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/3961/medialibraryi4NkpX-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4851,
              cup_user_id: null,
              first_name: "Monika",
              last_name: "Herrmann",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/4485/medialibrarytTH4e9-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/4485/medialibrarytTH4e9-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/4485/medialibrarytTH4e9-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/4485/medialibrarytTH4e9-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 1,
              forfeit: false
            }
          ],
          match: {
            id: 1501,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 2,
            played_at: "2019-02-24 00:00:00",
            verified_at: "2019-02-24 19:59:25",
            forfeit: false
          },
          next_id: 1822
        },
        {
          id: 1814,
          status: 4,
          is_resetable: false,
          users: [
            {
              id: 4175,
              cup_user_id: null,
              first_name: "Sabine",
              last_name: "Niebeling",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/3981/medialibrary9EfPop-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/3981/medialibrary9EfPop-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/3981/medialibrary9EfPop-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/3981/medialibrary9EfPop-optimized"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 1,
              tee_id: null,
              status: 1,
              forfeit: false
            },
            {
              id: 4859,
              cup_user_id: null,
              first_name: "Marc",
              last_name: "REINARTZ",
              images: [
                {
                  "140":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-140",
                  "210":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-210",
                  "560":
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture-560",
                  default:
                    "https://d40lni4zfjpyo.cloudfront.net/default-user-picture"
                }
              ],
              scores: [],
              stroke_count_difference: [0, 2, 1, 2, 0, 0, 0, 1],
              total_scores: [],
              stroke_count: 0,
              team: 2,
              tee_id: null,
              status: 3,
              forfeit: false
            }
          ],
          match: {
            id: 1428,
            winning_score: -1,
            holes_not_played: 0,
            winning_team: 1,
            played_at: "2019-02-24 00:00:00",
            verified_at: null,
            forfeit: false
          },
          next_id: 1822
        }
      ]
    };
  },
  mounted() {
    this.$root.$on("bv::collapse::state", (collapseId, isJustShown) => {
      console.log("collapseId:", collapseId);
      console.log("isJustShown:", isJustShown);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
