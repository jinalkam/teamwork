
<template>
  <v-row justify="center">
    <v-dialog
      v-model="showModal"
      max-width="500px"
      @click:outside="$emit('closeDialog')"
    >
      <v-card>
        <v-card-title class="headline">Planet Detail</v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  :value="planetDetail.name"
                  label="Name"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  :value="planetDetail.diameter"
                  label="Diameter"
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  :value="planetDetail.climate"
                  label="Climate"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  :value="planetDetail.population"
                  label="Population"
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('closeDialog')"
            >Close</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  props: ["planetDetail"],
  data() {
    return {
      showModal: true,
    };
  },
};
</script>
