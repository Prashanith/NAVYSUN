<template>
    <v-app>
        <Navigator/>        
        <v-main>
            <v-container fill-height fluid class="mt-3">
                <v-row align="center" justify="center" no-gutters>                     
                    <v-col cols="12" md="8" xl="8" lg="8">
                        <transition name="fade">
                        <v-card 
                        flat outlined
                        :v-if="expand"
                        style="border-radius:10px;" :height="($vuetify.breakpoint.height)-150">
                            <v-toolbar color="#4F4846" dark height="60" elevation="0">
                                <v-spacer></v-spacer>
                                <span class="material-icons mr-2">
                                circle
                                </span>
                                <span class="material-icons mr-2">
                                circle
                                </span>
                                <span class="material-icons mr-2">
                                circle
                                </span>
                            </v-toolbar>
                            <v-card-text class="pa-2">
                                <v-row>
                                    <v-col cols="12" md="8" xl="8" lg="8">                     
                                        <span class="font-weight-black text-center errorFont px-5">
                                        404 
                                        </span>                      
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="8" xl="8" lg="8">                     
                                        <p class="font-weight-black text-center display-3 pa-3 green--text text--lighten-4 errorFont-2" color="#e8f5e9">
                                        Page Not Found !                                        
                                        </p>  
                                        <p class="font-weight-light subtitle-1 black--text px-5">
                                        We're sorry, the Web address you entered is not a functioning page on our site.
                                        </p>
                                        <p class="font-weight-black subtitle-1 px-5 black--text text--darken-4">
                                            Click 
                                            <router-link to="/">
                                            here                                                
                                            </router-link>
                                            to go home    
                                        </p>
                                                           
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                        </transition>
                    </v-col>
                </v-row>
            </v-container>           
        </v-main>
        
    </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.backImg{
    background: url('data:image/png;base64,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');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height:height;
}
.errorFont{
    font-size: 135px;
    letter-spacing: 10px;
    color: #4F4846;
    text-shadow: #E8CEBF;
    /* color:  */
}
.errorFont-2{
    -webkit-text-stroke: 1px teal;
   color: white;
   text-shadow:1px  3px 0 #E9E9E9;

}
</style>


<script>
import Navigator from '../components/NavigationBar';

export default {
    name:'ErrorPage',
    components:{
        Navigator,
    },
    mounted() {
         setTimeout(() => {
            this.expand=true
            
        }, 4000)
    },
    data(){
        return{
            expand:false,
            height:this.$vuetify.breakpoint.height,
        }
    }
    
}
</script>