import axios from "axios";
import QS from 'qs';


axios.defaults.timeout = 60000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export function GET(url,params){
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:params})
        .then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}

export const POST = (url,params)=>{
    return new Promise((resolve,reject)=>{
        axios.post(url,QS.stringify(params))
        .then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
// export const getMapJson = ({dispatch,commit},params)=>{
//     return dispatch('GET',{
//         url:'../../static/json/lines-bus.json'
//     }).then(res=>{
//         console.log(res,'地图数据返回结果');
//         return res;
//     })
// }
