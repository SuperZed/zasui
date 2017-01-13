// pages/testIndex/testIndex.js
  var subjectUtil = require("../../utils/subjectUtil.js");
  var app = getApp();
Page({
data:{
  title_text:'标题',
  content:'正文',
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
    })
    // that.bindViewTap();
    that.loadMovie();
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
click:function(event){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  this.setData({title_text:'测试而已'})
},
go:function() {
  wx.navigateTo({
    url: '../test1/test1'
  })
},

// 滑动切换tab 
bindChange: function( e ) {  
  var that = this;  
  that.setData( { currentTab: e.detail.current });  
},  
//点击tab切换 
swichNav: function(e) {  
  var that = this;  
  if( this.data.currentTab === e.target.dataset.current ) {  
    return false;  
  } else {  
    that.setData( {  
      currentTab: e.target.dataset.current  
    })  
  }  
},
  loadMovie: function () {
    var that = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters?city=深圳',
       header: {
        "Content-Type": "application/json,application/json"
       },
      success: function(res) {
        // console.log(res);
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

bindViewTap:function(){
  var that = this;
  console.log('请求数据');
  wx.request({
    url: 'http://ldm-blog.top/index/getACList',
    data: {},
    header: {
      'content-type': 'application/json'
    },
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    success: function(res){
      that.setData({list:res.data.list})
      wx.hideToast();
      // console.log(res.data.list)
    },
    fail: function() {
      console.log('fail');
    }
})
},
  detail: function(e){
   app.detail(e);
  }


})