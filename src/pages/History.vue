<template>
<div>
    <!-- <div class="container">
        <h3 class="p-3 text-center">Booking history</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Hotel</th>
                    <th>Room type</th>
                    <th>Check in</th>
                    <th>Check out</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hotel_history in hotel_historys" :key="hotel_history.id">
                    <td>{{hotel_history.name}}</td>
                    <td>{{hotel_history.room_type}}</td>
                    <td>{{hotel_history.check_in}}</td>
                    <td>{{hotel_history.check_out}}</td>
                </tr>
            </tbody>
        </table>
    </div>  -->
    <center>
        <h3 style="font-weight: bold;">Booking History</h3>
    <vk-table :data="hotel_history" striped>
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
                { name: 'Hotel1', check_out: '11.12.2021', room_type: 'single', check_in: '10.02.2021' },
                { name: 'Hotel2', check_out: '11.12.2021', room_type: 'single', check_in: '10.02.2021' },
                { name: 'Hotel3', check_out: '11.12.2021', room_type: 'single', check_in: '10.02.2021' },
                { name: 'Hotel4', check_out: '11.12.2021', room_type: 'single', check_in: '10.02.2021' },
                { name: 'Hotel5', check_out: '11.12.2021', room_type: 'single', check_in: '10.02.2021' }
            ]
        };
    }
};
</script>
<style scoped>

</style>
