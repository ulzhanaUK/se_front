<template>
<div>
    <h4 style="color:red;">{{errorlog}}</h4>
    <center>
        <h3 style="font-weight: bold;">Booking History</h3>
    <vk-table :data="hotel_history" striped>
    <vk-table-column title="Id" cell="id"></vk-table-column>
  <vk-table-column title="Name" cell="name"></vk-table-column>
  <vk-table-column title="room type" cell="room_type"></vk-table-column>
  <vk-table-column title="Check in" cell="check_in"></vk-table-column>
<vk-table-column title="Check out" cell="check_out"></vk-table-column>
</vk-table>
    </center>
</div>
</template>
<script>
export default {
    data() {
        return {
            hotel_history: [
                { id: '1', name: 'Hotel1', check_out: '11.12.2021', room_type: 'single', check_in: '10.02.2021' },
                { id: '2', name: 'Hotel2', check_out: '11.12.2021', room_type: 'single', check_in: '10.02.2021' },
                { id: '3', name: 'Hotel3', check_out: '11.12.2021', room_type: 'single', check_in: '10.02.2021' },
                { id: '4', name: 'Hotel4', check_out: '11.12.2021', room_type: 'single', check_in: '10.02.2021' },
                { id: '5', name: 'Hotel5', check_out: '11.12.2021', room_type: 'single', check_in: '10.02.2021' }
            ],
            errorlog: ""
        };
    },
    methods: {
    add_hotel() {
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
