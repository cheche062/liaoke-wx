// components/my-slot/my-slot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  options: {
    multipleSlots: true

  },

  lifetimes: {
    attached() {
      console.log("my-slot attached")
    },
    detached() {
      console.log("my-slot detached")
    },
    ready() {
      console.log("my-slot ready")
    },
  },

  pageLifetimes: {
    show() {
      console.log("homePage show")

    },
    hide() {
      console.log("homePage hide")

    }
  }
})
