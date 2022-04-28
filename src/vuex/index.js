import vuex from 'vuex';
import Vue from 'vue';

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(vuex);

const store =  new vuex.Store({
    state:{
        token:'',           //用户登录之后记录的token。
    },
    getters:getters,
    actions:actions,
    mutations:mutations
    
})

export default store;