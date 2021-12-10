<template>
  <div>
    <h1>Hotel1</h1>
    <h4 style="color:red;">{{errorlog}}</h4>
    <form @submit.prevent="add_hotel">
    <h3 style="font-weight: bold;">Add</h3>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="id" placeholder="id">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="guest_id" placeholder="Guest_id">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="room_type_name" placeholder="Room type">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="check_in" placeholder="Check in">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="check_in" placeholder="Check out">
    </div>
      <button style="background-color:#a6c4b1" class="uk-width-1-1 uk-button-large">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "1",
      guest_id: "",
      room_type_name: "",
      check_in: "",
      check_out: "",
      errorlog:""
    }
  },
  methods: {
    add_hotel() {
      let api='http://localhost:8081/booking'
      let id = this.id
      let guest_id = this.guest_id
      let room_type_name = this.room_type_name
      let check_in = this.check_in
      let check_out = this.check_out
      this.axios.post(api, {
        id, guest_id, room_type_name, check_in, check_out
      }).then( (result) =>{
        console.log(result)
        this.$router.push('/')
      }, (err) => {
        this.errorlog = "Error!",
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>