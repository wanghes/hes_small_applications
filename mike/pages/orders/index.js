const { $Message } = require('../../dist/base/index');

Page({
    data: {
        visible1: false,
        visible2: false,
        user: {
            phone: '156...345',
            level:'',
            storeLevel:''
        },
        current: 'order',
        fixed: true,
        levels: [
            {
                name: '选项1',
            },
            {
                name: '选项2'
            },
            {
                name: '去分享',
            }
        ],
        stores: [
            {
                name: '选项1',
            },
            {
                name: '选项2'
            },
            {
                name: '去分享',
            }
        ],
    },

    onShareAppMessage() {
        return {
            title: 'iView Weapp',
            imageUrl: 'https://file.iviewui.com/iview-weapp-logo.png'
        };
    },

    handleChangeTab({detail}) {
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
            break;
            default:
                wx.navigateTo({
                    url: '/pages/member/index'
                });
        }
    },

    handleChange ({ detail }) {
        const type = detail.type;
        if (type === 'next') {
            this.setData({
                current: this.data.current + 1
            });
        } else if (type === 'prev') {
            this.setData({
                current: this.data.current - 1
            });
        }
    },

    handleOpenStores () {
        this.setData({
            visible2: true
        });
    },
    handleOpenLevels () {
        this.setData({
            visible1: true
        });
    },
  

    handleClickLevel ({ detail }) {
        const index = detail.index + 1;
        $Message({
            content: '点击了选项' + index
        });
        this.setData({
            visible1: false,
            'user.level': this.data.stores[detail.index].name
        });
    },


    handleClickStore ({ detail }) {
        const index = detail.index + 1;
        $Message({
            content: '点击了选项' + index
        });
        this.setData({
            visible2: false,
            'user.storeLevel': this.data.stores[detail.index].name
        });
    }  
});