const getters = {
    getMobile(state) {
        return state.mobile.slice(0, 3)
    },
    getIdCard: (state) => state.idCard
}

export default getters;