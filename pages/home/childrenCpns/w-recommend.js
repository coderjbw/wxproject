// pages/home/childrenCpns/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isload:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadfinshimg(){
      if(!this.data.isload){
        this.triggerEvent("loadfinishimg")
        this.data.isload = true
      }
    }
  }
})
