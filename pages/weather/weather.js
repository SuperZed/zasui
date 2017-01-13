// pages/weather/weather.js
Page({
  data:{text:''},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    this.getWeather();
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
searchWeather:function(){
  this.getWeather(this.data.text);
},
  getWeather:function(city){
    var that=this;
    wx.request({
      url: 'https://route.showapi.com/9-9?area='+city+'&showapi_appid=30673&showapi_sign=dddb698d2a3c4b5190574629a641713a',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res.data.showapi_res_body.dayList);
        that.setData({weather:res.data.showapi_res_body.dayList});
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