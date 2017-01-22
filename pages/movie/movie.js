// pages/testIndex/testIndex.js
  var subjectUtil = require("../../utils/subjectUtil.js");
  var app = getApp();
Page({
data:{
  winWidth: 0,  
  winHeight: 0,  
  // tab切换  
  currentTab: 0,
  list:[],
  },
onLoad:function(options){
  // 页面初始化 options为页面跳转所带来的参数
  var that = this;  
  //获取系统信息 
  wx.getSystemInfo( {  
    success: function( res ) {  
      that.setData( {  
        winWidth: res.windowWidth,  
        winHeight: res.windowHeight  
      });  
    } 
  });
  wx.showToast({
      "title": "加载中...",
      "icon": "loading",
      "duration":　10000
    });
    wx.getLocation({
      type: "gcj02",
      success: function(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        that.loadCity(latitude, longitude, that.loadMovie)
      }
    })
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
loadCity: function (latitude, longitude, callback) {
        var that = this;
        var u='https://route.showapi.com/238-2?from=5&lat='+latitude+'&lng='+longitude+'&showapi_appid=30673&showapi_sign=dddb698d2a3c4b5190574629a641713a';
        wx.request({
            url: u,
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                var city = res.data.showapi_res_body.addressComponent.city;
                city = city.substring(0,city.length-1);
                var url = "https://api.douban.com/v2/movie/in_theaters?city=" + city;
                callback(url);
            }
        })
    },
loadMovie: function (url) {
    var that = this;
    wx.request({
      url: url,
       header: {
        "Content-Type": "application/json,application/json"
       },
      success: function(res) {
        var subjects = res.data.subjects;
        if(subjects.length < 1) {
          return;
        }
        subjectUtil.processSubjects(subjects);
        that.setData({
          movie: subjects
        });
        wx.hideToast();
      }
    })
},
detail: function(e){
   app.detail(e);
  }


})