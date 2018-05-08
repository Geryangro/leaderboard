<template>
  <div id="background">
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col v-if="$resize && $mq.above(992)" class="nopadding" cols="12" sm="3" md="3" >
          <sideleft :biodatas="biodatas" />    
        </b-col>
        <b-col v-else class="nopadding" cols="12" sm="12" md="12">
          <sideleft :biodatas="biodatas" /> 
        </b-col> 
        <b-col v-if="$resize && $mq.above(992)" class="nopadding" cols="12" sm="9" md="9" >
          <sideright :biodatas="biodatas"/>
        </b-col>
        <b-col v-else class="nopadding" cols="12" sm="12" md="12">
          <sideright :biodatas="biodatas"/>
        </b-col>
      </b-row>
      <b-row>
        
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
        axios.get('http://redash-forward.bazarafra.com/api/leaderboard')
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
@font-face {
  font-family: 'Roboto';
  src: url('../../assets/font/roboto.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'piersans';
  src: url('../../assets/font/piersans.otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'piersans-bold';
  src: url('../../assets/font/piersans-bold.otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'piersans-light';
  src: url('../../assets/font/piersans-light.otf');
  font-weight: normal;
  font-style: normal;
}
h4 {
  color: #ffffff;
}
h5 {
  margin-top: 15px;
  color: #ffffff;
  font-weight: 100;
  font-family: 'piersans-light';
}
h6 {
  color: #ffffff;
  font-weight: 100;
  font-family: 'piersans-light';
}
@media screen and (max-width: 768px) {
  #background {
    background-image: url('');
    background-size: 100% 100%;
    background-position: cover;
    height: 662px;
    overflow-x: hidden;
  }
}
</style>