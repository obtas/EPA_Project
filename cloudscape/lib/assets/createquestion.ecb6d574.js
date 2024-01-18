import{r as p,ae as Ee,af as Fe,ag as Le,j as t,ah as _e,R as Y,_ as G,g as Z,a as xe,b as he,d as ve,e as S,f as y,ai as Ae,h as x,C as me,i as ae,l as be,y as $,a2 as Te,B as Q,Z as Be,a1 as De,D as Ne,a4 as Ce,aj as Pe,ak as Oe,al as ge,am as Me,an as Ve,z as je,q as He,a5 as Ue,ao as ze,s as Ge,a9 as $e,aa as Qe,ab as We,ac as Ke,a6 as ie,a7 as ee,a8 as re,ad as Je}from"./index.e231c07c.js";function Ye(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pe(e,a){var n=function(r){return a&&p.exports.isValidElement(r)?a(r):r},l=Object.create(null);return e&&p.exports.Children.map(e,function(s){return s}).forEach(function(s){l[s.key]=n(s)}),l}function Ze(e,a){e=e||{},a=a||{};function n(m){return m in a?a[m]:e[m]}var l=Object.create(null),s=[];for(var r in e)r in a?s.length&&(l[r]=s,s=[]):s.push(r);var i,c={};for(var o in a){if(l[o])for(i=0;i<l[o].length;i++){var u=l[o][i];c[l[o][i]]=n(u)}c[o]=n(o)}for(i=0;i<s.length;i++)c[s[i]]=n(s[i]);return c}function z(e,a,n){return n[a]!=null?n[a]:e.props[a]}function Xe(e,a){return pe(e.children,function(n){return p.exports.cloneElement(n,{onExited:a.bind(null,n),in:!0,appear:z(n,"appear",e),enter:z(n,"enter",e),exit:z(n,"exit",e)})})}function ea(e,a,n){var l=pe(e.children),s=Ze(a,l);return Object.keys(s).forEach(function(r){var i=s[r];if(!!p.exports.isValidElement(i)){var c=r in a,o=r in l,u=a[r],m=p.exports.isValidElement(u)&&!u.props.in;o&&(!c||m)?s[r]=p.exports.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:z(i,"exit",e),enter:z(i,"enter",e)}):!o&&c&&!m?s[r]=p.exports.cloneElement(i,{in:!1}):o&&c&&p.exports.isValidElement(u)&&(s[r]=p.exports.cloneElement(i,{onExited:n.bind(null,i),in:u.props.in,exit:z(i,"exit",e),enter:z(i,"enter",e)}))}}),s}var aa=Object.values||function(e){return Object.keys(e).map(function(a){return e[a]})},ta={component:"div",childFactory:function(a){return a}},fe=function(e){Ee(a,e);function a(l,s){var r;r=e.call(this,l,s)||this;var i=r.handleExited.bind(Ye(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var n=a.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(s,r){var i=r.children,c=r.handleExited,o=r.firstRender;return{children:o?Xe(s,c):ea(s,i,c),firstRender:!1}},n.handleExited=function(s,r){var i=pe(this.props.children);s.key in i||(s.props.onExited&&s.props.onExited(r),this.mounted&&this.setState(function(c){var o=Fe({},c.children);return delete o[s.key],{children:o}}))},n.render=function(){var s=this.props,r=s.component,i=s.childFactory,c=Le(s,["component","childFactory"]),o=this.state.contextValue,u=aa(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,r===null?t(_e.Provider,{value:o,children:u}):t(_e.Provider,{value:o,children:t(r,{...c,children:u})})},a}(Y.Component);fe.propTypes={};fe.defaultProps=ta;const na=fe;const N={alert:"awsui_alert_mx3cw_wdted_93","awsui-motion-fade-in":"awsui_awsui-motion-fade-in_mx3cw_wdted_1",root:"awsui_root_mx3cw_wdted_119",hidden:"awsui_hidden_mx3cw_wdted_133",body:"awsui_body_mx3cw_wdted_156",header:"awsui_header_mx3cw_wdted_162",action:"awsui_action_mx3cw_wdted_166","action-button":"awsui_action-button_mx3cw_wdted_171",text:"awsui_text_mx3cw_wdted_175",icon:"awsui_icon_mx3cw_wdted_179",message:"awsui_message_mx3cw_wdted_182","breakpoint-default":"awsui_breakpoint-default_mx3cw_wdted_190",content:"awsui_content_mx3cw_wdted_204",dismiss:"awsui_dismiss_mx3cw_wdted_208","dismiss-button":"awsui_dismiss-button_mx3cw_wdted_214","type-error":"awsui_type-error_mx3cw_wdted_222","type-warning":"awsui_type-warning_mx3cw_wdted_230","type-success":"awsui_type-success_mx3cw_wdted_238","type-info":"awsui_type-info_mx3cw_wdted_246"};var sa={error:"status-negative",warning:"status-warning",success:"status-positive",info:"status-info"};function ia(e){var a,n=e.type,l=e.statusIconAriaLabel,s=e.visible,r=s===void 0?!0:s,i=e.dismissible,c=e.dismissAriaLabel,o=e.children,u=e.header,m=e.buttonText,b=e.action,g=e.onDismiss,f=e.onButtonClick,q=e.__internalRootRef,v=q===void 0?null:q,I=G(e,["type","statusIconAriaLabel","visible","dismissible","dismissAriaLabel","children","header","buttonText","action","onDismiss","onButtonClick","__internalRootRef"]),k=Z(I),F=xe(["xs"]),V=F[0],T=F[1],D=he(T,v),P=ve(),R=P?"normal":u&&o?"big":"normal",B=b||t(ae,{className:N["action-button"],onClick:function(){return be(f)},formAction:"none",children:m}),W=Boolean(b||m);return t("div",{...S({},k,{"aria-hidden":!r,className:y(N.root,(a={},a[N.hidden]=!r,a),k.className,N["breakpoint-".concat(V)]),ref:D}),children:t(Ae,{contextName:"alert",children:x("div",{className:y(N.alert,N["type-".concat(n)]),children:[t("div",{className:y(N.icon,N.text),role:"img","aria-label":l,children:t(me,{name:sa[n],size:R})}),x("div",{className:N.body,children:[x("div",{className:y(N.message,N.text),children:[u&&t("div",{className:N.header,children:u}),t("div",{className:N.content,children:o})]}),W&&t("div",{className:N.action,children:B})]}),i&&t("div",{className:N.dismiss,children:t(ae,{className:N["dismiss-button"],variant:"icon",iconName:"close",formAction:"none",ariaLabel:c,onClick:function(){return be(g)}})})]})})})}function ra(e,a,n){var l=n===void 0?{}:n,s=l.trailing,r=s===void 0?!0:s,i=null,c=null,o=null;function u(){if(!(i===null||c===null)){var g=Date.now(),f=g-c>=a;f?(e.apply(i.this,i.args),c=g,i=null,o=null):r&&m()}}function m(){o&&cancelAnimationFrame(o),o=requestAnimationFrame(u)}function b(){for(var g=[],f=0;f<arguments.length;f++)g[f]=arguments[f];c===null?(c=Date.now(),e.apply(this,g)):(i={this:this,args:g},m())}return b.cancel=function(){o&&cancelAnimationFrame(o),i=null,c=null,o=null},b}var la=function(e){var a=Object.keys(e).filter(function(n){return n.indexOf("__")!==0});return a.reduce(function(n,l){return n[l]=e[l],n},{})};function ue(e){var a=e.variant,n=a===void 0?"default":a,l=e.disableHeaderPaddings,s=l===void 0?!1:l,r=e.disableContentPaddings,i=r===void 0?!1:r,c=G(e,["variant","disableHeaderPaddings","disableContentPaddings"]),o=$("Container"),u=la(c);return t(Te,{...S({variant:n,disableHeaderPaddings:s,disableContentPaddings:i},u,o)})}Q(ue,"Container");const O={layout:"awsui_layout_5gtk3_1onm4_99","is-visual-refresh":"awsui_is-visual-refresh_5gtk3_1onm4_99",background:"awsui_background_5gtk3_1onm4_102",header:"awsui_header_5gtk3_1onm4_105","is-overlap-disabled":"awsui_is-overlap-disabled_5gtk3_1onm4_115","has-breadcrumbs":"awsui_has-breadcrumbs_5gtk3_1onm4_132",content:"awsui_content_5gtk3_1onm4_141"};function Se(e){var a,n,l,s=e.children,r=e.disableOverlap,i=e.header,c=G(e,["children","disableOverlap","header"]),o=Z(c),u=p.exports.useContext(Be).breadcrumbs,m=p.exports.useRef(null),b=$("ContentLayout").__internalRootRef,g=he(m,b),f=De(),q=ve(),v=!s||!i||r;return x("div",{...S({},o,{className:y(o.className,O.layout,(a={},a[O["is-overlap-disabled"]]=v,a[O["is-visual-refresh"]]=q,a)),ref:g}),children:[t("div",{className:y(O.background,(n={},n[O["is-overlap-disabled"]]=v,n),"awsui-context-content-header"),ref:f}),i&&t("div",{className:y(O.header,(l={},l[O["has-breadcrumbs"]]=u,l),"awsui-context-content-header"),children:i}),t("div",{className:O.content,children:s})]})}Q(Se,"ContentLayout");const d={"flash-refresh":"awsui_flash-refresh_1q84n_1la8c_93",enter:"awsui_enter_1q84n_1la8c_93","flash-body":"awsui_flash-body_1q84n_1la8c_108","flash-message":"awsui_flash-message_1q84n_1la8c_108","flash-header":"awsui_flash-header_1q84n_1la8c_108","flash-content":"awsui_flash-content_1q84n_1la8c_109","action-button-wrapper":"awsui_action-button-wrapper_1q84n_1la8c_110","dismiss-button-wrapper":"awsui_dismiss-button-wrapper_1q84n_1la8c_111","flash-icon":"awsui_flash-icon_1q84n_1la8c_134",entering:"awsui_entering_1q84n_1la8c_147",entered:"awsui_entered_1q84n_1la8c_168",exiting:"awsui_exiting_1q84n_1la8c_273",flashbar:"awsui_flashbar_1q84n_1la8c_295",flash:"awsui_flash_1q84n_1la8c_93","flash-list":"awsui_flash-list_1q84n_1la8c_350","flash-focus-container":"awsui_flash-focus-container_1q84n_1la8c_386","flash-text":"awsui_flash-text_1q84n_1la8c_392","dismiss-button":"awsui_dismiss-button_1q84n_1la8c_111","breakpoint-default":"awsui_breakpoint-default_1q84n_1la8c_433","flash-list-item":"awsui_flash-list-item_1q84n_1la8c_433","action-button":"awsui_action-button_1q84n_1la8c_110","flash-type-success":"awsui_flash-type-success_1q84n_1la8c_446","flash-type-error":"awsui_flash-type-error_1q84n_1la8c_450","flash-type-warning":"awsui_flash-type-warning_1q84n_1la8c_454","flash-type-info":"awsui_flash-type-info_1q84n_1la8c_458",stack:"awsui_stack_1q84n_1la8c_462",expanded:"awsui_expanded_1q84n_1la8c_467",collapsed:"awsui_collapsed_1q84n_1la8c_481",item:"awsui_item_1q84n_1la8c_487","visual-refresh":"awsui_visual-refresh_1q84n_1la8c_497","flash-items":"awsui_flash-items_1q84n_1la8c_503",toggle:"awsui_toggle_1q84n_1la8c_510",icon:"awsui_icon_1q84n_1la8c_573"};var oa=2e3,ca={success:"status-positive",warning:"status-warning",info:"status-info",error:"status-negative"};function da(e,a){return t(ae,{onClick:a,className:d["action-button"],formAction:"none",children:e})}function ua(e,a){return t("div",{className:d["dismiss-button-wrapper"],children:t(ae,{onClick:a,className:d["dismiss-button"],variant:"flashbar-icon",iconName:"close",formAction:"none",ariaLabel:e})})}var ha=ra(function(e,a){var n,l='[data-itemid="'.concat(CSS.escape(a),'"] .').concat(d["flash-focus-container"]);(n=e==null?void 0:e.querySelector(l))===null||n===void 0||n.focus()},oa,{trailing:!1}),va=Y.forwardRef(function(e,a){var n,l=e.id,s=e.header,r=e.content,i=e.dismissible,c=e.dismissLabel,o=e.statusIconAriaLabel,u=e.loading,m=e.action,b=e.buttonText,g=e.onButtonClick,f=e.onDismiss,q=e.className,v=e.transitionState,I=e.ariaRole,k=e.type,F=k===void 0?"info":k,V=Ne(),T=m||b&&da(b,g),D=ca[F],P=u?t(Pe,{}):t(me,{name:D}),R=u?"info":F,B=[o,s,r].filter(Boolean).join(" ");return x("div",{ref:a,role:I,"aria-live":I?"off":void 0,"data-itemid":l,className:y(d.flash,d["flash-type-".concat(R)],q,v&&(n={},n[d.enter]=v==="enter",n[d.entering]=v==="entering",n[d.entered]=v==="entered",n[d.exit]=v==="exit",n[d.exiting]=v==="exiting",n[d.exited]=v==="exited",n)),children:[x("div",{className:d["flash-body"],children:[x("div",{...S({},V,{className:d["flash-focus-container"],tabIndex:I==="alert"?-1:void 0}),children:[t("div",{className:y(d["flash-icon"],d["flash-text"]),role:"img","aria-label":o,children:P}),x("div",{className:y(d["flash-message"],d["flash-text"]),children:[t("div",{className:d["flash-header"],children:s}),t("div",{className:d["flash-content"],children:r})]})]}),T&&t("div",{className:d["action-button-wrapper"],children:T})]}),i&&ua(c,f),I==="status"&&t(Ce,{children:B})]})}),ma=115;function Ie(e){var a=e.items,n=G(e,["items"]),l=$("Flashbar").__internalRootRef,s=Z(n),r=p.exports.useRef(null),i=xe(["xs"]),c=i[0],o=i[1],u=he(r,o,l),m=Ne(),b=ve(),g=p.exports.useState(a),f=g[0],q=g[1],v=p.exports.useState(null),I=v[0],k=v[1];if(a){var F=a.filter(function(h){var _=h.id;return _&&!f.some(function(w){return w.id===_})}),V=f.filter(function(h){var _=h.id;return _&&!a.some(function(w){return w.id===_})});if(F.length>0||V.length>0){q(a);var T=F.filter(function(h){var _=h.ariaRole;return _==="alert"});T.length>0&&k(T[0].id)}}p.exports.useEffect(function(){I&&ha(r.current,I)},[I]);var D=Oe(o)||!b||a&&!a.every(function(h){return"id"in h}),P=pa(n),R=P?n.ariaLabels:{},B=P&&(a==null?void 0:a.length)>3,W=p.exports.useState(!1),j=W[0],te=W[1];function ne(){var h,_,w;return j?w=(h=R==null?void 0:R.stackCollapseLabel)!==null&&h!==void 0?h:"Collapse stacked notifications":w=(_=R==null?void 0:R.stackExpandLabel)!==null&&_!==void 0?_:"Expand stacked notifications",w}function X(){var h;if(!!B){var _=Math.min(3,a.length),w=a.slice(0,_);return x("div",{className:d.stack,style:(h={},h[ge.flashbarStackDepth]=_,h),children:[!j&&t("div",{className:y(d.collapsed,b&&d["visual-refresh"]),children:w.map(function(C,A){var E,U,se;return x("div",{className:d.item,style:(E={},E[ge.flashbarStackIndex]=A,E),children:[A===0&&t("ul",{className:d["flash-list"],children:t("li",{className:d["flash-list-item"],children:H(C,(U=C.id)!==null&&U!==void 0?U:A)})}),A>0&&t("div",{className:y(d.flash,d["flash-type-".concat((se=C.type)!==null&&se!==void 0?se:"info")])})]},A)})}),j&&t("ul",{className:y(d["flash-list"],d.expanded),children:a.map(function(C,A){var E,U;return t("li",{className:d["flash-list-item"],children:H(C,(U=C.id)!==null&&U!==void 0?U:A)},(E=C.id)!==null&&E!==void 0?E:A)})}),t("button",{...S({"aria-label":ne(),className:y(d.toggle,b&&d["visual-refresh"]),onClick:function(){return te(!j)}},m),children:t("span",{className:y(d.icon,j&&d.expanded),children:t(me,{size:"small",name:"angle-down"})})})]})}}function K(){if(!(B||D||!a))return t(na,{component:"ul",className:d["flash-list"],children:a&&a.map(function(h,_){var w;return t(Me,{transitionChangeDelay:{entering:ma},in:!0,children:function(C,A){var E;return t("li",{className:d["flash-list-item"],children:H(h,(E=h.id)!==null&&E!==void 0?E:_,A,C)})}},(w=h.id)!==null&&w!==void 0?w:_)})})}function L(){if(!(B||!D||!a))return t("ul",{className:d["flash-list"],children:a.map(function(h,_){var w,C;return t("li",{className:d["flash-list-item"],children:H(h,(C=h.id)!==null&&C!==void 0?C:_)},(w=h.id)!==null&&w!==void 0?w:_)})})}function H(h,_,w,C){return t(va,{...S({className:y(Ve("flashbar"),b?d["flash-refresh"]:""),key:_,ref:w,transitionState:C},h)})}return x("div",{...S({},s,{className:y(s.className,d.flashbar,d["breakpoint-".concat(c)]),ref:u}),children:[X(),K(),L()]})}function pa(e){return"stackItems"in e&&!!e.stackItems}Q(Ie,"Flashbar");const M={root:"awsui_root_1i0s3_ntsvl_93",header:"awsui_header_1i0s3_ntsvl_104",content:"awsui_content_1i0s3_ntsvl_108",error:"awsui_error_1i0s3_ntsvl_112",footer:"awsui_footer_1i0s3_ntsvl_116","actions-section":"awsui_actions-section_1i0s3_ntsvl_120","secondary-actions":"awsui_secondary-actions_1i0s3_ntsvl_129",actions:"awsui_actions_1i0s3_ntsvl_120"};function fa(e){var a=e.children,n=e.header,l=e.errorText,s=e.errorIconAriaLabel,r=e.actions,i=e.secondaryActions,c=e.__internalRootRef,o=G(e,["children","header","errorText","errorIconAriaLabel","actions","secondaryActions","__internalRootRef"]),u=Z(o);return x("div",{...S({},u,{ref:c,className:y(M.root,u.className)}),children:[n&&t("div",{className:M.header,children:n}),a&&t("div",{className:M.content,children:a}),l&&t(je,{margin:{top:"l"},children:t(ia,{type:"error",statusIconAriaLabel:s,children:t("div",{className:M.error,children:l})})}),(r||i)&&t("div",{className:M.footer,children:x("div",{className:M["actions-section"],children:[r&&t("div",{className:M.actions,children:r}),i&&t("div",{className:M["secondary-actions"],children:i})]})}),l&&x(Ce,{assertive:!0,children:[s,", ",l]})]})}function ke(e){var a=$("Form");return t(fa,{...S({},e,a)})}Q(ke,"Form");function J(e){var a=e.stretch,n=a===void 0?!1:a,l=G(e,["stretch"]),s=$("FormField");return t(He,{...S({stretch:n},l,{__hideLabel:!1},s)})}Q(J,"FormField");var Re=Y.forwardRef(function(e,a){var n=e.value,l=e.type,s=l===void 0?"text":l,r=e.step,i=e.inputMode,c=e.autoComplete,o=c===void 0?!0:c,u=e.spellcheck,m=e.disabled,b=e.readOnly,g=e.disableBrowserAutocorrect,f=e.onKeyDown,q=e.onKeyUp,v=e.onChange,I=e.onBlur,k=e.onFocus,F=e.ariaRequired,V=e.name,T=e.placeholder,D=e.autoFocus,P=e.ariaLabel,R=e.ariaLabelledby,B=e.ariaDescribedby,W=e.invalid,j=e.controlId,te=G(e,["value","type","step","inputMode","autoComplete","spellcheck","disabled","readOnly","disableBrowserAutocorrect","onKeyDown","onKeyUp","onChange","onBlur","onFocus","ariaRequired","name","placeholder","autoFocus","ariaLabel","ariaLabelledby","ariaDescribedby","invalid","controlId"]),ne=$("Input"),X=Z(te),K=p.exports.useRef(null);return p.exports.useImperativeHandle(a,function(){return{focus:function(){for(var L,H=[],h=0;h<arguments.length;h++)H[h]=arguments[h];(L=K.current)===null||L===void 0||L.focus.apply(L,H)},select:function(){var L;(L=K.current)===null||L===void 0||L.select()}}},[K]),t(Ue,{...S({ref:K},S(S(S({},X),ne),{autoComplete:o,ariaLabel:P,ariaRequired:F,autoFocus:D,disabled:m,disableBrowserAutocorrect:g,name:V,onKeyDown:f,onKeyUp:q,onChange:v,onBlur:I,onFocus:k,placeholder:T,readOnly:b,type:s,step:r,inputMode:i,spellcheck:u,value:n,ariaDescribedby:B,ariaLabelledby:R,invalid:W,controlId:j}),{className:y(ze.root,X.className),__inheritFormFieldProps:!0})})});Q(Re,"Input");const we=Re;var qe=Y.forwardRef(function(e,a){var n=$("RadioGroup");return t(Ge,{...S({ref:a},e,n)})});Q(qe,"RadioGroup");const le=qe,oe=[{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"}],ce=[{value:"Systems Development Engineer",label:"Systems Development Engineer"},{value:"Systems Engineer",label:"Systems Engineer"},{value:"Support Engineer",label:"Support Engineer"},{value:"System Admin",label:"System Admin"},{value:"Systems Analyst",label:"Systems Analyst"}],de=[{value:"Networking",label:"Networking"},{value:"System Design",label:"System Design"},{value:"Coding",label:"Coding"},{value:"System Admin",label:"System Admin"},{value:"Customer Obsession",label:"Customer Obsession"},{value:"Learn and Be Curious",label:"Learn and Be Curious"},{value:"Ownership",label:"Ownership"},{value:"Invent and simplify",label:"Invent and simplify"},{value:"Are right a lot",label:"Are right a lot"},{value:"Hire and develop the best",label:"Hire and develop the best"},{value:"Insist on highest standards",label:"Insist on highest standards"},{value:"Think Big",label:"Think Big"},{value:"Bias For Action",label:"Bias For Action"},{value:"Frugality",label:"Frugality"},{value:"Earn Trust",label:"Earn Trust"},{value:"Dive Deep",label:"Dive Deep"},{value:"Have Backbone, disagree and commit",label:"Have Backbone, disagree and commit"},{value:"Have Backbone, disagree and commit",label:"Deliver Results"},{value:"Strive to be Earth's Best Employer",label:"Strive to be Earth's Best Employer"},{value:"Success and Scale Bring Broad Responsibility",label:"Success and Scale Bring Broad Responsibility"}],ye=e=>!(e!=null&&e.length);function _a(){const[e,a]=p.exports.useState(!1),[n,l]=p.exports.useState(oe[0].value),[s,r]=p.exports.useState(ce[0].value),[i,c]=p.exports.useState(de[0].value),[o,u]=p.exports.useState(""),[m,b]=p.exports.useState(""),[g,f]=Y.useState([]);return t($e,{contentType:"form",breadcrumbs:t(Qe,{active:{text:"Create question",href:"/createquestion/index.html"}}),navigation:t(We,{}),tools:t(Ke,{header:t("h2",{children:"Help panel"})}),children:t(Se,{header:t(ie,{variant:"h1",description:"Submit an interview question",children:"Submit question"}),children:t("form",{onSubmit:async v=>{v.preventDefault();const I="https://samilafo-qwiz-api.samilafo.people.aws.dev/put-question";try{(await fetch(I,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({level:n,job_role:s,question_type:i,question:o,answer:m})})).ok?(console.log("PUT request successful"),l(oe[0].value),r(ce[0].value),c(de[0].value),u(""),b(""),f([{type:"success",content:"Success - Interview question posted.",action:t(re,{href:"/index.html",variant:"link",children:"View questions"}),dismissible:!0,dismissLabel:"Dismiss message",onDismiss:()=>f([]),id:"message_1"}])):(console.error("PUT request failed"),f([{type:"error",header:"Failed to post question",content:"Please try again",dismissible:!0,dismissLabel:"Dismiss message",onDismiss:()=>f([]),id:"message_2"}]))}catch(k){console.error("Error during PUT request:",k)}a(!0)},children:t(ke,{actions:x(ee,{direction:"horizontal",size:"xs",children:[t(re,{href:"/index.html",variant:"link",children:"Cancel"}),t(re,{formAction:"submit",variant:"primary",children:"Submit"})]}),children:x(ee,{size:"l",children:[t(Ie,{items:g}),t(ue,{header:t(ie,{variant:"h2",children:"Role Details"}),children:x(ee,{direction:"vertical",size:"l",children:[t(J,{label:"Level",stretch:!0,description:"Choose the job level appropriate for this question",children:t(le,{value:n,onChange:v=>l(v.detail.value),items:oe})}),t(J,{label:"Job Role",stretch:!0,description:"Choose the job role appropriate for this question",children:t(le,{value:s,onChange:v=>r(v.detail.value),items:ce})})]})}),t(ue,{header:t(ie,{variant:"h2",children:"Question Details"}),children:x(ee,{direction:"vertical",size:"l",children:[t(J,{label:"Question type",stretch:!0,description:"Choose the question type appropriate for this question",children:t(le,{value:i,onChange:v=>c(v.detail.value),items:de})}),t(J,{label:"Interview question",errorText:e&&ye(o)&&"A question is required.",i18nStrings:{errorIconAriaLabel:"Error"},children:t(we,{value:o,onChange:({detail:v})=>u(v.value),type:"text"})}),t(J,{label:"answer",errorText:e&&ye(m)&&"An answer is required.",i18nStrings:{errorIconAriaLabel:"Error"},children:t(we,{value:m,onChange:({detail:v})=>b(v.value),type:"text"})})]})})]})})})})})}const ba=Je.createRoot(document.getElementById("root"));ba.render(t(Y.StrictMode,{children:t(_a,{})}));
