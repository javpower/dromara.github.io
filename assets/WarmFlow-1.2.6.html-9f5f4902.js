import{_ as e}from"./WarmFlow-1.2.6-0-ff91bfd4.js";import{_ as i}from"./qrcode_zsxq-8eef4d18.js";import{_ as t,o,c as a,f as n}from"./app-b3220ba4.js";const r={},s=n('<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="'+e+'" alt=""></h2><h2 id="warm-flow-1-2-6-version-update" tabindex="-1"><a class="header-anchor" href="#warm-flow-1-2-6-version-update" aria-hidden="true">#</a> warm-flow 1.2.6 Version update</h2><h3 id="this-change" tabindex="-1"><a class="header-anchor" href="#this-change" aria-hidden="true">#</a> This change</h3><blockquote><p>Process status: can receive external transmission, can support string add api: add to get next node information id generation: supports id of other digits and can be serialized for front-end precision problems.</p></blockquote><ul><li><p>v1.2.6 2024-08-28</p></li><li><p>[feat] Add api @ xiarigang for obtaining the next node collection</p></li><li><p>[feat] id memory policy adds 14 and 15-bit snowflake algorithm support</p></li><li><p>[feat] process activation and suspension case @ xiaoxiaoliu889</p></li><li><p>[feat] Add @ xiaoxiaoliu889 to get flow chart based on process definition Id</p></li><li><p>[update] Change the process status to string type @ xiarigang</p></li><li><p>[update] Test module split independent warehouse</p></li><li><p>[update] modes-sb delete the loading configuration file and load it with upper-level jar instead</p></li><li><p>[update] yml version of flex solon is wrong, config is adjusted</p></li><li><p>[refactor] Logical refactoring of process version number generation @ xiaoxiaoliu889</p></li><li><p>[fix] Fix that the user data cannot be deleted correctly according to the deleteByTaskIds</p></li><li><p>[fix] fix jpa solon annotation problem @ vanlin</p></li><li><p>[fix] Fix the problem of ending the process incorrectly when the parallel gateway 3 a task branch.</p></li><li><p>Execute the upgrade script [warm-flow_1.2.6. SQL]]</p></li><li><p>Change the flow_status field to string type, and the business system needs to modify it accordingly.</p></li><li><p>[Upgrade Notes]]</p></li><li><p>Update log</p></li></ul><h2 id="warm-flow-introduction" tabindex="-1"><a class="header-anchor" href="#warm-flow-introduction" aria-hidden="true">#</a> warm-flow introduction</h2><blockquote><p>[!IMPORTANT] Warm-Flow Domestic Workflow Engine🎉, Its characteristics are simple and lightweight but not simple, complete with five internal organs, independent components, expandable, and can meet the components of small and medium-sized projects.</p></blockquote><ol><li><p>Simple and easy to use: only 7 tables, less code, can be quickly started and integrated</p></li><li><p>Approval function: supports pass, return, arbitrary jump, transfer, termination, countersign, ticket sign, delegation, addition and subtraction, mutual exclusion and parallel gateway</p></li><li><p>Listener and process variables: supports five kinds of listeners, can cope with different scenarios, flexible and scalable, parameter transfer, dynamic permissions</p></li><li><p>Flowchart: The process engine comes with a flowchart that can be used without integrating the process designer.</p></li><li><p>Conditional expressions: Built-in common conditional expressions, and support for custom extensions.</p></li><li><p>orm framework extension: currently supports MyBatis, Mybatis-Plus, Mybatis-Flex and Jpa, and other support will be provided by the community in the future, which is convenient for expansion.</p></li><li><p>Database support: currently supports MySQL, Oracle and PostgreSQL, and will continue to support other databases or domestic databases in the future.</p></li><li><p>Multi-tenancy and soft deletion: The process engine itself maintains the implementation of multi-tenancy and soft deletion, and can also use the implementation of the corresponding orm framework.</p></li><li><p>Support role, department and user permissions configuration</p></li></ol><p>Support both Spring and Solon</p><ol start="11"><li><p>Compatible with java8 and java17, theory 11 can also be</p></li><li><p>The official provides practical projects based on ruoyi-vue packaging, which is very practical.</p></li></ol><h2 id="demo-address" tabindex="-1"><a class="header-anchor" href="#demo-address" aria-hidden="true">#</a> Demo Address</h2><ul><li>admin/admin123</li></ul><p>Demo Address：http://www.hhzai.top</p><h2 id="official-website" tabindex="-1"><a class="header-anchor" href="#official-website" aria-hidden="true">#</a> official website</h2><p>http://warm-flow.cn</p><p>About Dromara</p><p>Dromara is an open source community composed of top open source project authors in China. It provides a series of open source products, solutions and consulting, technical support and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservice RPC, operation and maintenance monitoring, Agent monitoring, distributed logging, scheduling and orchestration. The technology stack is fully open-source and community-neutral, and is committed to providing microservice cloud-native solutions for global users. Let every 1 open source enthusiasts involved experience the joy of open source.</p><p>Dromara open source community currently has 10 GVP projects, with a total number of star exceeding 100,000. It has built an open source community of tens of thousands of people, and thousands of individuals and teams are using the open source projects of Dromara community.</p><p>**Welcome to the knowledge planet and I interact * *</p><figure><img src="'+i+'" alt="" tabindex="0"><figcaption></figcaption></figure>',20),l=[s];function p(d,c){return o(),a("div",null,l)}const f=t(r,[["render",p],["__file","WarmFlow-1.2.6.html.vue"]]);export{f as default};
