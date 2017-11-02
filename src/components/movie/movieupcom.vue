<template>
  <div class="movie-scroll">
      <md-list ref="movie" id="movies" v-show="datas">
            <md-list-item class="moves-item" v-for="(item,key) in datas" :key="key"  @click="getMovieData(item)"> 
                <md-avatar>
                    <img :src="item.images.small" alt="People">
                </md-avatar>
                <dl class="movie-list">
                    <dt>{{item.title}}</dt>
                    <dd>
                        剧情动作科幻<span>({{item.year}})(平均{{item.rating.average}}分)</span>
                    </dd>
                </dl>
                
                <md-icon class="md-primary">movie</md-icon>
            </md-list-item>
            
        </md-list>
        <md-spinner v-show="loadingshow" :md-size="60" md-indeterminate  md-theme="blue"></md-spinner>
  </div>
</template>
<script>
import axios from "axios"
    export default {
        data (){
            return {
                loadingshow : false,
                datas : []
            }
        },
        created (){
            this.getData();
        },
        methods :{
             //点击电影
            getMovieData (event) {
                console.log(event,"1")
                this.$store.commit("getmovieData",event)
                this.$router.push({name:"movie-detail",params:{
                    movieId : event.id
                }})
            },
            getData () {
                this.loadingshow = true;
                axios.get(API_PROXY+"https://api.douban.com/v2/movie/coming_soon?count=10&start").then(result=>{

                    //关闭loading----
                    this.loadingshow = false;
                    if( Object.is(result.status,200) ) {
                        this.datas = result.data.subjects;
                      
                    }
                    
                    console.log(result)
                }).catch(e=>{
                    console.log(e)
                })
            }
        },
        mounted (){
            let wrap = this.$el;
            let movies = this.$el.querySelector("#movies");
            wrap.addEventListener('scroll',function(e){
            　　　　console.log(wrap.clientHeight,movies.clientHeight,movies.scrollTop) 
            　　　　// 打印结果：<li>2</li> 本以为会获得一个数组
            　
               
            })
           
        }
    }
</script>
<style>
    .movie-scroll{
        height:500px;
        overflow-y:auto;
    }
    .md-tabs .md-tab{
        padding-top:0;
        padding-bottom:0;
    }
    .moves-item{
         min-height: 75px;
         padding-top:5px;
         border-bottom: 1px solid #eee;
    }
    .movie-list dt{
        font-size: 18px;
        font-weight: bold;
    }
     .movie-list dd{
        font-size: 14px;
    }
     .movie-list dd span{
        color:#888
    }
</style>
