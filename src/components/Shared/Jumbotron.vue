<template>
<div>
        <navbar></navbar>
        <div class="jumbotron">
            <div class="row jumbotron-content">
                <div class="col-lg-12">
                <p class="mainTitle">{{mainTitle}}</p>
                    <p class="mainSubtitle">
                        {{mainDescription}}
                    </p>
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

.jumbotron-content {
    color: white;
}
.jumbotron {
    position:relative;
    background-color: transparent !important;
    margin: 0;
    padding: 1rem !important;    
}

.mainTitle {
    font-size: 3em;
}

.mainSubtitle {
    font-size: 1.5em;
}

</style>