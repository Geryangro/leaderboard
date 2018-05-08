<template>
  <div id="champ-col">
    <div class="champ-col-class">
        <b-row v-if="$resize && $mq.above(992)">
          <b-col cols="4" class="nopadding">
            <div class="col-champ">
              <b-img :src="champPict.image" fluid />
              <p class="text-center champ">{{champPict.title}}</p>
            </div>
          </b-col>
          <b-col cols="5">
            <b-img class="champion-img" :src="'static/agen/'+biodata.image" fluid /> 
          </b-col>  
          <b-col cols="3">
            <h6 class="name-agen-margin">{{dataChamp.name}}</h6>
          </b-col>
        </b-row>
        <b-row v-else>
          <b-col cols="12">
            <b-img class="champion-img" :src="'static/agen/'+biodata.image" fluid />
            <b-img class="medal" :src="champPict.medal" fluid/> 
            <h6 class="name-agen-margin">{{dataChamp.name}}</h6>
          </b-col>
        </b-row>
      </div>
      <div>
        
      </div>
  </div>
</template>

<script>
  export default {
    name: 'champion',
    props: [
      'biodata',
      'image'
    ],
    watch: {
        biodata: function(val) {
          this.dataChamp = val;
        },
        image: function(val) {
          this.champPict = val;
        }
    },
    created(){
        this.dataChamp = this.biodata;
        this.champPict = this.image;
    },
    data() {
        return {
            dataChamp: {
                name: null,
            },
            champPict: {
              image: null,
              title: null,
              medal: null
            }
        }
    }
  }
</script>

<style>
.champ-col-class {
  margin: 25px 0px;
}
.col-champ {
  margin-top: 14px;
}
img.champion-img {
  border: 4px solid #ffffff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0px auto 0px;
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
.name-agen-margin {
  margin-top: 35px;
}
p.text-first {
  font-size: 20px;
  color: #F9DB44;
  margin-top: 10px;
}
img.img-profile {
  width: 110px;
}
@media screen and (max-width:760px) {
  .champ-col-class {
    margin: 10px 0px;
  }
  .name-agen-margin {
    margin: 5px 0px 0px;
  }
  img.champion-img {
    width: 110px;
    height: 110px;
  }
  img.medal {

  }
}
</style>