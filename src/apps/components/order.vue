<template>
    <div class="order_page">
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">选项2.0</mt-tab-item>
            <mt-tab-item id="2">选项2.1</mt-tab-item>
            <mt-tab-item id="3">选项2.2</mt-tab-item>
        </mt-navbar>

        <div>
            <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
        </div>
        <!-- tabcontainer -->
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
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        // name: "index"
        data(){
            return{
                selected:'1',
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>