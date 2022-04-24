<template>
  <div align="left" style="margin-left: 5rem" class="hello">
    <h1>{{ msg }}</h1>
    <h3>구분</h3>
    <v-btn style="width: 60px; height: 30px" color="white" dark>COP</v-btn>
    <v-btn style="width: 60px; height: 30px" color="warning" dark>일반</v-btn>
    <h3>프로젝트 명</h3>
    <ul>
      <li>
        <input type="text" name="ProjectName" id="ProjectName" size="80" />
      </li>
      <h3>태그</h3>
      <li><input type="text" name="Tag" id="Tag" size="80" /></li>
    </ul>
    <h3>
      모집인원
      <div
        style="
          float: right;
          width: 200px;
          height: 100px;
          border-radius: 50%;
          margin-right: 73rem;
        "
      >
        프로젝트 종료일자
        <input type="date" name="EndDay" id="EndDay" />
      </div>
    </h3>
    <ul>
      <li>
        <Select name="Member" size="1">
          <option value="2명">2명</option>
          <option value="3명">3명</option>
          <option value="4명">4명</option>
          <option value="5명">5명</option>
          <option value="6명">6명</option>
          <option value="7명">7명</option>
          <option value="8명">8명</option>
          <option value="9명">9명</option>
          <option value="10명">10명</option>
        </Select>
      </li>
    </ul>
    <h3>필요한 능력</h3>
    <small>
      ※ 이런 팀원 원해요
      <div
        style="
          float: right;
          width: 200px;
          border-radius: 50%;
          margin-right: 67rem;
        "
      >
        + 행추가
      </div>
    </small>
    <ul>
      <li><input type="text" name="Teamate" id="Teamate" size="80" /></li>
    </ul>
    <h3>
      우리 프로젝트 특징 😎
      <small>
        <div
          style="
            float: right;
            width: 200px;
            border-radius: 50%;
            margin-right: 67rem;
          "
        >
          + 행추가
        </div>
      </small>
    </h3>
    <ul>
      <li>
        <input type="text" name="ProjectInfo" id="ProjectInfo" size="80" />
      </li>
    </ul>
    <h3>
      <v-btn style="width: 100px" color="white" dark>임시저장</v-btn>
      <v-btn style="width: 100px" color="warning" dark>생성하기</v-btn>
    </h3>
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
</style>
