<template>
    <div class="card text-center">
        <div class="card-header">
            Your project
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ desctription }}</p>
            <p class="card-text">Client: {{ client }}</p>
            <p class="card-text">Category: {{ category }}</p>
            <!--
            <p class="card-text">Type: {{ type == null ? 'Type doesn\'t exists' : type.name }}</p>
            <span v-for="technology in technologies" class="badge rounded-pill text-bg-primary">{{ technology.name
            }}</span>
            -->
        </div>
        <div class="card-footer text-muted d-flex justify-content-center">
            <p class="me-5">Creation date: {{ creation_date }}</p>
            <p class="ms-5">Completion date: {{ completion_date }}</p>
        </div>

        <routerLink class="btn btn-primary" :to="{ name: 'single-project', params: { slug: slug } }">Show details
        </routerLink>
    </div>
</template>

<script>

export default {
    props: {
        title: String,
        description: String,
        client: String,
        category: String,
        creation_date: String,
        completion_date: String,
        slug: String,
        /*
type: String,
technology: String,
*/
    },
    methods: {
    }
}
</script>

<style lang="scss">
.card-wrapper {}
</style>