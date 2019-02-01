<template>
 <div class="col-md-4">
                    <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <label for="">用户名</label>
                            <input type="text" v-model="name" class="form-control" id="firstname" placeholder="用户名">
                        </div>
                        <div class="form-group">
                            <label for="lastname">评论内容</label>
                            <textarea  v-model="content"  class="form-control" id="lastname" placeholder="评论内容">
                                </textarea>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="button" class="btn btn-default" @click="Add">提交</button>
                            </div>
                        </div>
                    </form>
                </div>
</template>

<script type="text/ecmascript-6">
export default {
props:{
     addComment:{
         type:Function,
         required:true
     }
},  
 data() {
 return {
     name:"",
     content:""
 }
 },
 components: {

 },
 methods: {
     Add(){
       const name=this.name.trim()
       const content =this.content.trim()
       if(!name||!content){
            alert('姓名或内容不能为空')
            return
       }
       const comment={
           name,
           content
       }
       this.addComment(comment)
       this.name=''
       this.content=''
     }
 }
}
</script>

<style scoped lang="">
</style>
