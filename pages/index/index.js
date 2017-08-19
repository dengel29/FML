//index.js
//获取应用实例
var app = getApp();

const AV = require('../../libs/av-weapp-min.js');
const Form = require('../../model/form.js');



Page({
  data: {
    stories: {},
    userInfo: {}
  },
  onLoad: function () {
    var objects = []
    console.log('onLoad')
    var that = this;
    
    var query = new AV.Query('Form');
    
    query.find().then(function (objects){
      that.setData({
        stories:objects
      })
      console.log("fetched something")
      console.log(objects)
    }, function (error) {
      // 异常处理
      console.log("Something wrong")
    })
    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
