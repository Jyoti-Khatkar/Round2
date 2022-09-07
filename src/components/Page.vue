<template>
    <div class="navbar-postion">
      
        <!-- <h1>Navigation Bar</h1>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Left</button>
            <button type="button" class="btn btn-secondary">Middle</button>
            <button type="button" class="btn btn-secondary">Right</button>
          </div> -->
          <nav class="navbar navbar-expand-lg navbar-light bg-primary header-placement">
            <a class="navbar-brand" href="#">Brand</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse link-postion" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link to="/table" class="nav-link">Table</router-link>
                </li>
                
                <li class="nav-item">
                  <!-- <a class="nav-link" href="#">Card</a>
                 -->
                 <router-link class="nav-link" to="/card">Card</router-link>

                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="#">Setting</a> -->
                  <router-link to="/setting" class="nav-link">Setting</router-link>

                  </li>
                
                
              </ul>
              <form class="form-inline my-2 my-lg-0 search-box">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 ms-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
    </div>
</template>
<script>
export default
{
  name: 'Page-Component',
  components: {

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
</style>