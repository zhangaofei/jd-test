<template>
    <div class="app_header">
        <!--v-if="headerTitle=='主页'||headerTitle=='订单'"-->
        <mt-header title="标题" >
            <router-link to="/home" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!--<div class="page-search" v-else-if="headerTitle=='发现'">
            <mt-search
                    autofocus
                    v-model="value"
                    :result="filterResult">
            </mt-search>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "app-header",
        data(){
            return{
                defaultResult: [
                    'Apple',
                    'Banana',
                    'Orange',
                    'Durian',
                    'Lemon',
                    'Peach',
                    'Cherry',
                    'Berry',
                    'Core',
                    'Fig',
                    'Haw',
                    'Melon',
                    'Plum',
                    'Pear',
                    'Peanut',
                    'Other'],
                value:''
            }
        },
        computed: {
            filterResult() {
                return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
            }
        },
        props:['headerTitle']
    }
</script>

<style scoped lang="scss">
         .app_header{
             .mint-header{
                 z-index: 1;
             }
         }
</style>