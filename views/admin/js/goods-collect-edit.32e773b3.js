(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods-collect-edit"],{2459:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{"label-width":"170px",model:e.form,rules:e.rules}},[r("div",{staticClass:"le-prompt"},[e._v(" 支持商品采集的平台：阿里巴巴 、淘宝、京东 、拼多多、天猫"),r("br"),e._v(" 商品采集设置："),r("span",{staticClass:"le-prompt-router",on:{click:function(t){return e.router()}}},[e._v("商品采集-接口设置")])]),r("div",{staticClass:"le-form"},[r("el-form-item",{attrs:{label:"商品详情地址",prop:"links"}},[r("el-input",{attrs:{type:"textarea",rows:12,resize:"none",placeholder:"多条地址，请用换行区分，一次最多添加10条"},model:{value:e.form.links,callback:function(t){e.$set(e.form,"links",t)},expression:"form.links"}})],1),r("el-form-item",{attrs:{label:"商品分类",prop:"cats"}},[e._l(e.group.result,(function(t,a){return[t.children?e._e():r("el-tag",{key:a,staticClass:"le-form-groupTag",attrs:{effect:"plain",type:"info",size:"medium",closable:""},on:{close:function(r){return e.deleteTag(t,a)}}},[e._v(" "+e._s(t.value)+" ")])]})),r("el-button",{directives:[{name:"popup",rawName:"v-popup.chooseCategory",value:e.group,expression:"group",modifiers:{chooseCategory:!0}}],attrs:{plain:"",action:"getGroup",title:"选择分类",width:"801",module:"goods"}},[e._v("选择分类")])],2),r("el-form-item",{attrs:{label:"商品图片"}},[r("el-radio-group",{model:{value:e.form.download,callback:function(t){e.$set(e.form,"download",t)},expression:"form.download"}},[r("el-radio",{attrs:{label:1}},[e._v("下载至本地")]),r("el-radio",{attrs:{label:0}},[e._v("使用图片链接")])],1),r("div",{staticClass:"le-prompt-text"},[e._v(" 选择使用图片链接，则采集平台的商品图片失效时，图片链接也将失效 ")])],1),r("el-form-item",{attrs:{label:"商品状态"}},[r("el-radio-group",{model:{value:e.form.is_sale,callback:function(t){e.$set(e.form,"is_sale",t)},expression:"form.is_sale"}},[r("el-radio",{attrs:{label:0}},[e._v("暂不上架")]),r("el-radio",{attrs:{label:1}},[e._v("立即上架")])],1)],1)],1),r("he-loading",{attrs:{show:e.load,title:"正在采集中，请稍后..."}}),r("div",{staticClass:"le-cardpin"},[r("el-button",{attrs:{type:"primary",disabled:e.loading},on:{click:e.saveForm}},[e._v("保存")])],1)],1)},o=[],n=r("99a5"),l=(r("6a61"),r("3f7e"),r("2769"),r("8639"),r("6afd"),r("f5bd"),r("a5c9"),r("23db"),r("eb62"),r("e1d4"),r("51c0")),s=r("7d53"),i={data:function(){var e=function(e,t,r){r()},t=function(e,t,r){var a=t.split("\n").filter((function(e){return e}));a.length>10&&r("商品详情地址限制10条"),r()};return{loading:!0,load:!1,form:{cats:[],links:"",download:0,is_sale:0,catsText:[]},group:{cat:[],result:[]},catTree:[],rules:{links:[{required:!0,message:"请输入商品详情地址",trigger:"blur"},{validator:t,trigger:["blur","change"]}],cats:[{required:!0,message:"请选择商品分类",trigger:"blur"},{validator:e,trigger:["blur","change"]}]}}},components:{heLoading:s["a"]},methods:{getGroupList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$heshop.group("get",{include:"goods"});case 2:return r=t.sent,e.group.cat=r,a=JSON.parse(JSON.stringify(r)),o=e.$heshop.toTree({parentKey:"parent_id",idKey:"id",parentId:0,childrenKey:"children"}).on(a).get(),o.forEach((function(e){e.value=e.name,e.children&&e.children.forEach((function(t){t.value="".concat(e.value," > ").concat(t.name),t.children&&t.children.forEach((function(e){e.value="".concat(t.value," > ").concat(e.name)}))}))})),t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)})))()},deleteTag:function(e,t){var r=this;this.group.result.splice(t,1);var a=e.path.split("-").map(Number),o=a.length;if(2===o)for(var n=!1,l=this.group.result,s=0;s<l.length;s++)l[s].id!==a[1]||n||this.group.result.splice(s,1);else if(3===o){var i=!1,c=!1;this.group.result.forEach((function(e,t){e.id===a[1]&&(c||(c=!0,r.group.result.splice(t,1)))})),this.group.result.forEach((function(e,t){e.id===a[2]&&(i||(i=!0,r.catObject.result.splice(t,1)))}))}this.form.cats=this.group.result.map((function(e){return e.id}))},getGroup:function(e){this.form.cats=e.result.map((function(e){return e.id})),this.$refs["form"].clearValidate("cats")},router:function(){var e=this.$router.resolve({path:"/setup/interfaceSet"});window.open(e.href,"_blank")},goback:function(){this.$router.push({path:"/goods/collect/list"}),this.closeMessageBox()},closeMessageBox:function(){l["MessageBox"].close()},saveForm:function(){var e=this,t=this;this.load=!0,this.$refs["form"].validate((function(r){if(r){var a=e.group.result.filter((function(e){if(!e.children)return e}));a=a.map((function(e){return e.value})),e.form.catsText=a;var o=JSON.parse(JSON.stringify(e.form));o.links=o.links.split("\n").filter((function(e){return e})),e.$heshop.collect("post",o).then((function(e){t.load=!1;var r=e+"件商品采集已提交成功",a=t.$createElement;t.$confirm("提示",{showConfirmButton:!1,showCancelButton:!1,message:a("div",null,[a("p",{class:"le-text-algin le-confirm-line"},[a("span",{class:"le-icon-chenggong le-icon"}),a("span",{class:"le-confirm-title"},"提交成功")]),a("p",{class:"le-text-algin le-confirm-tip"},r),a("div",{class:"le-text-algin le-btn-box"},[a("span",{class:"le-btn",on:{click:t.goback}},"查看采集记录"),a("span",{class:"le-line"}," | "),a("span",{class:"le-btn",on:{click:t.closeMessageBox}},"继续采集")])])})})).catch((function(e){t.$message.error(e.data.message),t.load=!1}))}else e.load=!1}))}},mounted:function(){var e=this,t=this;this.getGroupList().then((function(t){e.catTree=t,e.loading=!1})).catch((function(){t.loading=!1}))}},c=i,u=(r("41eb"),r("4ac2")),d=Object(u["a"])(c,a,o,!1,null,null,null);t["default"]=d.exports},"41eb":function(e,t,r){"use strict";r("b8db")},b8db:function(e,t,r){}}]);