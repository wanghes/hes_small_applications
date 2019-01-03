var app = getApp(); 

Page({
    data: {
    	name: '',
    	password: ''
    },
    onLoad() {	
        this.url = app.globalData.URL;
        this.secret = app.globalData.secret;
	},
	doLogin() {
        wx.request({
            url: this.url + '/api/login',
            data: {
                secret: this.secret,
                timestamp: Math.floor(Date.now()/1000),
                mobile: this.data.name,
                password: this.data.password
            },
            success(data) {

                console.log(data);

                // wx.redirectTo({
                //     url: '/pages/index/index'
                // });
            }
        })  
		
	},
    passInput(e) {
        this.setData({
            password: e.detail.value
        })
    },
    nameInput(e) {
        this.setData({
            name: e.detail.value
        })
    }
});