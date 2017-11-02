<template>
    <div class="music_banner">
    <md-layout class="wrap-layout">


        <md-layout class="md-flex-xsmall-50 md-flex-small-50 md-flex-medium-50"
            v-for="(item,key) in albums" :key="key"> 
            <img width="100%;height:100%;" :src="item.bg" @click="getMusicList(item)" />    
        </md-layout>
    </md-layout>
    </div>
</template>
<script>
import axios from "axios"
    export default {
        data (){
            return {
                albums:[
                    {
                        name: "飙升榜",
                        id:19723756,
                        bg: require("./img/soar_music.jpg")
                    },
                    {
                        name: "新歌榜",
                        id:3779629,
                        bg:require("./img/new_music.jpg")
                    },
                    {
                        name: "原创榜",
                        id:2884035,
                        bg:require("./img/original_music.jpg")
                    },
                    {
                        name: "KTV麦榜",
                        id:21845217,
                        bg:require("./img/ktv_music.jpg")
                    },
                    {
                        name: "华语金曲榜",
                        id:4395559,
                        bg:require("./img/chinese_music.jpg")
                    },
                    {
                        name: "我的专辑",
                        id:98833242,
                        bg:require("./img/my_music.jpg")
                    },
                ]
            }
        },
        methods :{
            getMusicList (res){
                this.$store.commit("getMusicList",res.id);
                this.$router.push({ name: 'music-list', params: { 
                    listId: res.id}
                })
            }
        },
       
    }
</script>
<style>
    .wrap-layout{
        height:100%;
    }
    .music_banner{
        height: 100vh;padding: 64px 0 56px;
    }
</style>
