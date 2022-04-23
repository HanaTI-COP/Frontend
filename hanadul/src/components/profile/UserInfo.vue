<template>
  <div class="userinfo">
    <div style="height: 350px; padding-top: 10px">
      <img
        :src="require(`../../assets/images/soonmoo.png`)"
        style="
          float: left;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-left: 43rem;
        "
      />
      <div
        class="info-space"
        style="
          height: 280px;
          background-color: #008485;
          margin-top: 80px;
          text-align: center;
        "
      >
        <div class="info-content" style="padding-top: 80px">
          <div class="info-team" style="color: white; margin: 5px">
            <h1>하나금융티아이 투자업무팀</h1>
          </div>
          <div class="info-name" style="color: white; margin: 5px">
            <h2>순무엄마동생</h2>
          </div>
          <div class="info-keword" style="margin: 15px">
            <v-row justify="center" align="center">
              <v-chip-group>
                <v-chip class="ma-2" style="background-color: #d0d0d0"
                  >#Java</v-chip
                >
                <v-chip class="ma-2" style="background-color: #d0d0d0"
                  >#증권</v-chip
                >
                <v-chip class="ma-2" style="background-color: #d0d0d0"
                  >#MySQL</v-chip
                >
              </v-chip-group>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {}
</script>
