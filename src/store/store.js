/**
 * @Desc:全局状态管理
 * 
 * 
 * Created By JK on 2019-06-25 20:53:33
 */


import vue from "vue";
import vuex from "vuex";
vue.use(vuex);

import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default  new vuex.Store({
    // ...
    state,
    getters,
    actions,
    mutations
})
