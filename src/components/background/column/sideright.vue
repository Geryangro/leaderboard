<template>
  <div id="sideright">
    <b-row>
      <b-col cols="5" offset="2">
        <div>
          <b-img class="img-logo" :src="require('../../../assets/user.png')" fluid/>
          <p class="title">Nama Agen :</p>
        </div>
      </b-col>
      <b-col cols="5">
        <div>
          <b-img class="img-logo" :src="require('../../../assets/logo-kabah.png')" alt="logokabah" />
          <p class="title">Presentase Poin :</p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <agen v-for="biodata in biodatas" :key="biodata.name" :biodata="biodata" />
        <b-pagination :link-agen="clickCallback" align="center"
                      :per-page="numPages"
                      :number-of-pages="nbp"
                      v-model="currentPage">
        </b-pagination>
      </b-col>
    </b-row>
   
  </div>
</template>

<script>
  import agen from './componentagen'
  import axios from 'axios'

  export default {
    name: 'sideright',
    components: {
      agen,
    },
    data () {
      return {
        status: '',
        currentPage: 0,
        biodatas: [],
        nbp: 4,
        pages:[],
        pageGen: 0,
        numPages: 0,
      }
    },
    
    mounted() {
   	  this.loadDataAgen();
    },   
    methods: {
      loadDataAgen: function () {
        var self = this;
        axios.get('/static/data.json')
        .then(function (response){
          var data = response.data.result.data;
          self.pages = self.loadDataToPages(data, self.nbp);
          self.biodatas = self.pages[self.currentPage-1];
          self.numPages = self.pages.length;
        })
        .catch(function (error){
          self.biodatas = 'error dude' + error;
        })
      },
     
      loadDataToPages: function(data, elementPerPage){
        var pages = [];
        var i,j,temparray,chunk = elementPerPage;
        for (i=0,j=data.length; i<j; i+=chunk) {
            temparray = data.slice(i,i+chunk);
            pages.push(temparray);
        }
        return pages;
      },
      clickCallback: function() {
        console.log('data change');
        this.$set(this, 'biodatas', this.pages[this.currentPage-1]);
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
span {
  font-size: 25px;
  font-weight: 800;
  color: #ffffff;
  font-family: 'piersans-bold';
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
</style>