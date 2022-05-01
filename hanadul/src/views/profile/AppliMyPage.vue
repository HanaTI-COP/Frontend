<template>
  <div class="appliuserpage">
    <appli-info></appli-info>
    <div style="height: 40px"></div>
    <v-tabs>
      <v-tab>PJT 이력</v-tab>
    </v-tabs>
    <appli-pjt></appli-pjt>
    <div style="height: 30px"></div>
    <appli-pjt></appli-pjt>
  </div>
</template>

<script>
import AppliInfo from '../../components/profile/AppliUserInfo.vue'
import AppliPjt from '../../components/profile/AppliUserPjt.vue'

export default {
  components: { AppliInfo, AppliPjt },
}
</script>
<style>
.appliuserpage{
  width:1200px;
  margin:auto
}
</style>
