<template>
  <div class="userpjt" style="height: 150px; margin: 10px">
    <img
      :src="require(`../../assets/images/byeldol.png`)"
      style="width: 200px; height: 150px; float: left; margin-right: 15px"
    />
    <div class="info-pjt" style="height: 150px">
      <div class="pjtname"><h1>RG</h1></div>
      <!--<div
        class="pfjtype"
        style="float: right; margin-right: 1100px; margin-bottom: 200px"
      >
        <v-chip class="ma-2" style="background-color: #a5dddd; height: 25px"
          >#자격증</v-chip
        >
      </div>-->
      <div class="pjtperiod">2022.01.01 ~ ing</div>
      <div style="height: 35px"></div>
      <div class="keyword">
        <v-chip-group>
          <v-chip class="ma-2" style="background-color: #a5dddd; height: 25px"
            >#자격증</v-chip
          >
          <v-chip class="ma-2" style="background-color: #a5dddd; height: 25px"
            >#증권</v-chip
          >
        </v-chip-group>
      </div>
    </div>
  </div>
</template>





<script>
export default {}
</script>
