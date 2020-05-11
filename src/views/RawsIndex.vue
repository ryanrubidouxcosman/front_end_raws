<template>
  <div class="raws-index">
    <h1>All Raw Materials</h1>

    <div v-for="raw in raws">
      <h2>{{ raw.name }}</h2>

      <a v-bind:href="`/raws/${raw.id}`">More info</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      raws: []
    };
  },
  created: function() {
    this.indexRaws();
  },
  methods: {
    indexRaws: function() {
      axios.get("/api/raws").then(response => {
        this.raws = response.data;
        console.log("Get all raws: ", response);
        console.log(response);
      });
    }
  }
};
</script>
