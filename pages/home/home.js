import {getmultidata,getgoodsdata} from "../../service/home"

const goodstype = ['pop','new','sell']

Page({
data:{
  banners:[],
  recommends:[],
  titles:["新品","流行","推荐"],
  goods:{
    'pop':{page:0,list:[]},
    'sell':{page:0,list:[]},
    'new':{page:0,list:[]}
  },
  currenttype:"pop"
},

onLoad(options){
  this._getMultiData();
  this._getGoodsData('pop');
  this._getGoodsData('sell');
  this._getGoodsData('new')
},
// 请求轮播图数据
_getMultiData(){
  getmultidata().then(res=>{
    // console.log(res)
    const banners = res.data.data.banner.list;
    const recommends = res.data.data.recommend.list;
    // console.log(banners)
    this.setData({
      banners:banners,
      recommends:recommends
    })
  });
},
// 请求商品数据
_getGoodsData(type){
  const page = this.data.goods[type].page + 1;
  getgoodsdata(type,page).then(res=>{
    // console.log(res)
    const list = res.data.data.list;
    const oldlist = this.data.goods[type].list;
    oldlist.push(...list)

    const typekey = `goods.${type}.list`
    const pagekey = `goods.${type}.page`
    this.setData({
      [typekey]:oldlist,
      [pagekey]:page
    })
  })
},
// 监听事件函数
handletabclick(event){
  // console.log(event)
  const index = event.detail;
  this.setData({
    currenttype:goodstype[index]
  })
}
})