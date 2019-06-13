import Vue from 'vue'
Vue.directive("gd",(el,binding)=>{  //bind update
	el.addEventListener("scroll",()=>{
		var st  = el.scrollTop;
		var dis = el.getAttribute("data-distance");
		if(st>dis){
			binding.value.vis=true
		}
		else{
			binding.value.vis=false
		}
	})
})
Vue.directive("gotop",{
	bind(el){
		el.onclick=function(){
			this.parentNode.scrollTop = 0;
		}
	}
})
Vue.filter("formateTime",(value)=>{
	console.log(value);
	var d = new Date(value);
	console.log(d);
	return d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"
})