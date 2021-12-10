<template>
<div>
    <h4 style="color:red;">{{errorlog}}</h4>
    <form @submit.prevent="change_hotel">
    <button style="background-color:#a6c4b1" class="uk-width-1-1 uk-button-large">Change</button>
    </form>
</div>
</template>
<script>
export default {
    data() {
        return {
            id: "2", 
            name: "large", 
            check_out: "11-09-2001", 
            room_type_name: "large", 
            check_in: "12-09-2001",
            errorlog: ""
        };
    },
    methods: {
    change_hotel() {
      let api='http://localhost:8081/booking/:id'
      let id = this.id
      let room_type_name = this.room_type_name
      let check_in = this.check_in
      let check_out = this.check_out
      this.axios.post(api, {
        id, room_type_name, check_in, check_out
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
