<template>
  <div class="about">
	     <div class="typenewslist">
		     <ul>
		     	<li v-for="item in news">
		     		<img :src="item.thumb" width="100" />

		     	</li>
		     </ul>
		  </div>
       </div>
</template>
<script>

export default {
	data(){
		return {
			news:[]
		}
	},
	watch:{
		$route:{
			handler(n){
				var type = n.params.type;  // n   this.$route 
				this.getData(type);
			},
			deep:true,
			immediate:true
		}
	},
	methods:{
		getData(type){
			this.$jsonp(`http://cre.mix.sina.com.cn/api/v3/get?callback&cateid=1&cre=tianyi&mod=${type}&merge=3&statics=1&length=20&up=1&down=0&fields=media`,{
				_:Date.now()
			}).then((res)=>{
				this.news=res.data;
			})
		}
	}
}

</script>
<style>
	.typenewslist{
		position: fixed;
		top:1.3rem;
		right:0;
		left:0;
		bottom: 0.82rem;
		overflow-y: scroll;
	}

</style>
