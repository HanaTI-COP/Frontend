<template>
  <div class="mypage">
    <div style="height: 70px"></div>
    <user-info></user-info>
  </div>
</template>

<script>
import UserInfo from "../../components/profile/UserInfo.vue";

export default {
  components: { UserInfo },
};
</script>
