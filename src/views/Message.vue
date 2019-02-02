<template>
    <div>
         <ul>
           <li v-for="(message, index) in messages" :key="index">
               <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
               <button @click="pushShow(message.id)">push查看</button>
               <button @click="replaceShow(message.id)">replace查看</button>

            </li>
        </ul>
        <button @click="$router.back()">回退</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
        messages:[]
 }
 },
 components: {

 },
 mounted(){
   setTimeout(() => {
      const messages=[
            {
            title:'message001',
            id:1
            },
            {
            title:'message002',
            id:2
            },
            {
            title:'message004',
            id:4
            }
      ]  
      this.messages=messages
   }, 1000); 
   
 },
 methods: {
     pushShow(id){
       this.$router.push(`/home/message/detail/${id}`) 
     },
      replaceShow(id){
       this.$router.replace(`/home/message/detail/${id}`) 
     }
   
 }
}
</script>

<style >
</style>
