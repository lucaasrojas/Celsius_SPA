<template>
    <div class="jumbotron">
        <div class="row jumbotron-content">
            <div class="col-lg-12 mx-auto my-auto">
                <p class="mainTitle">{{mainTitle}}</p>
                    <p class="mainSubtitle">
                        {{mainDescription}}
                    </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['mainTitle', 'mainDescription']
}
</script>

<style>

.jumbotron-content {
    color: white;
    height: 100%;
    width: 100%;

}
.jumbotron {
    height: 400px;
    background-image: linear-gradient(to bottom, rgba(148, 148, 148, 0.6) 0%,rgba(148,148,148,0.9) 100%), url('https://3wmy0q.by.files.1drv.com/y4mywvQNyygdtRi57m6yWuOG-8Zu4G2W5zvdMDNZxMP7b259fpkHa1HBQWrD_SFUu1qovszfUdAl1e0Kc-xt6NRkXRmWJQD70yL-H027tE17XPAHIx3-n0bF6J4L_RiqWzVECz6W3Spzq_TVkYkuRMutuftd0Ot_OPma5FtZ8s70luWlMPaNni7F0uaru1omVUAg3ztAF7f7w_apciAvsYa3A?width=2048&height=1365&cropmode=none');
    background-size: fill;
    background-position: center;
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