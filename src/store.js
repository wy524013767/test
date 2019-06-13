import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	  news:[],
  	  page:1,
  	  total:2
  },
  mutations: {
  		changeData(state,res){
  			state.news=state.news.concat(res.data.list);
  			state.page++;
  			state.total =res.data.total;
  		}
  },
  actions: {
      getDataAsync(context,callback){
      		 axios.get("http://106.12.193.193:3000/news",{
	        	params:{
	        		_page:context.state.page,
	        		_limit:5
	        		}
		        })
		      	.then((res)=>{	          
		           		context.commit("changeData",res);
		           		callback();
		        })
      }
  }
})
