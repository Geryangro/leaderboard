<template>
  <b-col cols="12" id="agen" class="nopadding">
    <b-row v-if="$resize && $mq.above(992)">
      <b-col cols="11" offset="1">
          <b-row>
            <b-col cols="2" class="col-agen">
                <b-img class="champion-img-right" :src="'static/agen/'+biodata.image" @error="imageError" fluid />
            </b-col>
            <b-col cols="10" class="col-percent">
                <b-col cols="10" class="bio-percent">
                    <p class="text-left name-agen">{{biodata.name}}</p>
                    <b-progress class="w-100" variant="blue" :value="counter" :max="max"></b-progress>
                </b-col>
                <b-col cols="2" class="percent">
                  <p class="text-percent" >
                    {{percentage}}%
                  </p>
                </b-col>
            </b-col>
          </b-row>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col cols="11" class="shadow-radius">
        <b-row class="row-agen">
          <b-col cols="4" class="col-agen">
            <b-img class="champion-img-right" :src="'static/agen/'+biodata.image" @error="imageError" fluid/>
          </b-col>
          <b-col cols="8" class="col-percent nopadding">
                <b-col cols="10" class="bio-percent">
                    <p class="text-left name-agen">{{biodata.name}}</p>
                    <b-progress class="w-100" variant="blue" :value="counter" :max="max"></b-progress>
                </b-col>
                <b-col cols="2" class="percent nopadding">
                  <b-img :src="require('../../../assets/Kabahtosca.png')" fluid/>
                  <p class="text-percent text-center" >
                    {{percentage}}%
                  </p>
                </b-col>
            </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
  export default {
  name: 'agen',
  props: ['biodata'],
  data () {
    return {

      pageNumber: 0,
      counter: 0,
      max: 100,
      bars: [
         {value: 0},
      ],
      percentage: 0,
    }
  },
  mounted: function () {
    this.rendering(200)
  },
   updated: function () {
    this.rendering(200)
  },
  methods: {
    imageError: function () {
      this.biodata.image = "../../static/avatar.png";
    },
    findpercent: function() {
      var point = this.biodata.point;
      var total = 1500;
      
      var calcpercent = function(p, t) {
        return p;
      }
      return calcpercent(point,total);
    },
    rendering: function(timeout){
      setTimeout(() => {
      this.percentage = this.findpercent().toFixed(0);
      this.counter = parseInt(this.percentage);
      this.bars[0].value = parseInt(this.percentage);
      }, timeout);
    }
  }
}
</script>

<style>
.col-agen {
    margin-top: 10px;
    margin-right: -65px;
    display: inline-block;
    float: left;
    z-index: 2;
}
img.champion-img-right {
  border: 4px solid #ffffff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0px auto 10px;
  float: left;
}
.col-percent {
    background-color: #ffffff;
    float: left;
    margin: 18px 0px 20px 0px;
    z-index: 1;
    border-radius: 0px 15px 15px 0px;
    padding-left: 30px;
}
#myprogress {
  border-radius: 20px;
  position: relative;
}
.progress {
  height: 25px;
  border-radius: 20px;
  color: #ffffff;
  font-size: 16px;
}
.page-link {
  font-size: 20px;
  color: #888;
}
.bio-percent {
    float: left;
}
.percent {
  width: 80px;
  float: left;
}
.name-agen {
    margin-top: 2px;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 500;
}
.text-percent {
  margin: 20px 0px 0px -5px;
  font-size: 40px;
  color: #795a5a;
}
.name-agen {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 500;
}
p.title {
  margin: 7px 0px 10px 20px;;
  color: #ffffff;
  font-size: 24px;
  float: left;
}
.img-logo {
  float: left;
}

@-webkit-keyframes bar-before{
  0%{
    width: 0px;
  }
  100%{
    width: 100%;
  }
}
.bg-blue {
  background: linear-gradient(left, #5455A5, #6CBCD3), #fec951 !important;
  background: -webkit-gradient(linear, left bottom, right top, from( #5455A5), to(#6CBCD3));
  background: -moz-linear-gradient(to right, #5455A5, #6CBCD3);
}
/* .bar1{
  
} */
@media screen and (max-width: 768px) {
  .row-agen {
    border-radius: 10px;
    background-color: #ffffff;
    margin-bottom: 10px;
  }
  .col-agen {
    margin-top: 20px;
    margin-right: -15px;
    display: inline-block;
    float: left;
    z-index: 2;
}
  .shadow-radius {
    margin: 10px 15px;
    border-radius: 15px;
    -moz-box-shadow: 0 0 10px 2px #cccccc;
    -webkit-box-shadow: 0 0 10px 2px #cccccc;
    box-shadow: 0 0 10px 2px #cccccc; 
  }
  img.champion-img-right {
    border: 4px solid #ffffff;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: 0px auto 10px;
    float: left;
  }
  .col-percent {
    background-color: #ffffff;
    float: left;
    margin: 10px 0px;
    z-index: 1;
    border-radius: 0px 15px 15px 0px;
    padding-left: 0px;
  }
  .bio-percent {
    float: left;
    margin: 7px 0px 0px -10px;
  }
  #myprogress {
    border-radius: 20px;
    position: relative;
  }
  .progress {
    height: 15px;
    border-radius: 20px;
    color: #ffffff;
    font-size: 16px;
  }
  .percent {
    width: 80px;
    float: left;
    margin-top: 10px;
  }
  .text-percent {
    font-size: 20px;
    float: left;
    margin-top: 5px;
    margin-left: 5px;
  }
}
</style>