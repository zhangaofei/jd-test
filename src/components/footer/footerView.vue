
<template>
  <div class="nav_footer">
    <ul class="footer_ul">
      <li @click="$router.push('/index')" class="bar1" :class="$route.name==='index'?'active':''"></li>
      <li @click="$router.push('/category')" class="bar2" :class="$route.name==='category'?'active':''"></li>
      <li @click="$router.push('/article')" class="bar3" :class="$route.name==='article'?'active':''"></li>
      <li @click="$router.push('/cart')" class="bar4" :class="$route.name==='cart'?'active':''"></li>
      <li @click="$router.push('/myhome')" class="bar5" :class="$route.name==='myhome'?'active':''"></li>
    </ul>
  </div>
</template>
<script>

</script>
<style lang="scss">
  .nav_footer{
    .footer_ul{
      position: fixed;
      height: 50px;
      width: 100%;
      bottom: 0;
      border: 1px solid;
      cursor: pointer;
      /*background: url('~jd/images/navbar.png') 0 0 no-repeat;
      background-size: 200% 105%;*/
      background-color: #fff;
      max-width: 600px;
      margin: auto;
      li{
        width: 20%;
        height: 100%;
        float: left;
        background: url('~jd/images/navbar.png') 0 0 no-repeat;
        background-size: 850% 105%;
      }
      .bar1{
        background-position: 0 0;
        &.active{
          background-position: 11% 0;
        }
      }
      .bar2{
        background-position: 22% 0;
        &.active{
          background-position: 33% 0;
        }
      }
      .bar3{
        background-position: 44% 0;
        &.active{
          background-position:55% 0;
        }
      }
      .bar4{
        background-position: 66% 0;
        &.active{
          background-position: 77% 0;
        }
      }
      .bar5{
        background-position: 88% 0;
        &.active{
          background-position: 99% 0;
        }
      }
    }
  }
</style>
<!--====================================================================-->
<!-- footer -->
<!--<style lang='scss' scoped>
  .nav-bar {
    position: fixed;
    width: 10rem;
    margin: 0 auto;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1.35rem;
    padding: .066667rem 0 0;
    background: #fff;
    overflow: hidden;
    clear: both;
    box-shadow: 0px 0px 20px -8px #999;
    display: flex;
    flex: 1;
    z-index: 5000;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    border-top: 1px solid #eee;
    .barIcon {
      width: 2rem;
      height: 100%;
      cursor: pointer;
      background: url('~jd/images/navbar.png') 0 0 no-repeat;
      background-size: 850% 105%;
    }
    .home {
      background-position: .1rem -0.075rem;
      &.active {
        background-position: -1.585rem -0.02rem;
      }
    }
    .category {
      background-position: -3.25rem -0.075rem;
      &.active {
        background-position: -4.948rem -0.070rem;
      }
    }
    .find {
      background-position: -6.654rem -0.075rem;
      &.active {
        background-position: -8.37rem -0.075rem;
      }
    }
    .cart {
      background-position: -10rem -0.075rem;
      &.active {
        background-position: -11.7rem -0.075rem;
      }
    }
    .myHome {
      background-position: -13.45rem -0.075rem;
      &.active {
        background-position: -15.15rem -0.075rem;
      }
    }
  }

</style>-->
<!--<template>
  <ul class="nav-bar fool">
    <li  :class="['barIcon','home',$route.name==='index'?'active':'']" @click="$router.push('/index')"></li>
    <li :class="['barIcon','category',$route.name==='category'?'active':'']" @click="$router.push('/category')"></li>
    <li :class="['barIcon','find',$route.name==='article'?'active':'']" @click="$router.push('/article')"></li>
    <li :class="['barIcon','cart',$route.name==='cart'?'active':'']" @click="$router.push('/cart')"></li>
    <li :class="['barIcon','myHome',$route.name==='myhome'?'active':'']" @click="$router.push('/myhome')"></li>
  </ul>
</template>-->

<!--<script>
  export default {
    data() {
      return {

      };
    },

    watch: {},

    components: {},

    computed: {},

    methods: {},

    mounted: function () {}
  }

</script>-->
