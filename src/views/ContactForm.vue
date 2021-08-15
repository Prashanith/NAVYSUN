<template>
    <v-row justify="center" align="center" class="mt-0">
        <v-col md="10" lg="6" xl="6" cols="11">
            <v-card 
            color="transparent"
            flat        
            >
               <v-toolbar color="transparent" light height="60" elevation="0">
                   <v-spacer></v-spacer>
                    <v-toolbar-title >Contact Form</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text  class="pt-0 px-10">
                    <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    >
                        <v-text-field                
                        height="6"
                        solo                
                        color="#0E3746"
                        background-color="#EAE8DC"
                        v-model="name"                
                        :rules="nameRules"
                        label="Name"
                        required
                        prepend-icon="person"
                        ></v-text-field>

                        <v-text-field
                        height="6"
                        solo                
                        color="#0E3746"
                        background-color="#EAE8DC"
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        prepend-icon="mdi-mail"
                        ></v-text-field>

                        <v-textarea
                        
                        solo                
                        color="#0E3746"
                        background-color="#EAE8DC"
                        counter="150"
                        
                        rows="6"
                        height="150"
                        prepend-icon="mdi-comment"
                        v-model="text"
                        :rules="textRules"
                        label="Message"
                        ></v-textarea>

                        <v-btn
                        depressed
                        block
                        dark
                        rounded
                        color="#0E3746"
                        class="mr-4"
                        @click="addRequest()"
                        >
                        Submit
                        </v-btn>
                    </v-form>
                </v-card-text>

            </v-card>
            
        </v-col>
        <div class="text-center">
            <v-snackbar
            v-model="snackBar"
            :timeout="timeout"
            dark
            color="#292C35"
            >
            <code class="subtitle-1 font-weight-light" v-html="message">
                
              

            </code>
            
            </v-snackbar>
        </div>
    </v-row>
</template>

<style >
.formColor{
    background: #00B4DB;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

<script>
import db from '../firebaseinit'

export default {
    name:'ContactForm',
    data() {
        return {
            snackBar:false,
            message:'',
            timeout: 3000,
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            text: '',
            textRules: [
                v => !!v || 'Cannot Be Empty',
                v => v.length <= 150|| 'Limit Exceeded',
            ],
        }
    },
    methods: {
      addRequest(){
            if(this.$refs.form.validate()){
                db.collection("Requests").add({
                    'name':this.name,
                    'email':this.email,
                    'text':this.text,                                
                })
                .then(() =>{                
                this.snackBar=true;
                this.message='Request Submitted<br>Our executive will contact you shortly'
                })
                .catch((error) =>{
                    this.snackBar=true;
                    this.message=error.message
                });                       
            }
        },
      
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>