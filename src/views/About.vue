<template>
  <div>
    <v-app-bar
    light
    height="60"
    color="#E8CEBF"
    style="border-bottom: 1px solid #BE2623;"
    app    
    elevate-on-scroll
    > 
      <v-btn fab small depressed color="#F3F1E7" @click="navHome">
        <v-icon dark>
          mdi-home
        </v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-tool-bar-title class="title font-weight-regular ">
        ABOUT
      </v-tool-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    
    <v-main class="aboutBack my-5">
      <v-row class="d-flex justify-center no-wrap">
        <v-col cols="8">

          <v-img
          background-color="primary"         
          src="../assets/logo.jpg"
          contain
          height="200"
          aspect-ratio="1.77"
          

        ></v-img>

        </v-col>      
      </v-row>
             
      <v-row>
        <v-col></v-col>
        <v-col
        cols="11" md="7" xl="8" sm="11"
        >
          <v-card color="#ECECEC" min-height="400" class="my-10 pa-6">
            <v-card-subtitle class="font-italic subtitle-1">               
   
               Founder's Note
            </v-card-subtitle> 

            

            <v-card-text class="aboutFont title font-weight-light  black--text">
              <v-icon 
              class="material-icons"     
              style="transform: scaleX(-1);"
              small>                            
              format_quote
              </v-icon>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi veritatis earum, possimus, esse explicabo tempora a ea saepe, temporibus porro labore repellendus illum in. Facilis accusantium consectetur nam optio sint.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ut error quos amet quibusdam non aliquam, ipsa laborum suscipit temporibus fugiat culpa nam saepe, libero ducimus. Sint vero magnam temporibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aperiam obcaecati animi quos architecto odio a nobis voluptates odit voluptatem rerum illo dolores voluptas consequuntur illum quae perferendis repudiandae doloribus!

              </p>

              <v-icon 
              class="material-icons"     
              small>                            
              format_quote
              </v-icon>  

            </v-card-text>         
            
          </v-card>
        </v-col>
        <v-col></v-col>
      </v-row>

      <v-row no-gutters>
        <v-col></v-col>
        <v-col cols="12" md="10" xl="10" lg="10">
          <v-card class="mt-8 pa-5" flat :height="$vuetify.breakpoint.mdAndUp?400:650" >
            <div class="bgPattern overflow-visible">
              <v-row class="pa-3">
                  <v-col cols="12" sm="12" md="8" xl="8" lg="8">
                    
                    <p class="font-weight-regular title font-italic pt-7">
                      <v-icon 
                      class="material-icons pb-3"     
                      style="transform: scaleX(-1);"
                      small>                            
                      format_quote
                      </v-icon>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem sequi doloribus quidem voluptate, neque officiis aliquid. Nesciunt odit, iure consequatur dolorem, tempore nostrum magnam facilis dolore, iste excepturi molestias.
                      <v-icon 
                      class="material-icons pb-3"     
                      small>                            
                      format_quote
                      </v-icon>
                    </p>                    

                  </v-col>

                  <v-col cols="12" sm="12" md="4" xl="4" lg="4">
                    <v-img 
                    class="mt-n10 pa-3"                   
                    contain
                    height="350"          
                    src="../assets/founder.jpg"
                    ></v-img>
                  </v-col>
                </v-row>
              </div>
            </v-card>  
          
                  
        </v-col>
        <v-col></v-col>
      </v-row>

      <v-row class="counters" v-scrollanimation>
        <v-col cols="12">

          <v-card  flat height="350" class="container backColor pa-8 my-10" dark>
            <v-card-title class="d-flex justify-center display-1 font-weight-light">
              Navysun in Numbers
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-card color="transparent" light outlined class="d-flex justify-center align-center" height="200">
                    <v-card-text class="text-center">	
                      <v-icon class="material-icons-outlined" x-large>
                      badge
                      </v-icon>
                      <div class="counter font-weight-medium display-1" data-target="5">0</div>
                      <div class="font-weight-medium title">Employees</div>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col>
                  <v-card color="transparent" light outlined class="d-flex justify-center align-center" height="200">
                    <v-card-text class="text-center">	
                      <v-icon class="material-icons-outlined" x-large>
                      paid
                      </v-icon>			
                      <div class="counter  font-weight-medium display-1" data-target="60000">0</div>
                      <div class=" font-weight-medium title">Turnover</div>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col>
                  <v-card color="transparent" light outlined class="d-flex justify-center align-center" height="200">
                    <v-card-text class="text-center">				
                      <v-icon class="material-icons-outlined" x-large>
                      local_pharmacy
                      </v-icon>			
                      <div class="counter  font-weight-medium display-1" data-target="10">0</div>
                      <div class=" font-weight-medium title">Sales</div>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col>
                  <v-card color="transparent" light outlined class="d-flex justify-center align-center" height="200">
                    <v-card-text class="text-center">				
                      <v-icon class="material-icons-outlined" x-large>
                      location_city
                      </v-icon>			
                      <div class="counter  font-weight-medium display-1" data-target="10">0</div>
                      <div class=" font-weight-medium title">Cities</div> 
                    </v-card-text>                 
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

<script>
import Footer from './Footer'

export default {
  name:'About',
  components:{
    Footer,
  },
  methods:{
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Merriweather+Sans&display=swap');

$dot-color: #0E3746;
$bg-color: #FDF8F5;

$dot-size: 2px;
$dot-space: 22px;
.overlayStyleLarge{
  height: 400px;
  background: transparent;
}
.overflowStyleSmall{
  height: 600px;
  background: transparent;
}
.bgPattern {
  height: 250px;
	background:linear-gradient(90deg, $bg-color ($dot-space - $dot-size), transparent 1%) center,
             linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center,$dot-color;
	background-size: $dot-space $dot-space;
}
.noteBack{
  background-size: cover;
  background:url('https://image.freepik.com/free-vector/memphis-style-black-gold-dots-pattern-background_1017-27576.jpg')
}

.aboutFont{
  font-family: 'Courgette', cursive;
  
}

.before-enter {
    opacity: 0;
    transform: translateY(100px);
    // transition: all 2s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }

.backColor{
   /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: #2C3E50;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #4CA1AF, #2C3E50);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #4CA1AF, #2C3E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
