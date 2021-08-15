<template>
    <v-carousel
      cycle
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      :show-arrows="false"
      :height="computedHeight">
      <v-carousel-item class="red--text black" v-for="link in carouselLinks" :key="link">
          <v-img           
          style="width:100%;height:100%;position:center"
          :src="link"
          ></v-img>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name:'HomeCarousel',
    computed:{
        computedHeight(){
            if(this.$vuetify.breakpoint.mdAndUp){
                return this.$vuetify.breakpoint.height-100
            }
            else{
                return 300;
            }
        }            
    },
    data(){
        return{
            carouselLinks:[
                'https://images.pexels.com/photos/2059736/pexels-photo-2059736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/4466468/pexels-photo-4466468.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                'https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                'https://wallpapercave.com/wp/wp8209721.jpg'
            ]
        }
    }
}
</script>