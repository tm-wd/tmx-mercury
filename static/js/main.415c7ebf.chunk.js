(this["webpackJsonp@tjmelo/tmx-mercury"]=this["webpackJsonp@tjmelo/tmx-mercury"]||[]).push([[0],{55:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),s=n.n(c),o=n(30),r=n.n(o),i=n(9),l=n(10),u=n(12),d=n(11),j=n(16),m="https://servicodados.ibge.gov.br/api/v1/localidades/estados",b=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"col-xs-12 container alert alert-info",role:"alert",children:"Baixando os dados.."})})},h=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"col-xs-12 container alert alert-warning",role:"alert",children:"Nenhum dado coincide com a sua busca..."})})},O=n(15),x=n.n(O),f=Object(c.lazy)((function(){return Promise.all([n.e(6),n.e(3)]).then(n.bind(null,63))})),p=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,64))})),v=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,65))})),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).searchAction=c.searchAction.bind(Object(j.a)(c)),c.dataList=[],c.state={amount:Object(a.jsx)(b,{})},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;x.a.get(m).then((function(e){e.data.sort((function(t,e){return t.nome<e.nome?-1:t.nome>e.nome?1:0})),e.data.forEach((function(e,n){t.dataList.push(Object(a.jsx)(f,{nome:e.nome,sigla:e.sigla,regiao:e.regiao.nome},n))})),t.setState({amount:t.dataList})}))}},{key:"searchAction",value:function(t){var e=this;x.a.get(m).then((function(n){e.dataList=[],n.data=n.data.filter((function(e){return-1!==e.nome.toLowerCase().indexOf(t.target.value.toLowerCase())})),n.data.sort((function(t,e){return t.nome<e.nome?-1:t.nome>e.nome?1:0})),n.data.forEach((function(t,n){var c=Object(a.jsx)(f,{nome:t.nome,sigla:t.sigla,regiao:t.regiao.nome},n);e.dataList.push(c)})),e.setState({amount:e.dataList})}))}},{key:"render",value:function(){var t=this.state.amount.length<=0?Object(a.jsx)(h,{}):this.state.amount;return Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(b,{}),children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"py-3",children:"Estados do Brasil"}),Object(a.jsx)(p,{search:this.searchAction}),Object(a.jsx)(v,{children:t})]})})}}]),n}(s.a.Component),y=(n(55),n(2));var L=function(t){var e=t.nome,n=t.mesorregiao;return Object(a.jsxs)("div",{className:"municipios border border-primary alert alert-secondary",role:"alert",children:[Object(a.jsx)("strong",{className:"text-primary",children:e})," ",Object(a.jsx)("sup",{className:"text-muted",children:n})]})},N=n(13),k=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).estado=c.props.match.params.estado,c.state={datas:Object(a.jsx)(b,{})},c.dataList=[],c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;x.a.get("".concat(m,"/").concat(this.estado,"/municipios")).then((function(e){e.data.forEach((function(e,n){t.dataList.push(Object(a.jsx)(L,{nome:e.nome,mesorregiao:e.microrregiao.nome},n))})),t.setState({datas:t.dataList})}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h1",{className:"mt-3",children:["Munc\xedpios do ",this.estado.toUpperCase()]}),Object(a.jsx)(N.b,{to:"/",className:"btn btn-link mb-3",children:"\xab\xa0Voltar para os estados"}),Object(a.jsx)("section",{children:this.state.datas})]})}}]),n}(s.a.Component),C=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(y.c,{children:[Object(a.jsx)(y.a,{exact:!0,path:"/",component:g}),Object(a.jsx)(y.a,{path:"/estado/:estado",component:k})]})})}}]),n}(s.a.Component),F=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,66)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),s(t),o(t)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(N.a,{basename:"/tjmelo/tmx-mercur",children:Object(a.jsx)(C,{})})}),document.getElementById("root")),F()}},[[61,1,2]]]);
//# sourceMappingURL=main.415c7ebf.chunk.js.map