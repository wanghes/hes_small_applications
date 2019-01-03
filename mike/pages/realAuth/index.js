Page({
    data : {
        switch1 : true,
        items: [
		    { name: '男', value: '1', checked: false },
		    { name: '女', value: '2', checked: true }
	  	]
    },
    radioSelect(e){
    	console.log(e);
    }
});