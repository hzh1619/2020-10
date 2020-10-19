<template>
    <div>
        <div>在首页</div>
        <router-link to="/login">去登录</router-link>
        <div id="aa">643556</div>
        <div id="bb" @click="search()">搜索</div>
        <input v-on:input ="search()" type="text" placeholder="输入搜索内容" v-model="searchContent" >
        <ol>
            <li v-for="(value,index) in searchResult" :key="index">
                {{ value }}
            </li>
        </ol>
    </div>
</template>
<script>
import axios from 'axios'
import '../api/mock'
/*$(function(){
    $("#aa").click(function(){
        console.log(678)
        axios.get("searchResult")
            .then(function(res){
                console.log(res)
            })
    })
})*/
//import Hello from './components/Hello.vue'
export default {
    name: "index",
    data() {
        return {
            msg: 'hello vue',
            searchContent:"",
            searchResult:[],
            page:0,
            pageSize:5
        }
    },
    methods:{
        search(){
            const vm=this;
            let data={
                UserCode:'admin',
                KeyWords:this.searchContent,
                /* page:vm.page,
                pageNum:vm.pageSize*/
            };
            vm.$http.post(vm.$apiPath.searchResult,data).then(res=>{
                console.log(res);
                if(res.data.code==200){
                    let sdata=res.data.data;
                    vm.searchResult=sdata.resultList;
                    vm.total=sdata.recordCount;

                }
            }).catch(()=>{})
        }
    },
    components: {}
}
</script>
<style scoped>

</style>