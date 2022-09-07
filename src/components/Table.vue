<template>
    <template v-if="!entries.length"><div class="loading">Loading...</div></template>
    <template v-else>
    <!-- <template class="container"> -->
<table class="table table-hover table-bordered container mt-2 ">
    <thead class="header-postion">
     
        <tr>
            <th scope="col">Api</th>
            <th scope="col">Description</th>
            <th scope="col">Auth</th>
            <th scope="col">Https</th>
            <th scope="col">Cors</th>
            <th scope="col">Link</th>
            <th scope="col">Categories</th>
        </tr>
    <!-- </template> -->
    </thead>
    <tbody>
        <!-- <template v-if="!entries.length"> -->
            
        <tr v-for="item in entries" :key="item.API">
            <td>{{item.API}}</td>
            <td>{{item.Description}}</td>
            <td>{{item.Auth}}</td>
            <td>{{item.HTTPS}}</td>
            <td>{{item.Cors}}</td>
            <td>{{item.Link}}</td>
            <td>{{item.Category}}</td>
        </tr>
    <!-- </template> -->


    </tbody>
</table>

</template>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Table-component',
    // components:{
    //     Table,
    // }
    data() {
        return {
            entries: {
                API: '',
                Description: '',
                Auth: '',
                HTTPS: '',
                Cors: '',
                Link: '',
                Category: '',

            }
        }
    },
    async mounted() {

        let result = await axios.get(`https://api.publicapis.org/entries`)
        console.log(result.data.entries);
        this.entries=result.data.entries;
    }
}
</script>
<style>
.loading{
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh
}

.header-postion{
    position: sticky;
    top:0px;
    z-index:1
  }
</style>
