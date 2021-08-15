<template>
  <div >    
    <v-navigation-drawer
    v-model="drawer"
    class="navigationBackground"
    light    
    absolute
    temporary    
    >
      <v-list dense rounded>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="../assets/logo.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Navysun PHARMA</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-0 py-0"></v-divider>
        <v-list-item
        class="my-3"
          v-for="item in items"
          :key="item.title"
          link router :to="item.route"
        >
          <v-list-item-icon>
            <span class="material-icons">
            {{ item.icon }}
            </span>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar 
    light
    height="60"
    color="#E8CEBF"
    style="border-bottom: 1px solid #BE2623;"
    app    
    elevate-on-scroll    
    >
      <v-btn fab depressed color="transparent" @click="routeHome" v-if="$vuetify.breakpoint.mdAndUp" class="mr-3" >
        <v-avatar>
          <v-img src="../assets/logo.jpg"></v-img>        
        </v-avatar>
      </v-btn>
      
      <v-app-bar-nav-icon @click="drawer=!drawer" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>

      <v-tool-bar-title class="titleColor title font-weight-bold"  >
        Navysun PHARMA
      </v-tool-bar-title>

      <v-spacer></v-spacer>     

      <div
      v-for="item in tabs"
      :key="item.title"
      v-show="$vuetify.breakpoint.mdAndUp"    
      >
        <router-link 
        link router :to="item.route"  
        class="d-flex flex-column align-center justify-center aStyle"
        >
        {{ item.title.toUpperCase() }}   
        </router-link>        
      </div>

    </v-app-bar>
  </div>  
</template>

<style scoped>
.titleColor{
  color:#4F4846;
}
.navigationBackground{
  background: #ECE9E6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.aStyle{
  text-decoration: none;
  color:#4F4846;
  height: 60px;
  width: 130px;
  background-clip:content-box;
}
a:hover{
  border-radius:7px;  
  color: white;
  background-color:rgba(200, 54, 54, 0.6);
}

a:visited{
  background: transparent;
}

</style>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard',route:'/' },
          { title: 'News', icon: 'feed',route:'/news' },             
          { title: 'Contact', icon: 'contact_support',route:'/contact'},
          { title: 'Products', icon: 'category',route:'/products'},
          { title: 'About', icon: 'forum',route:'/about' },          
        ],
      }
    },
    methods:{
      routeHome(){
        this.$router.push('/');

      }  
    },
    computed: {
    tabs(){
      return this.items.slice(1,this.items.length)
    },
    
    
  }
  }
</script>

