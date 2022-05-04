<template>
  <div class="userpjt" style="height: 150px; margin: 10px;">
    <img
      :src="require(`../../assets/images/byeldol.png`)"
      style="width: 200px; height: 150px; float: left; margin-left : 20px"
    />
    <div class="info-pjt" style="height: 150px; padding-right : 1100px; width: 1500px">
      <div class="pjttype" style="float: right; padding-top:5px">
        <v-chip class="ma-2" style="background-color: #FFC200; height: 20px">COP</v-chip>
      </div>
      <div class="pjtname" style="padding-right:170px; width: 500px"><h1>RG</h1></div>

      <div class="pjtperiod">2022.01.01 ~ ing</div>

      <div style="height: 35px"></div>

      <div class="keyword" style="width: 1500px; ">
        <v-chip-group style="margin-left:230px">
          <v-chip class="ma-2" style="background-color: #a5dddd; height: 23px" >#자격증</v-chip>
          <v-chip class="ma-2" style="background-color: #a5dddd; height: 23px">#증권</v-chip>
        </v-chip-group>
      </div> 
    </div>
  </div>
</template>
<script>
export default {}
</script>
