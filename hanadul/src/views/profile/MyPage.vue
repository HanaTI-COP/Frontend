<template>
  <div class="mypage">
    <user-info></user-info>
    <div style='height:40px'></div>
    <v-tabs>
    <v-tab>운영 PJT</v-tab>
    <v-tab>진행 PJT</v-tab>
    <v-tab>대기중인 PJT</v-tab>
    </v-tabs>
    <user-pjt></user-pjt>
    <div style='height:30px'></div>
    <user-pjt></user-pjt>
  </div>
</template>

<script>
import UserInfo from '../../components/profile/UserInfo.vue'
import UserPjt from '../../components/profile/UserPjt.vue'

export default {
  components: { UserInfo, UserPjt },
}
</script>
