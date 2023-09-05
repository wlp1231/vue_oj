import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: "",
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      // TODO 远程登录
      commit("updateUser", payload);
      console.log(payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload.loginUser;
    },
  },
} as StoreOptions<any>;
