<template>
  <div>
        <button type="button" class="btn btn-primary" @click="getStatic">静态资源</button>
        <button type="button" class="btn btn-primary">动态资源get</button>
        <button type="button" class="btn btn-primary">动态资源post</button>
        <button type="button" class="btn btn-primary">静态资源</button>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
 data() {
   return {
    
   }
 },
//  mounted() {
//    const url=`https://api.github.com/search/repositories?q=v&sort=stars`
//   //  this.$http.get(url).then(
//   //    response=>{
//   //       const result=response.data
//   //       const mostRepo=result.items[0]
//   //       this.repoUrl=mostRepo.html_url
//   //       this.repoName=mostRepo.name
//   //  },
//   //   response=>{
//   //      alert('失败')
//   //  }
//   //  )
//    axios.get(url).then(
//      response=>{
//         const result=response.data
//         const mostRepo=result.items[0]
//         this.repoUrl=mostRepo.html_url
//         this.repoName=mostRepo.name
//         }
//    ).catch(error=>{
//      alert('失败')
//    })
//  }
 methods: {
     getStatic(){
         axios.get('../src/mock/data.json')
               .then(res=>console.log(res))
               .catch(error=>console.log(error))
     }
 }

 
   


 }

</script>

<style >
     
</style>
