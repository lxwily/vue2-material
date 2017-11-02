<template>
<div class="photo" ref="wrapper">
    <md-theme md-name="indigo" class="photo-scorll">
        <transition-group name="fade" class="photo-content">
            <div v-for="(photo,index) in photoLists" :key="index" class="item" @click="getPhotoDetail(photo)">
                <img class="animated bounceIn" :src="photo.url">
            </div>
        </transition-group>
         <md-spinner v-show="loading" :md-size="60" md-indeterminate></md-spinner>
    </md-theme>
</div>
</template>
<script>
    import BScroll from 'better-scroll'; 
    import axios from "axios"
    export default {
        data () {
            return {
                photoLists :[],
                loading : false,
                scrContarent : null,
                scrContent : null,
                page : 1,
                state : false
            }
        },
        methods :{
            getPhotoDetail (e) {
                this.$router.push({name:"photo-detail",params: { 
                    photoId: e._id}})
                this.$store.commit('getphotoUrl',e,11111111111)
            },
            getData(page) {
                this.loading = true;
                axios.get('https://gank.io/api/data/福利/20/'+page).then(res =>{
                    if(Object.is(res.status, 200)){
                        setTimeout(()=>{
                             this.loading = false;
                             this.state = false;
                              if(res.data.results.length ==0) {
                                    this.state = true;
                                }else{
                                    this.page++;
                                }
                            res.data.results.forEach(photo=>{
                                this.photoLists.push(photo);
                            })
                        },1500)
                      
                    }
                    
                }).catch(e=>console.log(e))
            },
            _moreLoad(){
                if(this.scrContent.clientHeight-this.scrContarent.clientHeight-this.scrContarent.scrollTop <= 10){
                    return true;
                }else{
                    return false;
                }
            },
            moreData(page){
                if(this.state){
                    return;
                }
               
                this.loading = true;
                this.state = true;
                axios.get('https://gank.io/api/data/福利/20/'+page).then(res =>{
                   
                    if(Object.is(res.status, 200)){
                        setTimeout(()=>{
                             this.loading = false;
                             this.state = false;
                              if(res.data.results.length ==0) {
                                    this.state = true;
                                }else{
                                    this.page++;
                                }
                        },1500)
                       
                        res.data.results.forEach(photo=>{
                            this.photoLists.push(photo);
                        })
                    }
                    
                }).catch(e=>console.log(e))
                
            }
           
        },
        created () {
            this.getData(this.page++);
        },
        mounted : function (){
            this.scrContarent = this.$el;
            this.scrContent = this.$el.querySelector(".photo-content");
            this.scrContarent.addEventListener('scroll',e=>{
                
                if(this._moreLoad(e)){
                   this.moreData(this.page)
                }
            })
        }
    }
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .item{
      height: 100px;
      flex-grow:1;   
      margin: 2px;
  }
  .item img{
      height: 100px;
      min-width: 100%;     
      max-width: 100%;
/*       background-color: red;
 */      object-fit: cover;     
      vertical-align: bottom;
  }
  .photo{
        position: fixed;
        width:100%;
        top:64px;
    	height:547px;
        left:0;
		text-align: center;
		box-sizing: border-box;
        overflow-y : auto;
  }
  .photo-content{
      display: flex;
      flex-wrap: wrap;
  }
</style>
