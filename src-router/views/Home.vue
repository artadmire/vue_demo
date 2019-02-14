<template>
 <div >
     <h2>Home组件</h2>
     <div>
          <ul  class="nav nav-tabs">
              <Li>
                  <router-link to="/home/news">News</router-link>
              </Li>
              <Li>
                  <router-link to="/home/message">Message</router-link>
              </Li>
          </ul> 
          <div>
              <router-view></router-view>
          </div>
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {

 }
 },
 components: {

 }
}
</script>

<style>
</style>
