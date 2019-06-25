<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
    <div class="footer-btn">next router</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    console.log("---------------mounted------------");
    this.init();
  },
  computed: {
    ...mapState(["name", "age", "address", "mobile"]),
    ...mapGetters(["getMobile", "getIdCard"])
  },
  methods: {
    ...mapMutations(["setName"]),
    ...mapActions(["setMobile", "setAddress"]),
    init() {
      console.log("name:", this.name);
      this.setMobile({ mobile: "12121212121212" });
      console.log("mobile:", this.mobile);
      this.setName({ name: "jk" });
      console.log("name:", this.name);
      this.setAddress();
      console.log("mobile", this.mobile);
      console.log("mobile:", this.getMobile);
      console.log("idCard:", this.getIdCard);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
h1,
h2 {
  font-weight: normal;
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
.hello {
  .footer-btn {
    font-size: 32px;
    color: #42b983;
  }
}
</style>
