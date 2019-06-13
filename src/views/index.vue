<template>
  <div>
   <div class="header_nav">
  	<MyHeader />
  	<MyNav />
    </div>
   <keep-alive>
    <router-view  v-if="$route.meta.keepAlive" class="newslist" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class="newslist"></router-view>
  </div>
</template>	
<script>
import MyHeader from './MyHeader'
import MyNav from './mynav'

export default {
	components:{
		MyHeader,MyNav
	}
}

</script>
<style>
 .header_nav{
    position: fixed;
    top:0;
    right:0;
    left:0;
    background: #FFF;

 }
 
</style>
