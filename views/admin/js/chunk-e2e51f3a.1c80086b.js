(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2e51f3a"],{"4e01":function(e,t,s){},"4ebd":function(e,t,s){"use strict";s("4e01")},afdd:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"le-matter le-form",attrs:{"label-width":"130px",model:e.form},nativeOn:{submit:function(e){e.preventDefault()}}},[s("div",{staticClass:"le-header le-card"},[e._v(" 温馨提示：请确保您有公众号订阅通知的使用权限，且订阅通知中无任何已存数据。订阅通知添加完成后，请不要删除订阅通知，否则将影响消息的正常发送。"),s("br"),e._v(" 使用说明："),s("br"),e._v(" 1.请前往微信公众平台，将【商家自营>服装/鞋/箱包】类目添加至您的服务类目，否则将影响订阅通知的正常发送。"),s("span",{directives:[{name:"popup",rawName:"v-popup.messageGuide",value:"wechat",expression:"'wechat'",modifiers:{messageGuide:!0}}],staticClass:"le-header-button",attrs:{module:"setup",sure_btn:"我知道了",width:"680",hide_cancel:!0,title:"订阅通知模板ID获取指引"}},[e._v("查看指引")]),s("br"),e._v(" 2.查找订阅通知并选用，调整关键词的顺序后，复制模板ID，粘贴在此页面对应的模板ID输入框中"),s("br"),e._v(" 3.您可使用一键添加订阅通知功能，快速获取模板ID "),s("button",{staticClass:"le-header-btn",on:{click:e.onceAdd}},[e._v("一键添加订阅通知")])]),s("div",{staticClass:"le-body flex"},[s("div",{staticClass:"flex-sub"},[s("div",{staticClass:"le-card"},[s("div",{staticClass:"le-card-title"},[e._v("付款成功通知")]),s("el-form-item",[s("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),s("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.order_pay,callback:function(t){e.$set(e.form,"order_pay",t)},expression:"form.order_pay"}})],1),s("el-form-item",[s("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板提示")]),s("div",{staticClass:"le-form-item__content"},[s("div",{staticClass:"le-tip-item"},[s("span",{staticClass:"le-label"},[e._v("模板标题")]),s("span",{staticClass:"le-value"},[e._v("【付款成功通知】")])]),s("div",{staticClass:"le-tip-item"},[s("span",{staticClass:"le-label"},[e._v("关键词及顺序")]),s("span",{staticClass:"le-value"},[e._v("付款金额、付款时间、商家名称、订单编号")])])])])],1),s("div",{staticClass:"le-card"},[s("div",{staticClass:"le-card-title"},[e._v("售后状态通知")]),s("el-form-item",[s("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),s("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.order_sale_verify,callback:function(t){e.$set(e.form,"order_sale_verify",t)},expression:"form.order_sale_verify"}})],1),s("el-form-item",[s("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板提示")]),s("div",{staticClass:"le-form-item__content"},[s("div",{staticClass:"le-tip-item"},[s("span",{staticClass:"le-label"},[e._v("模板标题")]),s("span",{staticClass:"le-value"},[e._v("【售后状态通知】")])]),s("div",{staticClass:"le-tip-item"},[s("span",{staticClass:"le-label"},[e._v("关键词及顺序")]),s("span",{staticClass:"le-value"},[e._v("审核结果、订单编号、订单金额")])])])])],1),s("div",{staticClass:"le-card"},[s("div",{staticClass:"le-card-title"},[e._v("优惠券到期通知")]),s("el-form-item",[s("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),s("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.coupon_expire,callback:function(t){e.$set(e.form,"coupon_expire",t)},expression:"form.coupon_expire"}})],1),s("el-form-item",[s("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板提示")]),s("div",{staticClass:"le-form-item__content"},[s("div",{staticClass:"le-tip-item"},[s("span",{staticClass:"le-label"},[e._v("模板标题")]),s("span",{staticClass:"le-value"},[e._v("【优惠券到期通知】")])]),s("div",{staticClass:"le-tip-item"},[s("span",{staticClass:"le-label"},[e._v("关键词及顺序")]),s("span",{staticClass:"le-value"},[e._v("优惠券名称、过期时间、商家名称、温馨提示")])])])])],1)]),s("div",{staticClass:"flex-sub"},[s("div",{staticClass:"le-card"},[s("div",{staticClass:"le-card-title"},[e._v("订单发货通知")]),s("el-form-item",[s("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),s("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.order_send,callback:function(t){e.$set(e.form,"order_send",t)},expression:"form.order_send"}})],1),s("el-form-item",[s("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板提示")]),s("div",{staticClass:"le-form-item__content"},[s("div",{staticClass:"le-tip-item"},[s("span",{staticClass:"le-label"},[e._v("模板标题")]),s("span",{staticClass:"le-value"},[e._v("【订单发货通知】")])]),s("div",{staticClass:"le-tip-item"},[s("span",{staticClass:"le-label"},[e._v("关键词及顺序")]),s("span",{staticClass:"le-value"},[e._v("快递公司、快递单号、收货地址、订单号")])])])])],1),s("div",{staticClass:"le-card"},[s("div",{staticClass:"le-card-title"},[e._v("退款成功通知")]),s("el-form-item",[s("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),s("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.order_refund_tpl,callback:function(t){e.$set(e.form,"order_refund_tpl",t)},expression:"form.order_refund_tpl"}})],1),s("el-form-item",[s("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板提示")]),s("div",{staticClass:"le-form-item__content"},[s("div",{staticClass:"le-tip-item"},[s("span",{staticClass:"le-label"},[e._v("模板标题")]),s("span",{staticClass:"le-value"},[e._v("【退款成功通知】")])]),s("div",{staticClass:"le-tip-item"},[s("span",{staticClass:"le-label"},[e._v("关键词及顺序")]),s("span",{staticClass:"le-value"},[e._v("退款金额、订单编号、商品名称、申请时间")])])])])],1)])]),s("div",{staticClass:"le-cardpin"},[s("el-button",{attrs:{type:"primary",disabled:e.loading},on:{click:e.submit}},[e._v("保存")])],1)])},l=[],i={name:"wechatRemind",data:function(){return{loading:!1,form:{order_sale_verify:"",order_refund_tpl:"",coupon_expire:"",order_pay:"",order_send:""}}},methods:{submit:function(){this.loading=!0;var e=this;this.$heshop.subscribe("post",{platform:"wechat",behavior:"save"},this.form).then((function(){e.loading=!1,e.$message.success("保存成功")})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)}))},obtain:function(){this.loading=!0;var e=this;this.$heshop.subscribe("get",{platform:"wechat"}).then((function(t){e.form=t.form,e.loading=!1})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)}))},onceAdd:function(){var e=this;this.loading=!0,this.$heshop.subscribe("post",{platform:"wechat"},{}).then((function(t){for(var s=0;s<t.length;s++)e.form[t[s].tpl_name]=t[s].tpl_id;e.$message.success("一键添加成功"),e.loading=!1})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)}))}},mounted:function(){this.obtain()}},o=i,r=(s("4ebd"),s("2877")),c=Object(r["a"])(o,a,l,!1,null,"61fce032",null);t["default"]=c.exports}}]);