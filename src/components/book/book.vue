<template>
<div id="book">
   <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,key) in listImg" :key="key">
              <img  :src="item.url" />
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
   
</div>
	
</template>
<script>
import axios from "axios"
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  components: {
  	Swiper,
  },
  data() {
  	 return {
       books: [],
       flag: true,
       listImg : [
         {url : 'https://img3.doubanio.com/lpic/s24468373.jpg'}, {url : 'https://img3.doubanio.com/lpic/s27102925.jpg'}, {url : 'https://img3.doubanio.com/lpic/s27102925.jpg'}
       ]
  	 }
  },
  mounted() {
      var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
            speed: 2000,
            loop: true,
            autoplay:1500
      });
    }
  

}
</script>
<style>
	#book{
		min-height: 100vh;
		box-sizing: border-box;
		padding: 64px 0;
		text-align: center;
	}
  .md-list{
    padding: 0;
  }

  .my-swipe {
    width: 100%;
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    
   
  }
   .mint-swipe-item{
      height: 100%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  .mint-swipe-items-wrap{
      height: 100% !important;
  }

  .slide1 {
    background: url('https://img3.doubanio.com/lpic/s27102925.jpg');
    color: #fff;
  }

  .slide2 {
    background: url('https://img3.doubanio.com/lpic/s6989253.jpg');
    color: #000;
  }

  .slide3 {
    background: url('https://img3.doubanio.com/lpic/s24468373.jpg');
    color: #fff;
  }
</style>



