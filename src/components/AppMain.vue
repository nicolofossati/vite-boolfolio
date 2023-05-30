<template>
    <h1 class="text-center">Questo è l'AppMain!</h1>
    <div class="container">
        <div class="row">
            <div class="card-wrapper" v-for="project in projects">
                <ProjectCard :title="project.title" :description="project.description" :client="project.client"
                    :category="project.category" :creation_date="project.creation_date"
                    :completion_date="project.completion_date"></ProjectCard>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            projects: []
        }
    },
    methods: {
        getProject() {
            axios.get('http://localhost:8000/api/projects')
                .then(response => {
                    console.log(response);
                    this.projects = response.data.results;
                });
        }
    },
    components: {
        ProjectCard
    },
    mounted() {
        this.getProject();
    }
}
</script>

<style>
.card-wrapper {
    width: 25%;
    margin-bottom: 30px;
}
</style>