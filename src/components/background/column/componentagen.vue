<template>
  <div id="agen">
    <b-row>
      <b-col cols="11" offset="1">
          <b-row>
            <div class="col-agen">
                <b-img class="champion-img-right" :src="require('../../../assets/Mba Stanny.png')" fluid />
            </div>
            <div class="col-percent">
                <div class="bio-percent">
                    <p class="text-left name-agen">{{biodata.name}}</p>
                    <b-progress variant="success" :value="counter" :max="max"></b-progress>
                </div>
                <div class="percent">
                  <p class="text-percent" >
                    {{percentage}}%
                  </p>
                </div>
            </div>
          </b-row>
      </b-col>
    </b-row>
  </div>
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
         {variant: 'success', value: 0},
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
    findpercent: function() {
      var point = this.biodata.point;
      var total = 1500;
      
      var calcpercent = function(p, t) {
        return 100*p/t;
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
    display: inline-block;
    float: left;
    z-index: 2;
}
.col-percent {
    background-color: #ffffff;
    float: left;
    margin: 18px 0px 20px -25px;
    z-index: 1;
    width: 780px;
    border-radius: 0px 15px 15px 0px;
    padding-left: 30px;
}
.page-link {
  font-size: 20px;
  color: #888;
}
.bio-percent {
    width: 650px;
    float: left;
}
.percent {
  width: 80px;
  float: left;
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
img.champion-img-right {
  border: 4px solid #ffffff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0px auto 10px;
  float: left;
}
#myprogress {
  width: 620px;
  border-radius: 20px;
  position: relative;
}
.progress {
  height: 25px;
  border-radius: 20px;
  color: #ffffff;
  width: 620px;
  font-size: 16px;
}

@-webkit-keyframes bar-before{
  0%{
    width: 0px;
  }
  100%{
    width: 100%;
  }
}
.bg-success {
  background: linear-gradient(left, #5455A5, #6CBCD3), #fec951;
}
/* .bar1{
  
} */
</style>