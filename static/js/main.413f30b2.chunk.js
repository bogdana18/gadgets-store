(this["webpackJsonpgadgets-store"]=this["webpackJsonpgadgets-store"]||[]).push([[0],Array(32).concat([function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s,a=c(26),n=c.n(a),r=c(6),i=c(20),o=c(10),l=c(9),u=c(4),d=c(5),j=c.n(d),b=c(1),m=c(3),h=c(7),p=c.n(h),O=Object(b.createContext)({favorites:[],favCount:0,handleToggleLike:function(){},inCart:[],inCartCount:0,handleToggleAddToCart:function(){},isSelectedProduct:function(){return!1},query:"",isShowResSearch:!1,productsToSearch:[],updateCount:function(){}}),_=O.Provider,x=function(){return Object(b.useContext)(O)},f=c.p+"static/media/logo.c9417692.svg",v=(c(32),c(0)),g=function(){return Object(v.jsx)(r.b,{to:"/",className:"logo",children:Object(v.jsx)("img",{src:f,alt:"logo"})})},N=(c(34),function(e){var t=e.to,c=e.title;return Object(v.jsx)("li",{className:"navlink",children:Object(v.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return p()("navlink__link",{"navlink__link--active":t})},children:c})})});!function(e){e.Home="/home",e.Cart="/cart",e.Phones="/phones",e.Accessories="/accessories",e.Tablets="/tablets",e.Favourites="/favourites"}(s||(s={}));c(35);var y=function(){return Object(v.jsx)("div",{className:"navbar",children:Object(v.jsxs)("ul",{className:"navbar__list",children:[Object(v.jsx)(N,{to:"/",title:"Home"}),Object(v.jsx)(N,{to:s.Phones,title:"Phones"}),Object(v.jsx)(N,{to:s.Tablets,title:"Tablets"}),Object(v.jsx)(N,{to:s.Accessories,title:"Accessories"})]})})};function k(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(u.a)(e,2),s=t[0],a=t[1];null===a?c.delete(s):Array.isArray(a)?(c.delete(s),a.forEach((function(e){c.append(s,e)}))):c.set(s,a)})),c.toString()}c(36);var w,C=Object(b.memo)((function(){var e=Object(m.l)().pathname,t=Object(r.d)(""),c=Object(u.a)(t,2),s=c[0],a=c[1],n=Object(b.useState)(""),i=Object(u.a)(n,2),o=i[0],l=i[1],d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,c=Object(b.useState)(e),s=Object(u.a)(c,2),a=s[0],n=s[1];return Object(b.useEffect)((function(){var c=setTimeout((function(){n(e)}),Math.max(t,0));return function(){clearTimeout(c)}}),[e,t]),a}(o,300)||null;Object(b.useEffect)((function(){a(k(s,{query:d}))}),[d]);var j=function(){var t=e.split("/")[1];return"Search in ".concat(t,"...")}(),h=0!==o.length;return Object(v.jsxs)("div",{className:"search",children:[Object(v.jsx)("input",{className:p()("search__input",{"search__input--show":h}),type:"text",placeholder:j,value:o,onChange:function(e){l(e.target.value)}}),Object(v.jsx)("button",{"aria-label":"reset",type:"button",className:p()("search__reset-btn",{"search__reset-btn--show":!h}),onClick:function(){l(""),a(k(s,{query:null}))}})]})})),S=c.p+"static/media/heartTransparent.dbd19c03.svg",I=c.p+"static/media/cart.9229aff4.svg",P=(c(37),function(){var e=Object(m.l)().pathname,t=x(),c=t.favCount,s=t.inCartCount,a="/phones"===e||"/tablets"===e||"/accessories"===e||"/favourites"===e;return Object(v.jsxs)("div",{className:"header",children:[Object(v.jsxs)("div",{className:"header__left",children:[Object(v.jsx)(g,{}),Object(v.jsx)(y,{})]}),Object(v.jsxs)("div",{className:"header__right",children:[a&&Object(v.jsx)(C,{}),Object(v.jsxs)(r.c,{to:"/favourites",className:function(e){var t=e.isActive;return p()("header__link-icon",{"header__link-icon--active":t})},children:[Object(v.jsx)("img",{src:S,alt:"heart"}),0!==c&&Object(v.jsx)("span",{children:c})]}),Object(v.jsxs)(r.c,{to:"/cart",className:function(e){var t=e.isActive;return p()("header__link-icon",{"header__link-icon--active":t})},children:[Object(v.jsx)("img",{src:I,alt:"cart"}),0!==s&&Object(v.jsx)("span",{children:s})]})]})]})}),A=c.p+"static/media/arrowUp.9c853957.svg",T=(c(38),Object(b.memo)((function(){var e=Object(m.l)().pathname===s.Cart;return Object(v.jsx)("footer",{className:"footer",children:Object(v.jsx)("div",{className:"footer__container",children:Object(v.jsxs)("div",{className:"footer__content",children:[Object(v.jsx)(g,{}),Object(v.jsxs)("ul",{className:"footer__list",children:[Object(v.jsx)("li",{className:"footer__item",children:Object(v.jsx)("a",{href:"https://github.com/bogdana18",target:"_blank",className:"footer__link",rel:"noreferrer",children:"github"})}),Object(v.jsx)("li",{className:"footer__item",children:Object(v.jsx)("a",{href:"https://github.com/",target:"_blank",className:"footer__link",rel:"noreferrer",children:"contacts"})}),Object(v.jsx)("li",{className:"footer__item",children:Object(v.jsx)("a",{href:"https://t.me/lexusenko",target:"_blank",className:"footer__link",rel:"noreferrer",children:"rights"})})]}),Object(v.jsx)("button",{type:"button",className:p()("footer__button button-square",{"footer__button--hiden":e}),onClick:function(){var e;null===(e=document.querySelector(".header"))||void 0===e||e.scrollIntoView({behavior:"smooth"})},children:Object(v.jsx)("img",{src:A,alt:"arrowUp"})})]})})})}))),L=(c(39),function(){return Object(v.jsx)("div",{className:"not-found",children:Object(v.jsx)("div",{className:"not-found__container",children:Object(v.jsx)("h2",{className:"not-found__title",children:"Page not found"})})})}),q=c.p+"static/media/arrowLeft.74ad2c5e.svg",R=c.p+"static/media/arrowRigth.a8e610bf.svg",E=(c(40),function(e){var t=e.images,c=Object(b.useState)(0),s=Object(u.a)(c,2),a=s[0],n=s[1];return Object(b.useEffect)((function(){var e=a;e>t.length-1&&(e=0),e<0&&(e=t.length-1);var c=setInterval((function(){n((function(e){var c=e+1;return c>t.length-1&&(c=0),c}))}),5e3);return function(){return clearInterval(c)}}),[a,t]),Object(v.jsxs)("div",{className:"carousel",children:[Object(v.jsxs)("div",{className:"carousel__box",children:[Object(v.jsx)("div",{className:"carousel__row",children:null===t||void 0===t?void 0:t.map((function(e,c){return a>t.length-1&&n(0),a<0&&n(t.length-1),Object(v.jsx)("img",{src:e,alt:e,className:p()("carousel__img",{"carousel__img--active":c===a})},e)}))}),Object(v.jsx)("button",{type:"button",onClick:function(){return n((function(e){return e-1}))},className:"carousel__button carousel__button--prev",children:Object(v.jsx)("img",{src:q,alt:"arrowLeft"})}),Object(v.jsx)("button",{type:"button",onClick:function(){return n((function(e){return e+1}))},className:"carousel__button carousel__button--next",children:Object(v.jsx)("img",{src:R,alt:"arrowRigth"})})]}),Object(v.jsx)("div",{className:"carousel__pagination-box",children:t.map((function(e,t){return Object(v.jsx)("button",{"aria-label":"pagination-item",type:"button",className:p()("carousel__item-btn",{"carousel__item-btn--active":t===a}),onClick:function(){return n(t)}},e)}))})]})}),M=function(e){var t=e.product,c=e.isSelected,s=x().handleToggleAddToCart;return Object(v.jsx)("button",{type:"button",className:p()("button",{"button--selected":c}),onClick:function(){return s(t)},children:"".concat(c?"Added to cart":"Add to cart")})},F=c.p+"static/media/heartRed.d554a185.svg",B=(c(41),function(e){var t=e.product,c=e.isSelected,s=x().handleToggleLike;return Object(v.jsx)("button",{"aria-label":"like",type:"button",className:"button-like",onClick:function(){return s(t)},children:c?Object(v.jsx)("img",{src:F,alt:"heartRed"}):Object(v.jsx)("img",{src:S,alt:"heartTransparent"})})}),D=(c(42),function(e){var t=e.charProd,c=t.keys,s=t.values;return Object(v.jsxs)("div",{className:"characteristic-product",children:[Object(v.jsx)("ul",{className:"characteristic-product__list",children:c.map((function(e){return Object(v.jsx)("li",{className:"characteristic-product__key",children:e},e)}))}),Object(v.jsx)("ul",{className:"characteristic-product__list",children:s.map((function(e){return Object(v.jsx)("li",{className:"characteristic-product__value",children:e},e)}))})]})}),$=(c(43),function(e){var t=e.product,c=t.name,s=t.fullPrice,a=t.price,n=t.screen,i=t.capacity,o=t.ram,l=t.image,u=t.itemId,d=t.category,j=x(),b=j.favorites,m=j.inCart,h=j.isSelectedProduct,p=h(u,b),O=h(u,m),_="".concat(Number.parseInt(o,10)," GB"),f={keys:["screen","capacity","RAM"],values:["".concat(n),"".concat(i),"".concat(_)]};return Object(v.jsx)("div",{className:"product-item",children:Object(v.jsx)("div",{className:"product-item__container",children:Object(v.jsxs)("div",{className:"product-item__content",children:[Object(v.jsxs)(r.b,{to:"/".concat(d,"/").concat(u),className:"product-item__link",children:[Object(v.jsx)("img",{src:"_new/".concat(l),alt:"phones",className:"product-item__img"}),Object(v.jsx)("h2",{className:"product-item__subtitle",children:c})]}),Object(v.jsxs)("div",{className:"product-item__box-price",children:[Object(v.jsx)("span",{className:"product-item__price",children:"$".concat(a)}),Object(v.jsx)("span",{className:"product-item__full-price",children:"$".concat(s)})]}),Object(v.jsx)("div",{className:"product-item__characteristic",children:Object(v.jsx)(D,{charProd:f})}),Object(v.jsxs)("div",{className:"product-item__actions",children:[Object(v.jsx)(M,{product:t,isSelected:O}),Object(v.jsx)(B,{product:t,isSelected:p})]})]})})})}),H=(c(44),Object(b.memo)((function(e){var t=e.title,c=e.products,s=Object(b.useState)(0),a=Object(u.a)(s,2),n=a[0],r=a[1],i=n+4;return Object(v.jsxs)("div",{className:"products-slider",children:[Object(v.jsxs)("div",{className:"products-slider__top-row",children:[Object(v.jsx)("h2",{className:"products-slider__title title",children:t}),Object(v.jsxs)("div",{className:"products-slider__nagigate ",children:[Object(v.jsx)("button",{"aria-label":"nagigate",type:"button",className:p()("products-slider__button button-square",{"button-square--disabled":n<=0}),onClick:function(){return r((function(e){return e-1}))},children:Object(v.jsx)("img",{src:q,alt:"arrowLeft"})}),Object(v.jsx)("button",{"aria-label":"nagigate",type:"button",className:p()("products-slider__button button-square",{"button-square--disabled":i>c.length-1}),onClick:function(){return r((function(e){return e+1}))},children:Object(v.jsx)("img",{src:R,alt:"arrowRigth"})})]})]}),Object(v.jsx)("div",{className:"products-slider__products grid",children:c.slice(n,i).map((function(e){return Object(v.jsx)($,{product:e},e.itemId)}))})]})})));!function(e){e.Newest="newest",e.Alphabetically="alphabetically",e.Price="price",e.Year="year",e.MaxDiscount="maxDiscount",e.Random="random"}(w||(w={}));var Y=function(e,t){switch(t){case w.Newest:return e.sort((function(e,t){return e.name.localeCompare(t.name)}));case w.Alphabetically:return e.sort((function(e,t){return e.year-t.year}));case w.Price:return e.sort((function(e,t){return e.price-t.price}));case w.Year:return e.sort((function(e,t){return e.year-t.year}));case w.MaxDiscount:return e.sort((function(e,t){return e.fullPrice-e.price-(t.fullPrice-t.price)}));case w.Random:return e.sort((function(){return Math.random()-.5}));default:return e}},G=(c(45),function(e){var t=e.to,c=e.srcImg,s=e.title,a=e.count;return Object(v.jsxs)("div",{className:"shop-by-category",children:[Object(v.jsx)(r.b,{to:t,className:"shop-by-category__box-img",children:Object(v.jsx)("img",{src:"_new/".concat(c),alt:s,className:"shop-by-category__img"})}),Object(v.jsx)(r.b,{to:t,className:"shop-by-category__title",children:s}),Object(v.jsx)("p",{className:"shop-by-category__count",children:"".concat(a," models")})]})}),J=(c(46),["img/banner-phones.png","img/banner-tablets.png","img/banner-accessories.png"]),V=function(e){var t=e.products,c=e.countProducts,a=Y(t,w.MaxDiscount),n=Y(t,w.Year).reverse();return Object(v.jsx)("div",{className:"home-page",children:Object(v.jsxs)("div",{className:"home-page__container",children:[Object(v.jsx)("div",{className:"home-page__carousel",children:Object(v.jsx)(E,{images:J})}),Object(v.jsx)("div",{className:"home-page__hot-price",children:Object(v.jsx)(H,{title:"Hot prices",products:a})}),Object(v.jsx)("h1",{className:"home-page__title title",children:"Shop by category"}),Object(v.jsxs)("div",{className:"home-page__categories grid",children:[Object(v.jsx)(G,{to:s.Phones,srcImg:"img/category-phones.png",title:"Mobile phone",count:c.phones}),Object(v.jsx)(G,{to:s.Tablets,srcImg:"img/category-tablets.png",title:"Tablets",count:c.tablets}),Object(v.jsx)(G,{to:s.Accessories,srcImg:"img/category-accessories.png",title:"Accessories",count:c.accessories})]}),Object(v.jsx)("div",{className:"home-page__new-models",children:Object(v.jsx)(H,{title:"Brand new models",products:n})})]})})},K=(c(47),function(){return Object(v.jsx)("div",{className:"loader"})}),U=c(8),z=c.p+"static/media/arrowDown.6559e133.svg",W=(c(48),function(e){var t=e.options,c=e.startValue,s=e.label,a=e.searchPramsKey,n=Object(b.useState)(!1),i=Object(u.a)(n,2),o=i[0],l=i[1],d=Object(r.d)(),j=Object(u.a)(d,1)[0],m=Object(b.useState)(c),h=Object(u.a)(m,2),O=h[0],_=h[1],x=Object(b.useRef)(null);Object(b.useEffect)((function(){var e=function(e){x.current&&!x.current.contains(e.target)&&l(!1)},t=function(e){"Tab"!==e.key&&"Escape"!==e.key||l(!1)};return o&&(document.addEventListener("click",e),document.addEventListener("keyup",t)),function(){document.removeEventListener("click",e),document.removeEventListener("keyup",t)}}),[o]);var f=p()("dropdowns__select",{"dropdowns__select--active":o}),g=p()("dropdowns__arrow",{"dropdowns__arrow--open":o});return Object(v.jsxs)("div",{className:"dropdowns",children:[Object(v.jsx)("p",{className:"dropdowns__label",children:s}),Object(v.jsxs)("button",{ref:x,type:"button",className:f,onClick:function(){return l(!o)},children:[O,Object(v.jsx)("img",{src:z,alt:"arrow",className:g})]}),o&&Object(v.jsx)("ul",{className:"dropdowns__list-option",children:t.map((function(e){return Object(v.jsx)("li",{"aria-hidden":"true",className:"dropdowns__option",onClick:function(){_(e),l(!1)},children:Object(v.jsx)(r.b,{to:{search:(t=e,k(j,"perPage"===a?Object(U.a)({page:"1"},a,t):Object(U.a)({},a,t)))},children:e})},e);var t}))})]})}),Q=(c(49),function(){var e=Object(m.l)().pathname.split("/").filter((function(e){return""!==e})),t="";return Object(v.jsxs)("div",{className:"breadcrumbs",children:[Object(v.jsx)(r.b,{to:"/",className:"breadcrumbs__home"}),e.map((function(c,s){var a=c.split("-").join(" ");return t+="/".concat(c.toLowerCase()),Object(v.jsx)(r.b,{to:"".concat(t),className:p()("breadcrumbs__link",{"breadcrumbs__link--disabled":s===e.length-1}),children:a},c)}))]})}),X=(c(50),function(e){var t=e.total,c=e.perPage,s=e.currentPage,a=Object(r.d)(""),n=Object(u.a)(a,1)[0],i=Math.ceil(t/c),o=Array.from({length:i},(function(e,t){return t+1}));return Object(v.jsxs)("div",{className:"pagination",children:[Object(v.jsx)(r.b,{to:{search:k(n,{page:(s-1).toString()})},className:p()("pagination__item","button-square",{"button-square--disabled":s===o[0]}),children:Object(v.jsx)("img",{src:q,alt:"arrowLeft"})}),Object(v.jsx)("ul",{className:"pagination__list",children:o.map((function(e){return Object(v.jsx)("li",{className:"pagination__item",children:Object(v.jsx)(r.b,{to:{search:k(n,{page:e.toString()})},className:p()("pagination__link",{"pagination__link--active":s===e}),children:e})},e)}))}),Object(v.jsx)(r.b,{to:{search:k(n,{page:(s+1).toString()})},className:p()("pagination__item","button-square",{"button-square--disabled":s===o[o.length-1]}),children:Object(v.jsx)("img",{src:R,alt:"arrowRigth"})})]})}),Z=(c(51),function(){var e=Object(m.n)();return Object(v.jsxs)("div",{className:"not-res",children:[Object(v.jsx)("div",{className:"not-res__title",children:"We are sorry, products not found"}),Object(v.jsx)("button",{className:"not-res__button button",type:"button",onClick:function(){return e("/")},children:"Go Home"})]})}),ee=(c(52),function(e){var t=e.products,c=t.length;return Object(v.jsx)("div",{className:"results-search",children:Object(v.jsxs)("div",{className:"results-search__container",children:[Object(v.jsx)("p",{className:"results-search__count",children:"".concat(c," results")}),0!==c?Object(v.jsx)("div",{className:"results-search__found grid",children:t.map((function(e){return Object(v.jsx)($,{product:e},e.id)}))}):Object(v.jsx)("p",{className:"results-search__not-found",children:"Nothing was found for your request"})]})})}),te=(c(53),["newest","alphabetically","price"]),ce=["4","8","16","all"],se=Object(b.memo)((function(e){var t=e.products,c=e.title,s=x(),a=s.isShowResSearch,n=s.productsToSearch,i=Object(r.d)(),o=Object(u.a)(i,1)[0],l=t.length,d=Number(o.get("page"))||1,j=o.get("sortBy")||"",b=Number(o.get("perPage"))||l,m=Math.ceil(l/b),h=b!==l&&m>1,p=d*b-b,O=d*b<=l?d*b:l,_=Y(t,j).slice(p,O);return a?Object(v.jsx)(ee,{products:n}):Object(v.jsx)("div",{className:"product-list",children:Object(v.jsxs)("div",{className:"product-list__container",children:[Object(v.jsx)("div",{className:"product-list__top-row",children:Object(v.jsx)(Q,{})}),Object(v.jsx)("h1",{className:"product-list__title title",children:c}),Object(v.jsx)("p",{className:"product-list__count",children:"".concat(l," models")}),0===l?Object(v.jsx)(Z,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"product-list__dropdowns",children:[Object(v.jsx)(W,{options:te,startValue:"Choose an option",label:"Sort by",searchPramsKey:"sortBy"}),Object(v.jsx)(W,{options:ce,startValue:"All",label:"Items on page",searchPramsKey:"perPage"})]}),Object(v.jsx)("div",{className:"product-list__content grid",children:_.map((function(e){return Object(v.jsx)($,{product:e},e.id)}))})]}),Object(v.jsx)("div",{className:"product-list__pagination",children:h&&Object(v.jsx)(X,{total:l,perPage:b,currentPage:d})})]})})})),ae=function(e){var t=e.isLoading,c=e.products;return Object(v.jsx)("div",{className:"page__phones",children:t?Object(v.jsx)("div",{className:"page__loader",children:Object(v.jsx)(K,{})}):Object(v.jsx)(se,{products:c,title:"Mobile phones"})})},ne=function(e){var t=e.isLoading,c=e.products;return Object(v.jsx)("div",{className:"page__tablet",children:t?Object(v.jsx)("div",{className:"page__loader",children:Object(v.jsx)(K,{})}):Object(v.jsx)(se,{products:c,title:"Tablets"})})},re=function(e){var t=e.isLoading,c=e.products;return Object(v.jsx)("div",{className:"page__accessories",children:t?Object(v.jsx)("div",{className:"page__loader",children:Object(v.jsx)(K,{})}):Object(v.jsx)(se,{products:c,title:"Accessories"})})},ie=c.p+"static/media/close.ab8ba6b8.svg",oe=c.p+"static/media/plus.5a5c9983.svg",le=c.p+"static/media/minus.d4055954.svg",ue=(c(54),function(e){var t=e.product,c=x(),s=c.handleToggleAddToCart,a=c.updateCount,n=Object(b.useState)(t.count),r=Object(u.a)(n,2),i=r[0],o=r[1];return Object(b.useEffect)((function(){a(i,t.itemId)}),[i,t.itemId]),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"cart-item",children:[Object(v.jsx)("button",{type:"button",className:"cart-item__remove",onClick:function(){return s(t)},children:Object(v.jsx)("img",{src:ie,alt:"close"})}),Object(v.jsx)("img",{src:"_new/".concat(t.image),alt:t.name,className:"cart-item__img"}),Object(v.jsx)("p",{className:"cart-item__name",children:t.name}),Object(v.jsxs)("div",{className:"cart-item__actions",children:[Object(v.jsx)("button",{type:"button",className:p()("cart-item__change-count-btn","button-square",{"button-square--disabled":1===i}),onClick:function(){return o(i-1)},children:Object(v.jsx)("img",{src:le,alt:"minus"})}),Object(v.jsx)("div",{className:"cart-item__count",children:i}),Object(v.jsx)("button",{type:"button",className:"cart-item__change-count-btn button-square",onClick:function(){return o(i+1)},children:Object(v.jsx)("img",{src:oe,alt:"plus"})})]}),Object(v.jsxs)("p",{className:"cart-item__total-price-product",children:["$",t.price]})]})})}),de=(c(55),function(e){var t=e.setIsOpenModal;return Object(v.jsx)("div",{className:"modal",children:Object(v.jsxs)("div",{className:"modal__content",children:[Object(v.jsxs)("p",{className:"modal__title",children:[Object(v.jsx)("span",{children:"We are sorry,"}),Object(v.jsx)("span",{children:"but this feature is not implemented yet"})]}),Object(v.jsx)("button",{type:"button",className:"modal__button button",onClick:function(){t(!1)},children:"Close"})]})})}),je=(c(56),function(){var e=Object(m.n)();return Object(v.jsx)("button",{type:"button",className:"button-back",onClick:function(){return e(-1)},children:Object(v.jsx)("img",{src:q,alt:"arrowLeft"})})}),be=(c(57),function(e){var t=e.products,c=x().inCartCount,s=Object(b.useState)(!1),a=Object(u.a)(s,2),n=a[0],r=a[1],i=t.reduce((function(e,t){return e+t.price*t.count}),0);return Object(v.jsx)("div",{className:"cart",children:Object(v.jsxs)("div",{className:"cart__container",children:[Object(v.jsxs)("div",{className:"cart__navigate",children:[" ",Object(v.jsx)(je,{})]}),Object(v.jsx)("h2",{className:"cart__title title",children:"Cart"}),0===c?Object(v.jsx)("h2",{className:"cart__not-res",children:"Your cart is empty"}):Object(v.jsxs)("div",{className:"cart__content",children:[Object(v.jsx)("div",{className:"cart__products",children:t.map((function(e){return Object(v.jsx)(ue,{product:e},e.id)}))}),Object(v.jsxs)("div",{className:"cart__total-box",children:[Object(v.jsxs)("div",{className:"cart__info",children:[Object(v.jsx)("h2",{className:"cart__total-price",children:"$".concat(i)}),Object(v.jsx)("p",{className:"cart__total-count",children:"Total for ".concat(c," items")})]}),Object(v.jsx)("button",{type:"button",className:"cart__button button",onClick:function(){return r(!0)},children:"Checkout"}),n&&Object(v.jsx)("div",{className:"cart__modal",children:Object(v.jsx)(de,{setIsOpenModal:r})})]})]})]})})}),me=(c(58),function(e){var t=e.products,c=x(),s=c.isShowResSearch,a=c.productsToSearch,n=c.favCount;return s?Object(v.jsx)(ee,{products:a}):Object(v.jsx)("div",{className:"favourites",children:Object(v.jsxs)("div",{className:"favourites__container",children:[Object(v.jsx)("div",{className:"favourites__top-row",children:Object(v.jsx)(Q,{})}),Object(v.jsx)("h1",{className:"favourites__title title",children:"Favourites"}),Object(v.jsx)("p",{className:"favourites__count",children:"".concat(n," items")}),0===n?Object(v.jsx)("h2",{className:"favourites__empty-title",children:"Favorites list is empty"}):Object(v.jsx)("div",{className:"favourites__list grid",children:t.map((function(e){return Object(v.jsx)($,{product:e},e.id)}))})]})})}),he=function(){var e=Object(l.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_phone-catalog/_new"+t);case 2:if((c=e.sent).ok){e.next=5;break}throw new Error;case 5:return e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=(c(59),function(e){var t=e.images,c=Object(b.useState)(t[0]),s=Object(u.a)(c,2),a=s[0],n=s[1];return Object(v.jsxs)("div",{className:"slider",children:[Object(v.jsx)("div",{className:"slider__col",children:t.map((function(e){return Object(v.jsx)("button",{"aria-label":"img",type:"button",className:p()("slider__button",{"slider__button--active":a===e}),style:{backgroundImage:"url(_new/".concat(e,")")},onClick:function(){return n(e)}},e)}))}),Object(v.jsx)("div",{className:"slider__main",style:{backgroundImage:"url(_new/".concat(a,")")}})]})}),Oe=(c(60),function(e){var t=e.product,c=e.pathname;return Object(v.jsx)(v.Fragment,{children:t.capacityAvailable.map((function(e){var s=t.capacity===e,a=c.replace(t.capacity.toLowerCase(),e.toLowerCase());return Object(v.jsx)(r.b,{to:{pathname:"".concat(a)},className:p()("capacity",{"capacity--active":s}),children:"".concat(Number.parseInt(e,10)," GB")},e)}))})}),_e={black:"#000",white:"#000",red:"#ff0000",silver:"#b5b5bd",gold:"#d4af37",yellow:"#ffff00",rosegold:"#b76e79",spacegray:"#717378",coral:"#ff7f50",midnightgreen:"#004953"},xe=(c(61),function(e){var t=e.product,c=e.pathname;return Object(v.jsx)(v.Fragment,{children:t.colorsAvailable.map((function(e){var s=t.color===e,a=c.replace(t.color,e),n=_e[e];return Object(v.jsx)(r.b,{to:{pathname:"".concat(a)},title:e,className:p()("colors-list",{"colors-list--active":s}),style:{background:"".concat(n)}},e)}))})}),fe=(c(62),function(e){var t=e.goods,c=Object(b.useState)(null),s=Object(u.a)(c,2),a=s[0],n=s[1],r=Object(b.useState)(!1),i=Object(u.a)(r,2),o=i[0],d=i[1],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(arguments.length>1?arguments[1]:void 0).find((function(t){return t.itemId===e}))}(null===a||void 0===a?void 0:a.id,t),p=!!a&&!!h,O=Object(m.p)().productId,_=void 0===O?"":O,f=x(),g=f.favorites,N=f.inCart,y=f.isSelectedProduct,k=!1,C=!1;p&&(k=y((null===h||void 0===h?void 0:h.itemId)||"",g),C=y((null===h||void 0===h?void 0:h.itemId)||"",N));var S=Object(m.l)().pathname,I=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,he("/products/".concat(_,".json"));case 4:t=e.sent,n(t);case 6:return e.prev=6,d(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})));return function(){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){I()}),[_]);var P,A,T=Y(t,w.Random),L={keys:[""],values:[""]},q={keys:[""],values:[""]};return a&&(P="".concat(Number.parseInt(a.ram,10)," GB"),A=a.cell.map((function(e){return" ".concat(e)})),q={keys:["screen","resolution","processor","RAM"],values:["".concat(a.screen),"".concat(a.resolution),"".concat(a.processor),"".concat(P)]},L={keys:["screen","resolution","processor","RAM","camera","zoom","cell"],values:["".concat(a.screen),"".concat(a.resolution),"".concat(a.processor),"".concat(P),"".concat(a.camera),"".concat(a.zoom),"".concat(A)]}),Object(v.jsx)(v.Fragment,{children:!o&&p&&Object(v.jsx)("div",{className:"product-details",children:Object(v.jsxs)("div",{className:"product-details__container",children:[Object(v.jsx)("div",{className:"product-details__breadcrumbs",children:Object(v.jsx)(Q,{})}),Object(v.jsx)("div",{className:"product-details__back",children:Object(v.jsx)(je,{})}),Object(v.jsx)("div",{className:"product-details__title title",children:a.name}),Object(v.jsxs)("div",{className:"product-details__content",children:[Object(v.jsxs)("div",{className:"product-details__top",children:[Object(v.jsx)("div",{className:"product-details__slider",children:Object(v.jsx)(pe,{images:a.images})}),Object(v.jsxs)("div",{className:"product-details__action",children:[Object(v.jsxs)("div",{className:"product-details__select",children:[Object(v.jsx)("p",{className:"product-details__small-text",children:"Available colors"}),Object(v.jsx)("div",{className:"product-details__select-buttons",children:Object(v.jsx)(xe,{product:a,pathname:S})})]}),Object(v.jsxs)("div",{className:"product-details__select",children:[Object(v.jsx)("p",{className:"product-details__small-text",children:"Select capacity"}),Object(v.jsx)("div",{className:"product-details__select-buttons",children:Object(v.jsx)(Oe,{product:a,pathname:S})})]}),Object(v.jsxs)("div",{className:"product-details__price-box",children:[Object(v.jsx)("span",{className:"product-details__discount",children:"$".concat(a.priceDiscount)}),Object(v.jsx)("span",{className:"product-details__regular",children:"$".concat(a.priceRegular)})]}),Object(v.jsxs)("div",{className:"product-details__actions-button",children:[Object(v.jsx)(M,{product:h,isSelected:C}),Object(v.jsx)(B,{product:h,isSelected:k})]}),Object(v.jsx)("div",{className:"product-details__characteristic",children:Object(v.jsx)(D,{charProd:q})})]})]}),Object(v.jsxs)("div",{className:"product-details__botom",children:[Object(v.jsxs)("div",{className:"product-details__description",children:[Object(v.jsx)("h2",{className:"product-details__subtitle",children:"About"}),Object(v.jsx)("div",{className:"product-details__info",children:a.description.map((function(e){return Object(v.jsxs)("div",{className:"product-details__info-box",children:[Object(v.jsx)("h3",{className:"product-details__info-title",children:e.title}),Object(v.jsx)("p",{className:"product-details__info-text",children:e.text})]},e.title)}))})]}),Object(v.jsxs)("div",{className:"product-details__tech-specs",children:[Object(v.jsx)("h2",{className:"product-details__subtitle ",children:"Tech specs"}),Object(v.jsx)("div",{className:"product-details__characteristic",children:Object(v.jsx)(D,{charProd:L})})]})]})]}),Object(v.jsx)(H,{title:"You may also like",products:T})]})})})}),ve=function(e,t){var c=Object(b.useState)((function(){try{var c=localStorage.getItem(e);return c?JSON.parse(c):t}catch(s){return t}})),s=Object(u.a)(c,2),a=s[0],n=s[1];return[a,function(t){n(t),localStorage.setItem(e,JSON.stringify(t))}]},ge=(c(63),function(){var e=Object(m.l)().pathname,t=Object(b.useState)([]),c=Object(u.a)(t,2),a=c[0],n=c[1],d=Object(b.useState)(!1),h=Object(u.a)(d,2),p=h[0],O=h[1],x=ve("favorites",[]),f=Object(u.a)(x,2),g=f[0],N=f[1],y=g.length,k=ve("inCart",[]),w=Object(u.a)(k,2),C=w[0],S=w[1],I=C.length,A=Object(r.d)(),q=Object(u.a)(A,1)[0].get("query")||"",R=0!==q.trim().length,E=function(e,t){return!!t.find((function(t){return t.itemId===e}))},M=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,he("/products.json");case 4:t=e.sent,n(t);case 6:return e.prev=6,O(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){M()}),[]);var F=a,B=[],D=[],$={phones:F.length,tablets:B.length,accessories:D.length},H=Object(o.a)(a);switch(e){case s.Phones:H=Object(o.a)(F);break;case s.Tablets:H=[].concat(B);break;case s.Accessories:H=[].concat(D);break;case s.Favourites:H=Object(o.a)(g);break;default:H=Object(o.a)(a)}return q.trim()&&(H=H.filter((function(e){return e.name.toLowerCase().includes(q.trim().toLowerCase())}))),Object(v.jsx)(_,{value:{favorites:g,favCount:y,handleToggleLike:function(e){if(E(e.itemId,g)){var t=g.filter((function(t){return t.itemId!==e.itemId}));N(t)}else N([].concat(Object(o.a)(g),[e]))},inCart:C,inCartCount:I,handleToggleAddToCart:function(e){var t=Object(i.a)(Object(i.a)({},e),{},{count:1});if(E(t.itemId,C)){var c=C.filter((function(t){return t.itemId!==e.itemId}));S(c)}else S([].concat(Object(o.a)(C),[t]))},isSelectedProduct:E,query:q,isShowResSearch:R,productsToSearch:H,updateCount:function(e,t){var c=C.map((function(c){return c.itemId===t?Object(i.a)(Object(i.a)({},c),{},{count:e}):c}));S(c)}},children:Object(v.jsxs)("div",{className:"page",children:[Object(v.jsx)(P,{}),Object(v.jsx)("div",{className:"page__content",children:Object(v.jsxs)(m.d,{children:[Object(v.jsx)(m.b,{path:"/",element:Object(v.jsx)(V,{products:a,countProducts:$})}),Object(v.jsx)(m.b,{path:s.Home,element:Object(v.jsx)(m.a,{to:"/",replace:!0})}),Object(v.jsxs)(m.b,{path:s.Phones,children:[Object(v.jsx)(m.b,{index:!0,element:Object(v.jsx)(ae,{products:F,isLoading:p})}),Object(v.jsx)(m.b,{path:":productId",element:Object(v.jsx)(fe,{goods:a})})]}),Object(v.jsxs)(m.b,{path:s.Tablets,children:[Object(v.jsx)(m.b,{index:!0,element:Object(v.jsx)(ne,{products:B,isLoading:p})}),Object(v.jsx)(m.b,{path:":productId",element:Object(v.jsx)(fe,{goods:a})})]}),Object(v.jsxs)(m.b,{path:s.Accessories,children:[Object(v.jsx)(m.b,{index:!0,element:Object(v.jsx)(re,{products:D,isLoading:p})}),Object(v.jsx)(m.b,{path:":productId",element:Object(v.jsx)(fe,{goods:a})})]}),Object(v.jsx)(m.b,{path:s.Cart,element:Object(v.jsx)(be,{products:C})}),Object(v.jsx)(m.b,{path:s.Favourites,children:Object(v.jsx)(m.b,{index:!0,element:Object(v.jsx)(me,{products:g})})}),Object(v.jsx)(m.b,{path:"*",element:Object(v.jsx)(L,{})})]})}),Object(v.jsx)(T,{})]})})}),Ne=(c(64),function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(ge,{})})});n.a.render(Object(v.jsx)(r.a,{children:Object(v.jsx)(Ne,{})}),document.getElementById("root"))}]),[[65,1,2]]]);
//# sourceMappingURL=main.413f30b2.chunk.js.map