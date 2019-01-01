<template>
    <div class="app_home">
        <div class="page-navbar">
            <!--头部 header-->
            <!--<appHeader :headerTitle="headerTitle"></appHeader>-->
            <searchBar class="search_bar"></searchBar>
            <!--主体 main-->
            <appMain class="app_main"></appMain>
            <!--底部 footer-->
            <zhFooter></zhFooter>
        </div>
    </div>
</template>

<script>
    import appMain from './appMain'
    import appHeader from './appHeader'
    import zhFooter from './common/zhFooter'
    import searchBar from './common/searchBar'
    export default {
        // name: "index"
        components:{
            appHeader,
            appMain,
            zhFooter,
            searchBar
        },
        data(){
            return{
                selected:'1',
                bttomSelected:'1',
                headerTitle:'主页'
            }
        },
        created(){

        },
        methods:{

        }
    }
</script>

<style lang="scss">
    .app_home{
        .search_bar{
            height: 45px;
            background: #26a2ff;
            position: fixed !important;
            z-index: 1000;
            width: 100%;
            top: 0;
        }
        .app_main{
            margin-top: 40px;
        }
    }
</style>