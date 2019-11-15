(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"7DHT":function(s,n,a){"use strict";a.r(n),n.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { DataService } from './data.service';\n@NgModule({\n  imports: [CommonModule, ReactiveFormsModule, FormlyBootstrapModule, FormlyModule.forRoot()],\n  declarations: [AppComponent],\n  providers: [DataService],\n})\nexport class AppModule {}\n"},"9eF+":function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { DataService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./data.service\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'sport\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Sport\'</span>,\n        options: <span class="hljs-keyword">this</span>.dataService.getSports(),\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n    },\n  ];\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> dataService: DataService</span>) {}\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},D45g:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},Nj27:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\nimport { DataService } from './data.service';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'sport',\n      type: 'select',\n      templateOptions: {\n        label: 'Sport',\n        options: this.dataService.getSports(),\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n    },\n  ];\n\n  constructor(private dataService: DataService) {}\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},ZOT2:function(s,n,a){"use strict";a.r(n),n.default="import { Injectable } from '@angular/core';\nimport { Observable, of } from 'rxjs';\n\n@Injectable()\nexport class DataService {\n  sports = [\n    { id: '1', name: 'Soccer' },\n    { id: '2', name: 'Basketball' },\n  ];\n\n  getSports(): Observable<any[]> {\n    return of(this.sports);\n  }\n}\n"},dk9B:function(s,n,a){"use strict";a.r(n),n.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},m6Ll:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Injectable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Observable, of } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n\n<span class="hljs-meta">@Injectable</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DataService {\n  sports = [\n    { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Soccer\'</span> },\n    { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Basketball\'</span> },\n  ];\n\n  getSports(): Observable&lt;<span class="hljs-built_in">any</span>[]&gt; {\n    <span class="hljs-keyword">return</span> of(<span class="hljs-keyword">this</span>.sports);\n  }\n}\n'},qXT1:function(s,n,a){"use strict";a.r(n);var o=a("Mlb/"),l=a("QZuW"),p=function(){function s(s){this.dataService=s,this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"sport",type:"select",templateOptions:{label:"Sport",options:this.dataService.getSports(),valueProp:"id",labelProp:"name"}}]}return s.prototype.submit=function(){alert(JSON.stringify(this.model))},s}(),t={examples:[{title:"Bind Observables to Select",description:"",component:p,files:[{file:"app.component.html",content:a("D45g"),filecontent:a("dk9B")},{file:"app.component.ts",content:a("9eF+"),filecontent:a("Nj27")},{file:"app.module.ts",content:a("s5zl"),filecontent:a("7DHT")},{file:"data.service.ts",content:a("m6Ll"),filecontent:a("ZOT2")}]}]},r=function(){},e=a("n91+"),m=a("aUi8"),i=a("xRU+"),c=a("l9Gt"),d=a("tb2p"),u=a("5swT"),f=a("rGUg"),g=a("qEw3"),h=a("KL5v"),j=a("WPgD"),y=a("wR1y"),b=a("fYis"),v=a("mSm0"),k=a("g/x9"),w=a("Ea/l"),F=a("kY9M"),S=a("cXvR"),C=a("jV/k"),M=function(){function s(){this.sports=[{id:"1",name:"Soccer"},{id:"2",name:"Basketball"}]}return s.prototype.getSports=function(){return Object(C.a)(this.sports)},s}(),x=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(s){return o["\u0275vid"](0,[(s()(),o["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(s,n,a){var l=!0,p=s.component;return"submit"===n&&(l=!1!==o["\u0275nov"](s,2).onSubmit(a)&&l),"reset"===n&&(l=!1!==o["\u0275nov"](s,2).onReset()&&l),"ngSubmit"===n&&(l=!1!==p.submit()&&l),l}),null,null)),o["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_z"],[],null,null),o["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),o["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(s()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,k.b,k.a)),o["\u0275prd"](512,null,w.a,w.a,[F.b,o.ComponentFactoryResolver,o.Injector,[2,l.FormGroupDirective]]),o["\u0275did"](7,966656,null,0,S.a,[w.a,F.b],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(s()(),o["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(s()(),o["\u0275ted"](-1,null,["Submit"]))],(function(s,n){var a=n.component;s(n,2,0,a.form),s(n,7,0,a.form,a.model,a.fields,a.options)}),(function(s,n){var a=n.component;s(n,0,0,o["\u0275nov"](n,4).ngClassUntouched,o["\u0275nov"](n,4).ngClassTouched,o["\u0275nov"](n,4).ngClassPristine,o["\u0275nov"](n,4).ngClassDirty,o["\u0275nov"](n,4).ngClassValid,o["\u0275nov"](n,4).ngClassInvalid,o["\u0275nov"](n,4).ngClassPending),s(n,8,0,!a.form.valid)}))}var D=o["\u0275ccf"]("formly-app-example",p,(function(s){return o["\u0275vid"](0,[(s()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,_,x)),o["\u0275did"](1,49152,null,0,p,[M],null,null)],null,null)}),{},{},[]),R=a("vk2e"),O=a("o3+a"),N=a("9b0e"),G=a("6YJn"),P=a("dvHj"),L=a("C0xW"),T=a("W9sv"),B=a("m6lo"),A=a("S6Ld"),I=a("cTZo"),U=a("Kfqh"),J=a("Ienz"),W=a("KuLc"),z=a("Z7++"),K=a("2lML"),V=a("pgVP"),Z=a("pk7F"),q=a("T8+l"),X=a("0hby"),Y=a("tVba"),E=a("XX7/"),H=a("pLrJ"),Q=a("U5/R"),$=a("TqxR"),ss=a("soK0"),ns=a("1k+g"),as=a("pAed"),os=a("VtvF"),ls=a("lN7U"),ps=a("NPi3"),ts=a("PCNd"),rs=a("WCiw"),es=a("Vtge"),ms=a("+5Wd"),is=a("+R4m"),cs=a("SSYk"),ds=a("KJU8"),us=a("eTA3"),fs=a("o12O"),gs=a("iWYX"),hs=a("h18T"),js=function(){},ys=a("qk26"),bs=a("P+xK");a.d(n,"ConfigModuleNgFactory",(function(){return vs}));var vs=o["\u0275cmf"](r,[],(function(s){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[e.a,m.a,i.a,c.a,d.a,u.a,f.a,g.a,h.a,j.a,y.a,b.a,v.a,D]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[o.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,O.c,O.c,[]),o["\u0275mpd"](4608,N.c,N.c,[N.i,N.e,o.ComponentFactoryResolver,N.h,N.f,o.Injector,o.NgZone,R.DOCUMENT,G.b,[2,R.Location]]),o["\u0275mpd"](5120,N.j,N.k,[N.c]),o["\u0275mpd"](5120,P.b,P.c,[N.c]),o["\u0275mpd"](4608,L.e,T.c,[[2,T.g],[2,T.l]]),o["\u0275mpd"](5120,B.c,B.j,[N.c]),o["\u0275mpd"](4608,A.a,A.a,[]),o["\u0275mpd"](4608,I.a,I.a,[]),o["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),o["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_o"],l["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,w.a,w.a,[F.b,o.ComponentFactoryResolver,o.Injector,[2,l.FormGroupDirective]]),o["\u0275mpd"](4608,M,M,[]),o["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),o["\u0275mpd"](1073742336,U.b,U.b,[]),o["\u0275mpd"](1073742336,O.d,O.d,[]),o["\u0275mpd"](1073742336,J.a,J.a,[]),o["\u0275mpd"](1073742336,G.a,G.a,[]),o["\u0275mpd"](1073742336,W.g,W.g,[]),o["\u0275mpd"](1073742336,z.ScrollingModule,z.ScrollingModule,[]),o["\u0275mpd"](1073742336,N.g,N.g,[]),o["\u0275mpd"](1073742336,T.l,T.l,[[2,T.d],[2,L.f]]),o["\u0275mpd"](1073742336,P.e,P.e,[]),o["\u0275mpd"](1073742336,T.v,T.v,[]),o["\u0275mpd"](1073742336,K.j,K.j,[]),o["\u0275mpd"](1073742336,B.i,B.i,[]),o["\u0275mpd"](1073742336,B.f,B.f,[]),o["\u0275mpd"](1073742336,V.c,V.c,[]),o["\u0275mpd"](1073742336,Z.c,Z.c,[]),o["\u0275mpd"](1073742336,q.b,q.b,[]),o["\u0275mpd"](512,F.b,F.b,[]),o["\u0275mpd"](1024,F.a,(function(s){return[{wrappers:[{name:"form-field",component:X.a}]},{types:[{name:"input",component:Y.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:E.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:H.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:$.a,wrappers:["form-field"]}]},{types:[{name:"select",component:ss.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:ns.a}],extensions:[{name:"addons",extension:{postPopulate:as.a}}]},os.b(s),{}]}),[F.b]),o["\u0275mpd"](1073742336,os.a,os.a,[F.b,[2,F.a]]),o["\u0275mpd"](1073742336,ls.h,ls.h,[]),o["\u0275mpd"](1073742336,ps.b,ps.b,[]),o["\u0275mpd"](1073742336,ts.a,ts.a,[]),o["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_d"],l["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,rs.a,rs.a,[]),o["\u0275mpd"](1073742336,es.a,es.a,[]),o["\u0275mpd"](1073742336,ms.a,ms.a,[]),o["\u0275mpd"](1073742336,is.a,is.a,[]),o["\u0275mpd"](1073742336,cs.a,cs.a,[]),o["\u0275mpd"](1073742336,ds.a,ds.a,[]),o["\u0275mpd"](1073742336,us.a,us.a,[]),o["\u0275mpd"](1073742336,fs.a,fs.a,[]),o["\u0275mpd"](1073742336,gs.a,gs.a,[]),o["\u0275mpd"](1073742336,hs.a,hs.a,[]),o["\u0275mpd"](1073742336,js,js,[]),o["\u0275mpd"](1073742336,ys.t,ys.t,[[2,ys.y],[2,ys.p]]),o["\u0275mpd"](1073742336,r,r,[]),o["\u0275mpd"](1024,ys.n,(function(){return[[{path:"",component:bs.a,data:t}]]}),[])])}))},s5zl:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { DataService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./data.service\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [CommonModule, ReactiveFormsModule, FormlyBootstrapModule, FormlyModule.forRoot()],\n  declarations: [AppComponent],\n  providers: [DataService],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule {}\n'}}]);