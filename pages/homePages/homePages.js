// pages/homePages/homePages.js
var testDatas = require("../../data/home_data.js")
Page({
  data: {
    imageurlxxx:"/images/moviepost0.jpg"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成

    this.setData({
      con_key: testDatas.home_data
    });
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  index_change: function (event) {
    var aidx = {
      imageurlxxx: "/images/moviepost" + event.detail.current + ".jpg",
      aindx:event.detail.current

    }
    this.setData(aidx);
  },
  search_fn: function (event) {
      console.log()
  },
  movie_deatail:function(event){
      console.log(event)
  },
  toDetail:function(event){
      console.log(event)
  }

})