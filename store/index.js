export const state = () => ({
    userData:{
        email:null,
        password:null
    },

    isLogin: false,
  })
  
  export const getters = {
    getUserInfo(state){
        return state.userData
    },
    checkLogin(state){
      return state.isLogin
    }
  }
  
  export const mutations = {
    setUserData(state,data){
        state.userData = data
    },
    setLogin(state,situation){
      state.isLogin = situation
    }
  }