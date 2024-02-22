import{_ as i}from"./Neutrino-Proxy-1.9.0-2-6c943a3b.js";import{_ as e,o as r,c as a,f as t}from"./app-d2f9d831.js";const l="/assets/img/news/Neutrino-Proxy-2.0.1-1.png",n="/assets/img/news/Neutrino-Proxy-2.0.1-2.png",o="/assets/img/news/Neutrino-Proxy-2.0.1-3.png",s="/assets/img/news/Neutrino-Proxy-2.0.1-4.png",p={},h=t('<h1 id="neutrinoproxy2-0-1-发布-新增-ip-访问拦截-限速支持" tabindex="-1"><a class="header-anchor" href="#neutrinoproxy2-0-1-发布-新增-ip-访问拦截-限速支持" aria-hidden="true">#</a> NeutrinoProxy2.0.1 发布，新增 IP 访问拦截+限速支持</h1><h2 id="项目简介" tabindex="-1"><a class="header-anchor" href="#项目简介" aria-hidden="true">#</a> 项目简介</h2><ul><li><p>中微子代理(neutrino-proxy) 是一款基于 Solon、Netty 的内网穿透神器。该项目采用最为宽松的 MIT 协议，因此您可以对它进行复制、修改、传播并用于任何个人或商业行为。</p></li><li><p>市面上基于内网穿透的常见产品有：花生壳、TeamView、cpolar 等。</p></li><li><p>常见的使用场景：</p></li><li><p>本地开发调试第三方回调</p></li><li><p>本地开发异地接口连调</p></li><li><p>远程登录内网 windows 机器</p></li><li><p>将本地服务映射到外网，用于演示</p></li><li><p>Gitee 仓库：https://gitee.com/dromara/neutrino-proxy</p></li><li><p>Github 仓库：https://github.com/dromara/neutrino-proxy</p></li><li><p>官网地址 1: https://neutrino-proxy.dromara.org</p></li><li><p>官网地址 2: https://dromara.gitee.io/neutrino-proxy</p></li></ul><h2 id="主要特点" tabindex="-1"><a class="header-anchor" href="#主要特点" aria-hidden="true">#</a> 主要特点：</h2><ul><li>1、流量监控：首页图表、报表管理多维度流量监控。全方位掌握实时、历史代理数据。</li><li>2、用户/License：支持多用户、多客户端使用。后台禁用实时生效。</li><li>3、端口池：对外端口统一管理，支持用户、License 独占端口。</li><li>4、端口映射：新增、编辑、删除、禁用实时生效。</li><li>5、Docker：服务端/客户端支持 Docker 一键部署。</li><li>6、SSL 证书：隧道通信支持 SSL 加密，保护您的数据安全。</li><li>7、域名映射：支持绑定子域名，方便本地调试三方回调</li><li>8、多种协议：支持代理 TCP、HTTP、HTTPS、UDP 协议</li><li>9、原生部署：支持编译为原生可执行文件，更低部署门槛、更少内存占用</li><li>10、安全组：支持黑/白名单 IP 访问限制</li><li>11、限速：支持对 License、端口映射限制上传/下载速度</li><li>12、采用最为宽松的 MIT 协议，免去你的后顾之忧</li></ul><h2 id="本次更新内容" tabindex="-1"><a class="header-anchor" href="#本次更新内容" aria-hidden="true">#</a> 本次更新内容</h2><ul><li>jdk 版本升级为 21</li><li>新增安全组模块，支持黑名单、白名单限制</li><li>支持对用户、license 限速</li><li>修复 HTTP(S)映射时使用 tcp 端口访问正常，使用域名访问偶现一直 loading 的问题</li><li>修复 HTTP(S)映射时使用映射的域名上传文件时，连接中断的问题</li></ul><h2 id="安装使用说明" tabindex="-1"><a class="header-anchor" href="#安装使用说明" aria-hidden="true">#</a> 安装使用说明</h2><ul><li><p>快速上手：https://neutrino-proxy.dromara.org/neutrino-proxy/pages/793dcb/</p></li><li><p>升级须知：</p></li><li><p>jdk 版本升级为了 jdk21，jar 部署时请注意</p></li><li><p>涉及到表结构变更，执行增量 SQL：https://gitee.com/dromara/neutrino-proxy/blob/master/neutrino-proxy-server/src/main/resources/sql/mysql/update/UPDATE-20231215.SQL</p></li></ul><h2 id="运行示例" tabindex="-1"><a class="header-anchor" href="#运行示例" aria-hidden="true">#</a> 运行示例</h2><h4 id="license-限速" tabindex="-1"><a class="header-anchor" href="#license-限速" aria-hidden="true">#</a> License 限速</h4><figure><img src="'+l+'" alt="" tabindex="0"><figcaption></figcaption></figure><h4 id="端口映射限速" tabindex="-1"><a class="header-anchor" href="#端口映射限速" aria-hidden="true">#</a> 端口映射限速</h4><figure><img src="'+n+'" alt="" tabindex="0"><figcaption></figcaption></figure><h4 id="安全组" tabindex="-1"><a class="header-anchor" href="#安全组" aria-hidden="true">#</a> 安全组</h4><figure><img src="'+o+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+s+'" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><p>联系我们</p><p>笔者时间、能力有限，且开源项目非一朝一夕之事，存在众多问题亦在所难免。使用、学习过程中有任何问题欢迎大家与我联系。</p><p>对项目有什么想法或者建议，可以加我微信拉交流群，或者创建 issues，一起完善项目</p><ul><li><p>微信号：yuyunshize</p></li><li><p>Email: aoshiguchen@dromara.org</p></li><li><p>微信二维码（添加时请备注&quot;中微子进群&quot;）：</p><img src="'+i+'" height="340"></li></ul>',22),d=[h];function c(u,g){return r(),a("div",null,d)}const x=e(p,[["render",c],["__file","Neutrino-Proxy-2.0.1.html.vue"]]);export{x as default};
