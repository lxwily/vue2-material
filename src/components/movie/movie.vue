<template>
<div class="movie">
    <md-theme :md-name="theme">
        <md-tabs md-fixed>
        <md-tab  md-label="前250票房">  
            <Movie250></Movie250>
        </md-tab>
        <md-tab id="music" md-label="正在热映">  
            <MovieHot></MovieHot> 
        </md-tab>
        <md-tab id="books" md-label="即将上映">
            <MovieUpcom></MovieUpcom>
        </md-tab>
        </md-tabs>
      
    </md-theme>
</div>
</template>
<script>
    import axios from 'axios'
    import Movie250 from './movie250.vue'
    import MovieHot from './moviehot.vue'
    import MovieUpcom from './movieupcom.vue'
    export default {
        data () {
            return {
                loadingshow : false,
                datas : []
            }
        },
        computed :{
            theme (){
                return this.$store.state.theme
            }
        },
       
        methods : {
            
        },
        components :{
            Movie250,MovieHot,MovieUpcom
        }
    }
</script>
<style>
    .movie{
        position: fixed;
        top:64px;
        left:0;
        right:0;
        bottom:56px;
        overflow: hidden;
    }
</style>

