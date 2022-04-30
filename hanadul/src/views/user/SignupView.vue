<template>
  <v-container>
    sign up

    <v-carousel>
      <v-carousel-item v-for="i in 2" :key="i">
        <v-sheet class="sheet-body">
          <v-form v-if="i === 1">
            <v-row>회사선택</v-row>
            <v-select :items="company" label="회사 선택" solo></v-select>

            <v-row>이메일</v-row>
            <v-row flex>
              <v-text-field label="ID" v-model="emailId" outlined></v-text-field
              >@
              <v-text-field
                v-model="address"
                label="address"
                readonly
              ></v-text-field>

              <button class="cert-btn btn-basic">인증번호 <br />전송</button>
            </v-row>

            <v-row>인증번호입력</v-row>
            <v-text-field :rules="rules" v-model="certNum"></v-text-field>
          </v-form>

          <v-form v-else>
            <v-row>소속팀</v-row>
            <v-text-field v-model="team"></v-text-field>

            <v-row>이름</v-row>
            <v-text-field v-model="username"></v-text-field>

            <v-row>비밀번호</v-row>
            <v-text-field v-model="password"></v-text-field>

            <v-row>비밀번호 확인</v-row>
            <v-text-field v-model="passwordCheck"></v-text-field>

            <button class="btn-basic regist-btn">가입하기</button>
          </v-form>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: 'SignupView',
  data() {
    return {
      company: ['하나금융그룹', '하나금융티아이'],
      address: 'hanafn.com',
      certNum: '',
      team: '',
      username: '',
      password: '',
      passwordCheck: '',
      emailId: '',
    }
  },
}
</script>

<style>
.btn-basic {
  border: 1px solid #008485;
  background: #008485;
  color: white;
  font-weight: bold;
}
.cert-btn {
  height: auto;
  margin: 0px 0px 38px 5px;
  border-radius: 3px;
  padding: 0px 10px 0px 10px;
}
.sheet-body {
  height: 100%;
  margin: 5%;
}
.v-carousel__controls {
  visibility: hidden;
}
.regist-btn {
  width: -webkit-fill-available;
  height: 7vh;
}
</style>
