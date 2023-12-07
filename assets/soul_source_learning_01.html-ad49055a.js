import{_ as t,r as o,o as p,c as l,a as s,b as n,e,f as c}from"./app-912f5142.js";const r={},i=s("h1",{id:"analysis-of-soul-1-set-up-soul-environment",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#analysis-of-soul-1-set-up-soul-environment","aria-hidden":"true"},"#"),n(" Analysis of soul (1) Set up soul environment")],-1),u=s("blockquote",null,[s("p",null,"soul is a High-Performance Java API Gateway"),s("p",null,"GitHub：https://github.com/dromara/soul"),s("p",null,"document：https://dromara.org/zh-cn/docs/soul/soul.html")],-1),d=s("h2",{id:"_1-prepare-source-code",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-prepare-source-code","aria-hidden":"true"},"#"),n(" 1. Prepare source code")],-1),m={id:"_1-1-fork-dromara-soul-repository-to-my-github-cchenxi-soul",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#_1-1-fork-dromara-soul-repository-to-my-github-cchenxi-soul","aria-hidden":"true"},"#",-1),h={href:"https://github.com/dromara/soul.git",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/cchenxi/soul.git",target:"_blank",rel:"noopener noreferrer"},v=c(`<h3 id="_1-2-clone-the-repository" tabindex="-1"><a class="header-anchor" href="#_1-2-clone-the-repository" aria-hidden="true">#</a> 1.2. Clone the repository</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/cchenxi/soul.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-open-the-source-code-with-idea" tabindex="-1"><a class="header-anchor" href="#_1-3-open-the-source-code-with-idea" aria-hidden="true">#</a> 1.3.Open the source code with idea</h3><h3 id="_1-4-compile-the-soul-source-code" tabindex="-1"><a class="header-anchor" href="#_1-4-compile-the-soul-source-code" aria-hidden="true">#</a> 1.4. Compile the soul source code</h3><p>You can compile the project as follows.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn clean package <span class="token function">install</span> <span class="token parameter variable">-Dmaven.test.skip</span><span class="token operator">=</span>true <span class="token parameter variable">-Dmaven.javadoc.skip</span><span class="token operator">=</span>true <span class="token parameter variable">-Drat.skip</span><span class="token operator">=</span>true <span class="token parameter variable">-Dcheckstyle.skip</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>待补，文章内部有报错</p><h2 id="_2-startup-soul" tabindex="-1"><a class="header-anchor" href="#_2-startup-soul" aria-hidden="true">#</a> 2. Startup <code>soul</code></h2><h3 id="_2-1-startup-soul-admin-module" tabindex="-1"><a class="header-anchor" href="#_2-1-startup-soul-admin-module" aria-hidden="true">#</a> 2.1. Startup <code>soul-admin</code> module</h3><blockquote><p><code>soul-admin</code> is the management system for soul.</p></blockquote><p>Choose to use <code>MySQL</code> to storage gateway data and modify the datasource config.</p><p>待补，文章内部有报错</p><p>Run <code>org.dromara.soul.admin.SoulAdminBootstrap</code>.</p><p>When success, please visit the website <code>http://localhost:9095/</code>, then jump to the login page, and input the corresponding user name and password to log in.</p><p>The user name is <code>admin</code> and the password is <code>123456</code>.</p><p>待补，文章内部有报错</p><p>待补，文章内部有报错</p><h3 id="_2-2-startup-soul-bootstrap-module" tabindex="-1"><a class="header-anchor" href="#_2-2-startup-soul-bootstrap-module" aria-hidden="true">#</a> 2.2. Startup <code>soul-bootstrap</code> module</h3><blockquote><p><code>soul-bootstrap</code> is the core of soul.</p></blockquote><p>Check the configuration of <code>soul-bootstrap</code>.</p><p>待补，文章内部有报错</p><p>Please make sure the ip and the port has been configured for <code>soul-admin</code>.</p><p>If the console output as follows, it means the startup is successful.</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>2021-01-14 15:01:15.832  INFO 17943 --- [           main] b.s.s.d.w.WebsocketSyncDataConfiguration : you use websocket sync soul data.......
2021-01-14 15:01:15.924  INFO 17943 --- [           main] o.d.s.p.s.d.w.WebsocketSyncDataService   : websocket connection is successful.....
2021-01-14 15:01:16.113  INFO 17943 --- [           main] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 2 endpoint(s) beneath base path &#39;/actuator&#39;
log4j:WARN No appenders could be found for logger (com.alibaba.dubbo.common.logger.LoggerFactory).
log4j:WARN Please initialize the log4j system properly.
log4j:WARN See http://logging.apache.org/log4j/1.2/faq.html#noconfig for more info.
2021-01-14 15:01:17.150  INFO 17943 --- [           main] o.s.b.web.embedded.netty.NettyWebServer  : Netty started on port(s): 9195
2021-01-14 15:01:17.154  INFO 17943 --- [           main] o.d.s.b.SoulBootstrapApplication         : Started SoulBootstrapApplication in 5.508 seconds (JVM running for 6.762)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-test" tabindex="-1"><a class="header-anchor" href="#_3-test" aria-hidden="true">#</a> 3. Test</h2><blockquote><p>Add the <code>soul-examples</code> module to soul&#39;s pom.xml for test.</p></blockquote><h3 id="_3-1-startup-an-http-backend-service" tabindex="-1"><a class="header-anchor" href="#_3-1-startup-an-http-backend-service" aria-hidden="true">#</a> 3.1. Startup an HTTP backend service</h3><p>Startup <code>soul-examples-http</code></p><p>You can see the dependency in <code>soul-examples-http</code>&#39;s pom.xml.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.dromara<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>soul-spring-boot-starter-client-springmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${soul.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Configure the <code>application.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">soul</span><span class="token punctuation">:</span>
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
    <span class="token key atrule">adminUrl</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">9095</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8188</span>
    <span class="token key atrule">contextPath</span><span class="token punctuation">:</span> /http
    <span class="token key atrule">appName</span><span class="token punctuation">:</span> http
    <span class="token key atrule">full</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If <code>soul.http.full</code>=false, you need to add the <code>@SoulSpringMvcClient</code> annotation in controller or controller method.</p><h4 id="_3-1-1-test-the-service" tabindex="-1"><a class="header-anchor" href="#_3-1-1-test-the-service" aria-hidden="true">#</a> 3.1.1. Test the service</h4><p>Visit <code>http://localhost:8188/test/findByUserId?userId=1</code> and the result as follows.</p><p>待补，文章内部有报错</p><h4 id="_3-1-2-test-forward-http-request" tabindex="-1"><a class="header-anchor" href="#_3-1-2-test-forward-http-request" aria-hidden="true">#</a> 3.1.2. Test forward HTTP request</h4><p>Visit <code>http://localhost:9195/http/test/findByUserId?userId=1</code> and the result as follows.</p><p>待补，文章内部有报错</p><p>You can see the following information in the console of <code>soul-bootstrap</code>. It means the forward HTTP request is successful.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2021</span>-01-14 <span class="token number">20</span>:42:57.123  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-11<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:42:57.125  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-11<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http/test/**
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:42:57.126  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-11<span class="token punctuation">]</span> o.d.s.plugin.httpclient.WebClientPlugin  <span class="token builtin class-name">:</span> The request urlPath is http://172.27.121.155:8188/test/findByUserId?userId<span class="token operator">=</span><span class="token number">1</span>, retryTimes is <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-startup-two-http-backend-services-to-simulate-load-balance" tabindex="-1"><a class="header-anchor" href="#_3-2-startup-two-http-backend-services-to-simulate-load-balance" aria-hidden="true">#</a> 3.2. Startup two HTTP backend services to simulate load balance</h3><p>Choose <code>Allow parallel run</code></p><p>Change the port to <code>8189</code></p><p>Startup <code>soul-examples-http</code> again</p><p>待补，文章内部有报错</p><h4 id="_3-2-1-test-the-service" tabindex="-1"><a class="header-anchor" href="#_3-2-1-test-the-service" aria-hidden="true">#</a> 3.2.1. Test the service</h4><p>Visit <code>http://localhost:8189/test/findByUserId?userId=1</code> and the result as follows.</p><p>待补，文章内部有报错</p><h4 id="_3-2-2-test-load-balance" tabindex="-1"><a class="header-anchor" href="#_3-2-2-test-load-balance" aria-hidden="true">#</a> 3.2.2. Test load balance</h4><p>待补，文章内部有报错</p><p>Configure two HTTP service in selector</p><p>Visit <code>http://localhost:9195/http/test/findByUserId?userId=1</code> more and more and result as follows.</p><p>待补，文章内部有报错 You can see the following information in the console of <code>soul-bootstrap</code>. It means the load balance is successful.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:34.460  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-21<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:34.460  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-21<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http/test/**
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:34.460  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-21<span class="token punctuation">]</span> o.d.s.plugin.httpclient.WebClientPlugin  <span class="token builtin class-name">:</span> The request urlPath is http://172.27.121.155:8189/test/findByUserId?userId<span class="token operator">=</span><span class="token number">1</span>, retryTimes is <span class="token number">0</span>
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:35.147  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-22<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:35.147  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-22<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http/test/**
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:35.147  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-22<span class="token punctuation">]</span> o.d.s.plugin.httpclient.WebClientPlugin  <span class="token builtin class-name">:</span> The request urlPath is http://172.27.121.155:8188/test/findByUserId?userId<span class="token operator">=</span><span class="token number">1</span>, retryTimes is <span class="token number">0</span>
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:38.755  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-23<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:38.756  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-23<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http/test/**
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:38.756  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-23<span class="token punctuation">]</span> o.d.s.plugin.httpclient.WebClientPlugin  <span class="token builtin class-name">:</span> The request urlPath is http://172.27.121.155:8188/test/findByUserId?userId<span class="token operator">=</span><span class="token number">1</span>, retryTimes is <span class="token number">0</span>
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:39.609  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-24<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:39.609  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-24<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http/test/**
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:39.609  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-24<span class="token punctuation">]</span> o.d.s.plugin.httpclient.WebClientPlugin  <span class="token builtin class-name">:</span> The request urlPath is http://172.27.121.155:8189/test/findByUserId?userId<span class="token operator">=</span><span class="token number">1</span>, retryTimes is <span class="token number">0</span>
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:40.317  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-25<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:40.317  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-25<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http/test/**
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:40.317  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>work-threads-25<span class="token punctuation">]</span> o.d.s.plugin.httpclient.WebClientPlugin  <span class="token builtin class-name">:</span> The request urlPath is http://172.27.121.155:8188/test/findByUserId?userId<span class="token operator">=</span><span class="token number">1</span>, retryTimes is <span class="token number">0</span>
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:40.976  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>-work-threads-1<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:40.976  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>-work-threads-1<span class="token punctuation">]</span> o.d.soul.plugin.base.AbstractSoulPlugin  <span class="token builtin class-name">:</span> divide selector success match , selector name :/http/test/**
<span class="token number">2021</span>-01-14 <span class="token number">20</span>:48:40.977  INFO <span class="token number">29812</span> --- <span class="token punctuation">[</span>-work-threads-1<span class="token punctuation">]</span> o.d.s.plugin.httpclient.WebClientPlugin  <span class="token builtin class-name">:</span> The request urlPath is http://172.27.121.155:8188/test/findByUserId?userId<span class="token operator">=</span><span class="token number">1</span>, retryTimes is <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-3-press-test" tabindex="-1"><a class="header-anchor" href="#_3-2-3-press-test" aria-hidden="true">#</a> 3.2.3. Press test</h4><p>Use <code>wrk</code> to press test and compare the two ways as follows.</p><ol><li>Visit the backend service directly.</li><li>Visit the service via soul.</li></ol><p>The performance drops slightly after using the gateway, probably because of the extra layer of forwarding.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>➜  soul git:<span class="token punctuation">(</span>master<span class="token punctuation">)</span> ✗ wrk <span class="token parameter variable">-t8</span> <span class="token parameter variable">-c40</span> <span class="token parameter variable">-d30s</span> http://localhost:8189/test/findByUserId<span class="token punctuation">\\</span>?userId<span class="token punctuation">\\</span><span class="token operator">=</span><span class="token number">1</span>
Running 30s <span class="token builtin class-name">test</span> @ http://localhost:8189/test/findByUserId?userId<span class="token operator">=</span><span class="token number">1</span>
  <span class="token number">8</span> threads and <span class="token number">40</span> connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     <span class="token number">6</span>.06ms   <span class="token number">28</span>.81ms <span class="token number">442</span>.25ms   <span class="token number">98.22</span>%
    Req/Sec     <span class="token number">2</span>.05k   <span class="token number">493.86</span>     <span class="token number">2</span>.84k    <span class="token number">74.82</span>%
  <span class="token number">486269</span> requests <span class="token keyword">in</span> <span class="token number">30</span>.05s, <span class="token number">51</span>.01MB <span class="token builtin class-name">read</span>
Requests/sec:  <span class="token number">16179.68</span>
Transfer/sec:      <span class="token number">1</span>.70MB
➜  soul git:<span class="token punctuation">(</span>master<span class="token punctuation">)</span> ✗ wrk <span class="token parameter variable">-t8</span> <span class="token parameter variable">-c40</span> <span class="token parameter variable">-d30s</span> http://localhost:9195/http/test/findByUserId<span class="token punctuation">\\</span>?userId<span class="token punctuation">\\</span><span class="token operator">=</span><span class="token number">1</span>
Running 30s <span class="token builtin class-name">test</span> @ http://localhost:9195/http/test/findByUserId?userId<span class="token operator">=</span><span class="token number">1</span>
  <span class="token number">8</span> threads and <span class="token number">40</span> connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    <span class="token number">14</span>.37ms   <span class="token number">18</span>.11ms <span class="token number">255</span>.66ms   <span class="token number">93.06</span>%
    Req/Sec   <span class="token number">459.41</span>    <span class="token number">139.11</span>     <span class="token number">1</span>.01k    <span class="token number">74.23</span>%
  <span class="token number">109533</span> requests <span class="token keyword">in</span> <span class="token number">30</span>.09s, <span class="token number">11</span>.49MB <span class="token builtin class-name">read</span>
Requests/sec:   <span class="token number">3639.60</span>
Transfer/sec:    <span class="token number">390</span>.98KB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-4-problem-in-the-process" tabindex="-1"><a class="header-anchor" href="#_3-2-4-problem-in-the-process" aria-hidden="true">#</a> 3.2.4. Problem in the process</h4><p>When startup the port of <code>8189</code>，but the output of console is still <code>8188</code>.</p><p>待补，文章内部有报错</p><p>After modify the value of <code>soul.http.port</code>, the problem solved.</p><p>待补，文章内部有报错</p>`,65);function g(f,y){const a=o("ExternalLinkIcon");return p(),l("div",null,[i,u,d,s("h3",m,[b,n(" 1.1. Fork "),s("a",h,[n("dromara/soul"),e(a)]),n(" repository to my github "),s("a",k,[n("cchenxi/soul"),e(a)])]),v])}const I=t(r,[["render",g],["__file","soul_source_learning_01.html.vue"]]);export{I as default};