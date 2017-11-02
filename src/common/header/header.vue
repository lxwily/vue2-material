<template>
<div id="header-back">
	<md-toolbar class="top-nav">
	  <md-button @click="go" class="md-icon-button">
	  <md-icon >arrow_back_ios</md-icon>
	  </md-button>
	  <h2 class="md-title" style="flex: 1" v-text="title"></h2>
	  <md-button class="md-icon-button" :style="{opacity:0}">
	  	<md-icon></md-icon>
	  </md-button>
	</md-toolbar>
</div>
</template>


<script>

export default {
  mounted: function(){
  	
  },
  data() {
	return {

	}
  },
  props:['title'],
  computed: {
  	
  },
  methods: {
   go(){
   	history.go(-1);
   }
    
  }
}
</script>
<style  scoped>
		.top-nav{
			width:100%;
			position: fixed;
			top:0;
			left: 0;
			z-index: 1;
		}
</style>



