import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '../common/login/login.vue'
import Home from '../common/home/home.vue'
import Movie from '../components/movie/movie.vue'
import Music from '../components/music/music.vue'
import Photo from '../components/photo/photo.vue'
import PhotoDetail from '../components/photo/photoDetail.vue'
import List from '../components/music/musicList.vue'
import MusicDetail from '../components/music/musicDetail.vue'
import Book from '../components/book/book.vue'
import MovieDetail from '../components/movie/movieDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children :[
        {
          path :'movie',
          name :'movie',
          component : Movie
        },
        {
          path :'music',
          name :'music',
          component : Music,
        },
        {
          path :'photo',
          name :'photo',
          component : Photo,
        },
        {
          path :'book',
          name :'book',
          component : Book,
        }
      ]
    },
    {
      path : "/home/music/list/:listId",
      name : 'music-list',
      component :List
    },
    {
      path: '/home/movie/list/:movieId',
      name : 'movie-detail',
      component :MovieDetail,
    },
    {
      path: '/home/music/list/:listId/song/:songId',
      name : 'music-detail',
      component :MusicDetail
    },
    {
      path: '/home/photo/:photoId',
      name : 'photo-detail',
      component :PhotoDetail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'*', 
      redirect: './login'
    }
  ]
})
