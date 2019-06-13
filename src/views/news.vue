<template>
  <div class="about">
     <swiper />
  	<div class="newlist_container" v-gd="flag"   data-distance="300">
				<p>{{Date.now()|formateTime}}</p>
			     <ul  class="newsarea"
			  v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-distance="10">
					  <li v-for="item in news"  class="news">
								<div>
										<h4>{{item.title}}</h4>
										<p class="newstime"><span>{{item.source}}</span>
										<span>{{item.ptime}}</span>
										</p>
									</div>
									<img :src="item.pic[0]" />
									<span @click="remove(index)"><i class="fa fa-close"></i></span>
							  </li>
					  </li>
			  </ul>
			  <button class="newlist_container_button" v-gotop v-show="flag.vis">回顶部</button>
	</div>
  </div>
</template>
<script>
import swiper from './swiper'
import { InfiniteScroll,Indicator, Toast  } from 'mint-ui';
import {mapState,mapActions} from 'vuex';
export default {
	components:{
		swiper
	},
	data(){
		return {
			flag:{
				vis:false
			},
			loading:false,  //false 表示没有请求，可以发送请求
		
		}
	},
	computed:{
		...mapState(["total","page","news"])
	},
	methods:{
		...mapActions(["getDataAsync"]),
		getData(){
			if(this.page>3){
                  Toast({
					  message: '数据加载完',
					  position: 'middle',
					  duration: 1500
					});
				return;
			}
			this.loading=true;  // 正在发送请求，不能再发请求了
			this.getDataAsync(()=>{
				this.loading=false;
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
			&_button{
				position: fixed;
				bottom:1rem;
				right:1rem;
				z-index:10;
			} 
		}

</style>
