// pages/index/index.js
const Bmob = require("../../utils/bmob.js");
Page({
  data: {
    data:null,
  },
  onLoad() {
    const query = new Bmob.Query(Bmob.Object.extend("all"));
    query.find({
      success: (res) => {
        let data = null;
        for(let object of res){
          data = {
            title:object.get('title'),
            type:object.get('type'),
            logo:object.get('logo'),
            site:object.get('site'),
            time:object.get('time'),
            tel:object.get('tel'),
            cover:object.get('cover')
          }
        }
        this.setData({
          data:data
        })
      },
      error: error => {
        console.log("查询失败: " + error.code + " " + error.message) 
      }     
    });
  },
  preview(e){
    const index = e.currentTarget.dataset.index;
    wx.previewImage({
      urls: this.data.data.cover
    })
  },
  call(e){
    const tel = e.currentTarget.dataset.tel;
    wx.makePhoneCall({
      phoneNumber: tel
    })
  },
  getmap(){
    const axis = this.data.data.site.axis.split(',');
    const address = this.data.data.site.address;
    const name = this.data.data.title;

    wx.getLocation({
      type: 'gcj02', 
      success: (res) => {
        console.log(res)
        const latitude = Number(axis[0])
        const longitude = Number(axis[1])
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          name: name,
          address: address,
          scale: 28
        })
      }
    })
  }
})