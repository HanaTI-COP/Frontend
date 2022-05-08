<template>
  <div class="appliuserpjt" style="height: 150px; width:1100px; margin: 10px">
    <img
      :src="require(`../../assets/images/byeldol.png`)"
      style="width: 200px; height: 150px; float: left; margin-right: 15px"
    />
    <div class="info-pjt" style="float: left;height: 150px">
      <div class="pjtname"><h1>BITE</h1></div>
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
