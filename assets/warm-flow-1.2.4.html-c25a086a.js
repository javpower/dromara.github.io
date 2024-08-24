import{_ as e}from"./warm-flow-1.2.4-0-7deab8ff.js";import{_ as i}from"./qrcode_zsxq-8eef4d18.js";import{_ as n,o as a,c as t,f as o}from"./app-bc6644ab.js";const s={},r=o(`<h2 id="warm-flow-1-2-4-version-update" tabindex="-1"><a class="header-anchor" href="#warm-flow-1-2-4-version-update" aria-hidden="true">#</a> warm-flow 1.2.4 version update</h2><ul><li><p>Please check the official website update record for main contents, specific details and upgrade precautions.</p></li><li><p>[feat] activate and suspend</p></li><li><p>[feat] Different nodes also support configuring the approval form path</p></li><li><p>[feat] supports receiving external process status and process status extension</p></li><li><p>[feat] Added spel conditional expressions. Added conditional expressions that can be loaded through the SPI mechanism</p></li><li><p>[feat] adds an assignment listener to support dynamic modification of handlers in agent tasks</p></li><li><p>[feat] Added Easy-Query framework support</p></li><li><p>[feat] new Mybatis-Flex solon expansion package</p></li><li><p>[feat] new Jpa solon expansion package</p></li><li><p>[feat] Add a jump type to the history table and record the jump type</p></li><li><p>[feat] add component loading, yml control switch</p></li></ul><h2 id="historical-background" tabindex="-1"><a class="header-anchor" href="#historical-background" aria-hidden="true">#</a> Historical background</h2><p>flowable and activities are indeed large and comprehensive, but will this be good for general projects? Can you leave work early?</p><ol><li><p><strong>Learning curve:</strong> For beginners, learning may take a certain amount of time and energy. Understanding its concepts, APIs, and configuration can take some patience and practice.</p></li><li><p><strong>Complexity:</strong> The introduction may seem too complicated for a simple workflow. In some cases, it may be more appropriate to use a simple solution.</p></li><li><p><strong>Customization requirements:</strong> In some special scenarios, it may be necessary to customize the development to meet specific needs. This may require a deep understanding of its inner workings and source code.</p></li><li><p><strong>Version Update:</strong> Over time, new versions will be released, which may include feature improvements, bug fixes, etc. Upgrading to a new version may require a certain investment of time and resources to ensure a smooth transition and compatibility.</p></li><li><ul><li><ul><li>reading difficulty: * * all English notes, for people with poor English, there is indeed a threshold.</li></ul></li></ul></li></ol><h2 id="what-warm-flow-can-bring-you" tabindex="-1"><a class="header-anchor" href="#what-warm-flow-can-bring-you" aria-hidden="true">#</a> What warm-flow can bring you</h2><blockquote><p>Warm-Flow domestic workflow engine🎉, Its characteristics are simple and lightweight but not simple, complete with five internal organs, independent components, expandable, and can meet the components of small and medium-sized projects.</p></blockquote><ol><li><p>Simple and easy to use: only 7 tables, less code, can be quickly started and integrated</p></li><li><p>Approval function: supports pass, return, arbitrary jump, transfer, termination, countersign, ticket sign, delegation, addition and subtraction, mutual exclusion and parallel gateway</p></li><li><p>Listener and process variables: supports five kinds of listeners, can cope with different scenarios, flexible and scalable, parameter transfer, dynamic permissions</p></li><li><p>Flowchart: The process engine comes with a flowchart that can be used without integrating the process designer.</p></li><li><p>Conditional expressions: Built-in common conditional expressions, and support for custom extensions.</p></li><li><p>orm framework extension: currently supports MyBatis, Mybatis-Plus, Mybatis-Flex and Jpa, and other support will be provided by the community in the future, which is convenient for expansion.</p></li><li><p>Database support: currently supports MySQL, Oracle and PostgreSQL, and will continue to support other databases or domestic databases in the future.</p></li><li><p>Multi-tenancy and soft deletion: The process engine itself maintains the implementation of multi-tenancy and soft deletion, and can also use the implementation of the corresponding orm framework.</p></li><li><p>Support role, department and user permissions configuration</p></li></ol><p>Support both Spring and Solon</p><ol start="11"><li><p>Compatible with java8 and java17, theory 11 can also be</p></li><li><p>The official provides practical projects based on ruoyi-vue packaging, which is very practical.</p></li></ol><h4 id="process-flow-management" tabindex="-1"><a class="header-anchor" href="#process-flow-management" aria-hidden="true">#</a> Process flow management</h4><p>Process flow is like a warm-flow driver. Make the process as simple as drinking water.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 部署流程
public void deployFlow() throws Exception {
        defService.importXml(new FileInputStream(&quot;/xxx/leaveFlow-serial.xml&quot;));
        }
// 发布流程
public void publish() {
        defService.publish(1219285650587652096L);
        }
// 开启流程
public void startFlow() {
        insService.start(&quot;2&quot;, getUser());
        }
// 跳转流程
public void skipFlow() {
        Instance instance = insService.skip(1232001238795685888L,getUser().skipType(SkipType.PASS.getKey())
        .permissionFlag(Arrays.asList(&quot;role:1&quot;, &quot;role:2&quot;)));
        }
//任意跳转
public void skipAnyNode() {
        Instance instance = taskService.skip(1219286332145274880L, getUser().skipType(SkipType.PASS.getKey())
        .permissionFlag(Arrays.asList(&quot;role:1&quot;, &quot;role:2&quot;)).nodeCode(&quot;4&quot;));
        }
// 终止流程
public void termination() {
        taskService.termination(1232001396254052352L, getUser());
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="flowchart-management" tabindex="-1"><a class="header-anchor" href="#flowchart-management" aria-hidden="true">#</a> Flowchart Management</h4><p>Flowchart management is like a warm-flow facade. As a workflow engine, of course, it can be used independently from the process designer. The process picture generation is essential. The warm-flow self-developed the flow chart drawing, obtained the coordinates through the designer, and carried out the progress and status of the drawing process (of course, the business system can not integrate the designer, but can design the export xml in the demo project provided by the author, and the business system can be imported again).</p><figure><img src="`+e+'" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="demo-address" tabindex="-1"><a class="header-anchor" href="#demo-address" aria-hidden="true">#</a> Demo Address</h2><ul><li>admin/admin123</li></ul><p>Demo Address：http://www.hhzai.top</p><h2 id="official-website" tabindex="-1"><a class="header-anchor" href="#official-website" aria-hidden="true">#</a> official website</h2><p>http://warm-flow.cn</p><p>About Dromara</p><p>Dromara is an open source community composed of top open source project authors in China. It provides a series of open source products, solutions and consulting, technical support and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservice RPC, operation and maintenance monitoring, Agent monitoring, distributed logging, scheduling and orchestration. The technology stack is fully open-source and community-neutral, and is committed to providing microservice cloud-native solutions for global users. Let every 1 open source enthusiasts involved experience the joy of open source.</p><p>Dromara open source community currently has 10 GVP projects, with a total number of star exceeding 100,000. It has built an open source community of tens of thousands of people, and thousands of individuals and teams are using the open source projects of Dromara community.</p><p>**Welcome to the knowledge planet and I interact * *</p><figure><img src="'+i+'" alt="" tabindex="0"><figcaption></figcaption></figure>',26),l=[r];function d(c,p){return a(),t("div",null,l)}const f=n(s,[["render",d],["__file","warm-flow-1.2.4.html.vue"]]);export{f as default};
