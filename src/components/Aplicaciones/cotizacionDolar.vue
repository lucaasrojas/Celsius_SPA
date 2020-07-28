<template>
    <div class="dolar">
        <div class="row">
            <div v-for="(dolar, index) of apiResponse" :key="index" 
            class="col-6 card border-dark mb-3 cotizacion">
                <h2 class="card-header">
                    {{dolar.casa.nombre}}
                </h2>
                <div class="col card-body text-dark">
                    <div class="row"> 
                        <div class="col"> 
                            <h3 class="card-title">{{ langData.venta }}</h3>
                            <span class="card-text">
                                {{dolar.casa.venta}}
                            </span>
                        </div>
                        <div class="col"> 
                            <h3 class="card-title">{{ langData.compra }}</h3>
                            <span class="card-text">
                                {{dolar.casa.compra}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Cotizacion Dolar",
            apiResponse: {},
            langData: {}     
        }
    },
    mounted(){
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        .then(async res => {
            const response = await res.clone().json()
            this.apiResponse = response.filter(tipo => {
                if (tipo.casa.nombre.includes("Oficial") || 
                tipo.casa.nombre.includes("Blue") || 
                tipo.casa.nombre.includes("turista")) {
                    return tipo
                }
            })
        })

                this.langData = this.$i18n.messages[this.$i18n.locale].cotizacionDolar;
        this.$emit('jumbotronData', {mainTitle: this.langData.mainTitle, mainDescription: this.langData.mainDescription});

        this.bus.$on('locale-changed', () => {
            this.langData = this.$i18n.messages[this.$i18n.locale].cotizacionDolar;
            console.log("langData", this.langData)

            this.$emit('jumbotronData', {mainTitle: this.langData.mainTitle, mainDescription: this.langData.mainDescription});
        })
    }
}
</script>

<style>
.card.cotizacion {
    padding: 0;
    margin: 1rem;
    display: inline-block;
}

.card-header {
    background-color: var(--mainColor) !important;
    color: var(--secondaryColor) !important;
}

.dolar{
    text-align: center;
}

.dolar > div {
    display: inline-block;
}
</style>