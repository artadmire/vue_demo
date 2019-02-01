<template>
   <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addItem"/>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
     title:''
 }
 },
 components: {

 },
 methods: {
   addItem(){
     const title=this.title.trim()
     if(!title){
       alert('必须输入')
       return
     }
     const todo={
       title,
       complete:false
     }
    //  this.addTodo(todo)
    this.$emit('addTodo',todo)
     this.title=''
   }
 },
 props:{

 }
}
</script>

<style scoped lang="">
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
