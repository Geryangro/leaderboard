<template>
  <div id="background">
    <b-container fluid>
    <b-row class="text-center">
        <b-col class="nopadding" cols="3">
          <sideleft/>
        </b-col>
        <b-col class="nopadding" cols="9">
          <sideright/>
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
  import sideleft from './column/sideleft'
  import sideright from './column/sideright'


  export default {
    name: 'background',
    components: {
      sideleft,
      sideright
    },
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
.opacity {
  background: rgba(0, 0, 0, 0.7);
}
</style>