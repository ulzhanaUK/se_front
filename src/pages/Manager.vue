<template>
<div>
    <center>
    <h3 style="font-weight: bold;">Manager{{id}}</h3>
    <vk-table :data="employees" striped>
        <vk-table-column title="employee id" cell="eid"></vk-table-column>
        <vk-table-column title="hours per week" cell="hours"></vk-table-column>
        <vk-table-column title="salary" cell="salary"></vk-table-column>
    </vk-table>
        </center>
         <div class="uk-margin uk-width-1-1">
            <input class="uk-input" required v-model="eid" type="eid" placeholder="Employee ID">
        </div>
     <vk-button @click="paycheck()" class="conta" type="primary" size="large">Paycheck</vk-button>
</div>
</template>
<script>
export default {
    data() {
        //SELECT * FROM employees WHERE hotel_id = this.hotel_id

        return {
            employees: [
                { eid: '1', hours: '80', salary: '12' },
                { eid: '2', hours: '80', salary: '12' },
                { eid: '3', hours: '80', salary: '12' },
                { eid: '4', hours: '80', salary: '12' },
                { eid: '5', hours: '80', salary: '12' },
            ]
        };
    }
};


//text input window : enter EID
//Button calculate paycheck: SELECT E.hours FROM epmloyees E

</script>
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
  box-shadow: 0 3px #666;
  transform: translateY(4px);
}
.uk-position-relative {
  background-color: rgb(242, 246, 252);
}
.conta {
    margin: 20px;
}
</style>
