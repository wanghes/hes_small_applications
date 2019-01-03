const { $Message } = require('../../dist/base/index');

Page({
    data: {
        visible: false,
        platform:'',
        current: "homepage",
        fixed: true,
        platforms: [
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

    handleOpenPlatforms () {
        this.setData({
            visible: true
        });
    },

    handleClickPlatform ({ detail }) {
        const index = detail.index + 1;
        $Message({
            content: '点击了选项' + index
        });
        this.setData({
            visible: false,
            'platform': this.data.platforms[detail.index].name
        });
    },

});