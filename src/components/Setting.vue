<template>
<div class="setting">
    <div class="toggle-position">
        <label for="customSwitch1" class="switch-style" :class="check ? 'dark':'light'">Theme Color</label>
        <input type="checkbox" v-model="check" id="customSwitch1">

    </div>
    <!-- Default checked -->

</div>
</template>

<script>
export default {
    name: 'Setting-component',
    data() {
        return {
          
            check: false,
        }
    },

    watch: {
        //to change the theme on clicking checkbox and save value to localStroage.
        check: {
            handler: function(val){
                const myElement = document.getElementById("app");
                localStorage.setItem("mode", val)
                if (val=="true" || val) {

                    myElement.style.background = "black";

                } else {
                    myElement.style.background = "white";
                    myElement.style.color = "black";
                }
            },
            immediate: false

        }

    },
    mounted() {
        
        let modeValue = JSON.parse(localStorage.getItem("mode"));
        this.check = modeValue;
        const myElement = document.getElementById("app");

        if (modeValue=="true") {
            myElement.style.background = "black";
        } else {
            myElement.style.background = "white";
            myElement.style.color = "black";

        }

    }

}
</script>

<style>
.setting {
    width: 100%;
    height: 92vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

}

.toggle-position {
    width: 15%;
    height: 24%;

}

label {
    font-size: 30px;
   
}
.dark{
    color:white;
}
.light{
    color:black;
}

.switch-style {

    margin-right: 20px
}
</style>
