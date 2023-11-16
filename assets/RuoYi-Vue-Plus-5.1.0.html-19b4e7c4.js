import{_ as i,o as l,c as e,e as a}from"./app-0631b554.js";const t="/assets/img/news/RuoYi-Vue-Plus-5.1.0-1.png",d={},r=a('<h2 id="开发历程" tabindex="-1"><a class="header-anchor" href="#开发历程" aria-hidden="true">#</a> 开发历程</h2><ul><li>2023 年 5 月 开始 5.1.0 计划 历经 1 个月的设计与讨论</li><li>2023 年 6 月 开始着手开发 历经 2 个多月的开发 特别感谢团队的小伙伴与一些热心的粉丝 参与功能开发与测试</li><li>2023 年 8 月 开始公测 历经将近 1 个月的公测与修复工作(期间成功支持多位使用者生产使用)</li><li>2023 年 9 月初 正式发布(经过多个小伙伴的生产实践 已基本可尝试生产使用)</li></ul><blockquote><p>关于 4.X 的说明 由于 SpringBoot2.X 与 vue2.X 均在 11 月底停止维护<br> 故而咱们 vue 版本 4.X 也无法再继续更新<br> 介于 4.X 的用户量特别庞大 功能也非常的稳定<br> 计划于 11 月底同 Boot2.X 一同停止更新但还会持续维护修复 bug(修复的形式为直接提交到 4.X 分支停止发版)</p></blockquote><h2 id="视频介绍" tabindex="-1"><a class="header-anchor" href="#视频介绍" aria-hidden="true">#</a> 视频介绍</h2><p>为了更好的让大家了解 5.1.0 作者录制了相关的视频 供大家快速了解上手</p><ul><li>5.1.0 新功能与变更介绍: https://www.bilibili.com/video/BV1fj411y71X/</li><li>搭建与运行: https://www.bilibili.com/video/BV1Fg4y137JK/</li><li>生产环境搭建部署: https://www.bilibili.com/video/BV1mL411e7ha/</li></ul><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h2><h3 id="重大更新" tabindex="-1"><a class="header-anchor" href="#重大更新" aria-hidden="true">#</a> 重大更新</h3><ul><li>[重大更新] 优化 相关代码 完成代码生成多数据源统一存储(感谢 WangBQ !pr349)</li><li>[不兼容更新] 移除 原短信功能 集成更强大的 sms4j 短信工具包(感谢 友杰 !pr367)</li><li>[不兼容更新] 对接 powerjob 实现分布式任务调度 删除原有 xxljob 原因为社区不更新功能太少只支持 mysql(感谢 yhan219 !pr359)</li><li>[重大更新] 新增 三方授权绑定登录功能 基于 justauth 支持市面上大部分三方登录(感谢 三个三 !pr370)</li><li>[不兼容更新] 新增 客户端授权功能 不需要更改任何代码即可完成多端动态对接(感谢 Michelle.Chung !pr379)</li><li>[重大更新] 新增 前后端接口请求加密传输 基于 AES+RSA 动态高强度加密(感谢 wdhcr !pr377)</li><li>[重大更新] 新增 三方授权登录 对接 maxkey 单点登录</li><li>[不兼容更新] 优化 redis 序列化配置 更改为通用格式(升级需清除 redis 所有数据)</li></ul><h3 id="依赖升级" tabindex="-1"><a class="header-anchor" href="#依赖升级" aria-hidden="true">#</a> 依赖升级</h3><ul><li>update springboot 3.0.7 =&gt; 3.1.3</li><li>update springboot-admin 3.1.3 =&gt; 3.1.5</li><li>update springdoc 2.1.0 =&gt; 2.2.0</li><li>update spring-mybatis 3.0.1 =&gt; 3.0.2</li><li>update mybatis-plus 3.5.3.1 =&gt; 3.5.3.2</li><li>update easyexcel 3.2.1 =&gt; 3.3.2</li><li>update mapstruct-plus 1.2.3 =&gt; 1.3.5 解决修改实体类 idea 不编译问题</li><li>update satoken 1.34.0 =&gt; 1.35.0.RC 优化过期配置 支持多端 token 自定义有效期</li><li>update dynamic-ds 3.6.1 =&gt; 4.1.3 支持 SpringBoot3</li><li>update sms4j 2.2.0</li><li>update hutool 5.8.18 =&gt; 5.8.20</li><li>update redisson 3.20.1 =&gt; 3.23.4</li><li>update lock4j 2.2.4 =&gt; 2.2.5</li><li>update aws-java-sdk-s3 1.12.400 =&gt; 1.12.540</li><li>update maven-surefire-plugin 3.0.0 =&gt; 3.1.2</li></ul><h3 id="功能更新" tabindex="-1"><a class="header-anchor" href="#功能更新" aria-hidden="true">#</a> 功能更新</h3><ul><li>update 优化 excel 导出合并 在初始化类时进行数据的处理</li><li>update 优化 简化 flatten 插件语法写法</li><li>update 优化 支持本地虚拟域名调试(感谢 代星登 !pr363)</li><li>update 重构 将框架内的 swagger 命名更改为 springdoc 命名避免误解</li><li>update 重构 将系统内置配置放置到 common 包内独立加载 不允许用户随意修改</li><li>update 优化 切换 maven 仓库到 华为云(aliyun 依赖不更新拉取不到)</li><li>update 优化 升级 satoken 支持多端 token 自定义有效期功能</li><li>update 优化 RepeatSubmitAspect 逻辑避免并发请求问题</li><li>update 优化 在全局异常拦截器中增加两类异常处理</li><li>update 优化 提供 powerjob 完整 sql 脚本 降低用户使用难度</li><li>update 优化 StreamUtils 其他方法过滤 null 值(感谢 bleachtred !pr390)</li><li>update 优化 powerjob 端口随着主应用端口飘逸 避免集群冲突</li><li>update 优化 角色权限支持仅本人权限查看 解决无法查看自己创建的角色问题</li><li>update 修改代码生成模版，日期范围统一采用 addDateRange 方法(感谢 LiuHao !pr397)</li><li>update 优化 树表生成前端缺少 children 字段</li><li>update 优化 CryptoFilter null 判断工具</li><li>update 优化 websocket 路径与 cloud 版本保持一致</li><li>update 优化 更新登录策略返回值(感谢 zlyx)</li><li>update 修改代码生成模板，调整列表打开对话框和接口请求顺序</li><li>update 优化 SaInterceptor 拦截器判断 token 客户端 id 是否有效(感谢 zlyx !pr402)</li><li>update 优化 excel 导出字典默认转为下拉框</li><li>update 优化 兼容 clientid 通过 param 传输</li><li>update 优化 excel 导出字典转下拉框 无需标记 index 自动处理(感谢 一夏 coco)</li><li>update 优化 简化线程池配置</li><li>update 优化 屏蔽 powerjob 无用的心跳日志</li><li>update 优化 适配 mysql 8.0.34 升级连接机制</li><li>update 优化 加密实现 使用 EncryptUtils 统一处理</li><li>update 优化 删除字典无用状态字段(基本用不上 禁用后还会导致回显问题)</li><li>update 优化 部门与角色如果绑定了用户则不允许禁用</li><li>update 优化 岗位如果绑定了用户则不允许禁用</li><li>update 优化 用户管理 只查询未禁用的部门角色岗位数据</li><li>update 优化 登录用户增加昵称返回</li><li>update 优化 将部门管理 负责人选项改为下拉框选择(感谢 Lionel !pr410)</li><li>update 优化 全局异常处理器 业务异常不输出具体堆栈信息 减少无用日志存储</li><li>update 优化 登录用户缓存 去除冗余统一存储</li><li>update 优化 放宽菜单权限 角色关联菜单无需管理员</li></ul><h3 id="新增功能" tabindex="-1"><a class="header-anchor" href="#新增功能" aria-hidden="true">#</a> 新增功能</h3><ul><li>add 增加 RedisUtils 批量删除 hash key 方法</li><li>add 新增 Oss 上传 File 文件方法(感谢 jenn !pr362)</li><li>add 增加 excel 导出下拉框功能</li><li>add 新增 RedisUtils.setObjectIfAbsent 如果不存在则设置方法</li></ul><h3 id="修复问题" tabindex="-1"><a class="header-anchor" href="#修复问题" aria-hidden="true">#</a> 修复问题</h3><ul><li>fix 修复 脱敏注解标记位置错误</li><li>fix 修复 OssClient 实例多租户相同 key 缓存覆盖问题</li><li>fix 修复 关闭多租户 脱敏判断问题</li><li>fix 修复 OssClient 切换服务 实例不正确问题(感谢 jenn !pr360)</li><li>fix 修复 传参类型不正确导致 postgreSql 同步套餐报错问题</li><li>fix 修复 参数类型修改 未修改校验注解</li><li>fix 修复 登录校验错误次数未达到上限时 错误次数缓存未设置有效时间问题(感谢 konbai !pr366)</li><li>fix 修复 common-core 包使用 aop 注解 但未添加 aop 实现类导致单独使用报错问题</li><li>fix 修复 Mapper 多参数未加 @Param 注解问题</li><li>fix 修复 邮箱登录 查询值错误问题</li><li>fix 修复 用户篡改管理员角色标识符越权问题</li><li>fix 修复 字典缓存注解使用错误问题</li><li>fix 修复 查询部门下拉树未过滤数据权限问题</li><li>fix 修复 CacheName 缓存 key 存储错误问题</li><li>fix 修复 代码生成 前端添加或修改表单修改列生成问题</li><li>fix 修复 新增角色使用内置管理员标识符问题</li><li>fix 修复 代码生成 前端添加或修改表单修改列生成问题</li><li>fix 修复 token 过期登出无法清理在线用户问题</li><li>fix 修复 加密模块数据转换异常问题</li><li>fix 修复 可能导致异常类无法反序列化问题</li><li>fix 修复 代码生成 编辑按钮刷新列表问题</li><li>fix 修复 客户端编辑时授权类型变更未保存的问题(感谢 David Wei !pr400)</li><li>fix 修复 有界队列与优先队列 错误使用问题</li><li>fix 修复 修复树模板父级编码变量错误</li><li>fix 修复 部署部分系统出现乱码问题</li><li>fix 修复 一级菜单无法显示问题</li><li>fix 修复 可能会存在的越权行为(感谢 丶 Stone !pr416)</li><li>fix 修复 代码生成页面参数缺少逗号问题</li></ul><h3 id="移除功能" tabindex="-1"><a class="header-anchor" href="#移除功能" aria-hidden="true">#</a> 移除功能</h3><ul><li>remove 移除原有短信功能(建议使用 sms4j)</li><li>remove 移除 xxljob 功能(建议使用 powerjob)</li></ul><h2 id="框架文档" tabindex="-1"><a class="header-anchor" href="#框架文档" aria-hidden="true">#</a> 框架文档</h2><p>使用框架前请仔细阅读文档重点注意事项</p><p>参考文档: https://plus-doc.dromara.org</p><h2 id="加公开群" tabindex="-1"><a class="header-anchor" href="#加公开群" aria-hidden="true">#</a> 加公开群</h2><p>加微信备注加群</p><figure><img src="'+t+'" alt="" tabindex="0"><figcaption></figcaption></figure>',25),p=[r];function u(s,o){return l(),e("div",null,p)}const h=i(d,[["render",u],["__file","RuoYi-Vue-Plus-5.1.0.html.vue"]]);export{h as default};
