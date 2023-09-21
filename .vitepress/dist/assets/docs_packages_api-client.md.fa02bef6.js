import{_ as s,o as n,c as a,X as l}from"./chunks/framework.21352381.js";const C=JSON.parse('{"title":"API Client","description":"","frontmatter":{},"headers":[],"relativePath":"docs/packages/api-client.md","filePath":"docs/packages/api-client.md","lastUpdated":1692241009000}'),p={name:"docs/packages/api-client.md"},e=l(`<h1 id="api-client" tabindex="-1">API Client <a class="header-anchor" href="#api-client" aria-label="Permalink to &quot;API Client&quot;">​</a></h1><p>The <code>api-client</code> package is essentially a class that provides methods to easily interact with the backend api. This package is used by the <code>site</code> and <code>web</code> applications.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Client</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@opendevnet/api-client</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ChannelType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@opendevnet/types</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Initialize a new instance of the client class </span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> client </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Authenticate the client with a username and password, if not already authenticated</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// The client will request a refresh token, if one doesn&#39;t exist</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// The client will request an access token, if one doesn&#39;t exist</span></span>
<span class="line"><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">login</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">slekup</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GO3BWLT93HGPAY</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// All requests from this point will be authenticated with the access token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Connect to the API via websocket</span></span>
<span class="line"><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Send a private message to a user</span></span>
<span class="line"><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ChannelType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DirectMessage</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> friend</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello friend!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Logout and finish the session</span></span>
<span class="line"><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">logout</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,4),o=[e];function t(c,r,i,D,y,F){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
