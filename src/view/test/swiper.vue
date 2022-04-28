<template>
  <div class="swiper">
      <!-- <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in [1,2,3,4,5]" :key="item">
                  <img :src="'../../static/images/'+item+'.jpg'" alt="">
              </div>
          </div>
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="swiper-button-next swiper-button-white"></div>
      </div> -->
      <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="item in [1,2,3,4,5]" :key="item">
                <img :src="'../../../static/images/'+item+'.jpg'" alt="">
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  </div>
</template>
<script>
export default {
    data(){
        return {
            swiperOption:{
                loop:true,
                // autoplay:{
                //     delay:3000,
                //     stopOnlastSlide:false,
                //     disableOnInteraction:false
                // },
                navigation:{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',
                }
            }
        }
    },
    mounted(){
        // this.initswiper();
    },
    methods:{
        initswiper(){
            console.log(this,window.swiper,'window');
            new window.Swiper(".swiper-container",{
                loop:true,
                // autoplay:2000,
                effect:'slide',
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
                autoplayDisableOnInteraction:false
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.swiper
    width: 960px
    height: 540px
    margin: 20px auto
    .swiper-container
        width: 100%
        height: 540px
        .swiper-slide
            width: 100%
            height: 100%
            background: #ccc
            line-height 450px
            text-align: center
            img
                width: 100%
                object-fit: cover
</style>