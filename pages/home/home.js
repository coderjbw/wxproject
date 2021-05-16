import {getmultidata,getgoodsdata} from "../../service/home"

// 注册页面
Page({
data:{
  banners:[],
  recommends:[],
  titles:["新品","流行","推荐"],
  goods:{
    'pop':{page:0,list:[]},
    'sell':{page:0,list:[]},
    'new':{page:0,list:[]}
  }
},
handletabclick(event){
  console.log(event.detail)
},

onLoad(options){
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
  this._getGoodsData('pop');
  this._getGoodsData('sell');
  this._getGoodsData('new')
},
_getGoodsData(type){
  const page = this.data.goods[type].page + 1;
  getgoodsdata(type,page).then(res=>{
    console.log(res)
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
}
})