(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"0b9c":function(t,e){},"1e69":function(t,e,a){"use strict";var n=a("0b9c"),o=a.n(n);e["default"]=o.a},"1eca":function(t,e,a){},2939:function(t,e,a){"use strict";var n=a("4470"),o=a.n(n);o.a},"3ca7":function(t,e,a){"use strict";var n=a("7c62"),o=a.n(n);o.a},4470:function(t,e,a){},"55b4":function(t,e,a){"use strict";var n=a("70a6"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-nav"),a("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{staticClass:"navbar navbar-expand-md navbar-light bg-light",staticStyle:{"padding-left":"30px"}},[a("div",{staticClass:"navbar-nav"},[a("b-navbar-brand",[t._v("UTC User Personas")]),a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/persona"}},[t._v("API Sample")]),a("router-link",{attrs:{to:"/product"}},[t._v("API Sample")]),a("router-link",{attrs:{to:"/login"}},[t._v("API Sample")])],1)])],1)},s=[],l=(a("5b493"),a("2877")),c={},d=Object(l["a"])(c,i,s,!1,null,null,null),u=d.exports,f={name:"app",components:{"app-nav":u},data:function(){return{authenticated:!0,mockAccount:{username:"nraboy",password:"password"}}}},p=f,m=(a("034f"),Object(l["a"])(p,o,r,!1,null,null,null)),v=m.exports,h=a("5f5b"),b=a("1052"),_=a.n(b),g=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("nav",{staticClass:"sidepanel-left",attrs:{id:"left-sidepanel"}},[a("a",{staticClass:"nav-link active",attrs:{href:"javascript:void(0)",id:"Cards"},on:{click:function(e){t.changeView("card"),t.closeNav()}}},[a("i",{staticClass:"fa fa-user"})]),a("a",{staticClass:"nav-link active",attrs:{href:"javascript:void(0)",id:"Table"},on:{click:function(e){return t.changeView("table")}}},[a("i",{staticClass:"fa fa-list"})]),a("a",{staticClass:"nav-link active",attrs:{href:"javascript:void(0)",id:"Detail"},on:{click:function(e){return t.expandDetail()}}},[a("i",{staticClass:"fa fa-align-left"})]),a("a",{staticClass:"nav-link active",attrs:{href:"javascript:void(0)",id:"Add","data-toggle":"tooltip",title:"Add"},on:{click:function(e){t.refreshData(),t.expandDetail()}}},[a("i",{staticClass:"fa fa-plus"})])]),"table"===t.view?a("div",{key:t.view,staticClass:"container-fluid",attrs:{id:"persona-panel"}},[a("div",[a("b-modal",{attrs:{id:"my-modal"}},[a("persona-add")],1),a("persona-data")],1)]):t._e(),"card"===t.view?a("div",{key:t.view},[a("persona-card")],1):t._e(),a("div",{staticClass:"sidepanel-right",attrs:{id:"right-sidepanel"}},[a("a",{staticClass:"closebtn",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.refreshData(),t.closeDetail()}}},[t._v("×")]),a("div",{attrs:{id:"side-panel-switcher"}},[a("persona-detail",{key:t.componentKey})],1)]),a("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}})])},x=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"test-header row",staticStyle:{margin:"15px"}},[a("div",{staticClass:"col-2"},[t._v(" Selection: "),a("span",{attrs:{id:"selectedRows"}}),a("span",{attrs:{selectedRow:t.selectedRow}})]),t._m(0)]),a("ag-grid-vue",{staticClass:"ag-theme-balham",staticStyle:{width:"100%",height:"500px"},attrs:{columnDefs:t.columnDefs,rowData:t.rowData,modules:t.modules,rowSelection:"single"},on:{"grid-ready":t.onGridReady,"selection-changed":t.onSelectionChanged}})],1)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-2"},[a("span",[t._v(" Search: ")]),a("input",{attrs:{type:"text",id:"filter-text-box",placeholder:"Filter...",oninput:"onFilterTextBoxChanged()"}})])}],k=(a("4160"),a("b0c0"),a("d3b7"),a("159b"),a("228c")),$=a("0d1d"),D=new n["default"],E={name:"PersonaTable",data:function(){return{columnDefs:null,rowData:null,rowSelection:null,gridApi:null,gridOptions:null,modules:$["a"],selectedRow:null,defaultColDef:null}},components:{AgGridVue:k["AgGridVue"]},methods:{onGridReady:function(t){this.gridApi=t.api,this.columnApi=t.columnApi},onSelectionChanged:function(){var t=this.gridApi.getSelectedRows(),e="",a="";t.forEach((function(t,n){0!==n&&(e+=", "),e+=t.name,a=t.id})),document.querySelector("#selectedRows").innerHTML=e,D.$emit("selection-changed",this.selectedRow=a)},onFilterTextBoxChanged:function(){gridOptions.api.setQuickFilter(document.getElementById("filter-text-box").value)}},beforeMount:function(){var t=this;this.columnDefs=[{headerName:"Name",field:"name",width:200},{headerName:"Title",field:"title",filter:"agTextColumnFilter",width:200},{headerName:"Quote",field:"quote",filter:"agTextColumnFilter",width:400},{headerName:"Internal or External",field:"external",width:50,headerTooltip:"Flag if external",filter:!0},{headerName:"Function",field:"job_function",filter:"agTextColumnFilter",width:400},{headerName:"Market Size",field:"market_size",filter:!0,width:50}],this.defaultColDef={sortable:!0,resizable:!0,filter:!0,getQuickFilterText:function(t){return t.value.name}},this.gridOptions={},this.rowSelection="single",this.gridOptions.rowHeight=200,fetch("http://localhost:5000/api/persona-table").then((function(t){return t.json()})).then((function(e){return t.rowData=e}))},mounted:function(){var t=this;D.$on("persona-table-changed",(function(){this.gridApi.redrawRows()})),this.$nextTick((function(){fetch("http://localhost:5000/api/persona-table").then((function(t){return t.json()})).then((function(e){return t.rowData=e}))}))}},S=E,j=Object(l["a"])(S,y,C,!1,null,null,null),A=j.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-right":"15px","margin-left":"15px"}},[n("b-form",{attrs:{id:"persona-detail"},on:{submit:t.onEdit,reset:t.onReset,archive:t.onArchive}},[!1===t.editing&&null!=t.form.id?n("div",{attrs:{id:"persona-detail-show"}},[n("h1",[t._v("Detail")]),n("span",[t._v(" Persona ID: "+t._s(t.form.id)+" | Revision: "+t._s(t.form.revision)+" ")]),n("div",{},[n("div",{},[n("img",{staticClass:"avatar",attrs:{src:a("d74c"),alt:"Avatar"}})]),n("label",{attrs:{for:"Name"}},[t._v("Name")]),n("div",{staticClass:"panel-group"},[t._v(" "+t._s(t.form.name)+" ")]),n("label",{attrs:{for:"Title"}},[t._v("Title")]),n("p",{staticClass:"text-wrap"},[t._v(" "+t._s(t.form.title)+" ")]),n("label",{attrs:{for:"external"}},[t._v("Internal or External?")]),n("p",{staticClass:"text-wrap"},[t._v(" "+t._s(t.form.external)+" ")]),n("label",{attrs:{for:"qty"}},[t._v("Number people who fit this persona")]),n("p",[t._v(" "+t._s(t.form.market_size)+" ")]),n("label",{attrs:{for:"quote"}},[t._v("Persona Quote")]),n("p",[t._v(" "+t._s(t.form.quote)+" ")]),n("label",{attrs:{for:"function"}},[t._v("Job Function")]),n("p",{staticClass:"text-wrap"},[t._v(" "+t._s(t.form.job_function)+" ")]),n("label",{staticStyle:{"white-space":"pre-line"},attrs:{for:"needs"}},[t._v("Needs")]),n("p",[t._v(" "+t._s(t.form.needs)+" ")]),n("label",{staticStyle:{"white-space":"pre-line"},attrs:{for:"wants"}},[t._v("Wants")]),n("p",[t._v(" "+t._s(t.form.wants)+" ")]),n("label",{attrs:{for:"pain_point"}},[t._v("Pain Points")]),n("p",[t._v(" "+t._s(t.form.pain_point)+" ")]),n("label",{attrs:{for:"buss_val"}},[t._v("value to business")]),n("b-form-input",{attrs:{type:"range",min:"0",max:"5"},model:{value:t.form.buss_val,callback:function(e){t.$set(t.form,"buss_val",e)},expression:"form.buss_val"}}),n("label",[t._v("Associated Products")]),t._l(t.form.product,(function(e){return n("div",{key:e},[n("b-button",{attrs:{pill:"",variant:"info"}},[t._v(t._s(e.product_name))])],1)})),n("div",{staticClass:"mt-2"},[t._v("Value: "+t._s(t.form.buss_val))]),n("label",{attrs:{for:"persona_file"}},[t._v("Add File")]),n("p",[t._v(" "+t._s(t.form.persona_file)+" ")])],2),n("b-button",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.editing=!0}}},[t._v("Edit")]),n("hr"),n("h4",[t._v("Comments")]),n("comment-view",{key:t.form.id,attrs:{sourceTable:t.source,itemId:t.form.id}})],1):n("div",{attrs:{id:"persona-detail-edit"}},[null!=t.form.id?n("h1",[t._v("Edit")]):n("h1",[t._v("Add")]),n("div",[n("label",{attrs:{for:"Name"}},[t._v("Name")]),n("b-form-input",{attrs:{name:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),n("label",{attrs:{for:"Title"}},[t._v("Title")]),n("b-form-input",{attrs:{id:"Title",name:"Title"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),n("div",{},[n("label",{attrs:{for:"external"}},[t._v("Internal or External?")]),n("b-form-radio",{attrs:{name:"some-radios",value:"1"},model:{value:t.form.external,callback:function(e){t.$set(t.form,"external",e)},expression:"form.external"}},[t._v("External")]),n("b-form-radio",{attrs:{name:"some-radios",value:"0"},model:{value:t.form.external,callback:function(e){t.$set(t.form,"external",e)},expression:"form.external"}},[t._v("Internal")])],1),n("label",{attrs:{for:"qty"}},[t._v("Number people who fit this persona")]),n("b-form-input",{attrs:{type:"number",id:"qty",name:"qty"},model:{value:t.form.market_size,callback:function(e){t.$set(t.form,"market_size",e)},expression:"form.market_size"}}),n("label",{attrs:{for:"quote"}},[t._v("Persona Quote")]),n("b-form-textarea",{attrs:{id:"quote",name:"quote"},model:{value:t.form.quote,callback:function(e){t.$set(t.form,"quote",e)},expression:"form.quote"}}),n("label",{attrs:{for:"function"}},[t._v("Job Function")]),n("b-form-textarea",{attrs:{id:"function",name:"function"},model:{value:t.form.job_function,callback:function(e){t.$set(t.form,"job_function",e)},expression:"form.job_function"}}),n("label",{attrs:{for:"needs"}},[t._v("Needs")]),n("b-form-textarea",{attrs:{id:"needs",name:"needs"},model:{value:t.form.needs,callback:function(e){t.$set(t.form,"needs",e)},expression:"form.needs"}}),n("label",{attrs:{for:"wants"}},[t._v("Wants")]),n("b-form-textarea",{attrs:{id:"wants",name:"wants"},model:{value:t.form.wants,callback:function(e){t.$set(t.form,"wants",e)},expression:"form.wants"}}),n("label",{attrs:{for:"pain-point"}},[t._v("Pain Points")]),n("b-form-textarea",{attrs:{id:"pain_point",name:"pain_point"},model:{value:t.form.pain_point,callback:function(e){t.$set(t.form,"pain_point",e)},expression:"form.pain_point"}}),n("label",{attrs:{for:"buss-val"}},[t._v("value to business")]),n("b-form-input",{attrs:{type:"range",min:"0",max:"5"},model:{value:t.form.buss_val,callback:function(e){t.$set(t.form,"buss_val",e)},expression:"form.buss_val"}}),n("div",{staticClass:"mt-2"},[t._v("Value: "+t._s(t.form.buss_val))]),n("br"),n("label",{attrs:{for:"product-select"}},[t._v("Add Product: ")]),n("br"),n("b-dropdown",{staticClass:"m-2",attrs:{text:"product list",block:"",variant:"info","menu-class":"w-100"}},[n("b-form-select",{attrs:{options:t.options,name:"product-select",multiple:"","select-size":12,size:"lg"},model:{value:t.form.product,callback:function(e){t.$set(t.form,"product",e)},expression:"form.product"}})],1),n("br"),n("div",[t._v("Selected: "),n("strong",[t._v(t._s(t.form.product))])])],1),n("div",[n("label",{attrs:{for:"persona_file"}},[t._v("Add File")]),n("b-form-file",{attrs:{state:Boolean(t.form.persona_file),name:"persona_file",placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.form.persona_file,callback:function(e){t.$set(t.form,"persona_file",e)},expression:"form.persona_file"}})],1),null!=t.form.id?n("div",{attrs:{id:"button-if"}},[n("b-button",{attrs:{type:"reset",variant:"secondary"}},[t._v("Return")]),n("b-button",{attrs:{type:"button",variant:"danger"},on:{click:t.onArchive}},[t._v(" Archive")]),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit Changes")])],1):n("div",{},[n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Add New Persona")])],1)])])],1)},O=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{key:t.componentKey,staticClass:"container"},[t._l(t.comments,(function(e){return a("div",{key:e.id,staticClass:"col-5"},[null===e.action?a("div",{},[a("span",[t._v(" "+t._s(e.creator_id)+" commented on "+t._s(e.create_date)+" ")]),a("br"),a("p",{staticClass:"well"},[t._v(" "+t._s(e.comment_body)+" ")])]):a("div",{},[a("i",{staticClass:"fa fa-edit"}),a("span",[t._v(" "+t._s(e.creator_id)+" "+t._s(e.action)+" "+t._s(e.create_date)+" ")])])])})),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-add-comment",expression:"'collapse-add-comment'"}],attrs:{variant:"success"}},[t._v("Add Comment")]),a("b-collapse",{attrs:{id:"collapse-add-comment"}},[a("b-form-textarea",{model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}}),a("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.addComment()}}},[t._v("Submit")])],1)],2)},N=[],R={data:function(){return{componentKey:0,comments:{},form:{comment:""}}},props:["sourceTable","itemId"],mounted:function(){var t=this,e="http://localhost:5000/api/comments/"+this.sourceTable+"/"+this.itemId;_.a.get(e).then((function(e){t.comments=e.data})).catch((function(t){return console.log(t)}))},methods:{addComment:function(){var t=null,e={source_id:this.itemId,source_table:this.sourceTable,comment_body:this.form.comment,action:t,downchange:t,upchange:t},a="http://localhost:5000/api/comments/"+this.sourceTable+"/"+this.itemId;_()({method:"post",url:a,data:e}).then((function(t){console.log(t),D.$emit("comments-added",e),this.$forceUpdate(),this.componentKey+=1})).catch((function(t){console.log(t)}))}}},F=R,I=Object(l["a"])(F,T,N,!1,null,null,null),B=I.exports,q={name:"persona-details",components:{"comment-view":B},data:function(){return{form:{id:null,name:"",title:"",external:"",market_size:"",quote:"",job_function:"",needs:"",wants:"",pain_point:"",buss_val:"",revision:"",product:[{product_id:"",product_name:""}],persona_photo:"",persona_file:null},editing:!1,source:"PERSONA",options:[{value:"EngineWise",text:"EngineWise"},{value:"PWX",text:"PWX"},{value:"Connected Factory",text:"Connected Factory"}]}},beforeMount:function(){var t=this;_.a.get("http://localhost:5000/api/products").then((function(e){t.options=e.data})).catch((function(t){return console.log(t)})),D.$on("selection-changed",(function(e){var a="http://localhost:5000/api/persona-table/";a+=e,_.a.get(a).then((function(a){t.form.id=e,t.form.name=a.data[0].name,t.form.title=a.data[0].title,t.form.external=a.data[0].external,t.form.market_size=a.data[0].market_size,t.form.quote=a.data[0].quote,t.form.job_function=a.data[0].job_function,t.form.needs=a.data[0].needs,t.form.wants=a.data[0].wants,t.form.pain_point=a.data[0].pain_point,t.form.buss_val=a.data[0].buss_val,t.form.revision=a.data[0].revision,t.form.product=a.data[0].product,t.editing=!1})).catch((function(t){return console.log(t)}))}))},methods:{onEdit:function(t){t.preventDefault(),_()({method:"put",url:"http://localhost:5000/api/persona-table",data:this.form}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),D.$emit("persona-table-changed","item-updated"),document.getElementById("mySidepanel").style.width="0px"},onAdd:function(t){t.preventDefault(),_()({method:"post",url:"http://localhost:5000/api/persona-table",data:this.form}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),D.$emit("persona-table-changed","item-updated"),document.getElementById("mySidepanel").style.width="0px"},onReset:function(t){t.preventDefault(),this.editing=!1},onArchive:function(t){t.preventDefault();var e="http://localhost:5000/api/persona-table/";e+=this.form.id;var a={archived:1};console.log(e),_()({method:"PUT",url:e,data:a}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),console.log("delete"),D.$emit("persona-table-changed",a),document.getElementById("mySidepanel").style.width="0px"}}},M=q,z=(a("3ca7"),Object(l["a"])(M,P,O,!1,null,"493ef45d",null)),G=z.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",staticStyle:{"margin-top":"0px"}},[t._m(0),n("br"),n("b-card-group",{attrs:{columns:""}},t._l(t.cards,(function(e){return n("b-card",{key:e.id,staticClass:"card"},[n("div",{},[n("img",{staticClass:"avatar",attrs:{src:a("d74c"),alt:"Avatar"}})]),n("b-card-text",[n("span",[t._v(" "+t._s(e.name)+" the "+t._s(e.title)+" ")]),n("p",{staticClass:"well"},[t._v(" "+t._s(e.quote)+" ")]),n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-"+e.id,expression:"'collapse-'+card.id"}],attrs:{variant:"outline-secondary"}},[t._v("More Detail")]),n("b-button",{attrs:{href:"javascript:void(0)",variant:"outline-secondary"},on:{click:function(a){return t.OpenDetail(e.id)}}},[t._v("Open Persona")]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-"+e.id}},[n("label",{attrs:{for:"function"}},[t._v("Job Function")]),n("p",{staticClass:"text-wrap"},[t._v(" "+t._s(e.job_function)+" ")]),n("label",{staticStyle:{"white-space":"pre-line"},attrs:{for:"needs"}},[t._v("Needs")]),n("p",[t._v(" "+t._s(e.needs)+" ")]),n("label",{staticStyle:{"white-space":"pre-line"},attrs:{for:"wants"}},[t._v("Wants")]),n("p",[t._v(" "+t._s(e.wants)+" ")]),n("label",{attrs:{for:"pain_point"}},[t._v("Pain Points")]),n("p",[t._v(" "+t._s(e.pain_point)+" ")])])],1)],1)})),1)],1)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-form mt-0",attrs:{id:"card-search"}},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search for user persona","aria-label":"Search"}})])}],K={data:function(){return{cards:{}}},beforeMount:function(){var t=this,e="http://localhost:5000/api/persona-table";_.a.get(e).then((function(e){t.cards=e.data})).catch((function(t){return console.log(t)}))},methods:{OpenDetail:function(t){D.$emit("selection-changed",this.selectedRow=t)}}},H=K,U=(a("c17f"),Object(l["a"])(H,V,W,!1,null,"faec93d6",null)),Q=U.exports,J={name:"persona-panel",components:{"persona-data":A,"persona-detail":G,"persona-card":Q},data:function(){return{componentKey:0,view:"card"}},methods:{closeDetail:function(){document.getElementById("right-sidepanel").style.width="0px"},closeNav:function(){document.getElementById("left-sidepanel").style="left: -115px"},expandDetail:function(){document.getElementById("right-sidepanel").style.width="80%"},refreshData:function(){this.componentKey+=1,D.$emit("selection-changed",this.selectedRow="0")},changeView:function(t){this.view=t}}};D.$on("selection-changed",(function(){document.getElementById("right-sidepanel").style.width="500px"}));var L=J,X=(a("8821"),Object(l["a"])(L,w,x,!1,null,"0a55df8c",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("nav",{staticClass:"sidepanel-left",attrs:{id:"left-sidepanel"}},[a("a",{staticClass:"nav-link active",attrs:{href:"javascript:void(0)",id:"Cards"},on:{click:function(e){t.changeView("card"),t.closeNav()}}},[a("i",{staticClass:"fa fa-user"})]),a("a",{staticClass:"nav-link active",attrs:{href:"javascript:void(0)",id:"Table"},on:{click:function(e){return t.changeView("table")}}},[a("i",{staticClass:"fa fa-list"})]),a("a",{staticClass:"nav-link active",attrs:{href:"javascript:void(0)",id:"Detail"},on:{click:function(e){return t.expandDetail()}}},[a("i",{staticClass:"fa fa-align-left"})]),a("a",{staticClass:"nav-link active",attrs:{href:"javascript:void(0)",id:"Add","data-toggle":"tooltip",title:"Add"},on:{click:function(e){t.refreshData(),t.expandDetail()}}},[a("i",{staticClass:"fa fa-plus"})])]),"table"===t.view?a("div",{key:t.view,staticClass:"container-fluid",attrs:{id:"product-panel"}},[a("div",[a("b-modal",{attrs:{id:"my-modal"}},[a("product-add")],1),a("product-data")],1)]):t._e(),"card"===t.view?a("div",{key:t.view},[a("product-card")],1):t._e(),a("div",{staticClass:"sidepanel-right",attrs:{id:"right-sidepanel"}},[a("a",{staticClass:"closebtn",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.refreshData(),t.closeDetail()}}},[t._v("×")]),a("div",{attrs:{id:"side-panel-switcher"}},[a("product-detail",{key:t.componentKey})],1)]),a("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}})])},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"test-header row",staticStyle:{margin:"15px"}},[a("div",{staticClass:"col-2"},[t._v(" Selection: "),a("span",{attrs:{id:"selectedRows"}}),a("span",{attrs:{selectedRow:t.selectedRow}})]),t._m(0)]),a("ag-grid-vue",{staticClass:"ag-theme-balham",staticStyle:{width:"100vl",height:"500px"},attrs:{columnDefs:t.columnDefs,rowData:t.rowData,modules:t.modules,rowSelection:"single"},on:{"grid-ready":t.onGridReady,"selection-changed":t.onSelectionChanged}})],1)},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-2"},[a("span",[t._v(" Search: ")]),a("input",{attrs:{type:"text",id:"filter-text-box",placeholder:"Filter...",oninput:"onFilterTextBoxChanged()"}})])}],nt={name:"ProductTable",data:function(){return{columnDefs:null,rowData:null,rowSelection:null,gridApi:null,gridOptions:null,modules:$["a"],selectedRow:null,defaultColDef:null}},components:{AgGridVue:k["AgGridVue"]},methods:{onGridReady:function(t){this.gridApi=t.api,this.columnApi=t.columnApi},onSelectionChanged:function(){var t=this.gridApi.getSelectedRows(),e="",a="";t.forEach((function(t,n){0!==n&&(e+=", "),e+=t.name,a=t.id})),document.querySelector("#selectedRows").innerHTML=e,D.$emit("selection-changed",this.selectedRow=a)},onFilterTextBoxChanged:function(){gridOptions.api.setQuickFilter(document.getElementById("filter-text-box").value)}},beforeMount:function(){var t=this;this.columnDefs=[{headerName:"Name",field:"name",width:200},{headerName:"Description",field:"description",filter:"agTextColumnFilter",width:200},{headerName:"Goals",field:"goals",filter:"agTextColumnFilter",width:400},{headerName:"Features",field:"features",filter:"agTextColumnFilter",width:400},{headerName:"Owner",field:"owner",filter:!0,width:50}],this.defaultColDef={sortable:!0,resizable:!0,filter:!0,getQuickFilterText:function(t){return t.value.name}},this.gridOptions={},this.rowSelection="single",this.gridOptions.rowHeight=100,fetch("http://localhost:5000/api/product-table").then((function(t){return t.json()})).then((function(e){return t.rowData=e}))},mounted:function(){var t=this;D.$on("product-table-changed",(function(){this.gridApi.redrawRows()})),this.$nextTick((function(){fetch("http://localhost:5000/api/product-table").then((function(t){return t.json()})).then((function(e){return t.rowData=e}))}))}},ot=nt,rt=Object(l["a"])(ot,et,at,!1,null,null,null),it=rt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-right":"15px","margin-left":"15px"}},[a("b-form",{attrs:{id:"product-detail"},on:{submit:t.onEdit,reset:t.onReset,archive:t.onArchive}},[!1===t.editing&&null!=t.form.id?a("div",{attrs:{id:"product-detail-show"}},[a("h1",[t._v("Detail")]),a("span",[t._v(" Product ID: "+t._s(t.form.id)+" | Revision: "+t._s(t.form.revision)+" ")]),a("div",[a("label",[t._v("Name")]),a("p",{staticClass:"text-wrap"},[t._v(" "+t._s(t.form.name)+" ")]),a("label",[t._v("Description")]),a("p",{staticClass:"text-wrap"},[t._v(" "+t._s(t.form.description)+" ")]),a("label",[t._v("Metrics")]),a("p",{staticClass:"text-wrap"},[t._v(" "+t._s(t.form.metrics)+" ")]),a("label",[t._v("Product Features")]),a("p",{staticClass:"text-wrap"},[t._v(" "+t._s(t.form.features)+" ")]),a("label",[t._v("Goals")]),a("p",{staticClass:"text-wrap"},[t._v(" "+t._s(t.form.goals)+" ")]),a("label",{attrs:{for:"function"}},[t._v("Owner")]),a("p",{staticClass:"text-wrap"},[t._v(" "+t._s(t.form.owner)+" ")]),a("label",[t._v(" Product Homepage")]),a("p",[t._v(" "+t._s(t.form.product_homepage)+" ")])]),a("b-button",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.editing=!0}}},[t._v("Edit")]),a("hr"),a("h4",[t._v("Comments")]),a("comment-view",{key:t.form.id,attrs:{sourceTable:t.source,itemId:t.form.id}})],1):a("div",{attrs:{id:"product-detail-edit"}},[null!=t.form.id?a("h1",[t._v("Edit")]):a("h1",[t._v("Add")]),a("div",[a("label",[t._v("Name")]),a("b-form-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),a("label",[t._v("Description")]),a("b-form-textarea",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),a("label",[t._v("Metrics")]),a("b-form-textarea",{model:{value:t.form.metrics,callback:function(e){t.$set(t.form,"metrics",e)},expression:"form.metrics"}}),a("label",[t._v("Product Features")]),a("b-form-textarea",{model:{value:t.form.features,callback:function(e){t.$set(t.form,"features",e)},expression:"form.features"}}),a("label",[t._v("Goals")]),a("b-form-input",{model:{value:t.form.goals,callback:function(e){t.$set(t.form,"goals",e)},expression:"form.goals"}}),a("label",{attrs:{for:"function"}},[t._v("Owner")]),a("b-form-input",{model:{value:t.form.owner,callback:function(e){t.$set(t.form,"owner",e)},expression:"form.owner"}}),a("label",[t._v(" Product Homepage")]),a("b-form-input",{model:{value:t.form.product_homepage,callback:function(e){t.$set(t.form,"product_homepage",e)},expression:"form.product_homepage"}}),a("br"),a("br"),a("div",[t._v("Selected: "),a("strong",[t._v(t._s(t.form.persona))])])],1),a("div",[a("label",{attrs:{for:"product_file"}},[t._v("Add File")]),a("b-form-file",{attrs:{state:Boolean(t.form.product_file),name:"product_file",placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.form.product_file,callback:function(e){t.$set(t.form,"product_file",e)},expression:"form.product_file"}})],1),a("br"),null!=t.form.id?a("div",{attrs:{id:"button-if"}},[a("b-button",{attrs:{type:"reset",variant:"secondary"}},[t._v("Return")]),a("b-button",{attrs:{type:"button",variant:"danger"},on:{click:t.onArchive}},[t._v(" Archive")]),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit Changes")])],1):a("div",{},[a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Add New Persona")])],1)])])],1)},lt=[],ct=(a("a4d3"),a("e01a"),{name:"product-details",components:{"comment-view":B},data:function(){return{form:{id:null,name:"",title:"",external:"",market_size:"",quote:"",job_function:"",needs:"",wants:"",pain_point:"",buss_val:"",revision:"",product:"",product_photo:"",product_file:null},editing:!1,source:"PRODUCT",options:[{value:"EngineWise",text:"EngineWise"},{value:"PWX",text:"PWX"},{value:"Connected Factory",text:"Connected Factory"}]}},beforeMount:function(){var t=this;_.a.get("http://localhost:5000/api/personas").then((function(e){t.options=e.data})).catch((function(t){return console.log(t)})),D.$on("selection-changed",(function(e){var a="http://localhost:5000/api/product-table/";a+=e,_.a.get(a).then((function(a){t.form.id=e,t.form.name=a.data[0].name,t.form.description=a.data[0].description,t.form.metrics=a.data[0].metrics,t.form.goals=a.data[0].goals,t.form.features=a.data[0].features,t.form.owner=a.data[0].owner,t.form.product_homepage=a.data[0].product_homepage,t.form.revision=a.data[0].revision,t.editing=!1})).catch((function(t){return console.log(t)}))}))},methods:{onEdit:function(t){t.preventDefault(),_()({method:"post",url:"http://localhost:5000/api/product-table",data:this.form}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),D.$emit("product-table-changed","item-updated"),document.getElementById("mySidepanel").style.width="0px"},onAdd:function(t){t.preventDefault(),_()({method:"post",url:"http://localhost:5000/api/product-table",data:this.form}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),D.$emit("product-table-changed","item-updated"),document.getElementById("mySidepanel").style.width="0px"},onReset:function(t){t.preventDefault(),this.editing=!1},onArchive:function(t){t.preventDefault();var e="http://localhost:5000/api/product-table/";e+=this.form.id;var a={archived:1};console.log(e),_()({method:"PUT",url:e,data:a}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),console.log("delete"),D.$emit("product-table-changed",a),document.getElementById("mySidepanel").style.width="0px"}}}),dt=ct,ut=(a("cb9c"),Object(l["a"])(dt,st,lt,!1,null,"5f75d0a8",null)),ft=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("br"),a("b-card-group",{attrs:{columns:""}},t._l(t.cards,(function(e){return a("b-card",{key:e.id,staticClass:"card"},[a("b-card-text",[a("span",[t._v(" "+t._s(e.name)+" ")]),a("p",{staticClass:"well"},[t._v(" "+t._s(e.description)+" ")]),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-"+e.id,expression:"'collapse-'+card.id"}],attrs:{variant:"outline-secondary"}},[t._v("More Detail")]),a("b-button",{attrs:{href:"javascript:void(0)",variant:"outline-secondary"},on:{click:function(a){return t.OpenDetail(e.id)}}},[t._v("Open Product")]),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-"+e.id}},[a("label",[t._v("Product Goals")]),a("p",{staticClass:"text-wrap"},[t._v(" "+t._s(e.goals)+" ")]),a("label",[t._v("Features")]),a("p",[t._v(" "+t._s(e.features)+" ")]),a("label",[t._v("Owner")]),a("p",[t._v(" "+t._s(e.owner)+" ")]),a("label",[t._v("Product Home Page")]),a("p",[t._v(" "+t._s(e.product_homepage)+" ")])])],1)],1)})),1)],1)},mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-form mt-0",attrs:{id:"card-search"}},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search for user persona","aria-label":"Search"}})])}],vt={data:function(){return{cards:{}}},beforeMount:function(){var t=this,e="http://localhost:5000/api/product-table";_.a.get(e).then((function(e){t.cards=e.data})).catch((function(t){return console.log(t)}))},methods:{OpenDetail:function(t){D.$emit("selection-changed",this.selectedRow=t)}}},ht=vt,bt=(a("55b4"),Object(l["a"])(ht,pt,mt,!1,null,"3fc47f76",null)),_t=bt.exports,gt={name:"product-panel",components:{"product-data":it,"product-detail":ft,"product-card":_t},data:function(){return{componentKey:0,view:"card"}},methods:{closeNav:function(){document.getElementById("right-sidepanel").style.width="0px"},expandDetail:function(){document.getElementById("right-sidepanel").style.width="80%"},closeDetail:function(){document.getElementById("right-sidepanel").style.width="0px"},refreshData:function(){this.componentKey+=1,D.$emit("selection-changed",this.selectedRow="0")},changeView:function(t){this.view=t}}};D.$on("selection-changed",(function(){document.getElementById("right-sidepanel").style.width="500px"}));var wt=gt,xt=(a("a048"),Object(l["a"])(wt,Z,tt,!1,null,"76370d5e",null)),yt=xt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("h1",[t._v("Login")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.input.username},on:{input:function(e){e.target.composing||t.$set(t.input,"username",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}}),a("button",{attrs:{type:"button"},on:{click:function(e){return t.login()}}},[t._v("Login")])])},kt=[],$t=(a("ac1f"),a("5319"),{name:"Login",data:function(){return{input:{username:"",password:""}}},methods:{login:function(){""!=this.input.username&&""!=this.input.password?this.input.username==this.$parent.mockAccount.username&&this.input.password==this.$parent.mockAccount.password?(this.$emit("authenticated",!0),this.$router.replace({name:"secure"})):console.log("The username and / or password is incorrect"):console.log("A username and password must be present")}}}),Dt=$t,Et=(a("2939"),Object(l["a"])(Dt,Ct,kt,!1,null,"4d1a69bf",null)),St=Et.exports;a("be4d");n["default"].use(g["a"]);var jt=new g["a"]({routes:[{path:"/",redirect:{name:"login"}},{path:"/login",name:"login",component:St},{path:"/persona",name:"persona default",component:Y},{path:"/product",name:"product default",component:yt}]});a("e532"),a("8d63"),a("ab8b"),a("2dd8");n["default"].config.productionTip=!1,n["default"].use(h["a"]),new n["default"]({router:jt,render:function(t){return t(v)}}).$mount("#app"),jt.start(v,"#Entry")},"58de":function(t,e,a){},"5b493":function(t,e,a){"use strict";var n=a("58de"),o=a.n(n);o.a},"70a6":function(t,e,a){},"7c62":function(t,e,a){},"80ed":function(t,e,a){},"85ec":function(t,e,a){},8821:function(t,e,a){"use strict";var n=a("80ed"),o=a.n(n);o.a},"9a67":function(t,e,a){},a048:function(t,e,a){"use strict";var n=a("1eca"),o=a.n(n);o.a},be4d:function(t,e,a){"use strict";var n=a("f1a0"),o=a("1e69"),r=a("2877"),i=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);i.exports},c17f:function(t,e,a){"use strict";var n=a("9a67"),o=a.n(n);o.a},cb9c:function(t,e,a){"use strict";var n=a("ff4a"),o=a.n(n);o.a},d74c:function(t,e,a){t.exports=a.p+"static/img/img_avatar2.55221557.png"},f1a0:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",[t._v("404 PAGE NOT FOUND")])])}];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}))},ff4a:function(t,e,a){}});
//# sourceMappingURL=app.f79a441a.js.map