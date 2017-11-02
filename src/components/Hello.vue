<template>

<md-theme :md-name="playground.theme">
  <md-bottom-bar md-shift>
    <md-bottom-bar-item @click="setTheme('blue')" md-icon="ondemand_video">Movies</md-bottom-bar-item>
    <md-bottom-bar-item @click="setTheme('teal')" md-icon="music_note">Music</md-bottom-bar-item>
    <md-bottom-bar-item @click="setTheme('brown')" md-icon="books" md-active>Books</md-bottom-bar-item>
    <md-bottom-bar-item @click="setTheme('indigo')" md-icon="photo">Pictures</md-bottom-bar-item>
  </md-bottom-bar>
</md-theme>
</template>

<script>
export default {
  data() {
    return {
      playground: {
        theme: 'brown'
      }
    };
  },
  methods: {
    setTheme(theme) {
      this.playground.theme = theme;
    }
  }
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
