import{r as f,ae as Ee,af as Fe,ag as Ae,j as n,ah as _e,R as Y,_ as G,g as Z,a as xe,b as he,d as ve,e as S,f as y,ai as Le,h as x,C as me,i as ne,l as be,y as $,a2 as Te,B as Q,Z as Be,a1 as De,D as Ne,a4 as Ce,aj as Pe,ak as Oe,al as ge,am as Me,an as Ve,z as je,q as He,a5 as Ue,ao as ze,s as Ge,a8 as re,a9 as $e,aa as Qe,ab as We,ac as Ke,a6 as le,a7 as ee,ad as Je}from"./index.e231c07c.js";function Ye(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fe(e,a){var t=function(r){return a&&f.exports.isValidElement(r)?a(r):r},l=Object.create(null);return e&&f.exports.Children.map(e,function(i){return i}).forEach(function(i){l[i.key]=t(i)}),l}function Ze(e,a){e=e||{},a=a||{};function t(m){return m in a?a[m]:e[m]}var l=Object.create(null),i=[];for(var r in e)r in a?i.length&&(l[r]=i,i=[]):i.push(r);var s,c={};for(var o in a){if(l[o])for(s=0;s<l[o].length;s++){var u=l[o][s];c[l[o][s]]=t(u)}c[o]=t(o)}for(s=0;s<i.length;s++)c[i[s]]=t(i[s]);return c}function z(e,a,t){return t[a]!=null?t[a]:e.props[a]}function Xe(e,a){return fe(e.children,function(t){return f.exports.cloneElement(t,{onExited:a.bind(null,t),in:!0,appear:z(t,"appear",e),enter:z(t,"enter",e),exit:z(t,"exit",e)})})}function ea(e,a,t){var l=fe(e.children),i=Ze(a,l);return Object.keys(i).forEach(function(r){var s=i[r];if(!!f.exports.isValidElement(s)){var c=r in a,o=r in l,u=a[r],m=f.exports.isValidElement(u)&&!u.props.in;o&&(!c||m)?i[r]=f.exports.cloneElement(s,{onExited:t.bind(null,s),in:!0,exit:z(s,"exit",e),enter:z(s,"enter",e)}):!o&&c&&!m?i[r]=f.exports.cloneElement(s,{in:!1}):o&&c&&f.exports.isValidElement(u)&&(i[r]=f.exports.cloneElement(s,{onExited:t.bind(null,s),in:u.props.in,exit:z(s,"exit",e),enter:z(s,"enter",e)}))}}),i}var aa=Object.values||function(e){return Object.keys(e).map(function(a){return e[a]})},na={component:"div",childFactory:function(a){return a}},pe=function(e){Ee(a,e);function a(l,i){var r;r=e.call(this,l,i)||this;var s=r.handleExited.bind(Ye(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var t=a.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(i,r){var s=r.children,c=r.handleExited,o=r.firstRender;return{children:o?Xe(i,c):ea(i,s,c),firstRender:!1}},t.handleExited=function(i,r){var s=fe(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(c){var o=Fe({},c.children);return delete o[i.key],{children:o}}))},t.render=function(){var i=this.props,r=i.component,s=i.childFactory,c=Ae(i,["component","childFactory"]),o=this.state.contextValue,u=aa(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?n(_e.Provider,{value:o,children:u}):n(_e.Provider,{value:o,children:n(r,{...c,children:u})})},a}(Y.Component);pe.propTypes={};pe.defaultProps=na;const ta=pe;const N={alert:"awsui_alert_mx3cw_wdted_93","awsui-motion-fade-in":"awsui_awsui-motion-fade-in_mx3cw_wdted_1",root:"awsui_root_mx3cw_wdted_119",hidden:"awsui_hidden_mx3cw_wdted_133",body:"awsui_body_mx3cw_wdted_156",header:"awsui_header_mx3cw_wdted_162",action:"awsui_action_mx3cw_wdted_166","action-button":"awsui_action-button_mx3cw_wdted_171",text:"awsui_text_mx3cw_wdted_175",icon:"awsui_icon_mx3cw_wdted_179",message:"awsui_message_mx3cw_wdted_182","breakpoint-default":"awsui_breakpoint-default_mx3cw_wdted_190",content:"awsui_content_mx3cw_wdted_204",dismiss:"awsui_dismiss_mx3cw_wdted_208","dismiss-button":"awsui_dismiss-button_mx3cw_wdted_214","type-error":"awsui_type-error_mx3cw_wdted_222","type-warning":"awsui_type-warning_mx3cw_wdted_230","type-success":"awsui_type-success_mx3cw_wdted_238","type-info":"awsui_type-info_mx3cw_wdted_246"};var ia={error:"status-negative",warning:"status-warning",success:"status-positive",info:"status-info"};function sa(e){var a,t=e.type,l=e.statusIconAriaLabel,i=e.visible,r=i===void 0?!0:i,s=e.dismissible,c=e.dismissAriaLabel,o=e.children,u=e.header,m=e.buttonText,_=e.action,b=e.onDismiss,g=e.onButtonClick,q=e.__internalRootRef,v=q===void 0?null:q,I=G(e,["type","statusIconAriaLabel","visible","dismissible","dismissAriaLabel","children","header","buttonText","action","onDismiss","onButtonClick","__internalRootRef"]),k=Z(I),F=xe(["xs"]),V=F[0],T=F[1],D=he(T,v),P=ve(),R=P?"normal":u&&o?"big":"normal",B=_||n(ne,{className:N["action-button"],onClick:function(){return be(g)},formAction:"none",children:m}),W=Boolean(_||m);return n("div",{...S({},k,{"aria-hidden":!r,className:y(N.root,(a={},a[N.hidden]=!r,a),k.className,N["breakpoint-".concat(V)]),ref:D}),children:n(Le,{contextName:"alert",children:x("div",{className:y(N.alert,N["type-".concat(t)]),children:[n("div",{className:y(N.icon,N.text),role:"img","aria-label":l,children:n(me,{name:ia[t],size:R})}),x("div",{className:N.body,children:[x("div",{className:y(N.message,N.text),children:[u&&n("div",{className:N.header,children:u}),n("div",{className:N.content,children:o})]}),W&&n("div",{className:N.action,children:B})]}),s&&n("div",{className:N.dismiss,children:n(ne,{className:N["dismiss-button"],variant:"icon",iconName:"close",formAction:"none",ariaLabel:c,onClick:function(){return be(b)}})})]})})})}function ra(e,a,t){var l=t===void 0?{}:t,i=l.trailing,r=i===void 0?!0:i,s=null,c=null,o=null;function u(){if(!(s===null||c===null)){var b=Date.now(),g=b-c>=a;g?(e.apply(s.this,s.args),c=b,s=null,o=null):r&&m()}}function m(){o&&cancelAnimationFrame(o),o=requestAnimationFrame(u)}function _(){for(var b=[],g=0;g<arguments.length;g++)b[g]=arguments[g];c===null?(c=Date.now(),e.apply(this,b)):(s={this:this,args:b},m())}return _.cancel=function(){o&&cancelAnimationFrame(o),s=null,c=null,o=null},_}var la=function(e){var a=Object.keys(e).filter(function(t){return t.indexOf("__")!==0});return a.reduce(function(t,l){return t[l]=e[l],t},{})};function ae(e){var a=e.variant,t=a===void 0?"default":a,l=e.disableHeaderPaddings,i=l===void 0?!1:l,r=e.disableContentPaddings,s=r===void 0?!1:r,c=G(e,["variant","disableHeaderPaddings","disableContentPaddings"]),o=$("Container"),u=la(c);return n(Te,{...S({variant:t,disableHeaderPaddings:i,disableContentPaddings:s},u,o)})}Q(ae,"Container");const O={layout:"awsui_layout_5gtk3_1onm4_99","is-visual-refresh":"awsui_is-visual-refresh_5gtk3_1onm4_99",background:"awsui_background_5gtk3_1onm4_102",header:"awsui_header_5gtk3_1onm4_105","is-overlap-disabled":"awsui_is-overlap-disabled_5gtk3_1onm4_115","has-breadcrumbs":"awsui_has-breadcrumbs_5gtk3_1onm4_132",content:"awsui_content_5gtk3_1onm4_141"};function Se(e){var a,t,l,i=e.children,r=e.disableOverlap,s=e.header,c=G(e,["children","disableOverlap","header"]),o=Z(c),u=f.exports.useContext(Be).breadcrumbs,m=f.exports.useRef(null),_=$("ContentLayout").__internalRootRef,b=he(m,_),g=De(),q=ve(),v=!i||!s||r;return x("div",{...S({},o,{className:y(o.className,O.layout,(a={},a[O["is-overlap-disabled"]]=v,a[O["is-visual-refresh"]]=q,a)),ref:b}),children:[n("div",{className:y(O.background,(t={},t[O["is-overlap-disabled"]]=v,t),"awsui-context-content-header"),ref:g}),s&&n("div",{className:y(O.header,(l={},l[O["has-breadcrumbs"]]=u,l),"awsui-context-content-header"),children:s}),n("div",{className:O.content,children:i})]})}Q(Se,"ContentLayout");const d={"flash-refresh":"awsui_flash-refresh_1q84n_1la8c_93",enter:"awsui_enter_1q84n_1la8c_93","flash-body":"awsui_flash-body_1q84n_1la8c_108","flash-message":"awsui_flash-message_1q84n_1la8c_108","flash-header":"awsui_flash-header_1q84n_1la8c_108","flash-content":"awsui_flash-content_1q84n_1la8c_109","action-button-wrapper":"awsui_action-button-wrapper_1q84n_1la8c_110","dismiss-button-wrapper":"awsui_dismiss-button-wrapper_1q84n_1la8c_111","flash-icon":"awsui_flash-icon_1q84n_1la8c_134",entering:"awsui_entering_1q84n_1la8c_147",entered:"awsui_entered_1q84n_1la8c_168",exiting:"awsui_exiting_1q84n_1la8c_273",flashbar:"awsui_flashbar_1q84n_1la8c_295",flash:"awsui_flash_1q84n_1la8c_93","flash-list":"awsui_flash-list_1q84n_1la8c_350","flash-focus-container":"awsui_flash-focus-container_1q84n_1la8c_386","flash-text":"awsui_flash-text_1q84n_1la8c_392","dismiss-button":"awsui_dismiss-button_1q84n_1la8c_111","breakpoint-default":"awsui_breakpoint-default_1q84n_1la8c_433","flash-list-item":"awsui_flash-list-item_1q84n_1la8c_433","action-button":"awsui_action-button_1q84n_1la8c_110","flash-type-success":"awsui_flash-type-success_1q84n_1la8c_446","flash-type-error":"awsui_flash-type-error_1q84n_1la8c_450","flash-type-warning":"awsui_flash-type-warning_1q84n_1la8c_454","flash-type-info":"awsui_flash-type-info_1q84n_1la8c_458",stack:"awsui_stack_1q84n_1la8c_462",expanded:"awsui_expanded_1q84n_1la8c_467",collapsed:"awsui_collapsed_1q84n_1la8c_481",item:"awsui_item_1q84n_1la8c_487","visual-refresh":"awsui_visual-refresh_1q84n_1la8c_497","flash-items":"awsui_flash-items_1q84n_1la8c_503",toggle:"awsui_toggle_1q84n_1la8c_510",icon:"awsui_icon_1q84n_1la8c_573"};var oa=2e3,ca={success:"status-positive",warning:"status-warning",info:"status-info",error:"status-negative"};function da(e,a){return n(ne,{onClick:a,className:d["action-button"],formAction:"none",children:e})}function ua(e,a){return n("div",{className:d["dismiss-button-wrapper"],children:n(ne,{onClick:a,className:d["dismiss-button"],variant:"flashbar-icon",iconName:"close",formAction:"none",ariaLabel:e})})}var ha=ra(function(e,a){var t,l='[data-itemid="'.concat(CSS.escape(a),'"] .').concat(d["flash-focus-container"]);(t=e==null?void 0:e.querySelector(l))===null||t===void 0||t.focus()},oa,{trailing:!1}),va=Y.forwardRef(function(e,a){var t,l=e.id,i=e.header,r=e.content,s=e.dismissible,c=e.dismissLabel,o=e.statusIconAriaLabel,u=e.loading,m=e.action,_=e.buttonText,b=e.onButtonClick,g=e.onDismiss,q=e.className,v=e.transitionState,I=e.ariaRole,k=e.type,F=k===void 0?"info":k,V=Ne(),T=m||_&&da(_,b),D=ca[F],P=u?n(Pe,{}):n(me,{name:D}),R=u?"info":F,B=[o,i,r].filter(Boolean).join(" ");return x("div",{ref:a,role:I,"aria-live":I?"off":void 0,"data-itemid":l,className:y(d.flash,d["flash-type-".concat(R)],q,v&&(t={},t[d.enter]=v==="enter",t[d.entering]=v==="entering",t[d.entered]=v==="entered",t[d.exit]=v==="exit",t[d.exiting]=v==="exiting",t[d.exited]=v==="exited",t)),children:[x("div",{className:d["flash-body"],children:[x("div",{...S({},V,{className:d["flash-focus-container"],tabIndex:I==="alert"?-1:void 0}),children:[n("div",{className:y(d["flash-icon"],d["flash-text"]),role:"img","aria-label":o,children:P}),x("div",{className:y(d["flash-message"],d["flash-text"]),children:[n("div",{className:d["flash-header"],children:i}),n("div",{className:d["flash-content"],children:r})]})]}),T&&n("div",{className:d["action-button-wrapper"],children:T})]}),s&&ua(c,g),I==="status"&&n(Ce,{children:B})]})}),ma=115;function Ie(e){var a=e.items,t=G(e,["items"]),l=$("Flashbar").__internalRootRef,i=Z(t),r=f.exports.useRef(null),s=xe(["xs"]),c=s[0],o=s[1],u=he(r,o,l),m=Ne(),_=ve(),b=f.exports.useState(a),g=b[0],q=b[1],v=f.exports.useState(null),I=v[0],k=v[1];if(a){var F=a.filter(function(h){var p=h.id;return p&&!g.some(function(w){return w.id===p})}),V=g.filter(function(h){var p=h.id;return p&&!a.some(function(w){return w.id===p})});if(F.length>0||V.length>0){q(a);var T=F.filter(function(h){var p=h.ariaRole;return p==="alert"});T.length>0&&k(T[0].id)}}f.exports.useEffect(function(){I&&ha(r.current,I)},[I]);var D=Oe(o)||!_||a&&!a.every(function(h){return"id"in h}),P=fa(t),R=P?t.ariaLabels:{},B=P&&(a==null?void 0:a.length)>3,W=f.exports.useState(!1),j=W[0],te=W[1];function ie(){var h,p,w;return j?w=(h=R==null?void 0:R.stackCollapseLabel)!==null&&h!==void 0?h:"Collapse stacked notifications":w=(p=R==null?void 0:R.stackExpandLabel)!==null&&p!==void 0?p:"Expand stacked notifications",w}function X(){var h;if(!!B){var p=Math.min(3,a.length),w=a.slice(0,p);return x("div",{className:d.stack,style:(h={},h[ge.flashbarStackDepth]=p,h),children:[!j&&n("div",{className:y(d.collapsed,_&&d["visual-refresh"]),children:w.map(function(C,L){var E,U,se;return x("div",{className:d.item,style:(E={},E[ge.flashbarStackIndex]=L,E),children:[L===0&&n("ul",{className:d["flash-list"],children:n("li",{className:d["flash-list-item"],children:H(C,(U=C.id)!==null&&U!==void 0?U:L)})}),L>0&&n("div",{className:y(d.flash,d["flash-type-".concat((se=C.type)!==null&&se!==void 0?se:"info")])})]},L)})}),j&&n("ul",{className:y(d["flash-list"],d.expanded),children:a.map(function(C,L){var E,U;return n("li",{className:d["flash-list-item"],children:H(C,(U=C.id)!==null&&U!==void 0?U:L)},(E=C.id)!==null&&E!==void 0?E:L)})}),n("button",{...S({"aria-label":ie(),className:y(d.toggle,_&&d["visual-refresh"]),onClick:function(){return te(!j)}},m),children:n("span",{className:y(d.icon,j&&d.expanded),children:n(me,{size:"small",name:"angle-down"})})})]})}}function K(){if(!(B||D||!a))return n(ta,{component:"ul",className:d["flash-list"],children:a&&a.map(function(h,p){var w;return n(Me,{transitionChangeDelay:{entering:ma},in:!0,children:function(C,L){var E;return n("li",{className:d["flash-list-item"],children:H(h,(E=h.id)!==null&&E!==void 0?E:p,L,C)})}},(w=h.id)!==null&&w!==void 0?w:p)})})}function A(){if(!(B||!D||!a))return n("ul",{className:d["flash-list"],children:a.map(function(h,p){var w,C;return n("li",{className:d["flash-list-item"],children:H(h,(C=h.id)!==null&&C!==void 0?C:p)},(w=h.id)!==null&&w!==void 0?w:p)})})}function H(h,p,w,C){return n(va,{...S({className:y(Ve("flashbar"),_?d["flash-refresh"]:""),key:p,ref:w,transitionState:C},h)})}return x("div",{...S({},i,{className:y(i.className,d.flashbar,d["breakpoint-".concat(c)]),ref:u}),children:[X(),K(),A()]})}function fa(e){return"stackItems"in e&&!!e.stackItems}Q(Ie,"Flashbar");const M={root:"awsui_root_1i0s3_ntsvl_93",header:"awsui_header_1i0s3_ntsvl_104",content:"awsui_content_1i0s3_ntsvl_108",error:"awsui_error_1i0s3_ntsvl_112",footer:"awsui_footer_1i0s3_ntsvl_116","actions-section":"awsui_actions-section_1i0s3_ntsvl_120","secondary-actions":"awsui_secondary-actions_1i0s3_ntsvl_129",actions:"awsui_actions_1i0s3_ntsvl_120"};function pa(e){var a=e.children,t=e.header,l=e.errorText,i=e.errorIconAriaLabel,r=e.actions,s=e.secondaryActions,c=e.__internalRootRef,o=G(e,["children","header","errorText","errorIconAriaLabel","actions","secondaryActions","__internalRootRef"]),u=Z(o);return x("div",{...S({},u,{ref:c,className:y(M.root,u.className)}),children:[t&&n("div",{className:M.header,children:t}),a&&n("div",{className:M.content,children:a}),l&&n(je,{margin:{top:"l"},children:n(sa,{type:"error",statusIconAriaLabel:i,children:n("div",{className:M.error,children:l})})}),(r||s)&&n("div",{className:M.footer,children:x("div",{className:M["actions-section"],children:[r&&n("div",{className:M.actions,children:r}),s&&n("div",{className:M["secondary-actions"],children:s})]})}),l&&x(Ce,{assertive:!0,children:[i,", ",l]})]})}function ke(e){var a=$("Form");return n(pa,{...S({},e,a)})}Q(ke,"Form");function J(e){var a=e.stretch,t=a===void 0?!1:a,l=G(e,["stretch"]),i=$("FormField");return n(He,{...S({stretch:t},l,{__hideLabel:!1},i)})}Q(J,"FormField");var Re=Y.forwardRef(function(e,a){var t=e.value,l=e.type,i=l===void 0?"text":l,r=e.step,s=e.inputMode,c=e.autoComplete,o=c===void 0?!0:c,u=e.spellcheck,m=e.disabled,_=e.readOnly,b=e.disableBrowserAutocorrect,g=e.onKeyDown,q=e.onKeyUp,v=e.onChange,I=e.onBlur,k=e.onFocus,F=e.ariaRequired,V=e.name,T=e.placeholder,D=e.autoFocus,P=e.ariaLabel,R=e.ariaLabelledby,B=e.ariaDescribedby,W=e.invalid,j=e.controlId,te=G(e,["value","type","step","inputMode","autoComplete","spellcheck","disabled","readOnly","disableBrowserAutocorrect","onKeyDown","onKeyUp","onChange","onBlur","onFocus","ariaRequired","name","placeholder","autoFocus","ariaLabel","ariaLabelledby","ariaDescribedby","invalid","controlId"]),ie=$("Input"),X=Z(te),K=f.exports.useRef(null);return f.exports.useImperativeHandle(a,function(){return{focus:function(){for(var A,H=[],h=0;h<arguments.length;h++)H[h]=arguments[h];(A=K.current)===null||A===void 0||A.focus.apply(A,H)},select:function(){var A;(A=K.current)===null||A===void 0||A.select()}}},[K]),n(Ue,{...S({ref:K},S(S(S({},X),ie),{autoComplete:o,ariaLabel:P,ariaRequired:F,autoFocus:D,disabled:m,disableBrowserAutocorrect:b,name:V,onKeyDown:g,onKeyUp:q,onChange:v,onBlur:I,onFocus:k,placeholder:T,readOnly:_,type:i,step:r,inputMode:s,spellcheck:u,value:t,ariaDescribedby:B,ariaLabelledby:R,invalid:W,controlId:j}),{className:y(ze.root,X.className),__inheritFormFieldProps:!0})})});Q(Re,"Input");const we=Re;var qe=Y.forwardRef(function(e,a){var t=$("RadioGroup");return n(Ge,{...S({ref:a},e,t)})});Q(qe,"RadioGroup");const oe=qe,ce=[{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"}],de=[{value:"Systems Development Engineer",label:"Systems Development Engineer"},{value:"Systems Engineer",label:"Systems Engineer"},{value:"Support Engineer",label:"Support Engineer"},{value:"System Admin",label:"System Admin"},{value:"Systems Analyst",label:"Systems Analyst"}],ue=[{value:"Networking",label:"Networking"},{value:"System Design",label:"System Design"},{value:"Coding",label:"Coding"},{value:"System Admin",label:"System Admin"},{value:"Customer Obsession",label:"Customer Obsession"},{value:"Learn and Be Curious",label:"Learn and Be Curious"},{value:"Ownership",label:"Ownership"},{value:"Invent and simplify",label:"Invent and simplify"},{value:"Are right a lot",label:"Are right a lot"},{value:"Hire and develop the best",label:"Hire and develop the best"},{value:"Insist on highest standards",label:"Insist on highest standards"},{value:"Think Big",label:"Think Big"},{value:"Bias For Action",label:"Bias For Action"},{value:"Frugality",label:"Frugality"},{value:"Earn Trust",label:"Earn Trust"},{value:"Dive Deep",label:"Dive Deep"},{value:"Have Backbone, disagree and commit",label:"Have Backbone, disagree and commit"},{value:"Have Backbone, disagree and commit",label:"Deliver Results"},{value:"Strive to be Earth's Best Employer",label:"Strive to be Earth's Best Employer"},{value:"Success and Scale Bring Broad Responsibility",label:"Success and Scale Bring Broad Responsibility"}],ye=e=>!(e!=null&&e.length);function _a(){const[e,a]=f.exports.useState(!1),[t,l]=f.exports.useState(ce[0].value),[i,r]=f.exports.useState(de[0].value),[s,c]=f.exports.useState(ue[0].value),[o,u]=f.exports.useState(""),[m,_]=f.exports.useState(""),[b,g]=Y.useState([{type:"success",content:"Success - Interview question posted.",action:n(re,{href:"/index.html",variant:"link",children:"View questions"}),dismissible:!0,dismissLabel:"Dismiss message",onDismiss:()=>g([]),id:"message_1"}]);return n($e,{contentType:"form",breadcrumbs:n(Qe,{active:{text:"Create question",href:"/createquestion/index.html"}}),navigation:n(We,{}),tools:n(Ke,{header:n("h2",{children:"Help panel"})}),children:n(Se,{header:n(le,{variant:"h1",description:"Submit an interview question",children:"Submit question"}),children:n("form",{onSubmit:async v=>{v.preventDefault();const I="https://samilafo-qwiz-api.samilafo.people.aws.dev/put-question";try{(await fetch(I,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({level:t,job_role:i,question_type:s,question:o,answer:m})})).ok?(console.log("PUT request successful"),l(ce[0].value),r(de[0].value),c(ue[0].value),u(""),_("")):console.error("PUT request failed")}catch(k){console.error("Error during PUT request:",k)}a(!0)},children:n(ke,{actions:x(ee,{direction:"horizontal",size:"xs",children:[n(re,{href:"/index.html",variant:"link",children:"Cancel"}),n(re,{formAction:"submit",variant:"primary",children:"Submit"})]}),children:x(ee,{size:"l",children:[n(ae,{header:n(le,{variant:"h2",children:"Role Details"}),children:x(ee,{direction:"vertical",size:"l",children:[n(J,{label:"Level",stretch:!0,description:"Choose the job level appropriate for this question",children:n(oe,{value:t,onChange:v=>l(v.detail.value),items:ce})}),n(J,{label:"Job Role",stretch:!0,description:"Choose the job role appropriate for this question",children:n(oe,{value:i,onChange:v=>r(v.detail.value),items:de})})]})}),n(ae,{header:n(le,{variant:"h2",children:"Question Details"}),children:x(ee,{direction:"vertical",size:"l",children:[n(J,{label:"Question type",stretch:!0,description:"Choose the question type appropriate for this question",children:n(oe,{value:s,onChange:v=>c(v.detail.value),items:ue})}),n(J,{label:"Interview question",errorText:e&&ye(o)&&"A question is required.",i18nStrings:{errorIconAriaLabel:"Error"},children:n(we,{value:o,onChange:({detail:v})=>u(v.value),type:"text"})}),n(J,{label:"answer",errorText:e&&ye(m)&&"An answer is required.",i18nStrings:{errorIconAriaLabel:"Error"},children:n(we,{value:m,onChange:({detail:v})=>_(v.value),type:"text"})})]})}),n(ae,{children:n(Ie,{items:b})})]})})})})})}const ba=Je.createRoot(document.getElementById("root"));ba.render(n(Y.StrictMode,{children:n(_a,{})}));
