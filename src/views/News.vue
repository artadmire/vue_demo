<template>
 <div>
      <ul>
          <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
      </ul>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
    newsArr:['news01','news02','news03','news04']
 }
 },
 components: {

 }
}
</script>

<style >
</style>
