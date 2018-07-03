class FastCache{
	constructor(){
		this.list={}
	}
	set(key,value){
		this.list[key]=value
	}
	get(key){
		return this.list[key]
	}
	clear(){//修改的代码
		this.list={}
	}
}
window.FastCache=FastCache