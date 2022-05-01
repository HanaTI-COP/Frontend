<template>
  <div class="appliuserinfo">
    <div style="height: 350px; padding-top: 10px">
      <img
        :src="require(`../../assets/images/chiwawa.jpg`)"
        style="
          float: left;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          margin-left: 3rem;
          margin-top: 10rem;
        "
      />
      <div
        class="info-space"
        style="
          height: 280px;
          background-color: #008485;
          margin-bottom: 80px;
          text-align: center;
        "
      >
        <div class="info-content" style="padding-top: 180px; padding-left : 250px;">
          <div class="info-team v-row" style="color: white; margin: 5px">
            <h1>하나금융티아이 투자채널팀</h1>
          </div>
          <div class="info-name v-row" style="color: white; margin: 5px">
            <h2>잘생긴치와와</h2>
          </div>
          <div id="btn-call">
            <button class="btn-gray btn" style="" >☎ 연락하기</button>
          </div>
          <div class="info-keword" style="margin: 15px">
            <v-row>
              <v-chip-group>
                <v-chip class="ma-2" style="background-color: #d0d0d0"
                  >#Java</v-chip
                >
                <v-chip class="ma-2" style="background-color: #d0d0d0"
                  >#증권</v-chip
                >
                <v-chip class="ma-2" style="background-color: #d0d0d0"
                  >#Oracle</v-chip
                >
              </v-chip-group>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#btn-call{
  width: 150px;
    height: 50px;
    position: absolute;
    margin-top: -60px;
    margin-left: 760px;
}
.btn{
  width:100%;
  height:100%; 
  font-weight: bold;
  font-size: 20px;
}
.btn-gray{
    background-color: rgb(226, 224, 224);
}
</style>

<script>
export default {}
</script>


