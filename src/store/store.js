import Vue from "vue"
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  theme : "",
  title : "movie",
  musicList : "" ,
  activeRoute: 'movie',
  photoUrl : '',
  movieData :''
}

const getters = {
  theme : state => state.theme,
  title : state => state.title,
  musicList : state => state.musicList,
  photoUrl : state => state.photoUrl,
  movieData : state => state.movieData
}


const mutations = {
  getTheme (state,value){
    state.theme = value
  },
  getTitle (state,value) {
    state.title = value
  },
  getMusicList (state,value){
    state.musicList = value
  },
  getphotoUrl (state,value){
    state.photoUrl = value
  },
  getmovieData (state,value){
    state.movieData = value
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
});