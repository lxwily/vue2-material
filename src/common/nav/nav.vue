<template>
<div class="nav_bottom">
    <md-theme :md-name="playground.theme">
    <md-bottom-bar md-shift>
        <md-bottom-bar-item @click="setTheme('blue')" md-icon="ondemand_video" :md-active="this.$route.name == 'movie'">电影</md-bottom-bar-item>
        <md-bottom-bar-item @click="setTheme('teal')" md-icon="music_note"  :md-active="this.$route.name == 'music'">音乐</md-bottom-bar-item>
        <md-bottom-bar-item @click="setTheme('brown')" md-icon="books"  :md-active="this.$route.name == 'book'">书籍</md-bottom-bar-item>
        <md-bottom-bar-item @click="setTheme('indigo')" md-icon="photo"  :md-active="this.$route.name == 'photo'">图片</md-bottom-bar-item>
    </md-bottom-bar>
    </md-theme>
</div>
</template>

<script>
export default {
  data() {
    return {
      playground: {
        theme: 'blue'
      },
     
    };
  },
  methods: {
    setTheme(theme) {
      this.playground.theme = theme;
      this.$store.commit('getTheme',theme)
      switch (theme){
        case "blue" :
          this.$router.push({name : "movie"})
          break;
        case "teal" :
          this.$router.push({name : "music"})
          break;
        case "brown" :
          this.$router.push({name : "book"})
          break;
        case "indigo" :
          this.$router.push({name : "photo"})
          break;
      }
      this.$store.commit("getTitle",this.$route.name)
    }
  },
  created() {
    let mapActive = {
      "movie" : "blue",
      "music" : "teal",
      "book" : "brown",
      "photo" : "indigo",
    }
    this.playground.theme = mapActive[this.$route.name];
    this.$store.commit("getTheme",mapActive[this.$route.name])
    this.$store.commit("getTitle",this.$route.name)
  }
};
</script>

<style scoped>
.nav_bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    width:100%;
}
</style>
