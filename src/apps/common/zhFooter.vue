<template>
    <div class="zh_footer">
        <ul class="nav-bar fool">
            <li  :class="['barIcon','home',$route.name==='mainPage'?'active':'']" @click="$router.push('/home/mainPage')">主页</li>
            <li :class="['barIcon','category',$route.name==='order'?'active':'']" @click="$router.push('/home/order')">订单</li>
            <li :class="['barIcon','find',$route.name==='find'?'active':'']" @click="$router.push('/home/find')">发现</li>
            <li :class="['barIcon','myHome',$route.name==='myInfo'?'active':'']" @click="$router.push('/myInfo')">我的</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "zh_footer",
        data(){
            return{
                footerList:['主页','订单','发现','我的'],
                active:'',
                curPath:''
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss">
    .zh_footer{
        position: fixed;
        height: 50px;
        width: 100%;
        bottom: 0;
        line-height: 50px;
        text-align: center;
        background: #26a2ff;
        .active{
            color: #fff;
        }
        ul{
            li{
                float: left;
                width: 25%;
                font-size: 100%;
            }
        }
    }

</style>