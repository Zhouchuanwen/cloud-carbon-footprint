(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=a,h=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return n?r.a.createElement(h,c(c({ref:t},p),{},{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(123)),i={id:"alternative-data-approaches",title:"Alternative Data Approaches",slug:"/alternative-data-approaches"},c={unversionedId:"alternative-data-approaches",id:"alternative-data-approaches",isDocsHomePage:!1,title:"Alternative Data Approaches",description:"We support two approaches to gathering usage data for different cloud providers.",source:"@site/docs/AlternativeDataApproaches.md",slug:"/alternative-data-approaches",permalink:"/docs/alternative-data-approaches",version:"current",sidebar:"tryNowSidebar",previous:{title:"Azure",permalink:"/docs/azure"},next:{title:"Get Recommendations",permalink:"/docs/get-recommendations"}},s=[{value:"Using Cloud Usage APIs (Higher Accuracy)",id:"using-cloud-usage-apis-higher-accuracy",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We support two approaches to gathering usage data for different cloud providers."),Object(o.b)("p",null,"By default, we query AWS Cost and Usage Reports with Amazon Athena, GCP Billing Export Table using BigQuery, and Azure Consumption Management API. This pulls usage data from all Linked Accounts in your AWS, GCP or Azure Organization. This option is selected by default with following options set to true in the server ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"AWS_USE_BILLING_DATA")," (AWS)",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"GCP_USE_BILLING_DATA")," (GCP)",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"GCP_USE_BILLING_DATA")," (GCP)"),Object(o.b)("p",null,"You need to also set additional environment variables as specified in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/api/.env.template"},"api/.env.template"),", which was described in the Connecting Your Data section. You can see the permissions required by this approach in ",Object(o.b)("inlineCode",{parentName:"p"},"ccf-app.yaml")," file. This approach provides us with a more holistic estimation of your cloud energy and carbon consumption, but it is less accurate as we use a constant (rather than measure) CPU Utilization, set for each cloud provider package:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"AWS: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/aws/src/domain/AwsFootprintEstimationConstants.ts"},"packages/aws/src/domain/AwsFootprintEstimationConstants.ts")),Object(o.b)("li",{parentName:"ul"},"Azure: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/azure/src/domain/AzureFootprintEstimationConstants.ts"},"packages/azure/src/domain/AzureFootprintEstimationConstants.ts")),Object(o.b)("li",{parentName:"ul"},"GCP: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/gcp/src/domain/GcpFootprintEstimationConstants.ts"},"packages/gcp/src/domain/GcpFootprintEstimationConstants.ts"))),Object(o.b)("p",null,"This is the only approach currently supported for Microsoft Azure."),Object(o.b)("h3",{id:"using-cloud-usage-apis-higher-accuracy"},"Using Cloud Usage APIs (Higher Accuracy)"),Object(o.b)("p",null,"This alternative approach utilizes the AWS CloudWatch and Cost Explore APIs, and the GCP Cloud Monitoring API. We achieve this by looping through the accounts (the list is in the api/.env file) and then making the API calls on each account for the regions and services set in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/common/src/Config.ts"},"packages/common/src/Config.ts"),". The permissions required for this approach are in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/cloudformation/ccf.yaml"},"ccf.yaml")," file. This approach is arguably more accurate as we use the actual CPU usage in the emission estimation but is confined to the services that have been implemented so far in the application. This option is not currently supported for Microsoft Azure."),Object(o.b)("p",null,"For a more comprehensive read on the various calculations and constants that we use for the emissions estimates, check out the ",Object(o.b)("a",{parentName:"p",href:"/docs/methodology"},"Methodology page"),"."))}u.isMDXComponent=!0}}]);