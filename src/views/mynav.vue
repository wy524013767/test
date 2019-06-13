<template>
  <div class="public_nav">
    <div class="boxnav">
        <div class="mynav">
				<div class="swiper-container2">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide w" v-for="(item,index) in titles" :class="{'active':index===curIndex}">
									{{item.text}}
				        </div>
				       
				    </div>
				    
			   	</div>
				</div>	
				<span>三</span>	
		    </div>
  </div>

</template>
<script>
import Swiper from 'swiper';
import "swiper/dist/css/swiper.css";
export default {

	data(){
		return {
			curIndex:0,
			titles:[
				{
					id:1,
					text:'头条',
					type:'pcent'
				},{
					id:2,
					text:'娱乐',
					type:'pctech'
				},{
					id:3,
					text:'科技',
					type:'pcspt'
				},
				{
					id:4,
					text:'体育',
					type:'pcent'
				},
				{
					id:5,
					text:'头条',
					type:'pcent'
				},{
					id:6,
					text:'娱乐',
					type:'pcent'
				},{
					id:7,
					text:'科技',
					type:'pcent'
				},
				{
					id:8,
					text:'体育',
					type:'pcent'
				},
				{
					id:11,
					text:'头条',
					type:'pcent'	
				},{
					id:12,
					text:'娱乐',
					type:'pcent'
				},{
					id:13,
					text:'科技',
					type:'pcent'
				},
				{
					id:14,
					text:'体育',
					type:'pcent'
				},
				{
					id:15,
					text:'头条',
					type:'pcent'	
				},{
					id:16,
					text:'娱乐',
					type:'pcent'
				},{
					id:17,
					text:'科技',
					type:'pcent'
				},
				{
					id:8,
					text:'体育',
					type:'pcent'
				}
			]
		}
	},
	mounted(){
		  var vm=this;
		  var mySwiper = new Swiper ('.swiper-container2', {
				   freeMode : true,
				   slidesPerView : 'auto',
				   on:{
				   	   click(){
				   	   	    this.setTransition(300); //设置过渡的时间
				   	   		vm.curIndex = this.clickedIndex;
				   	   		//找到当前点击的幻灯片
				   	   		var el = this.slides[vm.curIndex];
				   	   		//当前幻灯片的中心位置
				   	   		var elPos = el.offsetLeft + el.clientWidth/2;
				   	   		//当前点击的元素的父元素的宽度
				   	   		var wrpperWidth = el.parentNode.clientWidth;
				   	   	    //最大的滚动距离
				   	   	    var maxDis = this.maxTranslate();
				   	   	 
				   	   	    //最大的元素位置
				   	   	    var maxPos = -maxDis + wrpperWidth/2;

				   	   	    if(elPos<wrpperWidth/2){
				   	   	    	
				   	   	    	this.setTranslate(0);
				   	   	    }
				   	   	    else if(elPos>-maxDis){
				   	   	    	
				   	   	    	this.setTranslate(maxDis);
				   	   	    }
				   	   	    else{
				   	   	    	
				   	   	    	this.setTranslate(wrpperWidth/2-elPos);
				   	   	    }
				   	   	    if(vm.curIndex===0){
				   	   	    	vm.$router.push("/home/firstPage/news")
				   	   	    }
				   	   	    else{
				   	   	    	vm.$router.push('/home/firstPage/'+vm.titles[vm.curIndex].type)
				   	   	    }
				   	   }
				   }
			})
		
	}
}

</script>
<style>
	.boxnav{
		display: flex;
	}
	.mynav{
		width:7rem;
		overflow: hidden;
	}
	.w{
		width:1.5rem;
		text-align: center;
	}
	.active{
		color:#ff9700;
		border-bottom: 1px solid #ff9700;
	}

</style>
