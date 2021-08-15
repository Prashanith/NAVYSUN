<template>
  <div>
    <!-- Navigation Drawer Component -->
    <NavigationBar/>    
    <v-main>

        <!-- News Carousel -->
        <HomeCarousel class="mt-6 mb-10 px-6"/>

        <v-row class="mt-10">
          <v-col cols="12">
            <v-card flat class="test pa-10 ">
              <v-card-text class="text-center font-weight-light display-2">
                <code>
                We built products with quality at its finest 
                </code>

              </v-card-text>
              

            </v-card>
            
          </v-col>
        </v-row>
        
        <!--Product List -->
        <v-row class="mt-10" align="center" justify="center">        

          <v-col cols="11" md="10" xl="10" lg="10">

            <v-card outlined class="text-center pa-6">

              <v-card-title class="d-flex justify-center text-center display-1 font-weight-bold light-blue--text text--darken-4">
                Our Products
              </v-card-title>

              <v-card-text>

                <v-row justify="center" align="center">
                 
                  <v-col cols="12">
                    <v-carousel                      
                      hide-delimiter-background
                      delimiter-icon="mdi-minus"                      
                      >
                        <v-carousel-item class="red--text black" v-for="product in products" :key="product.name">
                            <v-img           
                            :src="product.link"
                            contain
                            ></v-img>
                        </v-carousel-item>                  
                      </v-carousel>

                  </v-col>

                </v-row>
                                
              </v-card-text>              
            </v-card>
          </v-col>
         
        </v-row>

        
        
        <v-row class="mt-10" align="center" justify="center">         

          <v-col cols="12">

            <v-card class="pa-10 test" outlined
            
            > 
              <v-card-text>
                 
                    <div>
                      <p 
                    class="display-1 font-weight-bold align-center light-blue--text text--darken-4" 
                    color="#0E3746"
                    >
                    Our Customers love our work
                    </p>
                    <p
                    class="grey--text text--darken-4 subtitle-1 font-weight-regular" 
                    >
                    Here are our reviews
                    </p>
                    </div>
                    
                   <v-row justify="center" align="center">     
                    <v-col cols="11" md="4" lg="4" xl="4"
                    v-for="data in testimonials"
                    :key="data.name"
                    >  
                      <v-card outlined elevation="12" class="grey lighten-3">
                        <v-card-title class="text-center">{{ data.name }}</v-card-title>
                        <v-card-text>
                          <v-icon 
                          class="material-icons pb-3"     
                          style="transform: scaleX(-1);"
                          small>                            
                          format_quote
                          </v-icon>
                          {{ data.text }}
                          <v-icon 
                          class="material-icons pb-3"     
                          
                          small>                            
                          format_quote
                          </v-icon>
                        </v-card-text>
                        <v-card-actions>
                          <v-rating 
                          readonly
                          v-model="data.rating"
                          >

                          </v-rating>
                        </v-card-actions>
                      </v-card>

                        

                        

                        
                    </v-col>                

                  </v-row>
              
              
              </v-card-text>            
                                
              
            </v-card>                     
          </v-col>

        </v-row>       
        
    </v-main>    
    
    <Footer/>    
  </div>
</template>

<style scoped>
.cardColor{
  background: #ECE9E6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.test{
  background: #e1eec3;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f05053, #e1eec3);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #f05053, #e1eec3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>

<script>
import NavigationBar from '../components/NavigationBar';
import Footer from './Footer';
import HomeCarousel from './HomeCarousel';

export default {
  name: 'Home',
  data(){
    return{
      data:null,
      model: null,
      products:[
        {'name':'Vm', link:'https://images.pexels.com/photos/2059736/pexels-photo-2059736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',},
        {'name':'CM', link:'https://images.pexels.com/photos/6442511/pexels-photo-6442511.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',},
        {'name':'Am', link:'https://images.pexels.com/photos/4841466/pexels-photo-4841466.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',},
        {'name':'DM', link:'https://images.pexels.com/photos/5205817/pexels-photo-5205817.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',},
        {'name':'Km', link:'https://images.pexels.com/photos/4721099/pexels-photo-4721099.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',},
        {'name':'MM', link:'https://images.pexels.com/photos/4541397/pexels-photo-4541397.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',},
      ],
      testimonials:[
        {'name':'Shravan','text':'lorem ipsum','rating':3},
        {'name':'Kalyan','text':'lorem ipsum','rating':1},
        {'name':'Rev','text':'lorem ipsum','rating':5},                   
      ]
    }
  },
  components:{
    NavigationBar,
    Footer,
    HomeCarousel
  },
  methods:{
        
  
  }
  
}
</script>
