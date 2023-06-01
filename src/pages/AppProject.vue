<template>
    <h1 class="text-center">PROJECT:</h1>
    <div class="card-wrapper">
        <ProjectCard :title="this.project.title" :description="this.project.description" :client="this.project.client"
            :category="this.project.category" :creation_date="this.project.creation_date"
            :completion_date="this.project.completion_date" :slug="this.project.slug" :type="this.project.type"
            :technologies="this.project.technologies"></ProjectCard>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: "AppProject",
    data() {
        return {
            project: []
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        showProject() {
            axios.get(`http://localhost:8000/api/project/${this.$route.params.slug}`).then((response) => {
                console.log(response);
                this.project = response.data.project;
            })
        }
    },
    mounted() {
        this.showProject();
    }
}
</script>

<style lang="scss"></style>