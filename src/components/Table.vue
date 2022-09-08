<template>
<template v-if="!entries.length">
    <div class="loading" :class="mode?'dark':'light'">Loading...</div>
</template>
<template v-else>
    <div class="table-responsive table-style container">
        <table class="table table-hover table-bordered mt-6">
            <thead class="header-postion">

                <tr>
                    <th :class="mode?'dark':'light'" scope="col">Api</th>
                    <th :class="mode?'dark':'light'" scope="col">Description</th>
                    <th :class="mode?'dark':'light'" scope="col">Auth</th>
                    <th :class="mode?'dark':'light'" scope="col">Https</th>
                    <th :class="mode?'dark':'light'" scope="col">Cors</th>
                    <th :class="mode?'dark':'light'" scope="col">Link</th>
                    <th :class="mode?'dark':'light'" scope="col">Categories</th>
                </tr>
               
            </thead>
            <tbody>

                <tr v-for="item in entries" :key="item.API">
                    <td :class="mode?'dark':'light'">{{item.API}}</td>
                    <td :class="mode?'dark':'light'">{{item.Description}}</td>
                    <td :class="mode?'dark':'light'">{{item.Auth}}</td>
                    <td :class="mode?'dark':'light'">{{item.HTTPS}}</td>
                    <td :class="mode?'dark':'light'">{{item.Cors}}</td>
                    <td :class="mode?'dark':'light'">{{item.Link}}</td>
                    <td :class="mode?'dark':'light'">{{item.Category}}</td>
                </tr>

            </tbody>
        </table>
    </div>

</template>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Table-component',
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

            },
            mode: false
        }
    },
    //to change the theme on over the application
    async mounted() {
        let modeValue = localStorage.getItem("mode");
        this.mode = modeValue === 'true' ? true : false

        let result = await axios.get(`https://api.publicapis.org/entries`)
        this.entries = result.data.entries;
    }
}
</script>

<style scoped>
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh
}

.table-responsive thead th {
    position: sticky;
    top: 0;
    z-index: 1;
    background: white;
}

.dark {
    color: white !important;
    background: black !important;
}

.light {
    background: White !important;
    color: black !important;
}

th:first-child {
    position: sticky;
    left: 0px;
    z-index: 100 !important;

}

td:first-child {
    position: sticky;
    left: 0px;
    background-color: white;
}

.table-style {
    margin-top: 4%;

    max-width: 80%;
    min-width: 80%;
    max-height: 83.2vh;

    overflow: scroll;
}



</style>
