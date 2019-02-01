<template>
  <div class="col-md-8">
      <h3 class="reply">评论回复</h3>
      <h2 v-show="comments.length===0">目前没有评论，点击右侧添加评论</h2>
      <ul class="list-group">
     <Item v-for="(comment, index) in comments" :key="index" :comment="comment" :deleteComment="deleteComment" :index="index"/>
        

      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import Item from './Item'
export default {
 data() {
 return {

 }
 },
 components: {
    Item
 },
 props:['comments','deleteComment']
}
</script>

<style scoped lang="">
</style>
