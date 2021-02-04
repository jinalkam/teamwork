<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-card>
            <v-card-title>
              Datatable
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="filteredItems"
              class="elevation-1"
              :search="search"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <DetailPopup
                    v-if="dialogShow"
                    :planetDetail="planetDetail"
                  
                    @closeDialog="closeDialog"
                  />
                </v-toolbar>
              </template>

              <template v-slot:item.homeworld="{ item }">
                <a @click="showItem(item.homeworld)">
                  {{ item.homeworld }}
                </a>
              </template>
              <template v-slot:item.created="{ item }">
                {{ item.created | FormatDate }}
              </template>
              <template v-slot:item.edited="{ item }">
                {{ item.edited | FormatDate }}
              </template>
            </v-data-table>
          </v-card>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DetailPopup from "@/components/DetailPopup";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
export default {
  name: "App",

  components: {
    DetailPopup,
  },
  data() {
    return {
      search: "",
      dialogShow: false,
      planetList: [],
      filteredItems: [],
      planetDetail: {},
      totalCount: 0,
      pagination: {},
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        { text: "Mass", value: "mass", filterable: false },
        { text: "Height", value: "height", filterable: false },
        { text: "Created", value: "created", filterable: false },
        { text: "Edited", value: "edited", filterable: false },
        { text: "Planet Name", value: "homeworld", filterable: false },
      ],
    };
  },
  filters: {
    // Filter definitions
    FormatDate(value) {
      return moment(String(value)).format("MM/DD/YYYY hh:mm A");
    },
  },
  watch: {
    users: {
      immediate: true,
      handler: function (data) {
        if (data && data.length > 0 && this.planets.length > 0) {
          this.filteredItems = data.map((mapData) => ({
            ...mapData,
              /* map the planet name */
            homeworld: this.planets.find((filteredData) =>
              filteredData.residents.includes(mapData.url)
            )?.name,
          }));
        }
      },
    },
  },
  mounted() {
    this.getPlanets();
    this.getUsers();
  },
  computed: {
    ...mapGetters(["users", "planets"]),
  },

  methods: {
    ...mapActions(["getUsers", "getPlanets"]),

    closeDialog() {
      this.dialogShow = false;
    },

    showItem(data) {
      this.dialogShow = true;
      /* find the data according to planet name */
      this.planetDetail = this.planets.find(
        (filteredData) => filteredData.name == data
      );
    },
  },
};
</script>
