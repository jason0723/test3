const mutations = {
    setName(state, params) {
        state.name = params.name
    },
    setMobiles(state, params) {
        state.mobile = params.mobile;
    }
}

export default mutations;