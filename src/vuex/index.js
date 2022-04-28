import vuex from 'vuex';
import Vue from 'vue';

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(vuex);

export default new vuex.Store({
    state:{

    },
    getters:getters,
    actions:actions,
    mutations:mutations
    
})