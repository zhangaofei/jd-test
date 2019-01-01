<template>
<div class="app-main">
    <router-view :key="key"></router-view>
</div>
</template>

<script>
    // import mainPage from './components/mainPage'
    // import order from './components/order'
    export default {
        name: "app-main",
        components:{
            /*mainPage,
            order*/
        },
        computed:{
            key() {
                console.log('key===')
              return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
            }
        }
    }
</script>

<style scoped>

</style>