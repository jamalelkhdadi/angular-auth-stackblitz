<template>
    <div class="container">
        <form id="form" class="form-group" v-on:submit.prevent="addTerm">
            <input class="form-control" type="text" v-model="newTerm.name" placeholder="name" />
            <br>
            <input class="form-control" type="text" v-model="newTerm.collage" placeholder="co" />
            <br>
            <input class="form-control" type="text" v-model="newTerm.finition" placeholder="fi" />
            <br>
            <input class="form-control" type="text" v-model="newTerm.marquage" placeholder="ma" />
            <br>
            <input class="form-control" type="text" v-model="newTerm.control" placeholder="con" />
            <br>
            <input class="form-control" type="date" v-model="newTerm.createdat" />
            <input type="submit" value="Add Term" class="btn btn-primary" />
        </form>
    </div>
</template>

<script>
import firebase from "firebase";
var termsRef = firebase.database().ref("terms");
    
export default {
  data() {
    return {
      newTerm: {
         name: "",
         collage: "",
         finition: "",
         marquage: "",
         control: "",
         createdat: new Date(),
       }
    };
  },
  firebase: {
     terms: termsRef
  },
  computed: {
     validation: function () {
       return {
         name: !!this.newTerm.name.trim(),
         collage: !!this.newTerm.name.trim(),
         finition: !!this.newTerm.name.trim(),
         marquage: !!this.newTerm.name.trim(),
         control: !!this.newTerm.name.trim()
       };
     },
     isValid: function () {
       var validation = this.validation;
       return Object.keys(validation).every(function (key) {
         return validation[key];
       });
     }
  },
  methods: {
    addTerm: function () {
      if (this.isValid) {
        termsRef.push(this.newTerm);
        this.newTerm.name = "";
        this.newTerm.collage = "";
        this.newTerm.finition = "";
        this.newTerm.marquage = "";
        this.newTerm.control = "";
      }
    },
    removeTerm: function (term) {
      termsRef.child(term[".key"]).remove();
    }
  }
};
</script>
