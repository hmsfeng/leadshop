(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter/promoter-goods"],{"031b":function(e,t,a){"use strict";a("e479")},"59cc":function(e,t,a){"use strict";a.r(t);var n,i,o,l,s,c,r=a("2638"),u=a.n(r),p=a("ade3"),d=a("1da1"),h=(a("96cf"),a("b0c0"),a("d81d"),a("ac1f"),a("1276"),a("a9e3"),a("a434"),a("159b"),a("841c"),a("4de4"),a("4e82"),a("0e28")),m={name:"goods-table",props:{value:{type:Array},pagination:{type:Object},sort:{type:Object}},computed:{list:{get:function(e){var t=e.value;return t},set:function(e){this.$emit("input",e)}},page:{get:function(e){var t=e.pagination;return t},set:function(e){this.$emit("update:pagination",e)}},sequence:{get:function(e){var t=e.sort;return t},set:function(e){this.$emit("update:sort",e)}}},data:function(){return{checkedList:[],type:"",isChooseIndeterminate:!1,chooseCheck:!1,isAllIndeterminate:!1,allCheck:!1}},methods:{switchPage:function(e){this.page.current=e,this.$emit("current-change"),this.allCheck=!1},batchSetting:function(e){var t=this,a="是否批量设置商品".concat(e?"":"不","参与分销？");this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then((function(){var a="批量设置商品为".concat(e?"":"不","参与分销成功"),n="",i=[];t.allCheck?n="all":(n="choose",i=t.checkedList.map((function(e){return e.id}))),Object(h["t"])(n,i,t.$parent.paneName,e?1:0).then((function(){t.checkedList.forEach((function(t){t.is_promoter=e?1:0})),t.emptyCheck(),t.$message({type:"success",message:a})})).catch((function(e){"存在未设置成本价的商品"===e.data.message?t.$emit("update:showGoodsParticipationFailed","all"):t.$message({type:"error",message:e.data.message})}))})).catch((function(){}))},itemSetting:function(e,t){var a=this,n="是否设置商品".concat(t?"":"不","参与分销？");this.$confirm(n,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then((function(){var n="设置商品为".concat(t?"":"不","参与分销成功"),i=t?1:0;Object(h["t"])("choose",[e.id],a.$parent.paneName,i).then((function(){e.is_promoter=i,a.$message({type:"success",message:n})})).catch((function(e){"存在未设置成本价的商品"===e.data.message?a.$emit("update:showGoodsParticipationFailed","choose"):a.$message({type:"error",message:e.data.message})}))})).catch((function(){}))},chooseChange:function(e){var t=this;e?this.list.forEach((function(e){t.$refs.table.toggleRowSelection(e,!0)})):(this.$refs.table.clearSelection(),this.isAllIndeterminate=!0,this.allCheck=!1)},allChange:function(e){var t=this;this.isAllIndeterminate=!1,e?this.list.forEach((function(e){t.$refs.table.toggleRowSelection(e,!0)})):this.$refs.table.clearSelection()},selectionChange:function(e){e.length===this.list.length||0===e.length?(this.isChooseIndeterminate=!1,this.chooseCheck=e.length===this.list.length):0<e.length<this.list.length&&(this.isChooseIndeterminate=!0,this.allCheck||(this.isAllIndeterminate=!0)),0===e.length&&(this.isAllIndeterminate=!1),this.checkedList=e},emptyCheck:function(){this.checkedList=[],this.isAllIndeterminate=!1,this.allCheck=!1,this.isChooseIndeterminate=!1,this.chooseCheck=!1,this.$refs.table.clearSelection()},sortChange:function(e){var t=e.prop,a=e.order,n={};n[t]="descending"===a?"DESC":"ASC",this.sequence=n}},render:function(){var e=this,t=arguments[0],a=this;return t("div",{class:"le-main"},[t("div",{class:"le-table--batch"},[t("el-checkbox",{attrs:{indeterminate:a.isChooseIndeterminate},on:{change:a.chooseChange},model:{value:a.chooseCheck,callback:function(t){e.$set(a,"chooseCheck",t)}}},["当页全选"]),t("el-checkbox",{attrs:{indeterminate:a.isAllIndeterminate},on:{change:a.allChange},model:{value:a.allCheck,callback:function(t){e.$set(a,"allCheck",t)}}},["全选所有页"]),t("el-button",{attrs:{disabled:!(!a.$_.isEmpty(a.checkedList)||a.isAllIndeterminate||a.allCheck)},on:{click:a.batchSetting.bind(a,!0)}},["参与"]),t("el-button",{attrs:{disabled:!(!a.$_.isEmpty(a.checkedList)||a.isAllIndeterminate||a.allCheck)},on:{click:a.batchSetting.bind(a,!1)}},["不参与"])]),t("el-table",{attrs:{data:a.list,"header-row-class-name":"le-table-header-row","default-sort":{prop:"created_time",order:"descending"},"row-class-name":"le-table-row"},on:{"selection-change":a.selectionChange,"sort-change":a.sortChange},class:"le-table",ref:"table"},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{label:"商品描述","min-width":"274px"},scopedSlots:{default:function(e){return t("div",{class:"flex"},[t("el-image",{class:"le-goods-image",attrs:{lazy:!0,src:e.row.slideshow[0]}}),t("div",{class:"flex-sub le-goods-info"},[t("div",{class:"le-goods-name"},[e.row.name]),t("div",{class:"le-goods-parameter"},[function(){if(e.row.goods_sn)return[["货号:".concat(e.row.goods_sn)],[t("br")]]}(),"ID:",e.row.id])])])}}}),t("el-table-column",{attrs:{label:"商品价格",prop:"price",sortable:"custom"},scopedSlots:{default:function(e){return"￥".concat(e.row.price)}}}),t("el-table-column",{attrs:{label:"库存",sortable:"custom",prop:"stocks"}}),t("el-table-column",{attrs:{label:"销量",sortable:"custom","render-header":function(){return[["销量"],[t("el-popover",{attrs:{trigger:"hover",content:"仅统计分销商品的销量，与普通销售方式的销量分开统计",placement:"top"}},[t("span",{slot:"reference"},[t("span",{class:"le-icon le-icon-zhushi"})])])]]},prop:"promoter_sales"},scopedSlots:{default:function(e){return e.row.promoter?e.row.promoter.sales:0}}}),t("el-table-column",{attrs:{label:"创建时间",sortable:"custom",prop:"created_time"},scopedSlots:{default:function(e){return a.$options.filters.timeFormat(e.row.created_time,"yyyy-mm-dd hh:MM:ss")}}}),t("el-table-column",{attrs:{label:"商品状态",prop:"status",width:"105px"},scopedSlots:{default:function(e){var a=e.row.is_sale,n=e.row.stocks;return 0===n?t("el-tag",{attrs:{effect:"plain",size:"medium",type:"warning"}},["售罄"]):t("el-tag",{attrs:{effect:"plain",size:"medium",type:1===a?"success":0===a?"info":""}},[1===a?"销售中":0===a?"下架中":""])}}}),t("el-table-column",{attrs:{label:"分销状态","min-width":"104px"},scopedSlots:{default:function(e){return e.row.is_promoter?t("div",{class:"right--span"},[t("span",{class:"le-icon le-icon-tick "}),t("span",["参与"])]):t("div",{class:"no--span"},[t("span",{class:"le-icon le-icon-fork "}),t("span",["不参与"])])}}}),t("el-table-column",{attrs:{label:"成本价状态","min-width":"104px"},scopedSlots:{default:function(e){return e.row.max_profits?t("div",{class:"right--span"},[t("span",{class:"le-icon le-icon-tick "}),t("span",["已设置"])]):t("div",{class:"no--span"},[t("span",{class:"le-icon le-icon-fork "}),t("span",["未设置"])])}}}),t("el-table-column",{attrs:{label:"操作",width:"160px"},scopedSlots:{default:function(n){return t("div",{class:"le-table-operate flex align-center"},[t("el-button",{attrs:{type:"text"},on:{click:function(){e.$router.push({path:"/goods/create-goods",query:{id:n.row.id}})}}},["编辑"]),t("span",{class:"le-line"}),function(){return n.row.is_promoter?t("el-button",{attrs:{type:"text"},on:{click:a.itemSetting.bind(a,n.row,!1)}},["不参与"]):t("el-button",{attrs:{type:"text"},on:{click:a.itemSetting.bind(a,n.row,!0)}},["参与"])}()])}}})]),t("div",{class:"flex le-pagination justify-between"},[t("div",{class:"le-table--batch"},[t("el-checkbox",{attrs:{indeterminate:a.isChooseIndeterminate},on:{change:a.chooseChange},model:{value:a.chooseCheck,callback:function(t){e.$set(a,"chooseCheck",t)}}},["当页全选"]),t("el-checkbox",{attrs:{indeterminate:a.isAllIndeterminate},on:{change:a.allChange},model:{value:a.allCheck,callback:function(t){e.$set(a,"allCheck",t)}}},["全选所有页"]),t("el-button",{attrs:{disabled:!(!a.$_.isEmpty(a.checkedList)||a.isAllIndeterminate||a.allCheck)},on:{click:a.batchSetting.bind(a,!0)}},["参与"]),t("el-button",{attrs:{disabled:!(!a.$_.isEmpty(a.checkedList)||a.isAllIndeterminate||a.allCheck)},on:{click:a.batchSetting.bind(a,!1)}},["不参与"])]),t("el-pagination",{attrs:{background:!0,"current-page":a.page.current,layout:"prev, pager, next, jumper","pager-count":5,"page-count":a.page.pageCount},on:{"current-change":a.switchPage}})])])},watch:{isChooseIndeterminate:{handler:function(e){e&&(this.allCheck=!1,this.isAllIndeterminate=!0)}}}},f=m,g=(a("a3b4"),a("2877")),b=Object(g["a"])(f,n,i,!1,null,"357f08ac",null),k=b.exports,v={name:"goods-participation-failed",props:{value:{type:Boolean,default:!0},type:{type:String}},computed:{showDialog:{get:function(e){var t=e.value;return t},set:function(e){this.$emit("input",e)}}},render:function(){var e=arguments[0],t=this;return e("el-dialog",u()([{attrs:{visible:t.showDialog,width:"400px",top:"30vh"}},{on:Object(p["a"])({},"update:visible",(function(e){t.showDialog=e}))}]),[e("div",{class:"flex flex-direction align-center"},[e("div",{class:"flex align-center"},[e("span",{class:"le-icon le-icon-zhushi1"}),e("span",{class:"title"},["all"===t.type?"":"此商品","设置参与分销失败"])]),e("span",{class:"prompt-text"},["佣金以利润计算，需先对","all"===t.type?"所选":"","商品设置成本价"])]),e("div",{slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(){return t.showDialog=!1}}},["我知道了"])])])}},y=v,w=(a("b207"),Object(g["a"])(y,o,l,!1,null,"35bf662c",null)),C=w.exports,_=a("8236"),$={grade:1,tab_key:"all",search:"",price_start:null,price_end:null,cost_status:null,is_promoter:null,time:[],sort:{created_time:"descending"},group:[],pagination:{current:1,pageCount:1}},x={components:{GoodsTable:k,GoodsParticipationFailed:C},mixins:[_["a"]],data:function(){return{form:this.$_.cloneDeep($),list:[],catObject:{returnType:"children",cat:[],result:[]},showGoodsParticipationFailed:!1,goodsParticipationFailedType:""}},methods:{tabSwitch:function(e){var t=this;this.$nextTick((function(){var a=t.$refs[e.name];a.emptyCheck()})),this.form.pagination.current=1,this.getList()},filter:function(){this.form.pagination.current=1,this.getList()},getList:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a,n,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.$_.cloneDeep(e.form),a.tabKey=a.tab_key,delete a.tab_key,a.page=a.pagination.current,delete a.pagination,a.time?(a.time_start=a.time[0]/1e3,a.time_end=a.time[1]/1e3):(a.time_start=0,a.time_end=0),a.group=a.group.map((function(e){return e.id})),delete a.time,t.next=10,Object(h["q"])(a);case 10:n=t.sent,i=n.pagination,o=n.data,e.list=o,e.form.pagination=i;case 14:case"end":return t.stop()}}),t)})))()},empty:function(){this.form=this.$_.cloneDeep($),this.form.pagination.current=1,this.catObject.result=[],this.getList()},getGroup:function(){var e=this;Object(h["r"])().then((function(t){e.$set(e.catObject,"cat",t)}))},openGroup:function(e){this.form.group=e.result,this.catObject.result=e.result},delGroup:function(e,t){var a=this;event.stopPropagation();var n=e.path.split("-").map(Number),i=n.length;if(3===i){for(var o=!1,l=!1,s=this.catObject.result,c=0;c<s.length;c++)if(s[c].id===n[1]){l||(l=!0,this.catObject.result.splice(c,1));for(var r=0;r<s.length;r++)s[r].id===n[2]&&(o||(o=!0,this.catObject.result.splice(r,1)))}}else if(2===i){var u=!1;this.catObject.result.forEach((function(e,t){e.id===n[1]&&(u||(u=!0,a.catObject.result.splice(t,1)))}))}this.$delete(this.form.group,t),this.getList()}},render:function(){var e=this,t=arguments[0],a=this;return t("div",{class:"le-main"},[t("el-form",{class:"le-card",attrs:{inline:!0,"label-width":"112px"}},[t("el-form-item",{attrs:{label:"商品搜索"}},[t("el-input",u()([{attrs:{placeholder:"输入商品名称/货号/ID搜索"}},{nativeOn:{keyup:function(e){"Enter"===e.key&&a.getList()}}},{on:{clear:function(){a.getList()}},attrs:{clearable:!0},model:{value:a.form.search,callback:function(t){e.$set(a.form,"search",t)}}}]))]),t("el-form-item",{attrs:{label:"商品分类"}},[t("div",{class:"group flex justify-between align-center"},[t("div",u()([{class:"flex-sub",attrs:{width:"810",title:"商品分类",module:"goods",action:"openGroup"}},{directives:[{name:"popup",modifiers:{chooseCategory:!0},value:a.catObject}]}]),[function(){return a.catObject.result.length?t("div",{class:"flex align-center le-select__content"},[a.form.group.map((function(e,n){return t("div",{class:"flex align-center le-select__tag"},[t("span",[e.value]),t("i",{on:{click:a.delGroup.bind(a,e,n)},class:"el-tag__close el-icon-close"})])}))]):t("span",{attrs:{className:"text"}},["全部"])}()]),t("span",{class:"le-icon le-icon-arrow-right"})])]),t("el-form-item",{attrs:{label:"分销状态"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:a.form.is_promoter,callback:function(t){e.$set(a.form,"is_promoter",t)}}},[t("el-option",{attrs:{label:"全部",value:null}}),t("el-option",{attrs:{label:"参与",value:1}}),t("el-option",{attrs:{label:"不参与",value:0}})])]),t("el-form-item",{attrs:{label:"成本价状态"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:a.form.cost_status,callback:function(t){e.$set(a.form,"cost_status",t)}}},[t("el-option",{attrs:{label:"全部",value:null}}),t("el-option",{attrs:{label:"已设置",value:1}}),t("el-option",{attrs:{label:"未设置",value:0}})])]),t("el-form-item",{attrs:{label:"商品价格"},class:"le-price-range"},[t("el-input",{attrs:{placeholder:"最低价格"},model:{value:a.form.price_start,callback:function(t){e.$set(a.form,"price_start",t)}}},[t("template",{slot:"append"},["元"])]),t("span",{class:"le-range"},["至"]),t("el-input",{attrs:{placeholder:"最高价格"},model:{value:a.form.price_end,callback:function(t){e.$set(a.form,"price_end",t)}}},[t("template",{slot:"append"},["元"])])]),t("el-form-item",{attrs:{label:"创建时间"}},[t("el-date-picker",{attrs:{size:"small",type:"datetimerange","value-format":"timestamp","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:a.form.time,callback:function(t){e.$set(a.form,"time",t)}}})]),t("div",{class:"le-button"},[t("el-button",{attrs:{type:"primary"},on:{click:a.filter}},["筛选"]),t("el-button",{on:{click:a.empty}},["清空"])])]),t("el-tabs",u()([{class:"le-tabs",attrs:{type:"card","before-leave":function(){}}},{on:{"tab-click":this.tabSwitch}},{model:{value:e.form.tab_key,callback:function(t){e.$set(e.form,"tab_key",t)}}}]),[[{name:"全部",key:"all",lazy:!1},{name:"销售中",key:"onsale",lazy:!0},{name:"下架中",key:"nosale",lazy:!0},{name:"售罄",key:"soldout",lazy:!0}].map((function(n){var i;return t("el-tab-pane",{key:n.key,attrs:{lazy:n.lazy,label:n.name,name:n.key}},[t("goods-table",u()([{ref:n.key,attrs:{pagination:a.form.pagination},on:{"current-change":function(){a.getList()}}},{on:(i={},Object(p["a"])(i,"update:pagination",(function(e){a.form.pagination=e})),Object(p["a"])(i,"update:sort",(function(e){a.form.sort=e,a.getList()})),Object(p["a"])(i,"update:showGoodsParticipationFailed",(function(e){a.showGoodsParticipationFailed=!0,a.goodsParticipationFailedType=e})),i)},{attrs:{sort:a.form.sort},model:{value:a.list,callback:function(t){e.$set(a,"list",t)}}}]))])}))]),function(){if(a.showGoodsParticipationFailed)return t("goods-participation-failed",{attrs:{type:a.goodsParticipationFailedType},model:{value:a.showGoodsParticipationFailed,callback:function(t){e.$set(a,"showGoodsParticipationFailed",t)}}})}()])},mounted:function(){this.getList(),this.getGroup()}},j=x,O=(a("031b"),Object(g["a"])(j,s,c,!1,null,"358f7342",null));t["default"]=O.exports},"83be":function(e,t,a){},a3b4:function(e,t,a){"use strict";a("83be")},b207:function(e,t,a){"use strict";a("c622")},c622:function(e,t,a){},e479:function(e,t,a){}}]);