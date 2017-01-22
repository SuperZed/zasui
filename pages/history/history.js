// pages/history/history.js
var util = require('../../utils/util.js');
Page({
  data:{

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    var that=this;
    that.getDate();
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  getDate:function(){
    var that=this;
    console.log(util.format(new Date()));
    that.onCheck(util.format(new Date()))
  },
  onCheck:function(date){
    var that=this;
    wx.request({
      url: 'https://route.showapi.com/119-42?date='+date+'&showapi_appid=30673&showapi_sign=dddb698d2a3c4b5190574629a641713a',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        that.setData({history:res.data.showapi_res_body.list});
        console.log(res.data.showapi_res_body.list);
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})