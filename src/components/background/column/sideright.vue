<template>
  <div id="sideright">
    <b-row v-if="$resize && $mq.above(992)">
      <b-col cols="5" offset="2">
        <div>
          <b-img class="img-logo" :src="require('../../../assets/user.png')" fluid/>
          <p class="title-class">Nama Agen :</p>
        </div>
      </b-col>
      <b-col cols="5">
        <div>
          <b-img class="img-logo" :src="require('../../../assets/logo-kabah.png')" alt="logokabah" />
          <p class="title-class">Presentase Poin :</p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <agen class="" v-for="(biodata, index) in pages[currentPage-1]" :key="index" :biodata="biodata" />
        <b-pagination align="center"
                      :per-page="nbp"
                      :number-of-pages="numPages"
                      v-model="currentPage"
                      :total-rows="biodatas.length"
                      >
        </b-pagination>
      </b-col>
    </b-row>
   
  </div>
</template>

<script>
  import agen from './componentagen'

  export default {
    name: 'sideright',
    props: ['biodatas'],
    watch: {
      biodatas: function(val){
        this.biodatas = val;
        this.loadDataAgen();
      }
    },
    components: {
      agen,
    },
    data () {
      return {
        status: '',
        currentPage: 0,
        nbp: 4,
        pages:[],
        pageGen: 0,
        numPages: 0,
      }
    },
    created: function() {
   	  this.loadDataAgen();
    },
    methods: {
      loadDataAgen: function () {
        this.pages =  this.loadDataToPages(this.biodatas, this.nbp);
        this.numPages = this.pages.length-1;
      },
      loadDataToPages: function(data, elementPerPage){
        var pages = [];
        var i,j,temparray,chunk = elementPerPage;
        for (i=0,j=data.length; i<j; i+=chunk) {
            temparray = data.slice(i,i+chunk);
            pages.push(temparray);
        }
        return pages;
      }
    },
  }
</script>

<style>
#sideright {
  width: 100%;
  padding: 20px;
  background:rgba(85, 176, 169, 0.9);
  height: 662px;
}
p.title-class {
  margin: 20px 0px 5px 15px;;
  color: #ffffff;
  font-size: 18px;
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
.b-pagination {
  padding: 30px 0px 15px;
}
@media screen and (max-width: 768px) {
  #sideright {
    width: 100%;
    padding: 20px;
    background: none;
    height: 662px;
    margin-top: -70px;
    z-index: 8;
  }
}
</style>