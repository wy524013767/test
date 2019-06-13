<template>
  <div class="about">
     <swiper />
     <ul class="newsarea">
		  <li v-for="(item,index) in news" class="news">
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
</template>
<script>
import swiper from './swiper'
export default {
	components:{
		swiper
	},
	data(){
		return {
			news:[]
		}
	},
	created(){
		this.$jsonp("http://temp.163.com/special/00804KV1/post1603_api_all.js",{
			_:Date.now(),
			callbackName:"callback"
		}).then((res)=>{
			this.news = res.data.filter((item,index)=>index<10);
		})
	},
	methods:{
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
</style>
