<template>
    
  <div class="uk-position-relative">
     <div class="uk-container">
    <h1 class="conta">Welcome, guest!</h1>
    
    <vk-grid class="uk-child-width-expand@s">
  <div v-vk-margin class="uk-grid-item-match conta">
    <vk-card>
      <h3>Hotel Search</h3>
     <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Destination">
              
        </div>
          <vk-button type="primary">Search</vk-button>
    </vk-card>
  </div>
  <div v-vk-margin class="conta">
    <h1>Look for the perfect hotel for you!</h1>
    <p>
      We have a range of world class hotels suited for all your preferences.
    </p>
  </div>
    </vk-grid>

      
    <vk-button class="conta" type="primary" size="large">My Profile</vk-button>
  </div>
  </div>
</template>

<script>
 
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
       