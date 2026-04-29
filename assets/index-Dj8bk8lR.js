(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))m(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&m(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();Math.floor(Math.random()*5)===0&&location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");window.addEventListener("DOMContentLoaded",function(){document.getElementById("nav-delay-link").addEventListener("click",function(e){e.preventDefault(),this.textContent="Loading...",setTimeout(()=>{this.textContent="404?"},1450),setTimeout(()=>{this.textContent="Jam Info"},2800),M(),setTimeout(()=>{alert("Not found (probably).")},1150)}),document.getElementById("random-scroll-link").addEventListener("click",function(e){e.preventDefault(),window.scrollTo(0,Math.floor(Math.random()*window.innerHeight*2)),g()}),document.getElementById("rickroll-chance-link").addEventListener("click",function(e){e.preventDefault(),Math.random()<.14?location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ":alert("You're safe. This time.")});const h=document.getElementById("fake-progress-bar"),d=document.getElementById("fake-progress-text");let i=0;function m(){if(i<98){const e=Math.max(.2,2.5-i*.022)*(.7+Math.random()*.6);i=Math.min(i+e,98+Math.random()),h.style.width=i.toFixed(1)+"%",d.textContent=Math.floor(i)+"%"}else i=97.5+Math.random()*1.5,h.style.width=i.toFixed(1)+"%",d.textContent=Math.floor(i)+"%";setTimeout(m,700+Math.random()*900)}h&&d&&m();const a=14,r=[],s=["#e729d7","#2e4bff","#66ccff","#bb10ac","#f6ad49","#b3c8ff","#ffc8fc","#b3ffdf"];for(let e=0;e<a;e++){const t=document.createElement("div");t.className="mouse-trail-annoy",t.style.opacity=(.18+.55*(e/a)).toFixed(2),t.style.pointerEvents="none",t.style.position="fixed",t.style.zIndex=9999,t.style.width=t.style.height=14+e*2.2+"px",t.style.borderRadius="50%";const o=s[e%s.length],n=s[(e+2)%s.length];t.style.background=`radial-gradient(circle at 60% 40%, #181828 0%, ${o} 55%, ${n} 100%)`,t.style.boxShadow=`0 0 16px 4px #181828cc, 0 0 10px 2px ${o}99, 0 0 2px 1px ${n}55`,t.style.transition="background 0.3s, box-shadow 0.3s",document.body.appendChild(t),r.push({el:t,x:0,y:0})}let b=window.innerWidth/2,E=window.innerHeight/2;window.addEventListener("mousemove",e=>{b=e.clientX,E=e.clientY});function w(){let e=b,t=E;for(let o=0;o<a;o++){const n=r[o];n.x+=(e-n.x)*(.22-o*.008),n.y+=(t-n.y)*(.22-o*.008),n.el.style.left=n.x-n.el.offsetWidth/2+"px",n.el.style.top=n.y-n.el.offsetHeight/2+"px",e=n.x,t=n.y}requestAnimationFrame(w)}w();const v=document.getElementById("marquee-annoy");setInterval(()=>{v.style.color=["#ac25aa","#4282ff","#41d752","#f6ad49","#9873fd","#bb0101"][Math.floor(Math.random()*6)],v.style.background=["#f7f7ff","#fff","#e9e9e8","#dfffef","#fffee7"][Math.floor(Math.random()*5)],Math.random()>.82&&(v.textContent=["Okay but why are you here?","Scroll for weird stuff.","BeAnnoyed. It’s the law.","Not optimal. Not sorry.","Why? Just, why?"][Math.floor(Math.random()*5)])},1300);const T=document.getElementById("beannoyed-form"),u=document.getElementById("annoy-mode");u.addEventListener("mouseenter",()=>{Math.random()>.5&&(u.checked=!1,u.disabled=!0,setTimeout(()=>{u.disabled=!1,u.checked=!0},1200))}),document.getElementById("name-ish").addEventListener("focus",e=>{e.target.select(),setTimeout(()=>e.target.blur(),370+Math.random()*220)}),document.getElementById("timezone").addEventListener("focus",function(e){Math.random()>.83&&(e.target.selectedIndex=Math.floor(Math.random()*e.target.options.length))}),document.getElementById("favcolor").addEventListener("blur",e=>{Math.random()>.85&&(e.target.value="#"+(~~(Math.random()*16777215)).toString(16).padStart(6,"f"))}),T.addEventListener("submit",function(e){e.preventDefault(),document.body.style.filter="contrast(1.8) hue-rotate("+(Math.random()*100-50)+"deg)";let t=["Totally submitted. Not really.","Great job. (Nothing happened!)","We are not storing your data. Or are we?","Submission failed. Success!","Try again or just give up."];alert(t[Math.floor(Math.random()*t.length)]),window.scrollTo(0,0),setTimeout(()=>{document.body.style.filter=""},2700),T.reset()}),document.getElementById("shuffle-btn").addEventListener("click",()=>{let e=document.getElementById("chaos-ui");Array.from(e.children).sort(()=>Math.random()-.5).forEach(o=>e.appendChild(o)),g()}),document.getElementById("lofi-btn").addEventListener("click",()=>{Array.from(document.querySelectorAll("button,input,select")).forEach(e=>e.disabled=!0),setTimeout(()=>{Array.from(document.querySelectorAll("button,input,select")).forEach(e=>e.disabled=!1)},2e3),document.body.style.opacity=.72,setTimeout(()=>document.body.style.opacity=1,1900)});let f=document.getElementById("move-btn");f.addEventListener("mouseenter",()=>{f.style.position="absolute",f.style.left=Math.random()*82+2+"vw",f.style.top=Math.random()*55+18+"vh",g(),setTimeout(()=>f.style.position="",900)});let A=document.getElementById("useless-slider"),k=document.getElementById("slider-label"),$=document.getElementById("slider-value");A.addEventListener("input",function(e){setTimeout(()=>{$.textContent=e.target.value},Math.random()*800+150);let t=Math.random()*170-60;k.style.marginLeft=t+"px",setTimeout(()=>k.style.marginLeft=".8em",600)}),document.querySelectorAll("#checkout-annoy input[type=radio]").forEach(e=>{e.addEventListener("mouseenter",()=>{Math.random()>.5&&(e.checked=!1)})}),document.getElementById("pay-now-btn").addEventListener("click",function(e){e.preventDefault(),this.disabled=!0,setTimeout(()=>this.disabled=!1,1050),alert("Transaction declined – your exposure credit limit is exceeded."),M()}),document.body.addEventListener("mouseover",e=>{(e.target.tagName==="BUTTON"||e.target.closest("nav"))&&g()},!0);const y=document.getElementById("footer-weird");setInterval(()=>{y.style.color=["#666","#bb10ac","#4282ff","#222","#c43a","#f3027287"][Math.floor(Math.random()*6)],Math.random()>.84?y.textContent="Thanks for using BeAnnoyed™ (why tho)":Math.random()>.5?y.textContent="This site cares about browser compatibility. (Citation needed)":y.textContent="Browsing may trigger unexplained feelings, (mostly anger/frustration according to a totally real user)."},1100),window.addEventListener("scroll",()=>{window.scrollY>180&&Math.random()>.69&&(window.scrollTo(0,window.scrollY-Math.random()*110),M())}),document.querySelectorAll('input[type="text"]').forEach(e=>{setTimeout(()=>{e.setAttribute("autocorrect",["off","on"][Math.floor(Math.random()*2)])},1800+Math.random()*1e3)}),setTimeout(()=>{let e=document.getElementById("name-ish");e.style.textDecoration="underline wavy red 1.6px"},3970),document.querySelectorAll("input[type=radio]").forEach(e=>{e.addEventListener("click",function(){setTimeout(()=>{Math.random()>.7&&(e.checked=!1)},200)})}),document.querySelectorAll("button, input, select, .tip-annoy, label, h1, h2").forEach(e=>{e.addEventListener("mouseenter",()=>{if(Math.random()>.3){const t=.7+Math.random()*.8,o=(Math.random()-.5)*25,n=(Math.random()-.5)*40,D=(Math.random()-.5)*40;e.style.transition="all 0.2s ease",e.style.transform=`scale(${t}) rotate(${o}deg)`,e.style.marginTop=`${n}px`,e.style.marginLeft=`${D}px`,setTimeout(()=>{e.style.transform="",e.style.marginTop="",e.style.marginLeft=""},600+Math.random()*1200)}})}),document.querySelectorAll("p, div, span, label, h1, h2, h3").forEach(e=>{e.id==="footer-weird"||e.classList.contains("tooltip-annoy")||setInterval(()=>{Math.random()>.7&&(e.style.marginLeft=`${(Math.random()-.5)*30}px`,e.style.transition="margin-left 0.5s ease",setTimeout(()=>e.style.marginLeft="",2e3)),Math.random()>.8&&(e.textContent=e.textContent.split("").map(t=>Math.random()>.3?t:t.toUpperCase()).join(""),setTimeout(()=>{e.textContent=e.textContent.split("").map(t=>t.toLowerCase()).join("")},1500))},3e3+Math.random()*2e3)}),setInterval(()=>{if(Math.random()>.8){const e=document.createElement("div");e.style.cssText=`
        position: fixed;
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        left: ${Math.random()*90}vw;
        top: ${Math.random()*90}vh;
        z-index: 9999;
        pointer-events: none;
      `,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3+Math.random()*2e3)}},4e3);const L=document.createElement("style");L.textContent="@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }",document.head.appendChild(L),document.querySelectorAll("button, .tip-annoy, label").forEach(e=>{e.addEventListener("click",t=>{if(Math.random()>.5){t.preventDefault();const o=e.cloneNode(!0);o.style.position="absolute",o.style.left=`${Math.random()*80}vw`,o.style.top=`${Math.random()*80}vh`,o.style.opacity="0.7",o.style.zIndex="1000",o.style.pointerEvents="none",document.body.appendChild(o),setTimeout(()=>o.remove(),5e3)}})}),document.querySelectorAll('input[type="text"]').forEach(e=>{e.addEventListener("keydown",t=>{if(Math.random()>.85){t.preventDefault();const o=e.value,n=e.selectionStart;e.value=o.slice(0,n)+"oops"+o.slice(n)}Math.random()>.9&&e.value.length>0&&setTimeout(()=>{const o=e.selectionStart;e.value=e.value.slice(0,o-1)+e.value.slice(o)},100)})}),document.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.addEventListener("change",()=>{Math.random()>.6&&document.querySelectorAll('input[type="checkbox"]').forEach(o=>{o!==e&&(o.checked=!o.checked)})})}),document.querySelectorAll("select").forEach(e=>{e.addEventListener("focus",()=>{Math.random()>.7&&setTimeout(()=>{e.selectedIndex=Math.floor(Math.random()*e.options.length)},500)})}),document.addEventListener("mouseover",e=>{Math.random()>.95&&(document.body.style.cursor="wait",setTimeout(()=>document.body.style.cursor="",800))}),document.querySelectorAll("a").forEach(e=>{e.addEventListener("mouseenter",()=>{Math.random()>.6&&(e.style.position="relative",e.style.left=`${(Math.random()-.5)*100}px`,e.style.top=`${(Math.random()-.5)*50}px`,setTimeout(()=>{e.style.left="",e.style.top=""},1e3))})});let x=0;window.addEventListener("scroll",()=>{if(Math.random()>.5&&x<3){x++;const e=(Math.random()-.5)*300;window.scrollBy(0,e),setTimeout(()=>x--,1500)}}),document.addEventListener("keydown",e=>{if(e.key==="Tab"){const t=document.querySelectorAll('button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])');Math.random()>.5&&t.length>0&&(e.preventDefault(),t[Math.floor(Math.random()*t.length)].focus())}}),setInterval(()=>{Math.random()>.85&&(document.body.style.filter=`brightness(${.5+Math.random()*1.5})`,setTimeout(()=>document.body.style.filter="",300+Math.random()*500))},2e3);let q=document.title;document.addEventListener("visibilitychange",()=>{document.hidden?document.title=["Hey come back!","I miss you!","Where you going?","Don't leave me!"][Math.floor(Math.random()*4)]:document.title=q});let C=0;setInterval(()=>{Math.random()>.7&&C<20&&(console.error(["TypeError: Cannot read property 'nothing' of undefined","ReferenceError: x is not defined","SyntaxError: Unexpected token in JSON at position 0","404: Resource not found","NetworkError: Failed to fetch"][Math.floor(Math.random()*5)]),C++)},3e3);const p=new(window.AudioContext||window.webkitAudioContext);function N(){const e=p.createOscillator(),t=p.createGain();e.connect(t),t.connect(p.destination),e.frequency.value=800+Math.random()*400,t.gain.value=.05+Math.random()*.05,e.start(),e.stop(p.currentTime+.02+Math.random()*.03)}setInterval(()=>{Math.random()>.8&&N()},5e3),document.addEventListener("click",e=>{if(Math.random()>.7){const t=["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff"];for(let o=0;o<15;o++){const n=document.createElement("div");n.style.cssText=`
          position: fixed;
          width: 10px;
          height: 10px;
          background: ${t[Math.floor(Math.random()*t.length)]};
          left: ${e.clientX+(Math.random()-.5)*100}px;
          top: ${e.clientY+(Math.random()-.5)*100}px;
          z-index: 9999;
          pointer-events: none;
          animation: confettiFall ${1+Math.random()}s ease-out forwards;
        `,document.body.appendChild(n),setTimeout(()=>n.remove(),2e3)}}});const I=document.createElement("style");I.textContent=`
    @keyframes confettiFall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
  `,document.head.appendChild(I);function O(){const e=["Download complete!","Update available!","Battery low!","Connection lost!","New message received!"],t=document.createElement("div");t.style.cssText=`
      position: fixed;
      top: 20px;
      right: 20px;
      background: #333;
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      z-index: 10000;
      font-family: sans-serif;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      animation: slideIn 0.3s ease-out;
    `,t.textContent=e[Math.floor(Math.random()*e.length)],document.body.appendChild(t),setTimeout(()=>{t.style.animation="slideOut 0.3s ease-out forwards",setTimeout(()=>t.remove(),300)},3e3)}setInterval(()=>{Math.random()>.6&&O()},8e3);const B=document.createElement("style");B.textContent=`
    @keyframes slideIn { from { transform: translateX(400px); } to { transform: translateX(0); } }
    @keyframes slideOut { from { transform: translateX(0); } to { transform: translateX(400px); } }
  `,document.head.appendChild(B);const l=document.createElement("div");l.style.cssText=`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #222;
    color: white;
    padding: 20px;
    text-align: center;
    z-index: 9998;
    font-family: sans-serif;
  `,l.innerHTML=`
    <span>This site uses cookies to be annoying. <button id="accept-cookies">Accept</button></span>
  `,document.body.appendChild(l);let S=0;document.getElementById("accept-cookies").addEventListener("click",()=>{S++,S<3?(l.style.display="none",setTimeout(()=>{l.style.display="block"},2e3)):l.remove()}),setInterval(()=>{if(Math.random()>.85){const e=document.createElement("div");e.style.cssText=`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border: 4px solid red;
        padding: 40px;
        z-index: 10001;
        font-family: monospace;
        font-size: 24px;
        text-align: center;
      `,e.innerHTML="<h1>404</h1><p>Page not found</p>",document.body.appendChild(e),setTimeout(()=>e.remove(),1500)}},1e4),setInterval(()=>{if(Math.random()>.9){const e=document.createElement("div");e.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        z-index: 9997;
        pointer-events: none;
        opacity: 0.8;
      `,document.body.appendChild(e),setTimeout(()=>e.remove(),100)}},4e3);let c=!0;function g(){const e=document.getElementById("hover-sound");c&&(c=!1,e.currentTime=0,e.volume=.16,e.play().catch(()=>{}),setTimeout(()=>c=!0,600))}function M(){const e=document.getElementById("ping-sound");c&&(c=!1,e.currentTime=0,e.volume=.12,e.play().catch(()=>{}),setTimeout(()=>c=!0,570))}});
//# sourceMappingURL=index-Dj8bk8lR.js.map
