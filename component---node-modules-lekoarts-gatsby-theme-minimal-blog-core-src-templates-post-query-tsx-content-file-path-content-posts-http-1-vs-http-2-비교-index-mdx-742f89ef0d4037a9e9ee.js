"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[165],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return E}});var l=n(7294),r=n(8733),a=n(795),i=n(6920),c=n(6799),m=n(8871);var o=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var s=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(l.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(o,{post:t}))};const p=e=>{var t,n,l;let{data:{post:a}}=e;return(0,r.tZ)(m.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function E(e){let{...t}=e;return l.createElement(s,t)}},6799:function(e,t,n){var l=n(8733),r=n(7294),a=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:m}=(0,i.Z)();return(0,l.tZ)(r.Fragment,null,t.map(((e,t)=>(0,l.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,l.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+m+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var l=n(7294),r=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:m=null,canonicalUrl:o=""}=e;const u=(0,a.Z)(),{siteTitle:s,siteTitleAlt:p,siteUrl:E,siteDescription:g,siteImage:d,author:T,siteLanguage:h}=u,v={title:t?t+" | "+s:p,description:n||g,url:""+E+(i||""),image:""+E+(c||d)};return l.createElement(l.Fragment,null,l.createElement("html",{lang:h}),l.createElement("title",null,v.title),l.createElement("meta",{name:"description",content:v.description}),l.createElement("meta",{name:"image",content:v.image}),l.createElement("meta",{property:"og:title",content:v.title}),l.createElement("meta",{property:"og:url",content:v.url}),l.createElement("meta",{property:"og:description",content:v.description}),l.createElement("meta",{property:"og:image",content:v.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:v.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:v.title}),l.createElement("meta",{name:"twitter:url",content:v.url}),l.createElement("meta",{name:"twitter:description",content:v.description}),l.createElement("meta",{name:"twitter:image",content:v.image}),l.createElement("meta",{name:"twitter:image:alt",content:v.description}),l.createElement("meta",{name:"twitter:creator",content:T}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),o?l.createElement("link",{rel:"canonical",href:o}):null,m)}},1569:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return m}});var l=n(7294),r=n(1151);function a(e){const t=Object.assign({blockquote:"blockquote",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code",br:"br",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"HTTP/2는 HTTP/1에서 발생하는 문제점을 개선하였고 호환성도 유지가 가능하다."),"\n"),"\n",l.createElement(t.h2,null,"HTTP/1 문제점"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"HOL(Head Of Line) 블로킹"),"\n",l.createElement(t.li,null,"비대한 메시지 헤더(요청과 응답의 헤더를 압축하지 않음)"),"\n",l.createElement(t.li,null,"제한적인 우선순위"),"\n"),"\n",l.createElement(t.h2,null,"HTTP/1 성능 개선 방법"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"쿠키 없는 도메인을 만들어 개선할 수도 있다."),"\n",l.createElement(t.li,null,"스프라이팅 : 작은 이미지들을 합쳐서 하나의 큰 이미지로 만든 후에 CSS로 컨트롤 하여 사용, HTTP/2는 성능이 좋아 고려할 필요가 없음."),"\n",l.createElement(t.li,null,"샤딩 : 호스트이름 마다 여러개의 연결 후 병렬로 처리하는 브라우저의 기능"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.h3,null,"HTTP 1.1 Persistent"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-mermaid"},"%% Example of sequence diagram\n  sequenceDiagram\n    Note right of Server: HTTP 1.1 Persistent\n    opt 1 요청\n    Server--\x3e>Client: Response\n    Client->>Server: Reqeust\n    end\n    opt 2 요청\n    Server--\x3e>Client: Response\n    Client->>Server: Reqeust\n    end\n    opt 3 요청\n    Server--\x3e>Client: Response\n    Client->>Server: Reqeust\n    end\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"동시 전송이 안되고 순차적으로 처리"),"\n",l.createElement(t.li,null,"Connection 하나당 Request 요청을 처리 가능"),"\n",l.createElement(t.li,null,"지연이 발생함"),"\n"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.h3,null,"HTTP 1.1 Pipelining"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-mermaid"},"%% Example of sequence diagram\n  sequenceDiagram\n    Note right of Server: HTTP 1.1 Pipelining\n    Server--\x3e>Client: Response\n    Server--\x3e>Client: Response\n    Client->>Server: Reqeust\n    Client->>Server: Reqeust\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"패킷 용량을 줄일 수 있다."),"\n",l.createElement(t.li,null,"Connection 하나로 다수의 Request 와 Response 를 처리하고 Network Latency를 줄일 수 있다."),"\n"),"\n"),"\n",l.createElement(t.h2,null,"SPDY ?"),"\n",l.createElement(t.p,null,"HTTP의 대안으로 구글이 제안한 프로토콜이다. HTTP/2의 기반이 되었으며 다중화(Multiplexing), 프레이밍(Framing), 헤더압축(Header Compression)가 특징적이며 증명이 되었다.",l.createElement(t.br),"\n","다음과 같은 이유로 HTTP/2의 기반으로 사용하기로 하였다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"HOL(Head Of Line) 블로킹 문제 해결"),"\n",l.createElement(t.li,null,"TCP 체감 지연 시간 개선"),"\n",l.createElement(t.li,null,"혼잡 제어 개선(병렬 처리 관련)"),"\n",l.createElement(t.li,null,"HTTP/1.1의 기존 문서화된 것을 최대한 활용, 호환성 유지"),"\n",l.createElement(t.li,null,"새로운 기능에 대한 명확한 정책"),"\n"),"\n",l.createElement(t.h2,null,"HTTP 2.0 특징"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"헤더 압축 가능"),"\n",l.createElement(t.li,null,"헤더 이력 저장으로 이미 전달된 정보 재전달 방지"),"\n",l.createElement(t.li,null,"프레이 계층, HTTP 계층으로 나뉨"),"\n",l.createElement(t.li,null,"다중화"),"\n",l.createElement(t.li,null,"암호화"),"\n"),"\n",l.createElement(t.h2,null,"HTTP 2.0 전환시 고려사항"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"브라우저의 HTTP/2 지원 여부"),"\n",l.createElement(t.li,null,"TLS(HTTPS) 전환"),"\n",l.createElement(t.li,null,"기존 클라이언트 지원(기존 사용자들을 무시할순 없다)"),"\n"),"\n",l.createElement(t.h2,null,"TLS(SSL) ?"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"SSL 규약은 처음에 넷스케이프가 만들었다. 1.0 버전은 공개 된 적이 없고, 2.0 버전이 1995년 2월에 이르러서야 릴리스가 된다. 그러나 이 버전은 많은 보안 결함 때문에 3.0 버전으로 곧바로 이어진다. 3.0은 1996년 릴리스 된다. 결국 3.0 버전은 TLS 버전 1.0의 기초가 되고, IETF에서 1999년 1월에 RFC 2246 표준 규약으로 정의하게 된다. 마지막 갱신은 RFC 5246 이었다."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EA%B3%84%EC%B8%B5_%EB%B3%B4%EC%95%88"},"위키백과 - 개발 역사 참고")),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},c=n(4765);function m(e){return l.createElement(c.Z,e,l.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-http-1-vs-http-2-비교-index-mdx-742f89ef0d4037a9e9ee.js.map