import axios from 'axios'

const actions = {

 
  async getUsers({ state, dispatch }, peopleUrl) {
    let url = (peopleUrl)?peopleUrl: 'https://swapi.dev/api/people/'

    const { data } = await axios.get(url)
     /* call the api again till next is not equal to null*/
    if (data.results && data.next !== null) {
      dispatch('getUsers', data.next)
    }
    dispatch('setUserList', [...state.users, ...data.results])
  },


  async getPlanets({ state, dispatch }, peopleUrl) {
    let url = (peopleUrl)?peopleUrl: 'https://swapi.dev/api/planets/'
  
    const { data } = await axios.get(url)
    /* call the api again till next is not equal to null*/
    if (data.results && data.next !== null) {
      await dispatch('getPlanets', data.next)
    }
    dispatch('setPlanetList', [...state.planets, ...data.results])
  },

  setUserList({ commit }, users) {
    commit('setUser', users)
  },

  setPlanetList({ commit }, planetData) {
    commit('setPlanet', planetData)
  },

}

export default actions
