<template>
  <div class="Team">
    <img
      :src="require(`../../assets/images/team.png`)"
      style="weight: 1000px; height: 500px"
    />
  </div>
  <div align="left" style="margin-left: 10rem" class="Info">
    <h3>
      <span style="font-size: 4em">
      BITE
      </span>
      <div align="right" style="float: right; margin-right: 20rem">
      모집기간 : 2022/02/02까지<br>
        <div align="right" style="float: right">
        <v-btn style="width: 220px; height: 50px" color="warning" dark>참여하기</v-btn><br><br>
        <v-btn style="width: 220px; height: 50px" color="white" dark>연락하기</v-btn>
        </div>
      </div>
    </h3>
    <img
      :src="require(`../../assets/images/teammate.png`)"
    />
    <h3>
      우리 COP만의 특징 😎
    </h3>
    <small style="margin-left: 1rem">
    · 매주 월요일 오후 9시에 줌으로 모여요
    </small><br>
    <small style="margin-left: 1rem">
    · 한달에 최소 두번 이상 참여해주세요
    </small><br>
    <small style="margin-left: 1rem">
    · 반모금지에요
    </small><br>
    <ul>
      <li>
        <input type="text" name="ProjectInfo" id="ProjectInfo" size="80" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  width: 60px;
  height: 30px;
}
</style>
