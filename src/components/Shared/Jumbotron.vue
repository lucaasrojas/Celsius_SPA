<template>
<div>
        <navbar></navbar>
        <div class="jumbotron">
            <div class="jumbotron-billboard backgroun-header"></div>
            <div class="container">
                <div class="row jumbotron-content">
                    <div class="col-lg-12">
                    <h1>{{mainTitle}}</h1>
                        <p>
                            {{mainDescription}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
import navbar from '@/components/Shared/Navbar.vue'

export default {
    props: ['mainTitle', 'mainDescription'],
    components: {
        navbar: navbar
    }
}
</script>

<style>

.jumbotron-content {margin-top:0; color: white}
.jumbotron {
  position:relative;
background-color: transparent !important;
}


</style>