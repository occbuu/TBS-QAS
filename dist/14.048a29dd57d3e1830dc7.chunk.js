webpackJsonp([14],{pxrg:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("WT6e"),t=function(){},r=e("bHh0"),u=e("+0cU"),d=e("GRaa"),o=function(){function l(){this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0},this.barChartLabels=["2006","2007","2008","2009","2010","2011","2012"],this.barChartType="bar",this.barChartLegend=!0,this.barChartData=[{data:[65,59,80,81,56,55,40],label:"Series A"},{data:[28,48,40,19,86,27,90],label:"Series B"}],this.doughnutChartLabels=["Download Sales","In-Store Sales","Mail-Order Sales"],this.doughnutChartData=[350,450,100],this.doughnutChartType="doughnut",this.radarChartLabels=["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],this.radarChartData=[{data:[65,59,90,81,56,55,40],label:"Series A"},{data:[28,48,40,19,96,27,100],label:"Series B"}],this.radarChartType="radar",this.pieChartLabels=["Download Sales","In-Store Sales","Mail Sales"],this.pieChartData=[300,500,100],this.pieChartType="pie",this.polarAreaChartLabels=["Download Sales","In-Store Sales","Mail Sales","Telesales","Corporate Sales"],this.polarAreaChartData=[300,500,100,40,120],this.polarAreaLegend=!0,this.polarAreaChartType="polarArea",this.lineChartData=[{data:[65,59,80,81,56,55,40],label:"Series A"},{data:[28,48,40,19,86,27,90],label:"Series B"},{data:[18,48,77,9,100,27,40],label:"Series C"}],this.lineChartLabels=["January","February","March","April","May","June","July"],this.lineChartOptions={responsive:!0},this.lineChartColors=[{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(77,83,96,0.2)",borderColor:"rgba(77,83,96,1)",pointBackgroundColor:"rgba(77,83,96,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.lineChartLegend=!0,this.lineChartType="line"}return l.prototype.chartClicked=function(l){},l.prototype.chartHovered=function(l){},l.prototype.randomize=function(){var l=[Math.round(100*Math.random()),59,80,100*Math.random(),56,100*Math.random(),40],n=JSON.parse(JSON.stringify(this.barChartData));n[0].data=l,this.barChartData=n},l.prototype.ngOnInit=function(){},l}(),c=a["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[{type:0,name:"void",styles:{type:6,styles:{},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(0%)"},offset:null},timings:"0.5s ease-in-out"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translateY(0%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(-100%)"},offset:null},timings:"0.5s ease-in-out"}],options:null}],options:{}}]}});function i(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,115,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n    "])),(l()(),a["\u0275eld"](2,0,null,null,1,"app-page-header",[],null,null,null,r.b,r.a)),a["\u0275did"](3,114688,null,0,u.a,[],{heading:[0,"heading"],icon:[1,"icon"]},null),(l()(),a["\u0275ted"](-1,null,["\n    "])),(l()(),a["\u0275eld"](5,0,null,null,39,"div",[["class","row"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275eld"](7,0,null,null,20,"div",[["class","col col-sm-6"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275eld"](9,0,null,null,17,"div",[["class","card mb-3"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](11,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    Bar Chart\n                "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](14,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275eld"](16,0,null,null,2,"canvas",[["baseChart",""]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,e){var a=!0,t=l.component;return"chartHover"===n&&(a=!1!==t.chartHovered(e)&&a),"chartClick"===n&&(a=!1!==t.chartClicked(e)&&a),a},null,null)),a["\u0275did"](17,737280,null,0,d.BaseChartDirective,[a.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],legend:[4,"legend"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](21,0,null,null,4,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275eld"](23,0,null,null,1,"button",[["class","btn btn-info btn-sm"]],null,[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.randomize()&&a),a},null,null)),(l()(),a["\u0275ted"](-1,null,["Update"])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275eld"](29,0,null,null,14,"div",[["class","col col-sm-6"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275eld"](31,0,null,null,11,"div",[["class","card mb-3"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](33,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    Doughnut Chart\n                "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](36,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275eld"](38,0,null,null,2,"canvas",[["baseChart",""],["height","180px"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,e){var a=!0,t=l.component;return"chartHover"===n&&(a=!1!==t.chartHovered(e)&&a),"chartClick"===n&&(a=!1!==t.chartClicked(e)&&a),a},null,null)),a["\u0275did"](39,737280,null,0,d.BaseChartDirective,[a.ElementRef],{data:[0,"data"],labels:[1,"labels"],chartType:[2,"chartType"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275ted"](-1,null,["\n    "])),(l()(),a["\u0275ted"](-1,null,["\n    "])),(l()(),a["\u0275eld"](46,0,null,null,33,"div",[["class","row"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275eld"](48,0,null,null,14,"div",[["class","col col-sm-6"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275eld"](50,0,null,null,11,"div",[["class","card mb-3"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](52,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    Radar Chart\n                "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](55,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275eld"](57,0,null,null,2,"canvas",[["baseChart",""],["height","150px"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,e){var a=!0,t=l.component;return"chartHover"===n&&(a=!1!==t.chartHovered(e)&&a),"chartClick"===n&&(a=!1!==t.chartClicked(e)&&a),a},null,null)),a["\u0275did"](58,737280,null,0,d.BaseChartDirective,[a.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],chartType:[2,"chartType"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275eld"](64,0,null,null,14,"div",[["class","col col-sm-6"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275eld"](66,0,null,null,11,"div",[["class","card mb-3"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](68,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    Pie Chart\n                "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](71,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275eld"](73,0,null,null,2,"canvas",[["baseChart",""],["height","150px"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,e){var a=!0,t=l.component;return"chartHover"===n&&(a=!1!==t.chartHovered(e)&&a),"chartClick"===n&&(a=!1!==t.chartClicked(e)&&a),a},null,null)),a["\u0275did"](74,737280,null,0,d.BaseChartDirective,[a.ElementRef],{data:[0,"data"],labels:[1,"labels"],chartType:[2,"chartType"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275ted"](-1,null,["\n    "])),(l()(),a["\u0275ted"](-1,null,["\n    "])),(l()(),a["\u0275eld"](81,0,null,null,33,"div",[["class","row"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275eld"](83,0,null,null,14,"div",[["class","col col-sm-6"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275eld"](85,0,null,null,11,"div",[["class","card mb-3"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](87,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    Polar Area Chart\n                "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](90,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275eld"](92,0,null,null,2,"canvas",[["baseChart",""],["height","130px"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,e){var a=!0,t=l.component;return"chartHover"===n&&(a=!1!==t.chartHovered(e)&&a),"chartClick"===n&&(a=!1!==t.chartClicked(e)&&a),a},null,null)),a["\u0275did"](93,737280,null,0,d.BaseChartDirective,[a.ElementRef],{data:[0,"data"],labels:[1,"labels"],chartType:[2,"chartType"],legend:[3,"legend"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275eld"](99,0,null,null,14,"div",[["class","col col-sm-6"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275eld"](101,0,null,null,11,"div",[["class","card mb-3"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](103,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    Line Chart\n                "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275eld"](106,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275eld"](108,0,null,null,2,"canvas",[["baseChart",""],["height","130"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,e){var a=!0,t=l.component;return"chartHover"===n&&(a=!1!==t.chartHovered(e)&&a),"chartClick"===n&&(a=!1!==t.chartClicked(e)&&a),a},null,null)),a["\u0275did"](109,737280,null,0,d.BaseChartDirective,[a.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),a["\u0275ted"](-1,null,["\n                    "])),(l()(),a["\u0275ted"](-1,null,["\n                "])),(l()(),a["\u0275ted"](-1,null,["\n            "])),(l()(),a["\u0275ted"](-1,null,["\n        "])),(l()(),a["\u0275ted"](-1,null,["\n    "])),(l()(),a["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,3,0,"Product report","fa-bar-chart-o"),l(n,17,0,e.barChartData,e.barChartLabels,e.barChartOptions,e.barChartType,e.barChartLegend),l(n,39,0,e.doughnutChartData,e.doughnutChartLabels,e.doughnutChartType),l(n,58,0,e.radarChartData,e.radarChartLabels,e.radarChartType),l(n,74,0,e.pieChartData,e.pieChartLabels,e.pieChartType),l(n,93,0,e.polarAreaChartData,e.polarAreaChartLabels,e.polarAreaChartType,e.polarAreaLegend),l(n,109,0,e.lineChartData,e.lineChartLabels,e.lineChartOptions,e.lineChartType,e.lineChartColors,e.lineChartLegend)},function(l,n){l(n,0,0,void 0)})}var s=a["\u0275ccf"]("app-product-report",o,function(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"app-product-report",[],null,null,null,i,c)),a["\u0275did"](1,114688,null,0,o,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),h=e("Xjw4"),p=e("bfOx"),C=function(){},v=e("lkjq");e.d(n,"ProductReportModuleNgFactory",function(){return b});var b=a["\u0275cmf"](t,[],function(l){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[s]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,h.m,h.l,[a.LOCALE_ID,[2,h.r]]),a["\u0275mpd"](512,h.b,h.b,[]),a["\u0275mpd"](512,d.ChartsModule,d.ChartsModule,[]),a["\u0275mpd"](512,p.p,p.p,[[2,p.u],[2,p.l]]),a["\u0275mpd"](512,C,C,[]),a["\u0275mpd"](512,v.a,v.a,[]),a["\u0275mpd"](512,t,t,[]),a["\u0275mpd"](1024,p.j,function(){return[[{path:"",component:o}]]},[])])})}});