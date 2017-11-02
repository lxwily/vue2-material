<template>
  <div ref="movie" class="movie-scroll">
      <div class="scroll">
        <md-list id="movies" v-show="datas">
                <md-list-item class="moves-item" v-for="(item,key) in datas" :key="key" @click="getMovieData(item)"> 
                    <md-avatar>
                        <img :src="item.images.small" alt="People">
                    </md-avatar>
                    <dl class="movie-list">
                        <dt>{{item.title}}</dt>
                        <dd>
                            <span v-for="(value,key) in item.genres" :key="key">{{value}}</span>
                            <span>({{item.year}})(平均{{item.rating.average}}分)</span>
                        </dd>
                    </dl>
                    
                    <md-icon class="md-primary">movie</md-icon>
                </md-list-item>
                
            </md-list>
        </div>
        <md-spinner class="spinner" v-show="loadingshow" :md-size="60" md-indeterminate  md-theme="blue"></md-spinner>
  </div>
</template>
<script>
import axios from "axios"
    export default {
        data (){
            return {
                loadingshow : false,
                datas : [],
                page : 1,
                state : false,
                scrContainer: null,
                scrContent: null,
            }
        },
        created (){
            this.getData(this.page);
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
            getData (page) {
                
                this.loadingshow = true;
                axios.get(API_PROXY+"https://api.douban.com/v2/movie/top250?count=10&start="+page).then(result=>{
                    this.state = false;
                    //关闭loading----
                    this.loadingshow = false;
                    if( Object.is(result.status,200) ) {
                        console.log("top250",result)
                        this.datas = result.data.subjects
                    }
                    
                }).catch(e=>{
                    console.log(e)
                })
            },
            //滚动的方法
            _scroll: function(e){
                if(this.scrContent.clientHeight - this.scrContainer.scrollTop - this.scrContainer.clientHeight <=10){
                    return true
                }else{
                    return false;
                }
            },
            moreData(page) {
                if(this.state){
                    return;
                }
                this.loadingshow = true;
                this.state = true;
                 axios.get(API_PROXY+"https://api.douban.com/v2/movie/top250?count=10&start="+page).then(result=>{
                    this.state = false;
                    //关闭loading----
                    this.loadingshow = false;
                    if( Object.is(result.status,200) ) {
                        if(result.data.subjects.length == 0 ){
                            this.state = true
                        }else{
                            this.page++;
                            console.log(this.page,"this.pagethis.pagethis.pagethis.page")
                            result.data.subjects.forEach(item =>{
                                this.datas.push(item)
                            })
                        }
                        
                    }
                    
                    console.log(result)
                }).catch(e=>{
                    console.log(e)
                })
            }
        },
        mounted : function(){
            this.scrContainer = this.$el;
            this.scrContent = this.$el.querySelector(".scroll");
            this.scrContainer.addEventListener('scroll',e=>{
                if(this._scroll(e)){
                    this.moreData(this.page);
                }
            })
           
        },
       
    }
</script>
<style>
.movie-scroll{
    overflow: hidden;
    height:500px;
}
    .scroll{
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
