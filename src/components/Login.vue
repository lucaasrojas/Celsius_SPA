<template>
  <div class="container">
    <h3 class="alert alert-light d-inline-flex">Login {{$soyAdmin}}</h3>
    <div class="row bg-dark rounded">
     

    <form @submit.prevent="login">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" v-model="user" id="exampleInputEmail1" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" v-model="pass" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>

  </div>

</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: "",
      pass: "",
      loginMessage: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user, this.pass)
        .then(
          () => {
            this.loginMessage = "Conectado"
            this.$root.$data.soyAdmin = true;
            },
          (error) => alert(error)
        );
    }
  }
};
</script>

<style scoped>
</style>