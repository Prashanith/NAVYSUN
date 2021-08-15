<template>
    <div>
        <NavigationBar/>
        <v-main class="my-8">
            <v-row class="bgPattern my-8">
                <v-col cols="1" ></v-col>
                <v-col md="7" lg="7" xl="7" cols="10">
                    <v-card elevation="10" class="my-6 pa-7" height="150">
                        <v-card-title class="display-1 black--text font-weight-black">
                            Our Products
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col></v-col>
            </v-row>

            <v-card>

           
            <v-row justify="center" align="center" class="px-5" >
                <v-col cols="12">
                    <v-row justify="center" align="center">
                        <v-col cols="4" v-for="product in products" :key="product.name">
                            
                            <v-card class="pa-3" outlined style="border:1px solid pink" color="#ECECEC">
                                
                            <v-card-title class="title">
                                {{ product.name }}
                            </v-card-title>
                            <v-card-subtitle class="subtitle-1">
                                {{ product.tag }}
                            </v-card-subtitle>
                            <v-card-text>
                                <v-img contain :src="product.link"></v-img>

                            </v-card-text>
                        </v-card>

                        </v-col>

                        

                    </v-row>
                </v-col>
            </v-row>
             </v-card>


        </v-main>
        <Footer/>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'
import Footer from './Footer'

export default {
    name:'Products',
    components:{
        NavigationBar,
        Footer
    },
    data() {
        return {
            products:[
                { 
                    name:'Frankosossks',
                    tag:'heah the pain',
                    link:'https://images.pexels.com/photos/4549831/pexels-photo-4549831.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
                },
                { 
                    name:'Frankosossks',
                    tag:'heah the pain',
                    link:'https://images.pexels.com/photos/4549831/pexels-photo-4549831.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
                },
                { 
                    name:'Frankosossks',
                    tag:'heah the pain',
                    link:'https://images.pexels.com/photos/4549831/pexels-photo-4549831.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
                },
                { 
                    name:'Frankosossks',
                    tag:'heah the pain',
                    link:'https://images.pexels.com/photos/4549831/pexels-photo-4549831.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
                },
                { 
                    name:'Frankosossks',
                    tag:'heah the pain',
                    link:'https://images.pexels.com/photos/4549831/pexels-photo-4549831.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
                },
                { 
                    name:'Frankosossks',
                    tag:'heah the pain',
                    link:'https://images.pexels.com/photos/4549831/pexels-photo-4549831.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
                },
                { 
                    name:'Frankosossks',
                    tag:'heah the pain',
                    link:'https://images.pexels.com/photos/4549831/pexels-photo-4549831.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
                },
                { 
                    name:'Frankosossks',
                    tag:'heah the pain',
                    link:'https://images.pexels.com/photos/4549831/pexels-photo-4549831.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
                },
                


            ],
            
        }
    },
    methods:{

    },

}
</script>