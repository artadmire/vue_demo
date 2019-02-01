<template>
 <div class="todo-container">
    <div class="todo-wrap">
      <ToDoHeader :addTodo="addTodo"/>
      <ToDoList :todos="todos" :deleteTodo="deleteTodo"/>
      <ToDoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos"  :selectAllTodos="selectAllTodos"/>   
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ToDoHeader from './components/ToDoHeader.vue'
import ToDoList from './components/ToDoList.vue'
import ToDoFooter from './components/ToDoFooter.vue'

export default {
 data() {
 return {
    //  todos:[
    //    {title:'吃饭',complete:false},
    //    {title:'睡觉',complete:true},
    //    {title:'coding',complete:false}
    //  ]
    todos:JSON.parse(window.localStorage.getItem('todos_key')||'[]')
 }
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
 watch:{
   //
   todos:{
     deep:true,
    handler:function (value) {
      window.localStorage.setItem('todos_key',JSON.stringify(value))
    }
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
