(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),s=n,m=u["".concat(b,".").concat(s)]||u[s]||d[s]||l;return a?r.a.createElement(m,i(i({ref:t},c),{},{components:a})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var c=2;c<l;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(123)),b={id:"configurations-glossary",title:"Configurations Glossary",slug:"/configurations-glossary"},i={unversionedId:"configurations-glossary",id:"configurations-glossary",isDocsHomePage:!1,title:"Configurations Glossary",description:"Api/cli Packages",source:"@site/docs/ConfigurationsGlossary.md",slug:"/configurations-glossary",permalink:"/docs/configurations-glossary",version:"current",sidebar:"tryNowSidebar",previous:{title:"Performance Configurations",permalink:"/docs/performance-configurations"},next:{title:"Deploying",permalink:"/docs/deploying"}},o=[{value:"Api/cli Packages",id:"apicli-packages",children:[{value:"Variables for both estimation approaches with AWS:",id:"variables-for-both-estimation-approaches-with-aws",children:[]},{value:"Variables needed for the Billing Data (Holistic) approach with AWS:",id:"variables-needed-for-the-billing-data-holistic-approach-with-aws",children:[]},{value:"Variables needed for the Cloud Usage API (Higher Accuracy) approach with AWS:",id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-aws",children:[]},{value:"Optionally set this to &quot;GCP&quot; or &quot;AWS&quot; if your application is deployed to AWS or GCP:",id:"optionally-set-this-to-gcp-or-aws-if-your-application-is-deployed-to-aws-or-gcp",children:[]},{value:"Variables needed for the Billing Data (Holistic) approach with GCP:",id:"variables-needed-for-the-billing-data-holistic-approach-with-gcp",children:[]},{value:"Variables needed for the Cloud Usage API (Higher Accuracy) approach with GCP:",id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-gcp",children:[]},{value:"Variables needed for the Billing Data (Holistic) approach with Azure:",id:"variables-needed-for-the-billing-data-holistic-approach-with-azure",children:[]},{value:"Optionally set this to &quot;GCP&quot; if your Azure credentials are stored in Google Secrets Manager:",id:"optionally-set-this-to-gcp-if-your-azure-credentials-are-stored-in-google-secrets-manager",children:[]},{value:"Optionally set this to store cache file in Google Cloud Storage",id:"optionally-set-this-to-store-cache-file-in-google-cloud-storage",children:[]}]},{value:"Client Package - all variables are optional",id:"client-package---all-variables-are-optional",children:[]}],c={toc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"apicli-packages"},"Api/cli Packages"),Object(l.b)("h3",{id:"variables-for-both-estimation-approaches-with-aws"},"Variables for both estimation approaches with AWS:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Example Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_TARGET_ACCOUNT_ROLE_NAME"),Object(l.b)("td",{parentName:"tr",align:null},"your-target-account-role-name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"This variable is needed if you are authenticating with ",Object(l.b)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ChainableTemporaryCredentials.html"},"ChainableTemporaryCredentials"),". E.g. from one role to the authorized role.")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"variables-needed-for-the-billing-data-holistic-approach-with-aws"},"Variables needed for the Billing Data (Holistic) approach with AWS:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Example Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_USE_BILLING_DATA"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Use this to configure the application to query Cost and Usage Reports via AWS Athena. Unset to make this false. Defaults to true.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_ATHENA_DB_NAME"),Object(l.b)("td",{parentName:"tr",align:null},"your-athena-db-name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The name of your AWS Athena Database with Cost and Usage Reports data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_ATHENA_DB_TABLE"),Object(l.b)("td",{parentName:"tr",align:null},"your-athena-db-table"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The name of your AWS Athena Table with Cost and Usage Reports data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_ATHENA_REGION"),Object(l.b)("td",{parentName:"tr",align:null},"your-athena-region"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The region your AWS Athena Database/Table were created in.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_ATHENA_QUERY_RESULT_LOCATION"),Object(l.b)("td",{parentName:"tr",align:null},"s3://your-athena-query-results-location"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},'The AWS S3 Bucket that you want your Athena query results to reside in. Must be prefixed with "s3://".')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_BILLING_ACCOUNT_ID"),Object(l.b)("td",{parentName:"tr",align:null},"your-billing-account-id"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Your AWS Billing Account ID, where Cost and Usage Reports are configured.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_BILLING_ACCOUNT_NAME"),Object(l.b)("td",{parentName:"tr",align:null},"your-billing-account-name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The name of your AWS Billing Account. This can be any value.")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-aws"},"Variables needed for the Cloud Usage API (Higher Accuracy) approach with AWS:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Example Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_ACCOUNTS"),Object(l.b)("td",{parentName:"tr",align:null},'[{"id":"your-account-id","name":"Your AWS Account"}]'),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},'This is array of objects with keys "id" and "name" that match the AWS accounts you want to pull usage data from to run energy/carbon estimation for.'),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("br",null),Object(l.b)("h3",{id:"optionally-set-this-to-gcp-or-aws-if-your-application-is-deployed-to-aws-or-gcp"},'Optionally set this to "GCP" or "AWS" if your application is deployed to AWS or GCP:'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Example Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_AUTH_MODE"),Object(l.b)("td",{parentName:"tr",align:null},"default"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The mode to authenticate with for AWS. Options include: 'AWS': uses ",Object(l.b)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ChainableTemporaryCredentials.html"},"ChainableTemporaryCredentials"),", for deploying to AWS. 'GCP': Uses temporary STS Tokens, for deploying to GCP. 'default': Uses default local AWS profile, for local development.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_PROXY_ACCOUNT_ID"),Object(l.b)("td",{parentName:"tr",align:null},"your-proxy-account-id"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The AWS account of the account to proxy/chain from, when app is deployed to GCP.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_PROXY_ROLE_NAME"),Object(l.b)("td",{parentName:"tr",align:null},"your-proxy-role-name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The AWS role name in the proxy account, to proxy/chain from, when app is deployed to GCP.")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"variables-needed-for-the-billing-data-holistic-approach-with-gcp"},"Variables needed for the Billing Data (Holistic) approach with GCP:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Example Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GCP_USE_BILLING_DATA"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Use this to configure the application to query Billing Export Data via Google BigQuery. Unset to make this false. Defaults to true.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GOOGLE_APPLICATION_CREDENTIALS"),Object(l.b)("td",{parentName:"tr",align:null},"/path/to/your/credentials.json"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The absolute path to your service account private key file. This service account needs to have permission to query Billing Data using BigQuery.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GCP_BIG_QUERY_TABLE"),Object(l.b)("td",{parentName:"tr",align:null},"project.dataset.BQ_table_name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The name of your BigQuery table configured to consume Billing Export data in the format: ",Object(l.b)("inlineCode",{parentName:"td"},"PROJECT_ID.DATASET_NAME.TABLE_NAME"),". Don't forget to replace the colon in the table id if you copy it from BigQuery. See ",Object(l.b)("a",{parentName:"td",href:"https://cloud.google.com/billing/docs/how-to/bq-examples"},"here")," for more details.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GCP_BILLING_PROJECT_ID"),Object(l.b)("td",{parentName:"tr",align:null},"your-project-id"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The GCP Project ID that your service account exists in that has permission to query Billing Data using BigQuery.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GCP_BILLING_PROJECT_NAME"),Object(l.b)("td",{parentName:"tr",align:null},"your-project-name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The name for the GCP Project specified in the previous variable.")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-gcp"},"Variables needed for the Cloud Usage API (Higher Accuracy) approach with GCP:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Example Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GCP_PROJECTS"),Object(l.b)("td",{parentName:"tr",align:null},'[{"id":"your-gcp-project-id","name":"Your GCP Project"}]'),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},'This is array of objects with keys "id" and "name" that match the GCP Projects you want to pull usage data from to run energy/carbon estimation for.')))),Object(l.b)("br",null),Object(l.b)("h3",{id:"variables-needed-for-the-billing-data-holistic-approach-with-azure"},"Variables needed for the Billing Data (Holistic) approach with Azure:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Example Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AZURE_USE_BILLING_DATA"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Use this to configure the application to query Azure Consumption API. Unset to make this false. Defaults to true."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AZURE_CLIENT_ID"),Object(l.b)("td",{parentName:"tr",align:null},"your-azure-client-id"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The Azure Service Principal ID with permission to read the Consumption API from your Subscriptions."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AZURE_CLIENT_SECRET"),Object(l.b)("td",{parentName:"tr",align:null},"your-azure-client-secret"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The Azure Service Principal Secret with permission to read the Consumption API from your Subscriptions."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AZURE_TENANT_ID"),Object(l.b)("td",{parentName:"tr",align:null},"your-azure-tenant-id"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Your Azure tenant ID."),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("br",null),Object(l.b)("h3",{id:"optionally-set-this-to-gcp-if-your-azure-credentials-are-stored-in-google-secrets-manager"},'Optionally set this to "GCP" if your Azure credentials are stored in Google Secrets Manager:'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Example Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AZURE_AUTH_MODE"),Object(l.b)("td",{parentName:"tr",align:null},"default"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The authentication mode for Azure. Options are: 'GCP' that gets the secrets from Google Secrets Manager, 'default' which using the client id/secret and tent id from your .env file. Requires GCP_BILLING_PROJECT_NAME to be set if using 'GCP' Mode.")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"optionally-set-this-to-store-cache-file-in-google-cloud-storage"},"Optionally set this to store cache file in Google Cloud Storage"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Example Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CACHE_MODE"),Object(l.b)("td",{parentName:"tr",align:null},"GCS"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Set with 'GCS' to use this option or leave it empty to use the default.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GCS_CACHE_BUCKET_NAME"),Object(l.b)("td",{parentName:"tr",align:null},"my-bucket-name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Is the name of you Google Cloud Storage bucket where the cache file will be stored.")))),Object(l.b)("br",null),Object(l.b)("h2",{id:"client-package---all-variables-are-optional"},"Client Package - all variables are optional"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Example Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"REACT_APP_PREVIOUS_YEAR_OF_USAGE"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Use this to ensure the application requests usage data from the entire previous calendar year to today. Unset to make this false. Defaults to true.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"REACT_APP_GROUP_BY"),Object(l.b)("td",{parentName:"tr",align:null},"month"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Value to set how the cloud provider queries should return data (e.g. day/week/month/quarter/year)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"REACT_APP_DATE_RANGE_VALUE"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"The quantity of REACT_APP_DATE_RANGE_TYPE to be used.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"REACT_APP_DATE_RANGE_TYPE"),Object(l.b)("td",{parentName:"tr",align:null},"year"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The type of time period to be used. Values can be day(s), week(s), month(s), quarter(s), year(s)")))))}p.isMDXComponent=!0}}]);