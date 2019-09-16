// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "11111"
  },

  handlePushTo() {
    wx.navigateTo({
      url: '/pages/wxs/wxs?name=cheche&age=18'
    })
  },

  handleTap() {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 3000,
      // mask: true,
      success() {
        console.log("toast success" )
      },
      fail() {
        console.log("toast fail")
      }
    })
  },

  changeTitle() {
    this.setData({
      title: "22222"
    })
  },

  handleModal() {
    wx.showModal({
      title: "标题党",
      content: "????",
      success(res) {
        if (res.confirm) {
          console.log("confirm")
        } else if (res.cancel) {
          console.log("cancel")

        }
      }

    })
  },

  handleActionSheet() {
    wx.showActionSheet({
      itemList: ["aaa", "bbb", "ccc"],
      success(res) {
        console.log(res.tapIndex)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function (res) {
    console.log(res);

    return {
      title: "自定义分享",
      path: "/pages/event/event",
      imageUrl: "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"
    }
  }
})