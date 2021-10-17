"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[866],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,l=function(n,e){if(null==n)return{};var t,r,l={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,l=n.mdxType,a=n.originalType,s=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),p=c(t),m=l,g=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return t?r.createElement(g,i(i({ref:e},u),{},{components:t})):r.createElement(g,i({ref:e},u))}));function m(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var a=t.length,i=new Array(a);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o.mdxType="string"==typeof n?n:l,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5549:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(7462),l=t(3366),a=(t(7294),t(3905)),i=["components"],o={},s=void 0,c={unversionedId:"config/Format & lint",id:"config/Format & lint",isDocsHomePage:!1,title:"Format & lint",description:"- There are many plugins for this , I will use null-ls.nvim in this example!",source:"@site/docs/config/Format & lint.md",sourceDirName:"config",slug:"/config/Format & lint",permalink:"/config/Format & lint",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Lsp stuff",permalink:"/config/Lsp stuff"},next:{title:"Features",permalink:"/features"}},u=[{value:"Install null-ls",id:"install-null-ls",children:[]},{value:"Null-ls config",id:"null-ls-config",children:[]}],f={toc:u};function p(n){var e=n.components,t=(0,l.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There are many plugins for this , I will use null-ls.nvim in this example!")),(0,a.kt)("h3",{id:"install-null-ls"},"Install null-ls"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},' use {\n      "jose-elias-alvarez/null-ls.nvim",\n      after = "nvim-lspconfig",\n      config = function()\n         require("custom.plugin_confs.null-ls").setup()\n      end,\n   }\n\n-- load it after nvim-lspconfig , since we\'ll use some lspconfig stuff in the null-ls config!\n')),(0,a.kt)("h3",{id:"null-ls-config"},"Null-ls config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local ok, null_ls = pcall(require, "null-ls")\n\nif not ok then\n   return\nend\n\nlocal b = null_ls.builtins\n\nlocal sources = {\n\n   -- JS html css stuff\n   b.formatting.prettierd.with {\n      filetypes = { "html", "json", "markdown", "css", "javascript", "javascriptreact" },\n   },\n   b.diagnostics.eslint.with {\n      command = "eslint_d",\n   },\n\n   -- Lua\n   b.formatting.stylua,\n   b.diagnostics.luacheck.with { extra_args = { "--global vim" } },\n\n   -- Shell\n   b.formatting.shfmt,\n   b.diagnostics.shellcheck.with { diagnostics_format = "#{m} [#{c}]" },\n}\n\nlocal M = {}\n\nM.setup = function(on_attach)\n   null_ls.config {\n      sources = sources,\n   }\n   require("lspconfig")["null-ls"].setup { on_attach = on_attach }\nend\n\nreturn M\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Format code : leader fm"),(0,a.kt)("li",{parentName:"ul"},"If you want to change this mapping , check this line in your lspconfig :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'buf_set_keymap("n", "<space>fm", "<cmd>lua vim.lsp.buf.formatting()<CR>", opts)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md"},"null-ls builtins")," to get config for your language!"),(0,a.kt)("li",{parentName:"ul"},"Also note that I've added some config of linters and formatters in null-ls config, so those programs must be installed on my system as well! Like prettierd , stylua , shfmt , eslint_d , etc.")))}p.isMDXComponent=!0}}]);