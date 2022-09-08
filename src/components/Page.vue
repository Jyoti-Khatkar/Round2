<template>
  <div class="navbar-postion">
        <nav class="navbar navbar-expand-lg navbar-light bg-primary header-placement">
          <h3>Brand</h3>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse link-postion" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link to="/table" class="nav-link">Table</router-link>
              </li>
              
              <li class="nav-item">
         
               <router-link class="nav-link" to="/card">Card</router-link>

              </li>
              <li class="nav-item">
                <router-link to="/setting" class="nav-link">Setting</router-link>

                </li>
              
              
            </ul>
            <div>
              <form class="form-inline my-2 my-lg-0 search-box">
              <input :value="inputValue" @input="search($event)" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              
            </form>
            <ul class="suggestion">
                <li class="li_item" @click="openSuggestion(l)" v-for="l in filteredList" :key="l">{{l.title}}</li>
              </ul>
            </div>
            
          </div>
        </nav>
  </div>
</template>
<script>
import axios from 'axios'

export default
{
name: 'Page-Component',
data(){
  return {
    list:[],
    filteredList: [],
    inputValue: ''
  }
},
components: {

},
methods: {
  openSuggestion(l){

    this.$router.push(`card?id=${l.id}`)
    this.filteredList = []
    this.inputValue = ''
  },
// to perform search operation
  search(e){
    this.inputValue = e.target.value
    if(e.target.value){
    let filteredData = this.list.filter((item)=>{
      if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
        return item.title;
      }
    })
    if(filteredData.length>10){
      this.filteredList = filteredData.slice(0,10)
    } else{
      this.filteredList = filteredData
    }
    } else{
      this.filteredList = []
    }
    
  },
    //to fetch card details or can say post

      async getPost() {
          let result = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
          this.list = result.data
      },

  },
  mounted() {
      this.getPost();
  }
}
  
</script>
<style>
.search-box{
  display: flex;
}
.link-postion
{
  display:flex;
  justify-content: space-between;
}
.header-placement{
  padding-left:12px !important;
  padding-right:12px !important;
}
.navbar-postion{
position: sticky;
top:0px;
z-index:2
}
.suggestion{
position: absolute;
background: white;
}
.li_item{
cursor: pointer;
}
.li_item :hover{
background: grey;
color: white;
}
</style>