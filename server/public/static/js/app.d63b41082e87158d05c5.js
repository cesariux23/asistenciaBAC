webpackJsonp([1],{"+Gxq":function(t,e,s){"use strict";function a(t){s("FdwB")}var n=s("/Put"),i=s("VU/8"),r=a,o=i(n.a,null,!1,r,null,null);e.a=o.exports},"+K8V":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0,!1,!1),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1,!1,!1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],i={render:a,staticRenderFns:n};e.a=i},"+ryg":function(t,e,s){"use strict";function a(t){s("COMT")}var n=s("urb5"),i=s("GMeh"),r=s("VU/8"),o=a,c=r(n.a,i.a,!1,o,"data-v-35e8e25a",null);e.a=c.exports},"/Put":function(t,e,s){"use strict";var a=s("fnDg");e.a=a.a},"/rwW":function(t,e){},0:function(t,e){},"0zyd":function(t,e,s){"use strict";var a=s("mtWM"),n=s.n(a);e.a=n.a.create({baseURL:"/api"})},"1rAC":function(t,e){},"9M+g":function(t,e){},"9zhf":function(t,e){},ADTC:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("Dispositivos en línea")]),s("br"),s("table",{staticClass:"table"},[t._m(0,!1,!1),s("tbody",t._l(t.czs,function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.zona))]),s("td",[s("b-button",{attrs:{variant:"outline-primary",disabled:!e.online},on:{click:function(s){t.sync(e.id)}}},[t._v("Sincronizar")])],1),s("td",[t._v(t._s(e.mensaje))])])}))])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Ubicación")]),s("th",[t._v("Acciones")]),s("th",[t._v("Estatus")])])])}],i={render:a,staticRenderFns:n};e.a=i},COMT:function(t,e){},Cddc:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left"},[s("div",{staticClass:"card",attrs:{id:"empladosList"}},[s("div",{staticClass:"card-header"},[s("router-link",{staticClass:"fav",attrs:{to:"/empleados/registro",title:"Registrar"}},[s("i",{staticClass:"fa fa-plus"})]),s("H4",[t._v("Empleados")]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group"},[t._m(0,!1,!1),s("b-form-input",{attrs:{type:"text",placeholder:"Nombre, userid o adscripción"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])],1),s("div",{staticClass:"card-body",attrs:{id:"list-container"}},[t.search?s("div",[0===t.filteredEmpleados.length?s("div",{staticClass:"alert alert-warning"},[t._v("Sin resultados.")]):s("div",{staticClass:"alert alert-info"},[t._v("Mostrando "+t._s(t.filteredEmpleados.length)+" resultado(s).")])]):t._e(),s("b-list-group",{attrs:{id:"list"}},t._l(t.filteredEmpleados,function(e){return s("b-list-group-item",{key:e.userid,attrs:{href:"#"},on:{click:function(s){t.selectEmpleado(e)}}},[s("span",{staticClass:"userid"},[t._v(t._s(e.userid))]),s("span",[s("span",[t._v(t._s(e.nombre))]),s("br"),s("span",{staticClass:"ads text-secondary elipsis"},[t._v(t._s(e.adscripcion))])])])}))],1)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-search"})])}],i={render:a,staticRenderFns:n};e.a=i},ELjZ:function(t,e,s){"use strict";e.a={name:"Dia",props:["eventos"],data:function(){return{eventsClass:""}},computed:{evento:function(){return this.eventos.length>0&&this.eventos[0]},statusClass:function(){var t="";switch(this.eventsClass="visible",this.evento.status){case"PENDIENTE":t="fa-circle-thin text-secondary";break;case"ASISTENCIA":t="fa-check",this.eventsClass="";break;case"COMISIÓN":t="fa-external-link";break;case"RETARDO RECUPERABLE":t="fa-clock-o";break;case"RETARDO MAYOR":t="fa-clock-o text-warning";break;case"NO LABORAL":t="fa-calendar-minus-o text-info";break;case"PERIODO VACACIONAL":t="fa-user-o text-secondary";break;case"OMISIÓN DE SALIDA":t="fa-sign-out text-warning";break;case"OMISIÓN DE ENTRADA":t="fa-sign-in text-warning";break;case"PUNTUALIDAD":t="fa-check-circle-o text-success",this.eventsClass="";break;case"INASISTENCIA":t="fa-times text-danger"}return t}},filters:{zeroFill:function(t){var e=2-t.toString().length;return e>0?new Array(e+(/\./.test(t)?2:1)).join("0")+t:t+""}}}},FPDf:function(t,e){},FdwB:function(t,e){},GMeh:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"event-content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 no-padding-right"},[s("empleado-list",{on:{selectedEmp:t.updateSelected}})],1),s("div",{staticClass:"col-lg-9"},[s("div",{staticClass:"eventos"},[t.empleado?s("div",[s("div",{staticClass:"empleado"},[s("div",[s("b",[t._v("Userid")]),s("p",[t._v(t._s(t.empleado.userid))])]),s("div",[s("b",[t._v("Nombre")]),s("p",[t._v(t._s(t.empleado.nombre))])]),s("div",[s("b",[t._v("Adscripción")]),s("p",[t._v(t._s(t.empleado.adscripcion))])]),s("br"),s("div",[s("b",[t._v("Entrada")]),s("p",[t._v(" "+t._s(t.empleado.entrada))])]),s("div",[s("b",[t._v("Salida")]),s("p",[t._v(" "+t._s(t.empleado.salida))])]),t._m(0,!1,!1),s("div",[s("router-link",{staticClass:"btn btn-outline-info",attrs:{to:{name:"edicionEmpleado",params:{id:t.empleado.userid}},title:"Registrar"}},[s("i",{staticClass:"fa fa-pencil"})])],1)]),s("calendar",{attrs:{info:t.info,userid:t.empleado.userid},on:{anterior:t.mesAnterior,siguiente:t.mesSiguiente}})],1):s("div",{staticClass:"center well empty-data"},[t._m(1,!1,!1)])])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b",[t._v("Tolerancia")]),s("p",[t._v("15 mins.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",[s("i",{staticClass:"fa fa-users fa-5x"})]),s("p",[t._v("Seleccione un empleado de la lista")])])}],i={render:a,staticRenderFns:n};e.a=i},"HUt/":function(t,e,s){"use strict";function a(t){s("ff44")}var n=s("fcFS"),i=s("VU/8"),r=a,o=i(n.a,null,!1,r,null,null);e.a=o.exports},"I4+c":function(t,e,s){"use strict";function a(t){s("JYAk")}var n=s("sU4x"),i=s("Cddc"),r=s("VU/8"),o=a,c=r(n.a,i.a,!1,o,"data-v-3dc0bbc6",null);e.a=c.exports},JCpY:function(t,e,s){"use strict";function a(t){s("wmKd")}var n=s("aPSQ"),i=s("VU/8"),r=a,o=i(n.a,null,!1,r,null,null);e.a=o.exports},JDVb:function(t,e,s){"use strict";function a(t){s("FPDf")}var n=s("kJiG"),i=s("VU/8"),r=a,o=i(n.a,null,!1,r,null,null);e.a=o.exports},JYAk:function(t,e){},Jdir:function(t,e,s){"use strict";var a=s("sLPG"),n=s("ADTC"),i=s("VU/8"),r=i(a.a,n.a,!1,null,null,null);e.a=r.exports},Jmt5:function(t,e){},"LjY/":function(t,e,s){"use strict";function a(t){s("/rwW")}var n=s("ELjZ"),i=s("nzti"),r=s("VU/8"),o=a,c=r(n.a,i.a,!1,o,"data-v-0024aec4",null);e.a=c.exports},M93x:function(t,e,s){"use strict";function a(t){s("9zhf")}var n=s("xJD8"),i=s("wwPY"),r=s("VU/8"),o=a,c=r(n.a,i.a,!1,o,null,null);e.a=c.exports},N03N:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("M93x"),i=s("YaEn"),r=s("e6fC"),o=s("Jmt5"),c=(s.n(o),s("1rAC")),l=(s.n(c),s("9M+g")),u=(s.n(l),s("mjDs")),d=s.n(u);a.a.use(d.a),a.a.config.productionTip=!1,a.a.use(r.a),new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},Orh2:function(t,e){},Rz9o:function(t,e,s){"use strict";var a=s("bW3S"),n=s("pM64"),i=s("VU/8"),r=i(a.a,n.a,!1,null,null,null);e.a=r.exports},SS6n:function(t,e){},SsFf:function(t,e,s){"use strict";function a(t){s("SS6n")}var n=s("euDc"),i=s("VU/8"),r=a,o=i(n.a,null,!1,r,null,null);e.a=o.exports},WT8W:function(t,e){},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),n=s("/ocq"),i=s("qSdX"),r=s("+ryg"),o=s("xsoF"),c=s("Jdir");a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Hello",component:i.a},{path:"/asistencia",name:"asistenciaGeneral",component:r.a},{path:"/empleados/registro",name:"registroEmpleado",component:o.a},{path:"/empleado/:id",name:"edicionEmpleado",component:o.a,props:!0},{path:"/dispositivos",name:"enLinea",component:c.a,props:!0}]})},aPSQ:function(t,e,s){"use strict";var a=s("rKsW");e.a=a.a},bW3S:function(t,e,s){"use strict";var a=this;e.a={name:"EmpleadoForm",props:["empleado","isPatch"],data:function(){return{_form:{userid:null,nombre:"",adscripcion:"",entrada:"08:00",salida:"15:00",entrada_comer:null,salida_comer:null},form:{}}},methods:{onSubmit:function(){this.$emit("save",this.form)}},watch:{empleado:function(){this.empleado?this.form=this.empleado.data:this.form=this._form,this.$forceUpdate()},isPatch:function(){console.log(this.isPatch)}},created:function(){a.form=a._form}}},bl7x:function(t,e,s){"use strict";var a=s("Rz9o"),n=s("0zyd");e.a={name:"Registro",props:["id"],components:{EmpleadoForm:a.a},data:function(){return{empleado:{userid:null,nombre:"",adscripcion:"",entrada:"08:00",salida:"15:00",entrada_comer:null,salida_comer:null},isPatch:!1}},methods:{save:function(t){var e=this,a="/empleados"+(this.id?"/"+t.userid:""),i={userid:t.userid,nombre:t.nombre,adscripcion:t.adscripcion,entrada:t.entrada,salida:t.salida,entrada_comer:t.entrada_comer,salida_comer:t.salida_comer},r=this.isPatch?"patch":"post";s.i(n.a)({method:r,url:a,data:i}).then(function(t){e.$router.push("/asistencia")})}},created:function(){var t=this;this.id&&n.a.get("/empleados/"+this.id).then(function(e){console.log(e),e.data&&(t.empleado=e.data,t.isPatch=!0)})}}},dQVR:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"calendar"},[s("div",{staticClass:"month"},[s("ul",[s("li",{staticClass:"prev"},[s("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.anterior}},[s("i",{staticClass:"fa fa-chevron-left fa-2x"})])]),s("li",{staticClass:"next"},[s("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.siguiente}},[s("i",{staticClass:"fa fa-chevron-right fa-2x"})])]),s("li",[s("b",[t._v(t._s(t.meses[t.info.mesActual-1]))]),s("br"),s("span",[t._v(t._s(t.info.anio))])])])]),s("ul",{staticClass:"weekdays"},t._l(t.weekdays,function(e){return s("li",[t._v(t._s(e))])})),s("div",{staticClass:"row days"},t._l(t.dias,function(e){return s("div",{staticClass:"calendar-day",class:t.dayClass(e),on:{click:function(s){t.openDetail(e)}}},[s("div",{staticClass:"day-label"},[s("span",[t._v(t._s(e))])]),s("dia",{attrs:{eventos:t._f("attEvent")(t.asistencia,e)}})],1)})),s("b-modal",{ref:"attModal",attrs:{title:t.modalTitle,closeTitle:"Cerrar",okTitle:"Actualizar asistencia"},on:{ok:t.updateAtt}},[s("div",{staticClass:"d-block"},[s("b-form-group",{attrs:{label:"Marcar la asistencia de este día como","label-for":"status"}},[s("b-form-select",{attrs:{id:"status",options:t.statuses,required:"required"},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),s("b-form-textarea",{attrs:{id:"observaciones",placeholder:"Observaciones",rows:3,"max-rows":6},model:{value:t.observaciones,callback:function(e){t.observaciones=e},expression:"observaciones"}}),s("hr"),t.selectedDay?s("div",[s("p",[t._v("Eventos Registrados:")]),s("div",{staticClass:"alert alert-info"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("b",[t._v("Entrada: ")]),t.selectedDay.entradaEvt?s("span",[t._v(t._s(t._f("zeroFill")(t.selectedDay.entradaEvt.hora))+":"+t._s(t._f("zeroFill")(t.selectedDay.entradaEvt.minuto))+" hrs.")]):s("span",[t._v("No definido.")])]),s("div",{staticClass:"col-6"},[s("b",[t._v("Salida: ")]),t.selectedDay.salidaEvt?s("span",[t._v(t._s(t._f("zeroFill")(t.selectedDay.salidaEvt.hora))+":"+t._s(t._f("zeroFill")(t.selectedDay.salidaEvt.minuto))+" hrs.")]):s("span",[t._v("No definido.")])])])])]):s("div",{staticClass:"alert alert-secondary"},[t._v("Sin eventos registrados")])],1)])],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},euDc:function(t,e,s){"use strict";var a=s("xT7b");e.a=a.a},fcFS:function(t,e,s){"use strict";var a=s("qRo1");e.a=a.a},ff44:function(t,e){},kJiG:function(t,e,s){"use strict";var a=s("9NuQ");e.a=a.a},nzti:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dia"},[t.eventos.length>0?s("div",[s("i",{staticClass:"fa fa-2x",class:t.statusClass,attrs:{title:t.evento.status}}),s("div",{staticClass:"container event-container"},[s("div",{staticClass:"row",class:t.eventsClass},[t.evento.entradaEvt?s("div",{staticClass:"col-lg-6",attrs:{title:"Entrada"}},[s("b-badge",{attrs:{variant:"success"}},[s("span",[t._v(t._s(t._f("zeroFill")(t.evento.entradaEvt.hora))+":"+t._s(t._f("zeroFill")(t.evento.entradaEvt.minuto)))])])],1):t._e(),t.evento.salidaEvt?s("div",{staticClass:"col-lg-6",attrs:{title:"Salida"}},[s("b-badge",{attrs:{variant:"info"}},[s("span",[t._v(t._s(t._f("zeroFill")(t.evento.salidaEvt.hora))+":"+t._s(t._f("zeroFill")(t.evento.salidaEvt.minuto)))])])],1):t._e()])])]):t._e()])},n=[],i={render:a,staticRenderFns:n};e.a=i},pM64:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form"},[s("b-form",{on:{submit:t.onSubmit}},[s("h3",[t._v("Datos generales")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-1"},[s("b-form-group",{attrs:{id:"grupo1",label:"UserId","label-for":"userid"}},[t.isPatch?s("span",[t._v(t._s(t.form.userid))]):t._e(),t.isPatch?t._e():s("b-form-input",{attrs:{id:"userid",placeholder:"Último ID"},model:{value:t.form.userid,callback:function(e){t.$set(t.form,"userid",e)},expression:"form.userid"}})],1)],1),s("div",{staticClass:"col"},[s("b-form-group",{attrs:{id:"grupo1",label:"Nombre *","label-for":"nombre"}},[s("b-form-input",{attrs:{id:"nombre",placeholder:"Nombre completo del empleado",required:"required"},model:{value:t.form.nombre,callback:function(e){t.$set(t.form,"nombre",e)},expression:"form.nombre"}})],1)],1),s("div",{staticClass:"col-2"},[s("b-form-group",{attrs:{id:"grupoRFc",label:"RFC","label-for":"rfc"}},[s("b-form-input",{attrs:{id:"rfc"},model:{value:t.form.rfc,callback:function(e){t.$set(t.form,"rfc",e)},expression:"form.rfc"}})],1)],1),s("div",{staticClass:"col"},[s("b-form-group",{attrs:{id:"grupo2",label:"Adscripción *","label-for":"adscripcion"}},[s("b-form-input",{attrs:{id:"adscripcion",required:"required"},model:{value:t.form.adscripcion,callback:function(e){t.$set(t.form,"adscripcion",e)},expression:"form.adscripcion"}})],1)],1)]),s("h3",[t._v("Horario")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("b-form-group",{attrs:{id:"grupo3",label:"Hora de entrada *","label-for":"entrada"}},[s("b-form-input",{attrs:{id:"entrada",type:"time",required:"required"},model:{value:t.form.entrada,callback:function(e){t.$set(t.form,"entrada",e)},expression:"form.entrada"}})],1)],1),s("div",{staticClass:"col"},[s("b-form-group",{attrs:{id:"grupo6",label:"Hora de salida *","label-for":"salida",required:"required"}},[s("b-form-input",{attrs:{id:"salida",type:"time",required:"required"},model:{value:t.form.salida,callback:function(e){t.$set(t.form,"salida",e)},expression:"form.salida"}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("b-form-group",{attrs:{id:"grupo4",label:"Hora de salida a comer","label-for":"salidacomer"}},[s("b-form-input",{attrs:{id:"salidacomer",type:"time"},model:{value:t.form.salidacomer,callback:function(e){t.$set(t.form,"salidacomer",e)},expression:"form.salidacomer"}})],1)],1),s("div",{staticClass:"col"},[s("b-form-group",{attrs:{id:"grupo5",label:"Hora de entrada de comer","label-for":"entradacomer"}},[s("b-form-input",{attrs:{id:"entradacomer",type:"time"},model:{value:t.form.entradacomer,callback:function(e){t.$set(t.form,"entradacomer",e)},expression:"form.entradacomer"}})],1)],1)]),s("div",{staticClass:"btn-form-group"},[s("router-link",{staticClass:"btn btn-secondary",attrs:{to:{name:"asistenciaGeneral"}}},[t._v("Regresar")]),s("b-button",{attrs:{type:"submit",variant:"success"}},[t._v(t._s(t.isPatch?"Actualizar registro":"Registrar nuevo empleado"))])],1)])],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},pMZz:function(t,e,s){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},qSdX:function(t,e,s){"use strict";function a(t){s("Orh2")}var n=s("pMZz"),i=s("+K8V"),r=s("VU/8"),o=a,c=r(n.a,i.a,!1,o,"data-v-bb47b6d2",null);e.a=c.exports},r15W:function(t,e,s){"use strict";function a(t){s("WT8W")}var n=s("xKc6"),i=s("VU/8"),r=a,o=i(n.a,null,!1,r,null,null);e.a=o.exports},rCls:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v(t._s(t.isPatch?"Actualizar datos del empleado":"Registro de empleados"))]),s("hr"),s("empleado-form",{attrs:{empleado:t.empleado,isPatch:t.isPatch},on:{save:t.save}})],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},rwh1:function(t,e,s){"use strict";var a=s("c/Tr"),n=s.n(a),i=s("0zyd"),r=s("LjY/"),o=s("PJh5"),c=s.n(o);c.a.locale("es"),e.a={name:"Calendar",components:{dia:r.a},props:["info","userid"],data:function(){return{eventos:[],meses:c.a.months(),asistencia:[],statuses:[{text:"Seleccione uno",value:null},"PUNTUALIDAD","ASISTENCIA","RETARDO RECUPERABLE","RETARDO MAYOR","COMISIÓN","OMISIÓN DE ENTRADA","OMISIÓN DE SALIDA","INASISTENCIA","LICENCIA MEDICA","NO LABORAL","PERIODO VACACIONAL","PENDIENTE"],selectedStatus:null,observaciones:null,weekdays:c.a.weekdaysMin(),selectedDay:{},modalTitle:"",dia:null}},filters:{attEvent:function(t,e){return t.filter(function(t){return t.dia===parseInt(e)})},zeroFill:function(t){var e=2-t.toString().length;return e>0?new Array(e+(/\./.test(t)?2:1)).join("0")+t:t+""}},computed:{dias:function(){var t=c()({y:this.info.anio,M:this.info.mesActual-1,d:1}),e=c()({y:this.info.anio,M:this.info.mesActual-1,d:1}).add(1,"month").subtract(1,"day");return(t.day()>=1?n()(new Array(t.day()),function(t,e){return""}):[]).concat(n()(new Array(e.date()),function(t,e){return e+1}))}},watch:{userid:function(t){this.getEvents()}},methods:{anterior:function(){this.$emit("anterior"),this.getEvents()},siguiente:function(){this.$emit("siguiente"),this.getEvents()},getEvents:function(){var t=this;i.a.get("/asistencia",{params:{userid:this.userid,anio:this.info.anio,mes:this.info.mesActual}}).then(function(e){t.asistencia=e.data.data,t.$forceUpdate()})},dayClass:function(t){return{data:t>=1,empty:""===t}},openDetail:function(t){var e=this;t&&(this.dia=t,this.modalTitle="Asistencia del día "+t+" de "+this.meses[this.info.mesActual-1],this.selectedStatus=null,this.observaciones=null,i.a.get("/asistencia",{params:{userid:this.userid,anio:this.info.anio,mes:this.info.mesActual,dia:t}}).then(function(t){e.selectedDay=t.data.data[0],e.selectedDay&&(e.selectedStatus=e.statuses.indexOf(e.selectedDay.status)>=0?e.selectedDay.status:null),e.selectedDay&&(e.observaciones=e.selectedDay.observaciones),e.$refs.attModal.show(),e.$forceUpdate()}))},updateAtt:function(){var t=this,e="/asistencia"+(this.selectedDay?"/"+this.selectedDay.id:""),a={userid:this.userid,anio:this.info.anio,mes:this.info.mesActual,dia:this.dia,observaciones:this.observaciones,status:this.selectedStatus},n=this.selectedDay?"patch":"post";s.i(i.a)({method:n,url:e,data:a}).then(function(e){t.getEvents()})}},created:function(){this.getEvents()}}},sLPG:function(t,e,s){"use strict";var a=s("d7EF"),n=s.n(a),i=s("W3Iv"),r=s.n(i),o=s("DmT9"),c=s.n(o),l=c()("http://192.168.30.68:3000/czs");e.a={name:"listaDispositivos",data:function(){return{czs:[],ubicaciones:{}}},methods:{sync:function(t){l.emit("reqSync",t)}},watch:{ubicaciones:function(){var t=this;this.czs=[],r()(this.ubicaciones).forEach(function(e){var s=n()(e,2),a=(s[0],s[1]);t.czs.push(a)})}},created:function(){l.close(),l.open();var t=this;l.on("connect",function(){l.emit("reqZonas")}),l.on("menssages",function(){console.log("mensaje")}),l.on("reconnect",function(){l.emit("reqZonas")}),l.on("online",function(e){t.ubicaciones=e.coordinaciones}),l.on("logSync",function(e){e.hasOwnProperty("zona")&&(t.ubicaciones[e.zona].mensaje=e.mensaje,t.ubicaciones[e.zona].online=e.online)})}}},sU4x:function(t,e,s){"use strict";var a=s("0zyd");e.a={name:"empleado-list",data:function(){return{search:"",msg:"Empleados",empleados:[]}},computed:{filteredEmpleados:function(){var t=this;return t.empleados.filter(function(e){return-1!==e.nombre.toLowerCase().indexOf(t.search.toLowerCase())||-1!==e.adscripcion.toLowerCase().indexOf(t.search.toLowerCase())||e.userid===parseInt(t.search)})}},methods:{selectEmpleado:function(t){this.$emit("selectedEmp",t)}},created:function(){var t=this;console.log("Created"),a.a.get("/empleados").then(function(e){console.log(e),t.empleados=e.data.data})}}},ujvY:function(t,e,s){"use strict";function a(t){s("N03N")}var n=s("rwh1"),i=s("dQVR"),r=s("VU/8"),o=a,c=r(n.a,i.a,!1,o,null,null);e.a=c.exports},urb5:function(t,e,s){"use strict";var a=s("I4+c"),n=s("ujvY"),i=s("PJh5"),r=s.n(i);e.a={name:"Asistencia",components:{"empleado-list":a.a,calendar:n.a},methods:{updateSelected:function(t){this.empleado=t},mesAnterior:function(){1===this.info.mesActual?(this.info.mesActual=12,this.info.anio--):this.info.mesActual--},mesSiguiente:function(){12===this.info.mesActual?(this.info.mesActual=1,this.info.anio++):this.info.mesActual++}},data:function(){return{msg:":p",empleado:null,info:{mesActual:r()().month()+1,anio:2017}}}}},uslO:function(t,e,s){function a(t){return s(n(t))}function n(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="uslO"},wmKd:function(t,e){},wwPY:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info",fixed:"top"}},[s("b-nav-toggle",{attrs:{target:"nav_collapse"}}),s("b-navbar-brand",{attrs:{href:"#/asistencia"}},[t._v("Control de asistencia")]),s("b-collapse",{attrs:{"is-nav":"is-nav",id:"nav_collapse"}},[s("b-nav",{attrs:{"is-nav-bar":"is-nav-bar"}},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/empleados/registro","active-class":"active"}},[t._v("Registro de emplado")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/dispositivos","active-class":"active"}},[t._v("Dispositivos en línea")])],1)])],1)],1),s("div",{staticClass:"container-fluid main"},[s("router-view")],1)],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},xJD8:function(t,e,s){"use strict";e.a={name:"app"}},xKc6:function(t,e,s){"use strict";var a=s("E9Zr");e.a=a.a},xsoF:function(t,e,s){"use strict";var a=s("bl7x"),n=s("rCls"),i=s("VU/8"),r=i(a.a,n.a,!1,null,null,null);e.a=r.exports}},["NHnr"]);
//# sourceMappingURL=app.d63b41082e87158d05c5.js.map