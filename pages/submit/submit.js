// pages/submit/submit.js

const AV = require('../../libs/av-weapp-min.js');
const form = require('../../model/form.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function () {
    console.log('form page loaded')
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
      console.log(userInfo)
    })
  },
  // Form Submission
  bindFormSubmit: function (e) {
    // 1. enable the loading animation on send button
    this.setData({
      loading: !this.data.loading
    })
    // 2. show a Loading toast
    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1500
    })
    // Local Storage
      console.log(e)
      var entry = e.detail.value.entry

      // LeanCloud Permissions
      //
      new Form({
        entry: entry,
      })
      // Redirect user if form submitted
      wx.reLaunch({
        url: '/pages/index'
      });
  }, 2000);
console.log(Form)
  }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})