<template>
  <div class="home">
      <router-view />
  </div>
</template>

<script>
import {bubbleSort,findNear,permute,permuteUnique,partition} from '../utils/test';
import {mapGetters} from 'vuex';
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters([
            'getToken'
        ])
    },
    mounted(){
        let token = sessionStorage.getItem('token');
        if(!token){
            this.$router.push('/login');
        }
        // console.log(bubbleSort([]));
        // console.log(bubbleSort([5]));
        // console.log(bubbleSort([3,1,45,7,3,25,9,76,30,21,4,8]));



        // let arr = [1,3,4,-1,-3,4,0,9,-4];
        // console.log(findNear(arr,4));
        let arr = [1,2,3,4,5,3];
        // console.log(permute(arr));
        // console.log(permuteUnique(arr));
        // let str = 'asdfdsajucabac';
        // console.log(partition(str));
    },
    methods:{
    }
}
</script>

<style>

</style>