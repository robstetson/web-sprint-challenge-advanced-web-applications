import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = async ()=> {
return axiosWithAuth()
.get('/articles')
.then(response =>{
    return (response.data)
})
}


export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.