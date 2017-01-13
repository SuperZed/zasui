// pages/search/search.js
Page({
  data:{
    text:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
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
  bindinput:function(e){
    this.data.text=e.detail.value;
  },
  getText:function(e){//响应按钮点击事件
    console.log(this.data.text);
    this.check(this.data.text);
  },
  check:function(phone){//查询号码归属地
    var that=this;
    wx.request({
      url: 'https://route.showapi.com/6-1?num='+phone+'&showapi_appid=30673&showapi_sign=dddb698d2a3c4b5190574629a641713a',
      data: {},
      header: {
        "Content-Type": "application/json"
       },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){// success
        // console.log(res.data);
        that.setData({area_operator:res.data.showapi_res_body.city+' '+res.data.showapi_res_body.name});
      },
      fail: function() {// fail
      },
      complete: function() {// complete
      }
    })
  }
})