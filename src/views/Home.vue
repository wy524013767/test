<template>
  <div class="home">
      <router-view />
      <ul class="footer">
    <li><router-link to="/home/firstPage">
          <i class="fa fa-home"></i>
          <span> 首页</span>
    </router-link></li>
    <li><router-link to="/home/video"><i class="fa fa-home"></i><span>视频</span></router-link></li>
    <li><router-link to="/home/sub"><i class="fa fa-home"></i><span>订阅</span></router-link></li>
    <li><router-link to="/home/user"><i class="fa fa-home"></i><span>个人</span></router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {   
  }
}
</script>
<style lang="scss">
   
   .footer{
      width:100%;
      display: flex;
      position: fixed;
      bottom: 0;
      right:0;
      left:0;
      background: #fff;
      li{
         flex:1;
         text-align:center;
         a{
            display: flex;
            flex-direction: column;
            i{
              display: inline-block;
              text-align: center;
              width:100%;
              height: 0.4rem;              
            }
         }
      }
   }		
</style>
