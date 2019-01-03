Page({
    data : {
        switch1 : true,
        current: 'mine'
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
                 wx.navigateTo({
                    url: '/pages/management/index'
                });
            break;
            case 'order':
                wx.navigateTo({
                    url: '/pages/orders/index'
                });
            break;
            default:
        }
    },
});