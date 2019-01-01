<template>
    <div class="main_page">
       <!-- <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">选项1.0</mt-tab-item>
            <mt-tab-item id="2">选项1.1</mt-tab-item>
            <mt-tab-item id="3">选项1.2</mt-tab-item>
        </mt-navbar>
        &lt;!&ndash; tabcontainer &ndash;&gt;
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 3" :key="n" :title="'内容 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 3" :key="n" :title="'测试 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 3" :key="n" :title="'选项 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>-->

        <!-- load-more 组件 -->
        <load-more @translate-change="translateChange" style="width:100%;" @loadMore="infiniteCallback" :commad="commad" :param="recommendParam" :topMethod="onRefreshCallback"
                   :loadMoreIconVisible="false" ref="recommendLoadmore" v-if="cmsData">
            <!-- <scroller class="cmsScroll" refreshLayerColor="#999" refreshText="下拉刷新..." :snapping="true" :onRefresh="onRefreshCallback" ref="cmsScroll" width="100%" height="100%"> -->
            <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
                  slot="refresh-spinner">更新中...</span>

            <div class="appTabscenter">
                <mt-swipe :speed="200" :continuous="false" :stopPropagation="false" :prevent="true" :auto="0">
                    <mt-swipe-item>
                        <ul class="tableTabs">
                            <li class="table-tabs-item">
                                <!--<i>
                                  <img src="~jd/images/applist (1).png" alt="">
                                </i>-->
                                <img src="~jd/images/applist (1).png" alt="">
                                <p>京东超市</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (2).png" alt="">
                                </i>
                                <p>京东服饰</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (3).png" alt="">
                                </i>
                                <p>京东到家</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (4).png" alt="">
                                </i>
                                <p>京东生鲜</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (5).png" alt="">
                                </i>
                                <p>京东超市</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (6).png" alt="">
                                </i>
                                <p>充值缴费</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (7).png" alt="">
                                </i>
                                <p>全球购</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (8).png" alt="">
                                </i>
                                <p>领券</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (9).png" alt="">
                                </i>
                                <p>领京豆</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (10).png" alt="">
                                </i>
                                <p>赚钱</p>
                            </li>
                        </ul>
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <ul class="tableTabs">
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (1).png" alt="">
                                </i>
                                <p>京东超市</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (2).png" alt="">
                                </i>
                                <p>京东超市</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (3).png" alt="">
                                </i>
                                <p>京东超市</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (4).png" alt="">
                                </i>
                                <p>京东超市</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (5).png" alt="">
                                </i>
                                <p>京东超市</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (6).png" alt="">
                                </i>
                                <p>京东超市</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (7).png" alt="">
                                </i>
                                <p>京东超市</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (8).png" alt="">
                                </i>
                                <p>京东超市</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (9).png" alt="">
                                </i>
                                <p>京东超市</p>
                            </li>
                            <li class="table-tabs-item">
                                <i>
                                    <img src="~jd/images/applist (10).png" alt="">
                                </i>
                                <p>京东超市</p>
                            </li>
                        </ul>
                    </mt-swipe-item>
                </mt-swipe>
            </div>

            <!-- 为您推荐 -->
            <div class="floor recommend" style="top:0rem;">
                <div class="gray-text">
          <span class="gray-layout">
            <span class="gray-text-img">
              <img src="~jd/images/recommend.png" alt="">
            </span>为您推荐
          </span>
                </div>
                <ul class="find-recommend-product">
                    <li class="recommend-item" @click="$router.push(`/product/${item.productNo}`)" v-for="(item,index) in recommendData" :key="index">
                        <div class="item-posre">
                            <img v-lazy.jd="item.image_url[0].url" alt="">
                        </div>
                        <p class="item-product-text">{{item.productName}}</p>
                        <p class="item-product-info">
                            <span>&yen;</span>{{item.price}}</p>
                        <p class="item-product-praise">好评率100%</p>
                    </li>
                </ul>
            </div>
        </load-more>
    </div>
</template>

<script>
    // import FooterView from 'component/footer/footerView';
    // import BackHead from 'common/backHead';
    import {showBack} from '@/utils/mixin';
    import {
        getRecommend,
        getArticle,
        getArticleList,
        getGoodsCategoryList
    } from '@/service/getData';
    import marquee from 'common/marquee/marquee';
    import marqueeItem from 'common/marquee/marquee-item';
    import SearchBar from 'page/shop/searchBar';
    import LoadMore from 'common/loadMore';
    import {
        Swipe,
        SwipeItem,
        Lazyload
    } from 'mint-ui';
    import {
        mapGetters,
        mapMutations
    } from 'vuex'
    export default {
        // name: "index"
        components: {
            // FooterView,
            // BackHead,
            Swipe,
            SwipeItem,
            marquee,
            marqueeItem,
            SearchBar,
            LoadMore
        },
        data(){
            return{
                selected:'1',
                bttomSelected:'1',
                Status: false,
                commad: getRecommend,
                recommendParam: {
                    Type: 'recommend',
                    pageSize: 10,
                    pageIndex: 1
                },
                recommendData: [],
                cmsData: null,
                searchBarVisilbe: true
            }
        },
        mounted: function () {
            this.initData();
            showBack(status => {
                this.Status = status;
            })
        },
        beforeDestroy() {},
        methods: {
            translateChange(y){ //监听下拉的阈值
                this.searchBarVisilbe = y>8 ? false : true;
            },
            async onRefreshCallback() { //下拉刷新
                this.recommendParam.pageSize = 10;
                this.recommendParam.pageIndex = 1;
                this.updatedData();
                setTimeout(() => {
                    this.$refs.recommendLoadmore.onTopLoaded(this.$refs.recommendLoadmore.uuid);
                }, 1000);
            },
            async infiniteCallback(response) { //加载更多
                if (response.Data.length > 0) {
                    response.Data.map(i => {
                        this.recommendData.push(i)
                    })
                }
            },
            async updatedData() { //更新数据
                let {
                    Data
                } = await this.$store.dispatch('GetIndexCmsData', {
                    pageIndex: 1,
                    pageSize: 100
                });
                this.cmsData = Data;
            },
            async initData() { //初始化数据
                if (!this.indexCmsData) {
                    this.updatedData();
                } else {
                    this.cmsData = this.indexCmsData.Data;
                }
            }
        },

    }
</script>

<style lang="scss" scoped>
    /* banner */

    @import '~assets/common/css/mixin.scss';
    .banner {
        height: 4.88rem;
        img {
            min-width: 100%;
            max-width: 100%;
            max-height: 100%;
        }
    }

    /* banner */

    .appTabscenter {
        border-radius: .2rem .2rem 0 0;
        overflow: hidden;
        position: relative;
        top: -.2rem;
        left: 0;
        background: #f8f8f8;
        z-index: 200;
        width: 100%;
        padding-bottom: .25rem;
        .mint-swipe {
            padding: .266667rem 0;
            overflow: initial !important;
            height: 3.39rem;
        }
        .tableTabs {
            @include flexbox(center, center, row, wrap);
            width: 100%;
            height: 100%;
            .table-tabs-item {
                width: 20%;
                margin: .133333rem 0;
                @include flexbox(center, center, column, wrap);
                flex: initial;
                cursor: pointer;
                p {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    display: box;
                    color: #666666;
                    box-orient: vertical;
                }
                img {
                    width: 29px;
                    height: 29px;
                }
            }
        }
    }

    .floor {
        position: relative;
        background: #fff;
        top: -.1rem;
        overflow: hidden;
        clear: both;
        .container-bg {
            width: 100%;
            overflow: hidden;
            clear: both;
            img {
                width: 100%;
                height: auto;
            }
        }
        .activity_list {
            position: absolute;
            bottom: .2rem;
            padding: 0 8px;
            @include flexbox(space-between, center, row, wrap);
            >div {
                width: 50%;
            }
            img {
                width: 100%;
                height: auto;
            }
            .right_item {
                @include flexbox(space-between, center, column, wrap);
                flex: initial;
                .r_i_cell {
                    height: 50%;
                    width: 100%;
                }
            }
        }
    }

    .jd-express-news {
        position: relative;
        overflow: hidden;
        top: -.1rem;
        background: #fff;
        clear: both;
        .jd-kuaibao {
            .jd-news-icon {
                width: 1.95rem;
                height: .45rem;
            }
            >div {
                padding-left: .1rem;
                li {
                    @include textoverflow(1);
                }
            }
            >span {
                font-size: 12PX;
                width: 1.5rem;
                text-align: right;
                color: #181818;
                position: relative;
                &:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    background: #ececec;
                    height: 100%;
                    width: 1px;
                }
            }
            @include flexbox(space-between, center, row, nowrap);
            padding: 0.2rem .5rem;
        }
    }

    /* 京东秒杀 */

    .seckill-t {
        padding: .1rem 0;
        font-size: .3rem;
        strong {
            font-weight: normal !important;
            font-size: .4rem;
        }
        .seckill-summary {
            color: #999;
            font-size: 13px;
            padding: .1rem 0;
            -webkit-text-fill-color: initial;
        }
        .seckill-time {
            color: #666;
            -webkit-text-fill-color: initial;
            >span {
                color: #fff;
                background: #000;
                border-radius: .1rem;
                padding: 0 .03rem;
            }
        }
        .seckill-now {
            color: #333;
            font-size: 15px;
            -webkit-text-fill-color: initial;
            font-weight: normal !important;
        }
    }

    .seckill-floor {
        position: relative;
        overflow: hidden;
        clear: both;
        top: .05rem;
        img {
            max-width: 100%;
            max-height: 80px;
        }
        .jd-f-b-r-item,
        .jd-f-b-item,
        .jd-f-b-pd-item {
            min-height: 134px;
            overflow: hidden;
        }
        .jd-flex-box {
            background: #fff;
            padding: 10px 0;
            @include flexbox(space-between, flex-start, row, nowrap);
            >div {
                width: 50%;
            }
            .jd-f-b-l {
                @include flexbox(center, space-between, column, wrap);
                flex: initial;
                position: relative;
                >div {
                    padding: 0 .2rem;
                }
                &:after {
                    content: '';
                    position: absolute;
                    right: 1px;
                    height: 100%;
                    width: 1px;
                    background: #f5f5f5;
                }
                .jd-f-b-pd-item {
                    @include flexbox(space-between, center, row, nowrap);
                    .seckill-p-item {
                        width: 50%;
                        .seckill-t {
                            @include flexbox(center, center, column, wrap);
                        }
                    }
                }
                .jd-f-b-item {
                    @include flexbox(center, center, column, wrap);
                    border-bottom: 1px solid #F5F5F5;
                    .seckill-t {
                        @include flexbox(space-between, center, row, nowrap);
                    }
                    .seckill-prd {
                        @include flexbox(space-between, center, row, nowrap);
                        .prd-item {
                            @include flexbox(center, center, column, wrap);
                            >strong {
                                color: #f23030;
                                font-size: 14px;
                                line-height: 1;
                            }
                            >del {
                                color: #999;
                                font-size: 12px;
                                padding: .03rem 0 .08rem;
                            }
                        }
                    }
                }
            }
            .jd-f-b-r {
                @include flexbox(center, center, column, wrap);
                flex: initial;
                .jd-f-b-r-item {
                    @include flexbox(center, flex-start, column, wrap);
                    padding: 0 .2rem;
                    border-bottom: 1px solid #F5F5F5;
                    .seckill-pd-r {
                        img {
                            width: 50%;
                        }
                    }
                    .seckill-t {
                        .seckill-summary {
                            color: #999;
                            font-size: 13px;
                            -webkit-text-fill-color: initial;
                        }
                        @include flexbox(center, flex-start, column, wrap);
                    }
                    .seckill-pd-r {
                        @include flexbox(space-between, center, row, nowrap);
                    }
                }
            }
        }
    }

    /* 京东秒杀 */

    /* 爱生活 */

    .floor {
        .floor-title {
            background: #f5f5f5;
            text-align: center;
            img {
                height: 35px;
            }
        }
        .floor-container-bom {
            @include flexbox(center, center, row, nowrap);
            .f-c-b-prd-item {
                width: 25%;
                position: relative;
                padding: .2rem;
                img {
                    max-width: 60px;
                }
                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 1px;
                    height: 100%;
                    width: 1px;
                    background: #f5f5f5;
                }
            }
        }
        .floor-container {
            @include flexbox(space-between, center, row, nowrap);
            position: relative;
            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                height: 1px;
                width: 100%;
                background: #f5f5f5;
            }
            >div {
                width: 50%;
            }
            .seckill-t {
                padding: 0 .2rem;
            }
            .f-c-l {
                position: relative;
                padding: .2rem 0;
                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 1px;
                    height: 100%;
                    width: 1px;
                    background: #f5f5f5;
                }
            }
            .f-c-l-prd {
                img {
                    max-width: 60px;
                    max-height: 60px;
                    margin: 0 .2rem;
                }
                @include flexbox(center, center, row, nowrap);
            }
        }
    }

    /* 爱生活 */

    /* 推荐 */

    .recommend {
        background: #f0f2f5;
        .gray-text {
            margin: .3rem 0;
            @include flexbox(center, center, row, nowrap);
            .gray-layout {
                font-size: 14px;
                color: #999;
                .gray-text-img {
                    img {
                        width: 18px;
                        height: 18px;
                    }
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                }
            }
        }
        .find-recommend-product {
            @include flexbox(space-between, center, row, wrap);
            overflow: hidden;
            clear: both;
            .recommend-item {
                background: #fff;
                width: 4.935rem;
                margin-bottom: .15rem;
                .item-posre {
                    img {
                        max-height: 185px;
                        width: 100%;
                    }
                }
                .item-product-text {
                    padding: .1rem 0 0 .1rem;
                    height: 1rem;
                    font-size: 14px;
                    line-height: 1.3;
                    @include textoverflow(2);
                }
                .item-product-info {
                    color: #f23030;
                    padding: .2rem .1rem;
                    font-size: 16px;
                    span {
                        font-size: 12px;
                        margin-right: .1rem;
                    }
                }
                .item-product-praise {
                    padding: 0 0 .2rem .1rem;
                    font-size: 12px;
                    color: #999;
                }
            }
        }
    }

    /* 推荐 */

</style>
<style lang="scss">
    #jd {
        min-height: 100vh;
        padding-bottom: 1.35rem;
        .appTabscenter {
            .mint-swipe-indicators {
                transform: translate(-50%, 150%);
                .mint-swipe-indicator {
                    width: .15rem;
                    height: .15rem;
                    background: rgba(0, 0, 0, .3) !important;
                    opacity: 1 !important;
                    &.is-active {
                        background: #fff !important;
                    }
                }
            }
        }
        .banner {
            .mint-swipe-indicators {
                transform: translate(-50%, -50%);
                .mint-swipe-indicator {
                    width: .2rem;
                    background: #fff;
                    height: .048667rem;
                    opacity: 0.6;
                    &.is-active {
                        background: transparent;
                        border: .036rem solid #fff;
                        width: .16rem !important;
                        opacity: 1 !important;
                        height: .16rem !important;
                        border-radius: 50%;
                        vertical-align: bottom;
                    }
                }
            }
        }
    }

</style>