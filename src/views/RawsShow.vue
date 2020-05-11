<template>
  <div>
    <h1>Raw Material Info</h1>
    <h2>Name: {{raw.name}}</h2>
    <h2>Type: {{ raw.code }}</h2>
    <h2>Density: {{raw.density }}</h2>
    <a href="/raws">Back to all raw materials</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      raw: {}
    };
  },
  created: function() {
    this.showRaw();
  },
  methods: {
    showRaw: function() {
      axios.get("/api/raws/" + this.$route.params.id).then(response => {
        console.log("Get one raws: ", response);
        this.raw = response.data;
      });
    }
  }
};
</script>