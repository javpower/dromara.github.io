import{_ as i,o as e,c as n,e as s}from"./app-0631b554.js";const t={},l=s(`<h2 id="sms4j-v2-0-1-版本正式发布" tabindex="-1"><a class="header-anchor" href="#sms4j-v2-0-1-版本正式发布" aria-hidden="true">#</a> sms4j V2.0.1 版本正式发布</h2><p>该版本中包含了一些重要的更新和改进，以提高框架的性能、可靠性和用户体验。在这里，我们将详细介绍这些更新内容。</p><ol><li><strong>数据库刷新和读取的方法进行了优化</strong></li></ol><p>为了提高系统的性能，我们对数据库刷新和读取的方法进行了优化。我们优化了查询和更新操作的算法和实现方式，从而提高了系统的响应速度和处理效率。现在，您可以更快速地读取和更新数据库中的数据，使您的业务处理更加高效。</p><ol start="2"><li><strong>添加了一个用于刷新数据库配置的方法</strong></li></ol><p>我们添加了一个新的方法，用于刷新数据库配置。这个新方法可以让您更灵活地管理数据库配置，以满足您的不同业务需求。现在，您可以通过这个新方法来刷新和更新数据库配置，从而使您的业务运行更加稳定和高效。</p><ol start="3"><li><strong>重构容联云国内短信实现，使用 Open Api 替代 SDK</strong></li></ol><p>我们对容联云国内短信实现进行了重构，使用了 Open API 替代了 SDK。这样做的好处是，您可以更快速地发送短信，从而提高系统的响应速度和处理效率。此外，Open API 还提供了更加稳定和可靠的短信发送服务，使您的业务处理更加可靠。</p><ol start="4"><li><strong>重构阿里云国内短信实现，使用 Open Api 替代 SDK</strong></li></ol><p>我们对阿里云国内短信实现进行了重构，使用了 Open API 替代了 SDK。这样做的好处是，您可以更加稳定地发送短信，从而提高了系统的稳定性和用户体验。同时，Open API 还提供了更加灵活和丰富的功能，满足不同业务的需求。</p><ol start="5"><li><strong>重构腾讯云国内短信实现，使用 Open Api 替代 SDK</strong></li></ol><p>我们对腾讯云国内短信实现进行了重构，使用了 Open API 替代了 SDK。这样做的好处是，您可以更快速地发送短信，提高了系统的响应速度和处理效率。同时，Open API 还提供了更多的功能和服务，使您的业务处理更加高效和便捷。</p><ol start="6"><li><strong>抽取公共配置信息，支持 Builder 模式</strong></li></ol><p>我们抽取了公共配置信息，并支持 Builder 模式，以便您更灵活地管理系统配置。现在，您可以更加方便地管理和配置系统，以满足您不同业务的需求。同时，Builder 模式还提供了更加直观和灵活的配置方式，使您可以更快速地配置和管理系统。</p><ol start="7"><li><strong>优化部分细节处理</strong></li></ol><p>在本次更新中，我们还对系统的部分细节进行了优化处理。我们修复了一些小 bug，以提高系统的稳定性和可靠性。同时，我们还改进了一些界面和操作方式，使系统更加易用和便捷。</p><ol start="8"><li><strong>数据库名称不再强制要求分类配置</strong></li></ol><p>在之前的版本中，数据库的名称必须按照一定的规则进行分类配置。现在，我们放宽了这个要求，使您可以更加灵活地管理和配置数据库。这样做的好处是，您可以更加方便地进行数据库的管理和维护，从而提高系统的可靠性和稳定性。</p><ol start="9"><li><strong>添加了自定义的配置形式，配置更加灵活</strong></li></ol><p>在本次更新中，我们还添加了一种新的配置方式，使您可以更加灵活地管理和配置系统。您可以根据自己的需求和业务场景，自定义配置内容和形式，以便更好地满足您的业务需求。</p><p>以下我们看一个简单的新的配置方式的示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//unisms短信差异化配置
    public void setConfig(){
        //以下空字符串仅为演示使用，实际项目可以通过各种途径获取相应的数据
        UniConfig uni = UniConfig.builder()
                .accessKeyId(&quot;&quot;)
                .templateId(&quot;&quot;)
                .templateName(&quot;&quot;)
                .signature(&quot;&quot;)
                .build();
        SupplierFactory.setUniConfig(uni);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多的功能和详细的文档，请查看官方文档！</p><p>如果我们的项目对您产生了帮助，请为我们点上一颗 star</p><p>官方网站 https://wind.kim</p><p>gitee 仓库 https://gitee.com/dromara/sms4j</p>`,26),o=[l];function r(a,p){return e(),n("div",null,o)}const u=i(t,[["render",r],["__file","sms4j-2.0.1.html.vue"]]);export{u as default};
