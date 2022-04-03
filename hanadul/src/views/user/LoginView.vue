<template>
  <div class="login_view_body">
    <div class="login_title">
      <div id="user_title">로그인</div>
      <div>지금 자신의 가치를 높여보세요.</div>
    </div>

    <div style="height: 3vw"></div>

    <div class="flex">
      <div>
        <div class="flex login_input_group">
          <p class="login_input_label">이메일</p>
          <input class="login_input" type="text" />
        </div>
        <div class="flex login_input_group">
          <p class="login_input_label">비밀번호</p>
          <input class="login_input" type="password" />
        </div>
      </div>
      <div class="login_btn_div">
        <button class="login_btn">LOGIN</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style>
#user_title {
  color: #008485;
  font-weight: bold;
  font-size: x-large;
}
.login_title {
  text-align: left;
  padding-left: 8vw;
}
.login_view_body {
  padding-left: 30vw;
}
.login_input_group {
  height: 3vw;
  align-items: center;
}
.login_input_label {
  width: 8vw;
  text-align: left;
  font-size: larger;
}
.login_input {
  width: 23vw;
  height: 3vh;
}
.flex {
  display: flex;
}
.login_btn_div {
  display: flex;
  margin: 0.4vw;
}
.login_btn {
  background-color: #008485;
  color: white;
  font-size: medium;
  font-weight: bold;
  border: none;
  width: 5vw;
}
</style>
