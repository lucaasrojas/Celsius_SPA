<template>
  <div class="container">
    <div class="row bg-dark rounded text-center" id="appContainer">
        <div class="card" style="width: 100%">
          <div class="card-body">
            <table
              class="table table-striped table-bordered tabler-hover"
              v-for="(category, index) in listaRecetas"
              :key="index"
            >
              <tr>
                <!--  Categoria -->
                <th data-toggle="collapse" :data-target="`#${index}`" aria-expanded="false" :aria-controls="index">{{CapitalizeFirstLetter(index)}}</th>
              </tr>
              <tbody v-for="categoryItem in category" :key="categoryItem.nombre" :id="index" class="collapse">
                <tr>
                  <!-- Nombre de receta -->
                  <th data-toggle="collapse" :data-target="`#${categoryItem.nombre}`" aria-expanded="false" :aria-controls="categoryItem.nombre">{{categoryItem.nombre}}</th>
                </tr>
                <tr :id="categoryItem.nombre" class="collapse">
                  <td>
                    <tr>
                        <th>Ingrediente</th>
                        <th>Cantidad</th>
                    </tr>
                    <tr v-for="ing in categoryItem.ingredientes" :key="ing.nombre">
                        <th>{{ing.nombre}}</th>
                        <th>{{ing.cantidad}} {{ing.unidad}}</th>
                    </tr>
                    <tr>
                        <th colspan="2">Proceso</th>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align:left">
                          <ul v-for="(step, index) in categoryItem.proceso" :key="index">
                            <li style="list-style-type:none;">{{index + 1 }} - {{step}}</li>
                          </ul>
                        </td>
                    </tr>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listaRecetas: this.$root.dbPages.recetas,
    };
  },
	created() {
		const langData = this.$i18n.messages[this.$i18n.locale].recetas;
		this.$emit('jumbotronData', {mainTitle: langData.mainTitle, mainDescription: langData.mainDescription});

		this.bus.$on('locale-changed', () => {
			const langData = this.$i18n.messages[this.$i18n.locale].recetas;
			this.$emit('jumbotronData', {mainTitle: langData.mainTitle, mainDescription: langData.mainDescription});
		})
	},
  methods: {
    CapitalizeFirstLetter: function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
};
</script>

<style scoped>
#appContainer {
      border: 1px solid;
    border-color: rgba(133, 133, 133, 0.459);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
