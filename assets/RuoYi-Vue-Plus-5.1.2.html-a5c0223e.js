import{_ as i}from"./RuoYi-Vue-Plus-5.1.0-1-44e02433.js";import{_ as l,o as e,c as a,f as t}from"./app-d2f9d831.js";const d={},u=t('<h1 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h1><h3 id="依赖升级" tabindex="-1"><a class="header-anchor" href="#依赖升级" aria-hidden="true">#</a> 依赖升级</h3><ul><li>update springboot 3.1.5 =&gt; 3.1.7</li><li>update mybatis-boot 3.0.2 =&gt; 3.0.3 优化依赖传递</li><li>update powerjob 4.3.3 =&gt; 4.3.6</li><li>update easyexcel 3.3.2 =&gt; 3.3.3</li><li>update transmittable-thread-local 2.14.2 =&gt; 2.14.4</li><li>update justauth 1.16.5 =&gt; 1.16.6</li><li>update redisson 3.24.1 =&gt; 3.24.3 修复订阅重启连接超时问题</li></ul><h3 id="功能更新" tabindex="-1"><a class="header-anchor" href="#功能更新" aria-hidden="true">#</a> 功能更新</h3><ul><li>update 优化 为 admin 模块 单独增加 ratelimiter 模块</li><li>update 优化 验证码接口 增加限流配置</li><li>update 优化 excel 合并注解会根据第一合并列的结果来决定后续的列合并 (感谢 Simple)</li><li>update 优化 SocialUtils 代码</li><li>update 优化 删除无用异常类</li><li>update 优化 补全三方登录校验国际化</li><li>update 优化 sms 组件 预留自动配置类</li><li>update 更新 关于数据库的说明</li><li>update 优化 sms 组件 预留自动配置类</li><li>update 优化 将 OSS 配置 改为全局模式 降低使用难度 保留 sql 便于用户自行扩展(常规项目用不上配置分多租户)</li><li>update 优化 细化 oss 配置管理权限控制</li><li>update 优化 开启 redisson 脚本缓存 减少网络传输</li><li>update 优化 删除 hikaricp 官方不推荐使用的配置 jdbc4 协议自带校验方法</li><li>update 优化 减少 PlusSaTokenDao 不必要的查询优化性能</li><li>update 优化 更新用户异常提示 使用登录账号</li><li>update 优化 使用登录用户判断是否登录 提高效率</li><li>update 优化 重构 LoginHelper 将本地存储代码操作封装</li><li>update 优化 getTenantId 判断是否开启多租户</li><li>update 优化 Dockerfile 使用 shell 模式 支持环境变量传入 jvm 参数</li><li>update 优化 WebSocketUtils 连接关闭改为警告</li><li>update 优化 excel 多 sheet 页导出 (感谢 May)</li><li>update 优化 删除无用接口实现</li><li>update 优化 jvm 参数调整 全面启用 zgc</li><li>update 优化 使用动态租户重构业务对租户的逻辑</li><li>update 优化 TenantHelper 动态租户支持函数式方法</li><li>update 优化 支持多租户绑定相同的三方登录</li><li>update 优化 更新用户登录信息方法忽略数据权限</li><li>update 优化 补全三方绑定时间字段 删除无用 excel 注解</li><li>update 优化 将登录记录抽取到监听器统一处理</li><li>update 优化 租户插件 ignoreTable 方法支持动态租户</li></ul><h3 id="新增功能" tabindex="-1"><a class="header-anchor" href="#新增功能" aria-hidden="true">#</a> 新增功能</h3><ul><li>add 新增 RedisUtils.setObjectIfExists 如果存在则设置方法</li><li>add 新增 丰富 RedisUtils 对 List Set 类型的操作</li><li>add 新增 翻译组件 用户昵称翻译实现</li><li>add 新增 响应加密功能 支持注解强制加密接口数据 (感谢 MichelleChung)</li></ul><h3 id="问题修复" tabindex="-1"><a class="header-anchor" href="#问题修复" aria-hidden="true">#</a> 问题修复</h3><ul><li>fix 修复 selectDictTypeByType 查询方法错误问题</li><li>fix 修复 一些不正常类无法加载报错问题</li><li>fix 修复 powerjob sql 脚本针对其他数据库转义符问题 (感谢 branches)</li><li>fix 修复 MybatisSystemException 空指针问题</li><li>fix 修复 excel 合并注解会根据第一合并列的结果来决定后续的列合并</li><li>fix 修复 session 多账号共用覆盖问题 改为 tokenSession 独立存储</li><li>fix 修复 token 失效后 登录获取用户 null 问题</li><li>fix 修复 powerjob 部署方案 高版本 nginx 不生效问题</li><li>fix 修复 OssFactory 并发多创建实例问题</li><li>fix 修复 延迟队列在投递消息未到达时间的时候 服务死机导致重启收不到消息</li></ul><h3 id="前端改动" tabindex="-1"><a class="header-anchor" href="#前端改动" aria-hidden="true">#</a> 前端改动</h3><ul><li>update 优化 用户头像 img 变量无确定类型问题</li><li>update 优化 细化 oss 配置管理权限控制</li><li>update 优化 明确打包命令</li><li>update 优化 代码中存在的警告</li><li>update 优化 前端白名单页面放行逻辑</li><li>update 优化 页面关于权限标识符说明</li><li>fix 修复 append-to-body 编写错误 (感谢 Ai3_刘小龙)</li><li>fix 关闭动态路由 tab 页签时不清理组件缓存 (感谢 NickLuo)</li><li>fix 删除重复环境变量 ElUploadInstance (感谢 棉花)</li><li>fix 修复 在线用户 强推按钮点击取消控制台警告问题</li><li>fix 修复 字典使用 default 样式报警告问题</li></ul><h2 id="框架文档" tabindex="-1"><a class="header-anchor" href="#框架文档" aria-hidden="true">#</a> 框架文档</h2><p>使用框架前请仔细阅读文档重点注意事项</p><p>参考文档: https://plus-doc.dromara.org</p><h2 id="加公开群" tabindex="-1"><a class="header-anchor" href="#加公开群" aria-hidden="true">#</a> 加公开群</h2><p>加微信备注加群</p><figure><img src="'+i+'" alt="" tabindex="0"><figcaption></figcaption></figure>',17),s=[u];function r(p,o){return e(),a("div",null,s)}const c=l(d,[["render",r],["__file","RuoYi-Vue-Plus-5.1.2.html.vue"]]);export{c as default};
