<template>
<div>
    <md-theme md-name="teal">
    <headerBack :title="title"></headerBack>
        <md-list ref="movie" id="movies" v-show="datas">
            <md-list-item class="moves-item" v-for="(item,key) in datas" :key="key" @click="goMusicDetail(item)"> 
                <md-avatar>
                    <img :src="item.album.picUrl"  alt="People">
                </md-avatar>
                <div class="movie-list">
                    {{item.name | getShortName}} / {{item.duration | formatTime}}
                </div>
                
                <md-icon class="md-primary">start</md-icon>
            </md-list-item>
            
        </md-list>
        <md-spinner v-show="loadingshow" :md-size="60" md-indeterminate></md-spinner>
    </md-theme>
    </div>
</template>
<script>
import headerBack from '../../common/header/header'
import axios from 'axios'
    export default {
        data (){
            return {
                title : '',
                loadingshow : false,
                datas : []
            }
        },
        components :{
            headerBack
        },
        created (){
           this.getData();
        },
        methods :{
            getData (){
                this.loadingshow = true;
                axios.get(API_PROXY + "http://music.163.com/api/playlist/detail?id="+this.$store.state.musicList).then(res =>{
                    this.loadingshow = false;
                    if(Object.is(res.status,200)){
                        this.title = res.data.result.name;
                        this.datas = res.data.result.tracks
                    }
                    console.log(res)
                }).catch(e=>console.log(e))
            },
            //点击进入歌曲详情
            goMusicDetail (event){
                console.log(event)
                this.$router.push({name:'music-detail',params :{
                    listId :this.$store.state.musicList,
                    songId :   event.id
                }})
            }
        },
        filters:{
            getShortName(val){
                if(String(val.length) > 10)
                    return val.slice(0, 10)+"...";
                return val;
            },
            formatTime(val){
                if(typeof val === 'undefined'){
                    return '未知长度';
                }
                var m = Math.floor(val/1000/60).toString();
                var s = Math.round(val/1000%60).toString();
                m = (m.length == 1) ? 0+m : m;
                s = (s.length == 1) ? 0+s : s;
                return m+":"+s;
            }
        },

    }
</script>