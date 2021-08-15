<template> 
    <div class="pa-0 ma-0">
        <v-card height="120" tile color="transparent" flat>
            
        </v-card>
        <v-footer  
        dark       
        color="#0E3746"          
        class=" white--text text-center pa-3"   
        >  
            <v-row align="center" justify="center">
                <v-col cols="12">
                    <v-row justify="center" align="center">            
                        <v-col cols="9" md="8" sm="11" xl="8">
                            <v-card 
                            height="180"
                            flat
                            class="mt-n16 mb-0 pa-5" 
                            color="#EAE8DC"                    
                            >
                                <v-card-text>
                                    <v-col>
                                        <v-row  justify="center" align="center">
                                            <p class="subscribeText mb-10">
                                            Subscribe to get updates 
                                            </p>
                                        </v-row>

                                        <v-row no-gutters class="d-flex flex-nowrap justify-center ">
                        
                                            <v-col cols="10" md="6" xl="7" sm="10">
                                                <v-text-field
                                                    v-model="email"                                      
                                                    solo
                                                    label="e-mail"                                     
                                                    class="textfieldStyle pa-0"
                                                    height="45"
                                                    flat
                                                    light
                                                >
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="2" md="2" xl="2" sm="2" v-if="$vuetify.breakpoint.mdAndUp">
                                                <v-btn 
                                                    class="btnStyle ml-n4" 
                                                    height="48" 
                                                    color="#BE2623"
                                                    dark
                                                    depressed
                                                    >
                                                SUBSCRIBE
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="2" md="2" xl="2" sm="2" v-if="$vuetify.breakpoint.smAndDown" >
                                                <v-btn 
                                                    class="btnStyle ml-n4" 
                                                    height="48" 
                                                    color="#BE2623"
                                                    dark
                                                    depressed
                                                    >
                                                <v-icon>
                                                    mdi-mail
                                                </v-icon>
                                                </v-btn>
                                            </v-col>
                                            
                                        </v-row>
                                    </v-col>                           
                                </v-card-text>                                  
                            </v-card>     
                        </v-col>            
                    </v-row>  

                    <v-row justify="center" align="center">
                        <v-col cols="12">
                            <div class="my-0">
                                <v-btn 
                            v-for="icon in icons" 
                            :key="icon"
                            class="mx-4"                             
                            fab 
                            color="transparent"
                            depressed 
                            small>
                                <v-icon>
                                    {{ icon }}
                                </v-icon>                    
                            </v-btn>

                            </div>
                            
                        </v-col>                            
                    </v-row>
                    <v-row>
                        <v-divider></v-divider>
                    </v-row>
                    
                    <v-row align="center" justify="center">
                        <div class="my-3">
                        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                        </div>
                    </v-row> 
                </v-col>
            </v-row>         
        </v-footer>
        
    </div>
             
</template>

<script>
export default ({
    name:'Footer',
    data: () => ({
        email: '',
        rules: {
            required: value => !!value || 'Required.',
            counter: value => value.length <= 20 || 'Max 20 characters',
            email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
            },
        },
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=Francois+One&display=swap');

.textfieldStyle{
    border-radius: 30px 0px 0px 30px;    
}
.btnStyle{
    border-radius:0px 30px 30px 0px;    
}
.subscribeText{
    font-family: 'ABeeZee', sans-serif;
    font-family: 'Francois One', sans-serif;
    color:black;
    font-size: 26px;
}
</style>
