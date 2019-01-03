App({
    globalData: {
    	userInfo: null,
    	URL: "https://mike.wei688.com/",
    	secret: "&58ab676jfk4578es48433b9c8ac079b677af4ea0"
    },
    getUserInfo: function (cb) {
    	var that = this;
    	if (this.globalData.userInfo) {
      		typeof cb == "function" && cb(this.globalData.userInfo)
    	} else {
    		wx.request({
    			url: this.globalData.URL + '/api/getMainCont',
    			data: {
    				timestamp: Math.floor(Date.now()/1000),
    				secret: this.globalData.secret
    			},
    			success(data) {
    				if (data.data.code == 1002) {
    					wx.redirectTo({
				            url: '/pages/login/index'
				        });
    				} else {
    					cb(data.data.data);
    				}
    			}
    		});
      	
    	}
  	}
});