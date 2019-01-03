Component({
    externalClasses: ['radios-class'],

    properties: {
        title: {
            type: String,
            value: ''
        },
        // 标题顶部距离
        hideTop: {
            type: Boolean,
            value: false
        },
        hideBorder: {
            type: Boolean,
            value: false
        },
        list: {
            type: Array,
            value: []
        }
    },
    data: {
    },
    attached: function(){

    },
    methods: {
        radioChange(e) {
            this.triggerEvent('radioSelect', e);
        }
    }
});
