(this["webpackJsonptrashdao.github.io"]=this["webpackJsonptrashdao.github.io"]||[]).push([[0],{40:function(n){n.exports=JSON.parse('{"a":"0.1.0"}')},47:function(n,e,t){},54:function(n,e){},65:function(n,e,t){},66:function(n,e,t){"use strict";t.r(e);var r=t(5),c=t.n(r),a=t(23),o=t.n(a),i=(t(47),t(22)),s=function(){return Object(i.b)()},u=i.c,d=t(2),l=t.n(d),f=t(11),p=t(12),j=t(15),b=new j.a.providers.Web3Provider(window.ethereum),h=null===b||void 0===b?void 0:b.getSigner(),x=function(){var n=Object(f.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.ethereum.enable();case 2:return n.next=4,h.getAddress();case 4:return n.t0=n.sent,n.t1=v(),n.abrupt("return",{address:n.t0,network:n.t1});case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){return"4"===window.ethereum.networkVersion?"Rinkeby":""},O=Object(p.b)("connectWallet/isWalletConnected",Object(f.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve(window.ethereum.isConnected());case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))),g=Object(p.b)("connectWallet/connectWallet",Object(f.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x();case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))),m=Object(p.c)({name:"connectWallet",initialState:{connected:!1,loading:!1},reducers:{},extraReducers:function(n){n.addCase(O.pending,(function(n){n.loading=!0})).addCase(O.fulfilled,(function(n,e){n.loading=!1,n.connected=e.payload})).addCase(g.pending,(function(n){n.loading=!0})).addCase(g.fulfilled,(function(n,e){n.loading=!1,n.connected=!0,n.address=e.payload.address,n.network=e.payload.network}))}}),w=function(n){return n.connectWallet.connected},k=function(n){return n.connectWallet.loading},C=function(n){return n.connectWallet.address},T=function(n){return n.connectWallet.network},y=m.reducer,F=t(6);function W(){var n=u(k),e=u(w),t=u(C),r=u(T),c=s();return Object(F.jsx)("div",{children:n?"Loading...":e?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("span",{children:r})," ",Object(F.jsx)("span",{children:t})]}):Object(F.jsx)("button",{onClick:function(){return c(g())},children:"Connect Wallet"})})}t(65);var S,I="0x4D786cbecf963Ca87dd3456cB1638AB005C69f7a",A=function(){return S||(S=new j.a.Contract(I,R,b)),S},R=["function mint() returns (uint)","function tokenUri(uint tokenId) view returns (string)","event Transfer(address indexed from, address indexed to, uint tokenId)"],N=function(){var n=Object(f.a)(l.a.mark((function n(e){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:A().on("Transfer",(function(n,t,r,c){console.log("".concat(n," sent ").concat(r," to ").concat(t)),e({tokenId:r,tokenUri:""})})),console.log("done listening");case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),B=function(){var n=Object(f.a)(l.a.mark((function n(){var e,t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=A(),t=e.connect(h),n.next=4,t.mint();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),D=!1,E=Object(p.b)("nftFaucet/mint",function(){var n=Object(f.a)(l.a.mark((function n(e,t){var r,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return D||(N((function(n){t.dispatch(_(n))})),D=!0),n.next=3,B();case 3:return r=n.sent,n.next=6,r.wait();case 6:return c=n.sent,n.abrupt("return",c.transactionHash);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),P=Object(p.c)({name:"nftFaucet",initialState:{mints:[],pendingTx:!1},reducers:{mintSuccess:function(n,e){n.mints.push(e.payload),n.pendingTx=!1}},extraReducers:function(n){n.addCase(E.pending,(function(n){n.pendingTx=!0})).addCase(E.fulfilled,(function(n,e){n.pendingTx=!1}))}}),_=P.actions.mintSuccess,J=function(n){var e;return null===(e=n.nftFaucet)||void 0===e?void 0:e.pendingTx},U=function(n){var e;return null===(e=n.nftFaucet)||void 0===e?void 0:e.mints},H=P.reducer;function M(){var n=u(J),e=u(U),t=s();return Object(F.jsxs)("div",{children:[Object(F.jsx)("h2",{children:"NFT Faucet"}),Object(F.jsxs)("div",{children:["Rinkeby NFT Faucet Contract: ",I]}),n?"Pending Transaction...":Object(F.jsx)("button",{onClick:function(){t(E())},children:"Mint"}),(null===e||void 0===e?void 0:e.length)>0?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{children:"Recent mints:"}),Object(F.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(n){return Object(F.jsxs)("li",{children:[Object(F.jsx)("img",{src:n.tokenUri,alt:"".concat(n.tokenId)}),"Token ID: ",n.tokenId]})}))})]}):null,Object(F.jsxs)("p",{children:["Check your Rinkeby NFTs in ",Object(F.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://testnets.opensea.io/account",children:"Rinkeby OpenSea"})]})]})}var L=t(31),V="0x370Eff7d2Ac0ACf3E7713Ec8beC8079e825EB0d4",$=["function safeTransferFrom(address _from, address _to, uint256 _tokenId)","event Transfer(address indexed from, address indexed to, uint tokenId)"],q=function(){var n=Object(f.a)(l.a.mark((function n(e,t){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:new j.a.Contract(e,$,b).on("Transfer",(function(n,e,r,c){console.log("".concat(n," sent ").concat(r," to ").concat(e)),t()})),console.log("done listening");case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),z=function(){var n=Object(f.a)(l.a.mark((function n(e,t){var r,c,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new j.a.Contract(e,$,b),c=r.connect(h),n.next=4,h.getAddress();case 4:return a=n.sent,n.next=7,c.safeTransferFrom(a,V,t);case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),G=!1,K=Object(p.b)("trashCan/safeTransferFrom",function(){var n=Object(f.a)(l.a.mark((function n(e,t){var r,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return G||(q(e.contractAddress,(function(){t.dispatch(X())})),G=!0),n.next=3,z(e.contractAddress,+e.tokenId);case 3:return r=n.sent,n.next=6,r.wait();case 6:return c=n.sent,n.abrupt("return",c.transactionHash);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),Q=Object(p.c)({name:"trashCan",initialState:{pendingTx:!1},reducers:{transferSuccess:function(n,e){n.pendingTx=!1}},extraReducers:function(n){n.addCase(K.pending,(function(n){n.pendingTx=!0})).addCase(K.fulfilled,(function(n,e){n.pendingTx=!1}))}}),X=Q.actions.transferSuccess,Y=function(n){var e;return null===(e=n.trashCan)||void 0===e?void 0:e.pendingTx},Z=Q.reducer;function nn(){var n=u(Y),e=s(),t=Object(r.useState)(I),c=Object(L.a)(t,2),a=c[0],o=c[1],i=Object(r.useState)(""),d=Object(L.a)(i,2),l=d[0],f=d[1];return Object(F.jsxs)("div",{children:[Object(F.jsx)("h2",{children:"Trash Can"}),Object(F.jsxs)("div",{children:["Rinkeby Trash Can Contract: ",V]}),n?"Pending Transaction...":Object(F.jsxs)(F.Fragment,{children:["Contract address",Object(F.jsx)("input",{onChange:function(n){o(n.target.value)}}),Object(F.jsx)("br",{}),"Token ID ",Object(F.jsx)("input",{onChange:function(n){f(n.target.value)}}),Object(F.jsx)("br",{}),Object(F.jsx)("button",{onClick:function(){e(K({contractAddress:a,tokenId:l}))},children:"Dump"})]})]})}var en=t(40);var tn=function(){var n=u(w);return Object(F.jsxs)("div",{className:"App",children:["TrashDAO",Object(F.jsx)(W,{}),n?Object(F.jsx)(M,{}):null,n?Object(F.jsx)(nn,{}):null,Object(F.jsx)("div",{className:"version",children:en.a})]})},rn=Object(p.a)({reducer:{connectWallet:y,nftFaucet:H,trashCan:Z}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(i.a,{store:rn,children:Object(F.jsx)(tn,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.635ac9fb.chunk.js.map