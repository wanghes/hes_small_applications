Page({
    data : {
        switch1 : true,
        current: 'coupons',
    },
    handleChange({detail}) {
        switch(detail.key) {
            case 'homepage':
            	wx.navigateTo({
                    url: '/pages/index/index'
                });
            break;
            case 'products':
            break;
            case 'coupons':
            break;
            case 'order':
                wx.navigateTo({
                    url: '/pages/orders/index'
                });
            break;
            default:
                wx.navigateTo({
                    url: '/pages/member/index'
                });
        }
    },
});