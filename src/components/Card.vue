<template>
<!-- <div class="card">
        <img class="card-img-top abc" src="../assets/logo.png"  alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div> -->
<div class="cards-arrangemts">

    <template v-for="post in posts" :key="post.id">
        <div class="card xyz mt-2" style="width: 15rem;">
            <div class="card-header">
                {{post.title}}

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
    </template>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Card-component',
    data() {
        return {
            posts: {
                id: '',
                title: '',
                body: '',
            }
        }
    },
    methods: {
        async deletePost(id) {

            console.log(id, "eeeeeeeeeeeee");
            let result = await axios.delete("https://jsonplaceholder.typicode.com/posts/" + id);
            console.log(result.data);
            // this.getPost();
        },

        async getPost() {
            let result = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            console.log(result.data);
            this.posts = result.data
        },

    },

    mounted() {
        this.getPost();
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
</style>
