// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String
  },
  externalClasses: ["titleclass"],

  /**
   * 组件的初始数据
   */
  data: {
    title: "Hello wx"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAdd() {
      console.log(111)
      this.triggerEvent('add');
    }
  },

  options: {
    styleIsolation: "apply-shared"
  }

})
