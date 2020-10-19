const baseUrl = process.env.NODE_ENV == "development" ?  'http://192.168.1.10:5000' :'';  //测试服

let apiPath = {
    // 搜索+搜索结果
    searchResult:baseUrl+'/Api/GetFuzzySeachResult',    // 头部模糊搜索
    searchResultCount:baseUrl+'/Api/GetSeachResultCount',  // 搜索结果数量
    publicFunds:baseUrl+'/Api/GetMutualFundSeachResult',   // 获取公募基金搜索结果

};

export default apiPath;
