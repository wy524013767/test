<template>
<div>
    
	  <div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="item in list">
					<img :src="item.thumb" />
		        </div>
		       
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
	   </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
     import { Swipe, SwipeItem } from 'mint-ui';
import "swiper/dist/css/swiper.css";
export default {
	data(){
		return {
			list:[]
		}
	},
	created(){
		this.$jsonp(`http://cre.mix.sina.com.cn/api/v3/get?callback&_=1559618231429`).then((res)=>{
			this.list = res.data.filter((item,index)=>index<5);
			console.log(this.list)
		})
	},
	mounted(){
			},
	watch:{
		list(){   //1.数据拿到了，2.dom加载完毕
			 this.$nextTick(()=>{
			 	var mySwiper = new Swiper ('.swiper-container', {
				   
				    loop: true, // 循环模式选项
				     autoplay: {
						    delay: 3000,
						    disableOnInteraction: false
   					 },
				    
				    // 如果需要分页器
				    pagination: {
				      el: '.swiper-pagination',
				    }
			})
		})
			
		}
	}
}
</script>
<style lang="scss">
	.swiper-container{
		position: fixed;
		top:1.3rem;
		height: 3.6rem;
		img{
			height:100%;
			width:100%;
		}
	}
</style>
