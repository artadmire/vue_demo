<template>
 <div class="todo-container">
    <div class="todo-wrap">
      <!-- <ToDoHeader @addTodo="addTodo"/> -->
      <ToDoHeader ref="header"/>
      <ToDoList :todos="todos" />
      <!-- <ToDoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos"  :selectAllTodos="selectAllTodos"/>    -->
      <ToDoFooter>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button slot="delete" class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
      </ToDoFooter>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import PubSub from 'pubsub-js'
import ToDoHeader from './components/ToDoHeader.vue'
import ToDoList from './components/ToDoList.vue'
import ToDoFooter from './components/ToDoFooter.vue'
import storageUtil from './util/storageUtil.js'
export default {
 data() {
 return {
    //  todos:[
    //    {title:'吃饭',complete:false},
    //    {title:'睡觉',complete:true},
    //    {title:'coding',complete:false}
    //  ]
    todos:storageUtil.getTodos()
 }
 },
 mounted() {
   //异步代码
   this.$refs.header.$on('addTodo',this.addTodo)
   PubSub.subscribe('deleteTodo', (msg,index)=> {
      this.deleteTodo(index)
   })
 },
 components: {
       ToDoHeader,
       ToDoList,
       ToDoFooter 
 },
 methods: {
     addTodo(todo){
       this.todos.unshift(todo)
     },
     deleteTodo(index){
       this.todos.splice(index,1)
     },
      //删除所有选
     deleteCompleteTodos(){
this.todos=this.todos.filter(todo=>!todo.complete)
     },
     //全选和不全选
     selectAllTodos(check){
       this.todos.forEach(todo=>todo.complete=check)
     }


 },
 computed: {
     completeSize(){
       return this.todos.reduce((preTotal,todo)=>preTotal+(todo.complete?1:0),0)
     },
     isAllCheck:{
       get(){
          return this.completeSize===this.todos.length&&this.completeSize>0
       },
       set(value){
          this.selectAllTodos(value)
       }
     }
 },
 watch:{
   //
   todos:{
     deep:true,
    // handler:function (value) {
    //   // window.localStorage.setItem('todos_key',JSON.stringify(value))
    //   storageUtil.setTodos(value)
    // }
    handler:storageUtil.setTodos
   }
 }
}
</script>

<style >
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
