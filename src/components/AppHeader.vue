<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <routerLink class="nav-link" :to="{ name: 'home' }">Home</routerLink>
                    </li>
                    <li class="nav-item">
                        <routerLink class="nav-link" :to="{ name: 'about' }">About</routerLink>
                    </li>
                    <li class="nav-item">
                        <routerLink class="nav-link" :to="{ name: 'contact' }">Contact</routerLink>
                    </li>
                    <li class="nav-item">
                        <routerLink class="nav-link" :to="{ name: 'projects' }">Projects</routerLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "AppHeader"
}
</script>

<style lang="scss"></style>