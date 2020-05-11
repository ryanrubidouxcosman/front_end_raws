<template>
  <div class="home">
    <h1>New Raw Material</h1>
    <div>
      Name:
      <input type="text" v-model="newRawName" />
      Code:
      <input type="text" v-model="newRawCode" />
      Density:
      <input type="number" v-model="newRawDensity" />
      <button v-on:click="createRaw()">Create</button>
    </div>

    <!-- Problem Started with {{raw.name}} -->
    <h1>All Raws</h1>
    <div v-for="raw in raws">
      <h2>Code: {{ raw.code}}</h2>
      <button v-on:click="currentRaw=raw">Show more info</button>
      <div v-if="raw === currentRaw">
        <p>Name: {{raw.name}}</p>
        <p>Density: {{raw.density}}</p>
      </div>
      <!-- <button v-on:click="destroyRaw(raw)">Destroy</button> -->
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      raws: [], //Data did not appear on screen from backend starting here
      currentRaw: {},
      newRawName: "",
      newRawCode: "",
      newRawDensity: ""
    };
  },
  created: function() {
    axios.get("/api/raws").then(response => {
      this.raws = response.data;
      console.log(response);
    });
  },
  methods: {
    createRaw: function() {
      var params = {
        input_name: this.newRawName, // because backend: params[:input_name],
        input_code: this.newRawCode, // otherwise just name:
        input_density: this.newRawDensity
      };
      // };
      // destroyRaw: function(raw){
      //   axios.delete("/api/raws/"+ raw.id).then(response => {
      //     console.log("Success");
      //     var index = this.raws.indexOf(raw);
      //     this.raws.splice(index, 1);
      //   });
      // },

      axios
        .post("/api/raws", params)
        .then(response => {
          console.log("Success", response.data);
          this.raws.push(response.data);
        })
        .catch(error => console.log(error.response));
    }
  }
};
</script>