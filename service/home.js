import request from "./network"

function getmultidata(){
  return request({
   url:"/home/multidata"
  })
};

function getgoodsdata(type,page){
  return request({
    url:"/home/data",
    data:{
      type,
      page
    }
  })
}
export {getmultidata,getgoodsdata}