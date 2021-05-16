// components/w-tarbar/w-tarbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleindex(event){
      let index = event.currentTarget.dataset.index
      this.setData({
        currentindex:event.currentTarget.dataset.index
      }),
      this.triggerEvent('handletabclick', index)
    }
  }
})
