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
        current: "homepage",
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
    handleChange(detail) {
        console.log(detail);
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