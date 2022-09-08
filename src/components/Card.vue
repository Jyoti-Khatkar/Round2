<template>
    <div class="container">
      <div class="row align-items-start">
        <div v-for="post in posts" :key="post.id" class="col-4">
            <div class="card m-4" :id="post.id" >
            <div class="card-header">
                    {{post.title}} - {{post.id}}
    
                </div>
                <div class="card-body">
                    {{post.body}}
                </div>
                <div class="card-footer">
                    <!-- <a href="#" class="btn btn-primary">Card link</a> -->
                    <button
                    @click="deletePost(post.id)"
                    type="button"
                    class="btn btn-primary"
                  >
                    Delete
                  </button>
                    <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
            </div>
        </div>
      </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios'
    export default {
        name: 'Card-component',
        data() {
            return {
                posts: []
            }
        },
        methods: {
    
            async getPost() {
                let result = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
                this.posts = result.data
            },
            scrollToElement(id) {
                const el = document.getElementById(id);
                el.classList.add('myActiveClass')
                if (el) {
                    el.scrollIntoView(true);
                }
            },
            deletePost(id){
                this.posts = this.posts.filter(post=>{
                    if(post.id!=id){
                        return post;
                    }
                })
                this.$router.push(`card`)
            }
    
        },
        watch: {
            '$route.query.id': {
                handler: function(){
                    if(this.$route.query.id){
                        var lights = document.getElementsByClassName("myActiveClass");
                        while (lights.length){
                            lights[0].className = lights[0].className.replace(/\bmyActiveClass\b/g, "");
                        }
                        this.scrollToElement(this.$route.query.id);
                    }
                    
                }
            }
        },
    
        mounted() {
            this.getPost();
            setTimeout(()=>{
                if(this.$route.query.id){
                    this.scrollToElement(this.$route.query.id);
                }
            },1000)
        }
    
    }
    </script>
    
    <style scoped>
    .abc {
        width: fit-content;
        Height: fit-content;
    
    }
    
    .xyz {
        margin-left: 10px;
    }
    
    .cards-arrangemts {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .myActiveClass{
        background-color: rgb(188, 183, 183) !important;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        scroll-margin: 200px;
    }
    </style>
    