<template>
    <div class="home">
    <md-theme :md-name="theme">
        <navBar></navBar>
        <md-toolbar class="home-menu">
            <md-button class="md-icon-button" @click="toggleLeftSidenav">
                <md-icon>menu</md-icon>
             </md-button>
            <h2 class="md-title" style="flex: 1">{{$store.state.title}}</h2>
            <md-button class="md-icon-button" @click="loginOut">
			  	 <md-icon>backspace</md-icon>
			  </md-button>
        </md-toolbar>
        <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
        <md-toolbar class="md-large">
            <div class="md-toolbar-container">
            <h3 class="md-title">我的主页</h3>
            </div>
        </md-toolbar>
        <div class="desc">
            <span>项目起建：2017:09:19</span>
            <p>1.技术池:vue + vue-router + vuex + webpack + axios + swiper</p>
            <p>2.温馨提示:使用了豆瓣api,该接口一分钟内最大访问量为40次，超过次会导致数据加载不出来。</p>
        </div>
        
        </md-sidenav>
    </md-theme>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    </div>
</template>

<script>
import navBar from "../nav/nav";
export default {
    components :{
        navBar
    },
    methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('关闭d: ' + ref);
    },
    //推出登录
    loginOut (){
        sessionStorage.removeItem("user");
        this.$router.push("/login")
    }
  },
  computed : {
      theme (){
          return this.$store.state.theme
      }
  },
}
</script>

<style scoped>
    .home-menu{
        position: fixed;
        top:0;
        left:0;
        width:100%;
    }
    .desc{
        width:80%;margin:20px auto;
    }
    .desc p{
        text-align: left;
    }
</style>
