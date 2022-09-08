<template>
<div>

    <Page />
    <router-view></router-view>
</div>
</template>

<script>
import Page from './components/Page.vue'

export default {
    name: 'App',
    components: {
        Page
    },
    mounted() {
        let modeValue = localStorage.getItem("mode");

        const myElement = document.getElementById("app");

        if (modeValue=='true') {
            myElement.style.background = "black";
        } else {
            myElement.style.background = "white";
            myElement.style.color = "black";

        }

    }
}
</script>

<style>

</style>
