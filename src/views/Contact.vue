<template>
    <div>
        <NavigationBar/>
        <v-main>
            <v-row class="bgPattern my-8">
                <v-col cols="1" ></v-col>
                <v-col md="7" lg="7" xl="7" cols="10">
                    <v-card elevation="10" class="my-6 pa-7" height="150">
                        <v-card-title class="display-1 black--text font-weight-black">
                            Contact Us
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col></v-col>
            </v-row>

            <v-row class="my-10 pa-4">
                <v-col cols="11" md="4" lg="4" xl="4">
                    <v-card flat outlined class="pa-2" :height="$vuetify.breakpoint.mdAndUp?340:150">
                        <v-card-title>
                        <v-btn 
                        class=" py-4 d-flex justify-center font-weight-regular" 
                        large
                        outlined 
                        rounded
                        depressed
                        onclick="window.open('tel:9550066657');">
                            CALL NOW
                        </v-btn>
                        </v-card-title>
                        <v-card-text class="title green--text text--darken-4">
                        {{ mobile }}
                        </v-card-text>
                    </v-card>

                </v-col>
                <v-col cols="11" md="4" lg="4" xl="4">
                    <v-card flat outlined class="pa-2" :height="$vuetify.breakpoint.mdAndUp?340:200">
                        <v-card-title>
                        <v-btn 
                         class=" py-4 d-flex justify-center font-weight-regular" 
                        color="#0E3746" 
                        dark large rounded 
                        depressed
                        onclick="window.open('https://www.google.com/maps/dir//Navysun+Pharma/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb991ea3d64e37:0xac500c005255251a!2m2!1d78.51081219999999!2d17.395095599999998');">
                        Get Directions
                        </v-btn>
                        </v-card-title>
                        <v-card-text class="title green--text text--darken-4" v-html="address">
                           
                        
                        </v-card-text>

                    </v-card>

                </v-col>
                <v-col cols="11" md="4" lg="4" xl="4">
                    <v-card flat outlined class="pa-2" height="340">
                        <v-btn 
                        text
                        class="mt-3 py-4 d-flex justify-center font-weight-regular" 
                        color="#0E3746" 
                        dark large rounded
                        depressed>                    
                        Business Hours
                        </v-btn>
                        <v-card-text>
                            <v-simple-table dense>
                                <template v-slot:default>
                               
                                <tbody>
                                    <tr
                                    v-for="item in desserts"
                                    :key="item.name"
                                    >
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.time }}</td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                        
                        </v-card-text>

                    </v-card>

                </v-col>
            </v-row>
                      
            
            <ContactForm class="formColor"/>          
            
            

            <v-row align="center" justify="center">
                <v-btn
                depressed 
                class="mt-8 py-4 d-flex justify-center font-weight-regular" 
                color="#0E3746" 
                dark large rounded
                >
                    LOCATE US AT
                </v-btn>                       
            </v-row>
            <v-row class="mt-8" align="center" justify="center">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3476594902004!2d78.50862351487646!3d17.395095588074025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb991ea3d64e37%3A0xac500c005255251a!2sNavysun%20Pharma!5e0!3m2!1sen!2sin!4v1618483943988!5m2!1sen!2sin" 
                    :width="$vuetify.breakpoint.width-80"
                    height="300"
                    style="border:1px solid grey;" 
                    allowfullscreen="true" 
                    
                ></iframe>
            </v-row>            

        </v-main>

        <Footer/>


        <div class="text-center">
            <v-snackbar
            v-model="snackBar"
            :timeout="timeout"
            dark
            color="green"
            >
            {{ message }}
            </v-snackbar>
        </div>
    </div>
</template>

<script>
import ContactForm from './ContactForm'
import Footer from './Footer'
import NavigationBar from '../components/NavigationBar'


export default ({
    name:'Contact',
    components:{
        ContactForm,
        Footer,
        NavigationBar
    },
    data() {
        return {
            mobile:'9550066657',
            email:'prashanith007@gmail.com',
            address:'Shivam Road, New Nallakunta Hyderabad, <br> Telangana 500044 India',
            snackBar:false,
            message:'',
            timeout: 2000,

            desserts: [
                {
                    name: 'Monday',
                    time:'12:00 PM – 7:30 PM'
                },
                {
                    name: 'Tuesday',
                    time:'12:00 PM – 7:30 PM'
                },
                {
                    name: 'Wednesday',
                    time:'12:00 PM – 7:30 PM'
                },
                {
                    name: 'Thursday',
                    time:'12:00 PM – 7:30 PM'
                },
                {
                    name: 'Friday',
                    time:'12:00 PM – 7:30 PM'
                },
                {
                    name: 'Saturday',
                    time:'12:00 PM – 7:30 PM'
                },
                {
                    name: 'Sunday',
                    time:'Closed'
                },
          
         
           
        ],
        }
    },
    methods: {
        async copyFunction(text) {
            await navigator.clipboard.writeText(text);           
            this.snackBar=true;
            this.message=`Text Copied ${text}`
        }  
    },
    
})
</script>
