<template>
  <div class="uk-position-relative">
    <center>
    <vk-card class="uk-width-1-3@m">
      <form class="login_desck" @submit.prevent="login">
        <a slot="center"><img class="uk-width-1-1@s" src="../assets/1.jpg"></a>
        <h3 style="font-weight: bold;">Desck</h3>
        <div class="uk-margin uk-width-1-1">
          <input class="uk-input" required v-model="hid" type="hid" placeholder="Hotel ID">
        </div>
        <div class="uk-margin uk-width-1-1">
          <input class="uk-input" required v-model="eid" type="eid" placeholder="Employee ID">
        </div>
        <button style="background-color:#a6c4b1" class="uk-width-1-1 uk-button-large">Log in</button> <br>
        <a href="#">Forgot Password</a>
        <h4 style="color:red;">{{errorlog}}</h4>
      </form>
      </vk-card>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hid: "",
      eid:"",
      errorlog:""
    }
  },
  methods: {
    login: function () {
    // let api = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC_Ed2LUR4b2tvX4UHPRUa2qn_SmsTcHgU'
    // let hid = this.hid
    // let eid = this.eid
    // this.axios.post(api, {
    //     hid, eid
    //   }).then( (response) =>{
    //     this.$router.push('/')
    //   }, (err) => {
    //     this.errorlog = "Error! Email or Password is not correct. Try again.",
    //     console.log(err)
    // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #055095;
  border: none;
  border-radius: 8px;
  box-shadow: 0 9px #999;
}
.button:hover {background-color: #005BA1}
.button:active {
  background-color: #055095;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.uk-position-relative {
  background-color: rgb(242, 246, 252);
}
