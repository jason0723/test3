const actions = {
    setMobile({ commit, state }, params) {
        commit('setMobiles', params);
    },
    setAddress({ dispatch, commit, state }, params) {
        dispatch('setMobile', { mobile: '98888888' })
    }
}

export default actions;