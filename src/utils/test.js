
//冒泡排序
export const bubbleSort = function(arr){
    if(arr.length<=1){return arr}
    let len = arr.length
    for(let i = 0;i<len-1;i++){
        //从第一个元素开始，比较相邻的两个元素，前者大就交换位置。
        for(let j = 0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//全排列一
export const permute = function(nums){
    let ret = [];
    const dfs = (arr,getIndex)=>{
        if(arr.length === nums.length){
            ret.push(arr);
            return ;
        }
        for(let i = 0;i<nums.length;i++){
            let num = nums[i];
            if(!!getIndex[i])continue;
            getIndex[i] = 1;
            dfs([...arr,num],getIndex);
            getIndex[i] = 0;
        }
    }
    const getIndexArr = new Array(nums.length);
    dfs([],getIndexArr);
    return ret;
}

//全排列二
export const permuteUnique = function(nums){
    // return 1
    let ret = [];
    const len = nums.length;
    nums.sort((a,b)=>a-b);

    const dfs = (arr,indexArr)=>{
        if(arr.length === len){
            ret.push(arr);
            return ;
        }
        for(let i = 0;i<len;i++){
            if(!!indexArr[i])continue;
            let num = nums[i];
            indexArr[i] = 1;
            dfs([...arr,num],indexArr);
            indexArr[i] = 0;
            while(nums[i+1] === nums[i]){
                i++;
            }
        }
    }
    // const getIndexArr = new Array(nums.length);
    dfs([],[]);
    return ret;
}

//分割回文串
export const partition = function(str){
    const res = [];         //存放分割的回文字符串。
    //判断是否为回文字符串
    function isValid(s){
        if(s.length === 1) return true;
        let l = 0,r = s.length - 1;
        while(l<r){
            if(s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
    //跟个字符串
    const spliceStr = (start,arr)=>{
        if(start === str.length){
            res.push(arr);
            return;
        }
        let tempStr = '';
        for(let i = start;i<str.length;i++){
            tempStr += str[i];
            if(isValid(tempStr)){
                spliceStr(i+1,[...arr,tempStr]);
            }
        }
    }
    spliceStr(0,[]);
    return res;
}







export const findNear = function(arr,target){
    arr.sort((a,b)=>{a - b});
    function Sum(sumarr){
        let res = 0
        for(let i = 0;i<sumarr.length;i++){
            res += sumarr[i];
        }
        return res
    }
    function arrToGroup(groupArr){
        let resultArr = [];
        for(let i = 0;i<groupArr.length;i++){
            let start = i + 1;
            let end = groupArr.length - 1;
            for(let j = start;j<end;j++){
                let arr = [];
                arr.push(groupArr[i])
                arr.push(groupArr[start])
                arr.push(groupArr[end])

                resultArr.push(arr);
            }
        }
        return resultArr;
    }
    if(arr.length<3){
        alart('数组个数太少');
    }
    let groupArr = arrToGroup(arr)

    let result = 9999999999999999999;
    if(groupArr.length == 0){return 0}
    if(groupArr.length == 1){return Sum(arr[0])}
    
    let arrTemp = [];
    groupArr.forEach(element => {
        arrTemp.push(Sum(element));
    });
    arrTemp.map(item=>{
        let tempRes = item>target ? item - target : target - item;
        let realRes = result>target ? result - target : target - result
        tempRes < realRes ? result = item : null;
    })
    return result;
}