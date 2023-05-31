<template>
    <h1 class="text-center">Questo è l'AppMain!</h1>
    <div class="container">
        <div class="row">
            <div class="row-container">
                <div class="card-wrapper" v-for="project in projects">
                    <ProjectCard :title="project.title" :description="project.description" :client="project.client"
                        :category="project.category" :creation_date="project.creation_date"
                        :completion_date="project.completion_date"></ProjectCard>
                </div>
            </div>
            <nav aria-label="Page navigation ">
                <ul class="pagination d-flex justify-content-center">
                    <li class="page-item"><button class="page-link" :class="{ 'disabled': currentPage == 1 }"
                            @click="getProject(this.currentPage - 1)">Previous</button></li>


                    <li class="page-item"><button class="page-link" :class="{ 'disabled': currentPage == lastPage }"
                            @click="getProject(this.currentPage + 1)">Next</button></li>
                </ul>
            </nav>
        </div>
    </div>
</template >

<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: null
        }
    },
    methods: {
        getProject(gotoPage) {
            axios.get('http://localhost:8000/api/projects', {
                params: {
                    page: gotoPage
                }
            })
                .then(response => {
                    console.log(response);
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;

                });
        }
    },
    components: {
        ProjectCard
    },
    mounted() {
        this.getProject(1);
    }
}
</script>

<style lang="scss">
.row-container {
    display: flex;
    flex-wrap: wrap;

    &>* {
        width: calc(100%/4 - 20px);
        margin: 0 10px;
    }
}

.card-wrapper {

    margin-bottom: 30px;
}
</style >
