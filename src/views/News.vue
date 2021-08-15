<template>
    <div>
        <v-main class="bgImg">
            <v-row align="center" justify="center">
                <v-col cols="11" md="6" xl="6" lg="6">
                    <a 
                    class="twitter-timeline" 
                    href="https://twitter.com/007prashanith?ref_src=twsrc%5Etfw"
                    data-chrome="nofooter noscrollbar noheader transparent"
                    data-theme="light"
                    data-tweet-limit="5"
                    
                    
                    
                    >
                    Tweets by 007prashanith
                    </a> 


                    
                </v-col>
            </v-row>
        </v-main>
    </div>
</template>

<style scoped>
.bgImg{
    background: url('../assets/tweet.png') ;
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
    background-attachment: fixed;
    background-origin: content-box;
}
</style>

<script>
export default {
    name:'News',
    created() {
    var script ="https://platform.twitter.com/widgets.js"

    let tag = document.createElement("script");
    tag.setAttribute("src", script);
    document.head.appendChild(tag);
    
  }
}
</script>