<template>
    <h1 class="text-center">Questo è l'AppMain!</h1>
    <div class="container">
        <div class="row">
            <div class="row-container">
                <div class="card-wrapper" v-for="project in projects">
                    <ProjectCard :title="project.title" :description="project.description" :client="project.client"
                        :category="project.category" :creation_date="project.creation_date"
                        :completion_date="project.completion_date" :slug="project.slug"></ProjectCard>
                </div>
            </div>
            <nav aria-label="Page navigation ">
                <ul class="pagination d-flex justify-content-center">
                    <li class="page-item"><button class="page-link" :class="{ 'disabled': currentPage == 1 }"
                            @click="getProject(this.currentPage - 1)">Previous</button></li>
                    <li v-for="(page, index) in this.lastPage" class="page-item">
                        <button @click="getProject(index + 1)" class="page-link"
                            :class="(this.currentPage == (index + 1)) ? 'active' : ''">{{ index + 1 }}</button>
                    </li>

                    <li class="page-item"><button class="page-link" :class="{ 'disabled': currentPage == lastPage }"
                            @click="getProject(this.currentPage + 1)">Next</button></li>
                </ul>
            </nav>
        </div>
    </div>
</template >

<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'AppList',
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
                params: { //questo è il paramatro dinamico concatenato dopo l'uri base. es: ?page=1
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
