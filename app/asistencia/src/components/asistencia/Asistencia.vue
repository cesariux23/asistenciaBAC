<template lang='pug'>
  div.event-content.container-fluid
    .row
      .col-md-3.empleados
        empleado-list( v-on:selectedEmp="updateSelected")
      .col-md-9.detalles
        .eventos  
          .container-fluid(v-if="empleado")
            .float-right
              router-link.btn.btn-outline-secondary(:to="{ name: 'edicionEmpleado', params: { id: empleado.userid }}")
                  i.fa.fa-pencil
                  |  Editar empleado
            h3 Detalle de la asistencia
            hr
            .row
              .col-md-4.col-lg-1
                b Userid
                p {{empleado.userid}}
              .col
                b Nombre
                p {{ empleado.nombre }}
              .col
                b Adscripción
                p {{ empleado.adscripcion }}
              .col-md-3.col-lg-1
                b Entrada
                p  {{ empleado.entrada }}
              .col-md-3.col-lg-1
                b Salida
                p  {{ empleado.salida }}
              .col-md-3.col-lg-1
                b Tolerancia
                p 15 mins.
            hr
            calendar(v-bind:info="info" v-bind:userid="empleado.userid" v-on:anterior="mesAnterior" v-on:siguiente="mesSiguiente")

          .center.well.empty-data(v-else)
            div
              p
                i.fa.fa-users.fa-5x
              p Seleccione un empleado de la lista

</template>
<script>
  import list from './EmpleadoList'
  import calendar from './Calendar'
  import moment from 'moment'
  export default {
    name: 'Asistencia',
    components: {
      'empleado-list': list,
      calendar
    },
    methods: {
      updateSelected: function (emp) {
        this.empleado = emp
      },
      mesAnterior: function () {
        if (this.info.mesActual === 1) {
          this.info.mesActual = 12
          this.info.anio--
        } else {
          this.info.mesActual--
        }
      },
      mesSiguiente: function () {
        if (this.info.mesActual === 12) {
          this.info.mesActual = 1
          this.info.anio++
        } else {
          this.info.mesActual++
        }
      }
    },
    data () {
      return {
        msg: ':p',
        empleado: null,
        info: {
          mesActual: moment().month() + 1,
          anio: moment().year()
        }
      }
    }
  }
</script>
<style lang="less" scoped>
.event-content{
  overflow-x: hidden;
  padding-bottom: 10px;
  .empleados{
    position: fixed;
    overflow-y: hidden;
  }
  .detalles{
    margin-left: auto;
  }
}
</style>
