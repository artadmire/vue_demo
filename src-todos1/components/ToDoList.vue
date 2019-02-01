<template>
      <ul class="todo-main">
          <ToDoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo"/>
       
      </ul>
</template>

<script type="text/ecmascript-6">
import ToDoItem from './ToDoItem.vue'
export default {
 data() {
 return {

 }
 },
 components: {
   ToDoItem
 },
 props:{
     todos:Array,
     deleteTodo:Function
 }
}
</script>

<style >
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
/*item*/

</style>
