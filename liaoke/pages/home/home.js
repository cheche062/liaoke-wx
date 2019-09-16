// pages/home/home.js
import request from "../../service/network.js";
// const app = getApp();
// console.log(request);


Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "cheche",
    students: [
      {id: 1, name: "aaa"},
      {id: 2, name: "aaa"},
      {id: 3, name: "aaa"},
      {id: 4, name: "aaa"}
    ],
    count: 0,
    titles: ['手套', '衣服', '鞋子'],
    selectedIndex: 0,
    recommendList: []
  },

  handleChangeTabItem(p) {
    console.log(p)
  },

  handleAdd() {
    this.setData({
      count: this.data.count + 1
    })
  },

  handleClick() {
    this.setData({
      count: this.data.count + 1
    })
  },

  handleGetUserInfo(event) {
    console.log(event)
  },

  bindgetphonenumber(res) {
    console.log(res)
  },
  bindgetuserinfo(res) {
    console.log(res)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("home page", options)
    let url = "http://123.207.32.32:8000/api/v1/recommend";

    request({
      url
    }).then(res => {
      console.log("data::::", res)
    }).catch(res => {
      console.log("error::::", res)

    })
  },
  onPageScroll(obj) {
    // console.log(obj)

  },
  onReachBottom(obj) {
    console.log("reachBottom====")
  },
  onPullDownRefresh() {
    console.log("onPullDownRefresh======")

  },
  onTabItemTap() {
    // console.log("tabItemTap")

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
    // console.log("home page show")

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log("home page hide")
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