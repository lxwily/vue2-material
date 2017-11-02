<template>
<div>
    <md-theme md-name="teal">
        <headerBack :title="title"></headerBack>
        <div class="">{{this.$route.params}}</div>
    </md-theme>
</div>
</template>

<script>
    import axios from "axios"
    import headerBack from "../../common/header/header.vue"
    export default {
        data (){
            return {
                title :"不能说的秘密"
            }
        },
        created (){
            console.log(this.$route.params)
            axios.get(API_PROXY + "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2017_38&topid=26&type=top&song_begin=0&song_num=30&g_tk=5381&jsonpCallback=MusicJsonCallbacktoplist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0").then(res =>{
                  
                    console.log(res)
                }).catch(e=>console.log(e))
        },
        components :{
            headerBack
        }
    }
</script>