<template>
 <div >
    <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header">
                <h2>Router Basic -01</h2>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
                <!-- <a href="#/about" class="list-group-item router-link-exact-active">About</a>
                <a href="#/home" class="list-group-item ">Home</a> -->
                <router-link to='/about' class="list-group-item  router-link-active">About</router-link>
                <router-link to='/home' class="list-group-item ">Home</router-link>

            </div>
        </div>
        <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <keep-alive>
                          <router-view msg="abc"></router-view>
                        </keep-alive>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

export default {
 data() {
 return {

 }
 
}
}
</script>

<style 
</style>
