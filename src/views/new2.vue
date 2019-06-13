<template>
  <div class="about">
     <swiper />
  	<div class="newlist_container">
			     <ul class="newsarea"
			  v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-distance="10">
					  <li v-for="(item,index) in news"  class="news">
								<div>
										<h4>{{item.title}}</h4>
										<p class="newstime"><span>{{item.source}}</span>
										<span>{{item.ptime}}</span>
										</p>
									</div>
									<img :src="item.pic[0]" />
									<span @click="remove(index)"><i class="fa fa-close"></i></span>
					  </li>
			  </ul>
	</div>
  </div>
</template>
<script>
import swiper from './swiper'
import { InfiniteScroll,Toast } from 'mint-ui';
export default {
	components:{
		swiper
	},
	data(){
		return {
			news:[],
			loading:false,  //false 表示没有请求，可以发送请求
			page:1,
		}
	},
	created(){
		// this.$jsonp("http://temp.163.com/special/00804KV1/post1603_api_all.js",{
		// 	_:Date.now(),
		// 	callbackName:"callback"
		// }).then((res)=>{
		// 	this.news = res.data.filter((item,index)=>index<10);
		// })
       // this.getData();
	},
	methods:{

		getData(){
			if(this.page>3){
                  Toast({
					  message: '数据加载完',
					  position: 'middle',
					  duration: 1500
					});
				return;
			}
			//Indicator.open('加载中…');
			this.loading=true;  // 正在发送请求，不能再发请求了
			 this.$axios.get("http://106.12.193.193:3000/news",{
	        	params:{
	        		_page:this.page,
	        		_limit:5
	        	}
		        })
		      	.then((res)=>{	          
		           
		           		console.log(res)
		            	 this.news =this.news.concat(res.data.list);
		           		 this.loading=false;
		            	 //Indicator.close();
		            	 this.page++;
		            	
		           
		        })
		},
		loadMore(){
	
			this.getData();
		},
		remove(index){
			this.news.splice(index,1)
		}
	}
}

</script>
<style scoped lang="scss">
	.newsarea{
		background: #eee;
	}
	.news{
		margin:0.2rem;
		padding-top:0.1rem; 
		&:nth-of-type(1){
			margin-top:0;
		};
		display: flex;
		
		border-bottom: 1px solid #ccc;

		img{
			margin-bottom: 0.2rem;
		}
		.newstime{
			display: flex;
			justify-content: space-between;
			margin-top:0.6rem;
			span:nth-of-type(2){
				padding-right: 0.6rem;
			}
		}
		.fa-close{
			border:1px solid #000;
			border-radius: 50%;
		}

	}
	.newlist_container{
			 position: fixed;
			 top:5.1rem;
			 bottom: 0.82rem;
			 overflow-y:auto;
			 
		}
</style>
