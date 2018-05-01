<template>
  <div id="sideleft">
    <b-img :src="require('../../../assets/logo-kabah.png')" alt="logokabah" />
    <h5>LEADERBOARD</h5>
    <span class="title-baitulah">88 HARI MENUJU BAITULLAH</span>
    <p class="text-first">Perolehan Sementara :</p>
    <b-col cols="12" class="nopadding">
      <div class="champion">
        <b-row>
          <b-col cols="4" class="nopadding">
            <div class="col-champ">
              <b-img :src="require('../../../assets/Champion.png')" fluid />
              <p class="text-center champ">CHAMPION</p>
            </div>
          </b-col>
          <b-col cols="5">
            <b-img class="champion-img" :src="require('../../../assets/Mba Novita.png')" fluid /> 
          </b-col>  
          <b-col cols="3">
            <h6 class="name-agen-margin">Novita</h6>
          </b-col>
        </b-row>
      </div>
    </b-col>
    <b-col cols="12" class="nopadding">
      <div class="champion">
        <b-row>
          <b-col cols="4" class="nopadding">
            <div class="col-champ">
              <b-img :src="require('../../../assets/silver.png')" fluid />
              <p class="text-center champ">RUNNER UP</p>
            </div>
          </b-col>
          <b-col cols="5">
            <b-img class="champion-img" :src="require('../../../assets/Mba Stanny.png')" fluid /> 
          </b-col>  
          <b-col cols="3">
            <h6 class="name-agen-margin">Stany</h6>
          </b-col>  
        </b-row>
      </div>
    </b-col>
    <b-col cols="12" class="nopadding">
      <div class="champion">
        <b-row>
          <b-col cols="4" class="nopadding">
            <div class="col-champ">
              <b-img :src="require('../../../assets/bronze.png')" fluid />
              <p class="text-center champ">3RD PLACE</p>
            </div>
          </b-col>
          <b-col cols="5">
            <b-img class="champion-img" :src="require('../../../assets/Mba Astina.png')" fluid /> 
          </b-col>  
          <b-col cols="3">
            <h6 class="name-agen-margin">Astina</h6>
          </b-col>  
        </b-row>
      </div>
    </b-col>
  </div>
</template>

<script>
  
</script>

<style>
@font-face {
  font-family: 'Roboto';
  src: url('../../../assets/font/roboto.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'piersans';
  src: url('../../../assets/font/piersans.otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'piersans-bold';
  src: url('../../../assets/font/piersans-bold.otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'piersans-light';
  src: url('../../../assets/font/piersans-light.otf');
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
#sideleft {
  width: 100%;
  padding: 20px;
  background-color: #4B5E99;
  height: 662px;
  background: rgba(75, 94, 153, 0.9);
}
.col-champ {
  margin-top: 8px;
}
img.champion-img {
  border: 4px solid #ffffff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0px auto 10px;
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
</style>