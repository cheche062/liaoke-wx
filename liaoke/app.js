import request from "/service/network.js"

const TOKEN = "token";

App({
  globalData: {
    name: "cheche",
    age: 900,
    token: ""
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    const token = wx.getStorageSync(TOKEN);
    if (token) {
      this.checkToken(token);

    } else {
      this.login();
    }
  },

  checkToken(token) {
    console.log("校验token")
    request({
      url: "http://123.207.32.32:3000/auth",
      method: "post",
      header: {token}
    }).then(res => {
      if (!res.data.errCode) {
        console.log("token 有效")
        this.globalData.token = res.data.token;

      } else {
        console.log("token 过期")
        this.login();
      }
    })
  },

  login() {
    console.log("登陆")
    wx.login({
      success: (res) => {
        const code = res.code;
        request({
          url: "http://123.207.32.32:3000/login",
          method: "post",
          data: { code }

        }).then(res => {
          console.log("登陆成功")
          this.globalData.token = res.data.token
          wx.setStorageSync(TOKEN, this.globalData.token);
        }).catch(err => {
          console.log("登陆出错")
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log(options)
    // console.log("app show")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    // console.log("app hide")
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
  
})
