// pages/joke/joke.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    this.getJoke();
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
  getJoke:function(){
      var that=this;
      wx.request({
        url: 'https://route.showapi.com/341-1?maxResult=20&page=1&showapi_appid=30673&showapi_sign=dddb698d2a3c4b5190574629a641713a',
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        success: function(res){
          console.log(res.data.showapi_res_body);
          that.setData({joke:res.data.showapi_res_body.contentlist})
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