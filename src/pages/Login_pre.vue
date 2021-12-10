<template>
  <div class="uk-position-relative">
    <center>
        <vk-card class="uk-width-1-3@m">
            <h3 style="font-weight: bold;">LOG IN AS</h3>
            <vk-button style="background-color:#a6c4b1" class="uk-width-1-1 uk-margin-small-bottom" onclick="window.location.href='/#/login'">GUEST</vk-button>
            <vk-button style="background-color:#a6c4b1" class="uk-width-1-1 uk-margin-small-bottom" onclick="window.location.href='/#/login_desck'">DESK CLERK</vk-button>
            <vk-button style="background-color:#a6c4b1" class="uk-width-1-1 uk-margin-small-bottom" onclick="window.location.href='/#/login_manager'">MANAGER</vk-button>
        </vk-card>
    </center>
  </div>
</template>

<script>
export default {
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
