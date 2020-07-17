<template>
  <!--begin::Mixed Widget 1-->
  <div class="card card-custom bg-gray-100 card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title font-weight-bolder text-dark">
        Users
      </h3>
      <div class="card-toolbar">
        <b-button variant="success" v-on:click="agregarUsuario">Add</b-button>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body p-0 position-relative overflow-hidden">
      <!--begin::Stats-->
      <div class="card-spacer">
        <!--begin::Row-->
        <div class="row mt-n5" v-if="addUser">
          <div class="col bg-light-primary px-6 py-8 rounded-xl mb-7">
            <div class="alert alert-warning" role="alert" v-if="err">
                {{err}}
            </div>
            <div class="d-flex">              
              <div class="container-input-user">
                <span>Nombre:</span>
                <b-form-input id="val-nombre" v-model="nombre" placeholder="Nombre"></b-form-input>
              </div>
              <div class="container-input-user">
                <span>Apellidos:</span>
                <b-form-input id="val-apellido" v-model="apellido" placeholder="Apellidos"></b-form-input>
              </div>
              <div class="container-input-user">
                <span>Correo:</span>
                <b-form-input id="val-correo" v-model="correo" placeholder="Correo"></b-form-input>
              </div>
              <div class="container-input-user">
                <span>Pais:</span>
                <b-form-input id="val-pais" v-model="pais" placeholder="Pais"></b-form-input>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-5">
              <b-button class="mr-5" variant="success" v-on:click="create">enviar</b-button>
              <b-button variant="danger" v-on:click="closeAdd">Cancelar</b-button>              
            </div>
          </div>
        </div>
        <!--end::Row-->
      </div>
      <div class="alert alert-success" role="alert" v-if="resp">
          {{resp}} sdfsd
      </div>
      <div class="content-table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Correo</th>
              <th scope="col">Pais</th>
              <th scope="col" colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.message" class="row-table">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.firstname }}</td>
              <td>{{ item.lastname }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.country }}</td>
              <td><b-button variant="outline-primary" v-on:click="eliminarRegistro(item.id)">eliminar</b-button></td>
              <td><b-button variant="outline-primary" @click="showModal(item.id)">Editar</b-button></td>
            </tr>
          </tbody>
        </table>
        <!-- MODAL -->
        <b-modal ref="my-modal" hide-footer title="Editar Información">
          <div class="d-block">
            <div class="alert alert-warning" role="alert" v-if="errEdit">
                {{errEdit}}
            </div>
            <div class="">              
                <div class="mt-5">
                  <span>Nombre:</span>
                  <b-form-input id="val-nombre-edit" v-model="userData.firstname" placeholder="Nombre"></b-form-input>
                </div>
                <div class="mt-5">
                  <span>Apellidos:</span>
                  <b-form-input id="val-apellido-edit" v-model="userData.lastname" placeholder="Apellidos"></b-form-input>
                </div>
                <div class="mt-5">
                  <span>Correo:</span>
                  <b-form-input id="val-correo-edit" v-model="userData.email" placeholder="Correo"></b-form-input>
                </div>
                <div class="mt-5">
                  <span>Pais:</span>
                  <b-form-input id="val-pais-edit" v-model="userData.country" placeholder="Pais"></b-form-input>
                </div>
              </div>
          </div>
          <div class="mt-5">          
            <b-button class="m-auto w-50" variant="outline-primary" block @click="actualizar">Enviar</b-button>
          </div>
        </b-modal>
      </div>
    </div>
    <!--end::Mixed Widget 1-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "widget-1",
  data() {    
    return {
      addUser: false,
      nombre: '',
      apellido: '',
      correo: '',
      pais: '',
      items: null,
      err: null,
      resp: null,
      errEdit: null,
      userData: {
        id: null,
        firstname: null,
        lastname: null,
        email: null,
        country: null
      }
    };
  },
  mounted () {
      fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => this.items = data);
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  methods: {
    showModal(id) {
      fetch(`http://localhost:3000/api/users/${id}`)
      .then(response => response.json())
      .then(data => this.userData = data);
      this.$refs['my-modal'].show()
    },
    agregarUsuario() {
      this.addUser = true;
    },    
    closeAdd () {
      this.addUser = false;
      this.nombre = '';
      this.apellido = '';
      this.correo = '';
      this.pais = '';
    },
    create () {
      //Validación de los campos
      if (this.nombre === ''){
        document.getElementById('val-nombre').style.border = '1px solid red';
      } else {
        document.getElementById('val-nombre').style.border = '1px solid #E4E6EF';
      }

      if (this.apellido === ''){
        document.getElementById('val-apellido').style.border = '1px solid red';
      } else {
        document.getElementById('val-apellido').style.border = '1px solid #E4E6EF';
      };

      if (this.correo === ''){
        document.getElementById('val-correo').style.border = '1px solid red';
      } else {
        document.getElementById('val-correo').style.border = '1px solid #E4E6EF';
      };

      if (this.pais === ''){
        document.getElementById('val-pais').style.border = '1px solid red';
      } else {
        document.getElementById('val-pais').style.border = '1px solid #E4E6EF';
      };

      if ( this.nombre !== "" && this.apellido !== "" && this.correo !== "" & this.pais !== "") {

        let json = {
          firstname: this.nombre,
          lastname: this.apellido,
          email: this.correo,
          country: this.pais
        }

        fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(json),
        })
        .then(response => response.json())
        .then(data => {
          if (data.firstname) {
            this.addUser = false;
            this.err = null;            
          } else {
            this.err = data.message;
          }
        });
      };

    },
    actualizar() {
      
       //Validación de los campos
      if (this.userData.firstname === ''){
        document.getElementById('val-nombre-edit').style.border = '1px solid red';
      } else {
        document.getElementById('val-nombre-edit').style.border = '1px solid #E4E6EF';
      }

      if (this.userData.lastname === ''){
        document.getElementById('val-apellido-edit').style.border = '1px solid red';
      } else {
        document.getElementById('val-apellido-edit').style.border = '1px solid #E4E6EF';
      };

      if (this.userData.email === ''){
        document.getElementById('val-correo-edit').style.border = '1px solid red';
      } else {
        document.getElementById('val-correo-edit').style.border = '1px solid #E4E6EF';
      };

      if (this.userData.country === ''){
        document.getElementById('val-pais-edit').style.border = '1px solid red';
      } else {
        document.getElementById('val-pais-edit').style.border = '1px solid #E4E6EF';
      };

      if (this.userData.firstname !== '' && this.userData.lastname !== "" && this.userData.email !== "" & this.userData.country !== "") {
        fetch(`http://localhost:3000/api/users/${this.userData.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.userData),
        })
        .then(response => response.json())
        .then(data => {
          if (data.statusCode === 201) {
            this.errEdit = null;
            this.resp = data.message;
            this.$refs['my-modal'].hide()            
          } else {
            this.errEdit = data.message;
          }
        });
      }

    },
    eliminarRegistro(id) {
      fetch(`http://localhost:3000/api/users/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
          this.resp = data.message;
        });
    }
  }
};
</script>
