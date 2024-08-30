import{_ as t}from"./qrcode_zsxq-8eef4d18.js";import{_ as d,o as i,c as p,f as e}from"./app-b3220ba4.js";const r="/assets/img/blog/RuoYi-Vue-Plus-5.2.0-0.png",l={},a=e('<figure><img src="'+r+'" alt="" tabindex="0"><figcaption></figcaption></figure><hr><h1 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h1><h3 id="重大改动" tabindex="-1"><a class="header-anchor" href="#重大改动" aria-hidden="true">#</a> 重大改动</h3><ul><li><p>集成 flowable 增加工作流相关功能(感谢 May)</p></li><li><p>集成 snailjob 移除 powerjob(投诉的人太多使用成本太高)(感谢 dhb52)</p></li><li><p>升级 aws s3 升级到 2.X 性能大幅提升</p></li><li><p>优化 数据权限 数据加密 使用预扫描mapper注解提升代码性能(感谢 老马)</p></li><li><p>新增 caffeine 减少将近90%的redis查询提高性能</p></li></ul><h3 id="依赖升级" tabindex="-1"><a class="header-anchor" href="#依赖升级" aria-hidden="true">#</a> 依赖升级</h3><ul><li><p>update springboot 3.1.7 =&gt; 3.2.5 支持虚拟线程</p></li><li><p>update springboot-admin 3.1.8 =&gt; 3.2.3</p></li><li><p>update mybatis-plus 3.5.4 =&gt; 3.5.6 适配更改代码</p></li><li><p>update springdoc 2.2.0 =&gt; 2.5.0</p></li><li><p>update easyexcel 3.3.3 =&gt; 3.3.4</p></li><li><p>update redisson 3.24.3 =&gt; 3.29.0</p></li><li><p>update lombok 1.18.30 =&gt; 1.18.32</p></li><li><p>update sms4j 2.2.0 =&gt; 3.2.1 支持自定义配置key 可用于多厂商多租户等</p></li><li><p>update satoken 1.37.0 -&gt; 1.38.0</p></li><li><p>update hutool 5.8.22 =&gt; 5.8.26</p></li><li><p>update mapstruct-plus 1.3.5 =&gt; 1.3.6</p></li><li><p>update lock4j 2.2.5 =&gt; 2.2.7</p></li><li><p>update dynamic-ds 4.2.0 =&gt; 4.3.0</p></li></ul><h3 id="功能更新" tabindex="-1"><a class="header-anchor" href="#功能更新" aria-hidden="true">#</a> 功能更新</h3><ul><li><p>update 优化 代码生成注释，删除无用引入(感谢 AprilWind)</p></li><li><p>update 优化 代码生成 el-radio 标签过期属性</p></li><li><p>update 优化 异常处理器自动配置</p></li><li><p>update 优化 文件下载使用对流下载降低内存使用(感谢 PhoenixL)</p></li><li><p>update 优化 去除gc日志参数(有需要自己加)</p></li><li><p>update 优化 拆分异常处理器</p></li><li><p>update 优化 常规web异常状态码</p></li><li><p>update 优化 设置静态资源路径防止所有请求都可以访问静态资源</p></li><li><p>update 优化 redis 对Long值的存储类型不同问题</p></li><li><p>update 优化 去除加密请求类型限制</p></li><li><p>update 优化 mp多租户插件注入逻辑</p></li><li><p>update 优化 RedisUtils 支持忽略租户</p></li><li><p>update 优化 更新ip地址xdb文件</p></li><li><p>update 优化 验证码背景色改为浅灰色</p></li><li><p>update 优化 mybatis依赖设置为可选依赖 避免出现不应该注入的情况</p></li><li><p>update 优化 GET 方法响应体支持加密</p></li><li><p>update 优化 excel插件合并策略 去除被合并单元格的非首行内容(感谢 司猫子)</p></li><li><p>update 优化 下拉选接口数据权限</p></li><li><p>update 优化 OssFactory 获取实例锁性能</p></li><li><p>update 优化 使用翻译注解简化用户查询 调整用户查询逻辑</p></li><li><p>update 优化 框架整体提高查询性能</p></li><li><p>update 优化 将p6spy配置文件统一放置到 common-mybatis 插件包内</p></li></ul><h3 id="新增功能" tabindex="-1"><a class="header-anchor" href="#新增功能" aria-hidden="true">#</a> 新增功能</h3><ul><li><p>add 新增 分布式锁Lock4j异常拦截器</p></li><li><p>add 新增 个人中心-在线设备管理</p></li><li><p>add 新增 岗位编码与部门编码并将岗位调整到部门下(感谢 AprilWind)</p></li><li><p>add 新增 BaseMapperPlus提供可选是否抛异常selectVoOne方法(感谢 秋辞未寒)</p></li><li><p>add 新增 用户、部门、角色、岗位 下拉选接口与代码实现优化</p></li><li><p>add 增加 StringUtils.isVirtual 方法</p></li><li><p>add 增加 JustAuth 整合 TopIam 单点登录</p></li></ul><h3 id="问题修复" tabindex="-1"><a class="header-anchor" href="#问题修复" aria-hidden="true">#</a> 问题修复</h3><ul><li><p>fix 修复 三方账号可以绑定多平台账号问题</p></li><li><p>fix 修复 主建错别字(感谢 good)</p></li><li><p>fix 修复 兼容redis5.0出现的问题</p></li><li><p>fix 修复 部分浏览器无法获取加密响应头问题</p></li><li><p>fix 修复 用户未设置部门 登录报错问题</p></li><li><p>fix 修复 excel 表达式字典 下拉框导出格式错误</p></li><li><p>fix 修复 提升锁的作用域 并采用双重校验锁(感谢 fanc)</p></li><li><p>fix 修复 用户登录查询部门缓存无法获取租户id问题</p></li><li><p>fix 修复 关闭租户功能 三方登录报错问题</p></li></ul><h3 id="前端改动" tabindex="-1"><a class="header-anchor" href="#前端改动" aria-hidden="true">#</a> 前端改动</h3><ul><li><p>update element-plus 2.7.2</p></li><li><p>update vite 5.2.10</p></li><li><p>update vue 3.4.25</p></li><li><p>update vue-router 4.3.2</p></li><li><p>update nodejs 升级到最低 18.18.0</p></li><li><p>update 优化 跟密码相关的默认前端关闭防重功能</p></li><li><p>update 优化 点击左边菜单时页面空白或者刷新整个页面的问题</p></li><li><p>update 优化 el-select 与 el-input 全局样式</p></li><li><p>update 优化 首页打开topNav不展开菜单问题</p></li><li><p>update 优化 支持全局开启或关闭接口加密功能</p></li><li><p>update 优化 密码校验策略增加非法字符限制</p></li><li><p>update 优化 图片上传组件增加压缩功能支持 可自行开关(感谢 fengheguai)</p></li><li><p>update 优化 request请求类判断请求头方式</p></li><li><p>update 优化 更改客户端状态接口 使用clientId传参</p></li><li><p>update 优化 ws开关改为常开(vite5修复了崩溃bug)</p></li><li><p>fix 修复 移动端下 无法展开菜单问题</p></li><li><p>fix 修复 面板因为min width原因收缩不全</p></li><li><p>fix 修复 文件预览大写后缀不展示的问题(感谢 北桥)</p></li><li><p>fix 修复 i18n无感刷新问题</p></li><li><p>fix 修复 websocket 非index页面刷新无法重连问题</p></li></ul><h2 id="平台简介" tabindex="-1"><a class="header-anchor" href="#平台简介" aria-hidden="true">#</a> 平台简介</h2><blockquote><p>RuoYi-Vue-Plus 是重写 RuoYi-Vue 针对 <code>分布式集群与多租户</code> 场景全方位升级(不兼容原框架)</p></blockquote><blockquote><p>项目代码、文档 均开源免费可商用 遵循开源协议在项目中保留开源协议文件即可<br> 活到老写到老 为兴趣而开源 为学习而开源 为让大家真正可以学到技术而开源</p></blockquote><blockquote><p>系统演示: https://plus-doc.dromara.org/#/common/demo_system</p></blockquote><blockquote><p>前端项目地址: plus-ui](https://gitee.com/JavaLionLi/plus-ui</p></blockquote><blockquote><p>文档地址: https://plus-doc.dromara.org</p></blockquote><h1 id="本框架与ruoyi的功能差异" tabindex="-1"><a class="header-anchor" href="#本框架与ruoyi的功能差异" aria-hidden="true">#</a> 本框架与RuoYi的功能差异</h1><table><thead><tr><th>功能</th><th>本框架</th><th>RuoYi</th></tr></thead><tbody><tr><td>前端项目</td><td>采用 Vue3 + TS + ElementPlus 重写</td><td>基于Vue2/Vue3 + JS</td></tr><tr><td>后端项目结构</td><td>采用插件化 + 扩展包形式 结构解耦 易于扩展</td><td>模块相互注入耦合严重难以扩展</td></tr><tr><td>后端代码风格</td><td>严格遵守Alibaba规范与项目统一配置的代码格式化</td><td>代码书写与常规结构不同阅读障碍大</td></tr><tr><td>Web容器</td><td>采用 Undertow 基于 XNIO 的高性能容器</td><td>采用 Tomcat</td></tr><tr><td>权限认证</td><td>采用 Sa-Token、Jwt 静态使用功能齐全 低耦合 高扩展</td><td>Spring Security 配置繁琐扩展性极差</td></tr><tr><td>权限注解</td><td>采用 Sa-Token 支持注解 登录校验、角色校验、权限校验、二级认证校验、HttpBasic校验、忽略校验</td><td></td></tr><tr><td>角色与权限校验支持多种条件 如 <code>AND</code> <code>OR</code> 或 <code>权限 OR 角色</code> 等复杂表达式</td><td>只支持是否存在匹配</td><td></td></tr><tr><td>三方鉴权</td><td>采用 JustAuth 第三方登录组件 支持微信、钉钉等数十种三方认证</td><td>无</td></tr><tr><td>关系数据库支持</td><td>原生支持 MySQL、Oracle、PostgreSQL、SQLServer</td><td></td></tr><tr><td>可同时使用异构切换</td><td>支持 Mysql、Oracle 不支持同时使用、不支持异构切换</td><td></td></tr><tr><td>缓存数据库</td><td>支持 Redis 5-7 支持大部分新功能特性 如 分布式限流、分布式队列</td><td>Redis 简单 get set 支持</td></tr><tr><td>Redis客户端</td><td>采用 Redisson Redis官方推荐 基于Netty的客户端工具</td><td></td></tr><tr><td>支持Redis 90%以上的命令 底层优化规避很多不正确的用法 例如: keys被转换为scan</td><td></td><td></td></tr><tr><td>支持单机、哨兵、单主集群、多主集群等模式</td><td>Lettuce + RedisTemplate 支持模式少 工具使用繁琐</td><td></td></tr><tr><td>连接池采用 common-pool Bug多经常性出问题</td><td></td><td></td></tr><tr><td>缓存注解</td><td>采用 Spring-Cache 注解 对其扩展了实现支持了更多功能</td><td></td></tr><tr><td>例如 过期时间 最大空闲时间 组最大长度等 只需一个注解即可完成数据自动缓存</td><td>需手动编写Redis代码逻辑</td><td></td></tr><tr><td>ORM框架</td><td>采用 Mybatis-Plus 基于对象几乎不用写SQL全java操作 功能强大插件众多</td><td></td></tr><tr><td>例如多租户插件 分页插件 乐观锁插件等等</td><td>采用 Mybatis 基于XML需要手写SQL</td><td></td></tr><tr><td>SQL监控</td><td>采用 p6spy 可输出完整SQL与执行时间监控</td><td>log输出 需手动拼接sql与参数无法快速查看调试问题</td></tr><tr><td>数据分页</td><td>采用 Mybatis-Plus 分页插件</td><td></td></tr><tr><td>框架对其进行了扩展 对象化分页对象 支持多种方式传参 支持前端多排序 复杂排序</td><td>采用 PageHelper 仅支持单查询分页 参数只能从param传 只能单排序 功能扩展性差 体验不好</td><td></td></tr><tr><td>数据权限</td><td>采用 Mybatis-Plus 插件 自行分析拼接SQL 无感式过滤</td><td></td></tr><tr><td>只需为Mapper设置好注解条件 支持多种自定义 不限于部门角色</td><td>采用 注解+aop 实现 基于部门角色 生成的sql兼容性差 不支持其他业务扩展</td><td></td></tr><tr><td>生成sql后需手动拼接到具体业务sql上 对于多个Mapper查询不起作用</td><td></td><td></td></tr><tr><td>数据脱敏</td><td>采用 注解 + jackson 序列化期间脱敏 支持不同模块不同的脱敏条件</td><td></td></tr><tr><td>支持多种策略 如身份证、手机号、地址、邮箱、银行卡等 可自行扩展</td><td>无</td><td></td></tr><tr><td>数据加解密</td><td>采用 注解 + mybatis 拦截器 对存取数据期间自动加解密</td><td></td></tr><tr><td>支持多种策略 如BASE64、AES、RSA、SM2、SM4等</td><td>无</td><td></td></tr><tr><td>接口传输加密</td><td>采用 动态 AES + RSA 加密请求 body 每一次请求秘钥都不同大幅度降低可破解性</td><td>无</td></tr><tr><td>数据翻译</td><td>采用 注解 + jackson 序列化期间动态修改数据 数据进行翻译</td><td></td></tr><tr><td>支持多种模式: <code>映射翻译</code> <code>直接翻译</code> <code>其他扩展条件翻译</code> 接口化两步即可完成自定义扩展 内置多种翻译实现</td><td>无</td><td></td></tr><tr><td>多数据源框架</td><td>采用 dynamic-datasource 支持世面大部分数据库</td><td></td></tr><tr><td>通过yml配置即可动态管理异构不同种类的数据库 也可通过前端页面添加数据源</td><td></td><td></td></tr><tr><td>支持spel表达式从请求头参数等条件切换数据源</td><td>基于 druid 手动编写代码配置数据源 配置繁琐 支持性差</td><td></td></tr><tr><td>多数据源事务</td><td>采用 dynamic-datasource 支持多数据源不同种类的数据库事务回滚</td><td>不支持</td></tr><tr><td>数据库连接池</td><td>采用 HikariCP Spring官方内置连接池 配置简单 以性能与稳定性闻名天下</td><td>采用 druid bug众多 社区维护差 活跃度低 配置众多繁琐性能一般</td></tr><tr><td>数据库主键</td><td>采用 雪花ID 基于时间戳的 有序增长 唯一ID 再也不用为分库分表 数据合并主键冲突重复而发愁</td><td>采用 数据库自增ID 支持数据量有限 不支持多数据源主键唯一</td></tr><tr><td>WebSocket协议</td><td>基于 Spring 封装的 WebSocket 协议 扩展了Token鉴权与分布式会话同步 不再只是基于单机的废物</td><td>无</td></tr><tr><td>序列化</td><td>采用 Jackson Spring官方内置序列化 靠谱!!!</td><td>采用 fastjson bugjson 远近闻名</td></tr><tr><td>分布式幂等</td><td>参考美团GTIS防重系统简化实现(细节可看文档)</td><td>手动编写注解基于aop实现</td></tr><tr><td>分布式锁</td><td>采用 Lock4j 底层基于 Redisson</td><td>无</td></tr><tr><td>分布式任务调度</td><td>采用 SnailJob 天生支持分布式 统一的管理中心</td><td>采用 Quartz 基于数据库锁性能差 集群需要做很多配置与改造</td></tr><tr><td>文件存储</td><td>采用 Minio 分布式文件存储 天生支持多机、多硬盘、多分片、多副本存储</td><td></td></tr><tr><td>支持权限管理 安全可靠 文件可加密存储</td><td>采用 本机文件存储 文件裸漏 易丢失泄漏 不支持集群有单点效应</td><td></td></tr><tr><td>云存储</td><td>采用 AWS S3 协议客户端 支持 七牛、阿里、腾讯 等一切支持S3协议的厂家</td><td>不支持</td></tr><tr><td>短信</td><td>采用 sms4j 短信融合包 支持数十种短信厂家 只需在yml配置好厂家密钥即可使用 可多厂家共用</td><td>不支持</td></tr><tr><td>邮件</td><td>采用 mail-api 通用协议支持大部分邮件厂商</td><td>不支持</td></tr><tr><td>接口文档</td><td>采用 SpringDoc、javadoc 无注解零入侵基于java注释</td><td></td></tr><tr><td>只需把注释写好 无需再写一大堆的文档注解了</td><td>采用 Springfox 已停止维护 需要编写大量的注解来支持文档生成</td><td></td></tr><tr><td>校验框架</td><td>采用 Validation 支持注解与工具类校验 注解支持国际化</td><td>仅支持注解 且注解不支持国际化</td></tr><tr><td>Excel框架</td><td>采用 Alibaba EasyExcel 基于插件化</td><td></td></tr><tr><td>框架对其增加了很多功能 例如 自动合并相同内容 自动排列布局 字典翻译等</td><td>基于 POI 手写实现 功能有限 复杂 扩展性差</td><td></td></tr><tr><td>工具类框架</td><td>采用 Hutool、Lombok 上百种工具覆盖90%的使用需求 基于注解自动生成 get set 等简化框架大量代码</td><td>手写工具稳定性差易出问题 工具数量有限 代码臃肿需自己手写 get set 等</td></tr><tr><td>监控框架</td><td>采用 SpringBoot-Admin 基于SpringBoot官方 actuator 探针机制</td><td></td></tr><tr><td>实时监控服务状态 框架还为其扩展了在线日志查看监控</td><td>无</td><td></td></tr><tr><td>链路追踪</td><td>采用 Apache SkyWalking 还在为请求不知道去哪了 到哪出了问题而烦恼吗</td><td></td></tr><tr><td>用了它即可实时查看请求经过的每一处每一个节点</td><td>无</td><td></td></tr><tr><td>代码生成器</td><td>只需设计好表结构 一键生成所有crud代码与页面</td><td></td></tr><tr><td>降低80%的开发量 把精力都投入到业务设计上</td><td></td><td></td></tr><tr><td>框架为其适配MP、SpringDoc规范化代码 同时支持动态多数据源代码生成</td><td>代码生成原生结构 只支持单数据源生成</td><td></td></tr><tr><td>部署方式</td><td>支持 Docker 编排 一键搭建所有环境 让开发人员从此不再为搭建环境而烦恼</td><td>原生jar部署 其他环境需手动下载安装 自行搭建</td></tr><tr><td>项目路径修改</td><td>提供详细的修改方案文档 并为其做了一些改动 非常简单即可修改成自己想要的</td><td>需要做很多改造 文档说明有限</td></tr><tr><td>国际化</td><td>基于请求头动态返回不同语种的文本内容 开发难度低 有对应的工具类 支持大部分注解内容国际化</td><td>只提供基础功能 其他需自行编写扩展</td></tr><tr><td>代码单例测试</td><td>提供单例测试 使用方式编写方法与maven多环境单测插件</td><td>只提供基础功能 其他需自行编写扩展</td></tr><tr><td>Demo案例</td><td>提供框架功能的实际使用案例 单独一个模块提供了很多很全</td><td>无</td></tr></tbody></table><p>关于 Dromara</p><p>Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。</p><p>Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。</p><p><strong>欢迎大家来到知识星球和我互动</strong></p><figure><img src="'+t+'" alt="" tabindex="0"><figcaption></figcaption></figure>',28),o=[a];function u(s,c){return i(),p("div",null,o)}const g=d(l,[["render",u],["__file","RuoYi-Vue-Plus-5.2.0.html.vue"]]);export{g as default};
