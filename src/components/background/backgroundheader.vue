<template>
  <div id="background">
    <b-container fluid>
    <b-row class="text-center">
        <b-col class="nopadding" cols="3">
          <sideleft/>
        </b-col>
        <b-col class="nopadding" cols="9">
          <sideright :biodatas="biodatas"/>
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
  import sideleft from './column/sideleft'
  import sideright from './column/sideright'
  import axios from 'axios'


  export default {
    name: 'background',
    components: {
      sideleft,
      sideright
    },
    data () {
      return {
        biodatas: [],
      }
    },
    created: function() {
      this.loadDataAgen();
    },
    methods: {
      loadDataAgen: function () {
        var self = this;
        axios.get('/static/data.json')
        .then(function (response){
          self.biodatas = response.data.result.data;
        })
        .catch(function (error){
          self.biodatas = 'error dude' + error;
        })
      },
    }
  }
</script>

<style>
#background {
  background-image: url('../../assets/leaderboard.jpg');
  background-size: 100% 100%;
  background-position: cover;
  height: 662px;
}
.nopadding {
  padding: 0px !important;
}
.nomargin {
  margin: 0px !important;
}
</style>