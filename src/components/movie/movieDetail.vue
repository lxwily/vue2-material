<template>
    <div class="movieDetail">
        <mHeader :title="title"></mHeader>
        <div class="movie_cart">
            <div class="movie_mian" v-if="movieData">
                <div class="img" style="width:100%">
                    <img :src="movieData.images.large" />
                    <div class="md-subhead">
                        <p>{{movieData.countries ? movieData.countries[0] : ''}}/<span v-for="(genre,key) in movieData.genres" :key="key">{{genre}}</span></p>
                        <p>年份：{{movieData.year}}</p>
                    </div>
                    <p>{{movieData.summary}}</p>
                    <dl>
                        <dt>导演：{{movieData.directors ? movieData.directors[0].name : ''}}</dt>
                        <dd>
                            <img :src="movieData.directors ? movieData.directors[0].avatars.medium : ''" alt="director">
                        </dd>
                    </dl>
                 </div>

                 <h3>{{movieData.title}}</h3>
            </div>
        </div>
         <md-spinner class="spinner" v-show="loadingshow" :md-size="60" md-indeterminate  md-theme="blue"></md-spinner>
    </div>
    
</template>
<script>
    import mHeader from '../../common/header/header.vue'
    import axios from 'axios'
    export default {
        data (){
            return {
                movieData : null ,
                title : '',
                loadingshow : false
            }
        },
        components : {
            mHeader
        },
        mounted () {
            console.log(this.$route.params.movieId,"--------")
            this.movieData = this.$store.state.movieData;
            this.loadingshow = true;
            axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.$route.params.movieId)
                    .then(function(res) {
                        this.loadingshow = false;
                        console.log(res);
                        this.movieData = res.data;
                        this.title = res.data.title;
                    }.bind(this))
                    .catch(function(error){
                    console.log(error);
                    });
		
        }
    }
</script>
<style>
    .movieDetail{
        width:100%;
        height:100%;
    }
    .movie_cart{
        width:100%;height:100%;
        
        float: left;
    }
    .movie_mian{
        width:80%;
        margin:10px auto;
        margin-top:66px;
       box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
    }
</style>
