<template>
  <div id="sideleft">
    <b-img :src="require('../../../assets/logo-kabah.png')" alt="logokabah" />
    <h5>LEADERBOARD</h5>
    <span v-if="$resize && $mq.above(992)" class="title-baitulah">88 HARI MENUJU BAITULLAH</span>
    <span v-else class="title-baitulah">88 HARI MENUJU <br> BAITULLAH</span>
    <p class="text-first">Perolehan Sementara :</p>
    <b-col cols="12" class="nopadding">
      <champion v-for="(biodata, index) in championRows" :key="index" :id="'champion-'+index" :biodata="biodata" :image="champimage[index]" />
    </b-col>
  </div>
</template>

<script>
import champion from './componentchampion'
import axios from 'axios'

  export default {
    name: 'sideleft',
    props: ['biodatas'],
    data(){
      return {
        championRows: [],
        champimage: [],
      }
    },
    watch: {
      biodatas: function(val) {
        this.biodatas = val;
        this.sliceData();
        console.log("biodatas change");
      },
      champimage: function(val){
        this.champimage = val;
        console.log("champimage change");
      }
    },
    components: {
      champion,
    },
    created: function() {
      this.loadDataImageChamp();
      this.sliceData();
    },
    methods: {
      sliceData: function() {
        this.championRows = this.biodatas.slice(0 , 3);
      },
      loadDataImageChamp: function() {
        var self = this;
        axios.get('/static/champ.json')
        .then(function (response){
          self.champimage = response.data.result.data;
        })
        .catch(function (error){
          self.champimage = 'error dude' + error;
        })
      }
    }
  }
</script>

<style>
#sideleft {
  width: 100%;
  padding: 20px;
  background-image: url('');
  background-color: #4B5E99;
  height: 662px;
  background: rgba(75, 94, 153, 0.9);
  z-index: -10px;
}
span.title-baitulah {
  font-size: 25px;
  font-weight: 800;
  color: #ffffff;
  font-family: 'piersans-bold';
}
span.name {
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 300;
}
.col-champ {
  margin-top: 8px;
}
.text-position {
  margin-top: 40px;
}
.champion {
  padding: 10px 10px;
  display: table-cell;
  vertical-align: middle;
}
.champ {
  font-size: 16px;
  margin: 12px 0px 0px;
  color: #ffffff;
}
p.text-first {
  font-size: 20px;
  color: #F9DB44;
  margin-top: 10px;
}
img.img-profile {
  width: 110px;
}
@media screen and (max-width: 768px){
  #sideleft {
    height: 570px;
    background-image: url('../../../assets/mobile.jpg');
    background-size: 100% 100%;
    z-index: -10;
    padding: 40px 0px;
  }
  #champion-0 {
    margin: 10px 20px 0px;
  }
  #champion-0 > div.champ-col-class > div > div > img {
    border: 6px solid #FDDB42;
  }
  #champion-0 > div.champ-col-class > div > div > img.medal.img-fluid {
    border: none;
    margin-left: -35px;
    margin-top: 45px;
  }
  #champion-1 {
    margin-left: -220px;
    margin-top: -7px;
  }
  #champion-1 > div.champ-col-class > div > div > img {
    border: 6px solid #cfcece;
  }
  #champion-1 > div.champ-col-class > div > div > img.medal.img-fluid {
    border: none;
    margin-left: -43px;
    margin-top: 75px;
  }
  #champion-2 {
    margin-right: -220px;
    margin-top: -120px;
  }
  #champion-2 > div.champ-col-class > div > div > img {
    border: 6px solid #cd6132;
  }
  #champion-2 > div.champ-col-class > div > div > img.medal.img-fluid {
    border: none;
    margin-left: -43px;
    margin-top: 75px;
  }
  .text-first {
    display: none;
  }
}
</style>