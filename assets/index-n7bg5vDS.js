(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function c(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(a){if(a.ep)return;a.ep=!0;const s=c(a);fetch(a.href,s)}})();function M(){Math.floor(Math.random()*5)===0&&location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),window.addEventListener("DOMContentLoaded",function(){document.getElementById("nav-delay-link")?.addEventListener("click",function(i){i.preventDefault(),this.textContent="Loading...",setTimeout(()=>{this.textContent="404?"},1450),setTimeout(()=>{this.textContent="Jam Info"},2800),setTimeout(()=>{alert("Not found (probably).")},1150)}),document.getElementById("random-scroll-link")?.addEventListener("click",function(i){i.preventDefault(),window.scrollTo(0,Math.floor(Math.random()*window.innerHeight*2))}),document.getElementById("rickroll-chance-link")?.addEventListener("click",function(i){i.preventDefault(),Math.random()<.14?location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ":alert("You're safe. This time.")})})}function E(){const i=document.getElementById("fake-progress-bar"),o=document.getElementById("fake-progress-text");let c=0;function d(){if(c<98){const a=Math.max(.2,2.5-c*.022)*(.7+Math.random()*.6);c=Math.min(c+a,98+Math.random()),i.style.width=c.toFixed(1)+"%",o.textContent=Math.floor(c)+"%"}else c=97.5+Math.random()*1.5,i.style.width=c.toFixed(1)+"%",o.textContent=Math.floor(c)+"%";setTimeout(d,700+Math.random()*900)}i&&o&&d()}function w(){const o=[],c=["#e729d7","#2e4bff","#66ccff","#bb10ac","#f6ad49","#b3c8ff","#ffc8fc","#b3ffdf"];for(let l=0;l<14;l++){const u=document.createElement("div");u.className="mouse-trail-annoy",u.style.opacity=(.18+.55*(l/14)).toFixed(2),u.style.pointerEvents="none",u.style.position="fixed",u.style.zIndex=9999,u.style.width=u.style.height=14+l*2.2+"px",u.style.borderRadius="50%";const r=c[l%c.length],m=c[(l+2)%c.length];u.style.background=`radial-gradient(circle at 60% 40%, #181828 0%, ${r} 55%, ${m} 100%)`,u.style.boxShadow=`0 0 16px 4px #181828cc, 0 0 10px 2px ${r}99, 0 0 2px 1px ${m}55`,u.style.transition="background 0.3s, box-shadow 0.3s",document.body.appendChild(u),o.push({el:u,x:0,y:0})}let d=window.innerWidth/2,a=window.innerHeight/2;window.addEventListener("mousemove",l=>{d=l.clientX,a=l.clientY});function s(){let l=d,u=a;for(let r=0;r<14;r++){const m=o[r];m.x+=(l-m.x)*(.22-r*.008),m.y+=(u-m.y)*(.22-r*.008),m.el.style.left=m.x-m.el.offsetWidth/2+"px",m.el.style.top=m.y-m.el.offsetHeight/2+"px",l=m.x,u=m.y}requestAnimationFrame(s)}s()}function T(){const i=new(window.AudioContext||window.webkitAudioContext);let o=!0;function c(){const s=document.getElementById("hover-sound");o&&(o=!1,s.currentTime=0,s.volume=.16,s.play().catch(()=>{}),setTimeout(()=>o=!0,600))}function d(){const s=document.getElementById("ping-sound");o&&(o=!1,s.currentTime=0,s.volume=.12,s.play().catch(()=>{}),setTimeout(()=>o=!0,570))}function a(){const s=i.createOscillator(),l=i.createGain();s.connect(l),l.connect(i.destination),s.frequency.value=800+Math.random()*400,l.gain.value=.05+Math.random()*.05,s.start(),s.stop(i.currentTime+.02+Math.random()*.03)}return{playAnnoySoundOnce:c,playPing:d,playNailTap:a}}function k(i,o){const c=document.getElementById("beannoyed-form"),d=document.getElementById("annoy-mode");d?.addEventListener("mouseenter",()=>{Math.random()>.5&&(d.checked=!1,d.disabled=!0,setTimeout(()=>{d.disabled=!1,d.checked=!0},1200))}),document.getElementById("name-ish")?.addEventListener("focus",r=>{r.target.select(),setTimeout(()=>r.target.blur(),370+Math.random()*220)}),document.getElementById("timezone")?.addEventListener("focus",function(r){Math.random()>.83&&(r.target.selectedIndex=Math.floor(Math.random()*r.target.options.length))}),document.getElementById("favcolor")?.addEventListener("blur",r=>{Math.random()>.85&&(r.target.value="#"+(~~(Math.random()*16777215)).toString(16).padStart(6,"f"))}),c?.addEventListener("submit",function(r){r.preventDefault(),document.body.style.filter="contrast(1.8) hue-rotate("+(Math.random()*100-50)+"deg)";let m=["Totally submitted. Not really.","Great job. (Nothing happened!)","We are not storing your data. Or are we?","Submission failed. Success!","Try again or just give up."];alert(m[Math.floor(Math.random()*m.length)]),window.scrollTo(0,0),setTimeout(()=>{document.body.style.filter=""},2700),c.reset()}),document.getElementById("shuffle-btn")?.addEventListener("click",()=>{let r=document.getElementById("chaos-ui");Array.from(r.children).sort(()=>Math.random()-.5).forEach(p=>r.appendChild(p)),i()}),document.getElementById("lofi-btn")?.addEventListener("click",()=>{Array.from(document.querySelectorAll("button,input,select")).forEach(r=>r.disabled=!0),setTimeout(()=>{Array.from(document.querySelectorAll("button,input,select")).forEach(r=>r.disabled=!1)},2e3),document.body.style.opacity=.72,setTimeout(()=>document.body.style.opacity=1,1900)});let a=document.getElementById("move-btn");a?.addEventListener("mouseenter",()=>{a.style.position="absolute",a.style.left=Math.random()*82+2+"vw",a.style.top=Math.random()*55+18+"vh",i(),setTimeout(()=>a.style.position="",900)});let s=document.getElementById("useless-slider"),l=document.getElementById("slider-label"),u=document.getElementById("slider-value");s?.addEventListener("input",function(r){setTimeout(()=>{u.textContent=r.target.value},Math.random()*800+150);let m=Math.random()*170-60;l.style.marginLeft=m+"px",setTimeout(()=>l.style.marginLeft=".8em",600)}),document.querySelectorAll("#checkout-annoy input[type=radio]").forEach(r=>{r.addEventListener("mouseenter",()=>{Math.random()>.5&&(r.checked=!1)})}),document.getElementById("pay-now-btn")?.addEventListener("click",function(r){r.preventDefault(),this.disabled=!0,setTimeout(()=>this.disabled=!1,1050),alert("Transaction declined – your exposure credit limit is exceeded."),o()})}function L(){const i=document.getElementById("marquee-annoy");setInterval(()=>{i.style.color=["#ac25aa","#4282ff","#41d752","#f6ad49","#9873fd","#bb0101"][Math.floor(Math.random()*6)],i.style.background=["#f7f7ff","#fff","#e9e9e8","#dfffef","#fffee7"][Math.floor(Math.random()*5)],Math.random()>.82&&(i.textContent=["Okay but why are you here?","Scroll for weird stuff.","BeAnnoyed. It’s the law.","Not optimal. Not sorry.","Why? Just, why?"][Math.floor(Math.random()*5)])},1300);const o=document.getElementById("footer-weird");setInterval(()=>{o.style.color=["#666","#bb10ac","#4282ff","#222","#c43a","#f3027287"][Math.floor(Math.random()*6)],Math.random()>.84?o.textContent="Thanks for using BeAnnoyed™ (why tho)":Math.random()>.5?o.textContent="This site cares about browser compatibility. (Citation needed)":o.textContent="Browsing may trigger unexplained feelings, (mostly anger/frustration according to a totally real user)."},1100)}function C(){document.querySelectorAll('input[type="text"]').forEach(o=>{setTimeout(()=>{o.setAttribute("autocorrect",["off","on"][Math.floor(Math.random()*2)])},1800+Math.random()*1e3)}),setTimeout(()=>{let o=document.getElementById("name-ish");o.style.textDecoration="underline wavy red 1.6px"},3970),document.querySelectorAll("input[type=radio]").forEach(o=>{o.addEventListener("click",function(){setTimeout(()=>{Math.random()>.7&&(o.checked=!1)},200)})}),document.querySelectorAll('input[type="checkbox"]').forEach(o=>{o.addEventListener("change",()=>{Math.random()>.6&&document.querySelectorAll('input[type="checkbox"]').forEach(d=>{d!==o&&(d.checked=!d.checked)})})}),document.querySelectorAll('input[type="text"]').forEach(o=>{o.addEventListener("keydown",c=>{if(Math.random()>.85){c.preventDefault();const d=o.value,a=o.selectionStart;o.value=d.slice(0,a)+"oops"+d.slice(a)}Math.random()>.9&&o.value.length>0&&setTimeout(()=>{const d=o.selectionStart;o.value=o.value.slice(0,d-1)+o.value.slice(d)},100)})})}const{playAnnoySoundOnce:I,playPing:A}=T();M();function x(){E(),w(),L(),k(I,A),C(),setInterval(()=>{if(Math.random()>.93){const e=["invert(1)","blur(2.5px)","invert(1) blur(2.5px)","contrast(1.7) blur(1.5px)","hue-rotate(180deg) invert(1)"],t=e[Math.floor(Math.random()*e.length)];document.body.style.filter=t,setTimeout(()=>{document.body.style.filter=""},700+Math.random()*900)}if(Math.random()>.96){const e=[.85,.9,1.1,1.15,1.2,.8],t=e[Math.floor(Math.random()*e.length)];document.body.style.transition="transform 0.3s cubic-bezier(.68,-0.55,.27,1.55)",document.body.style.transform=`scale(${t})`,setTimeout(()=>{document.body.style.transform=""},700+Math.random()*900)}},2500);const i=document.getElementById("marquee-annoy");setInterval(()=>{i.style.color=["#ac25aa","#4282ff","#41d752","#f6ad49","#9873fd","#bb0101"][Math.floor(Math.random()*6)],i.style.background=["#f7f7ff","#fff","#e9e9e8","#dfffef","#fffee7"][Math.floor(Math.random()*5)],Math.random()>.82&&(i.textContent=["Okay but why are you here?","Scroll for weird stuff.","BeAnnoyed. It’s the law.","Not optimal. Not sorry.","Why? Just, why?"][Math.floor(Math.random()*5)])},1300);const o=document.createElement("style");o.textContent="@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }",document.head.appendChild(o),document.querySelectorAll("button, .tip-annoy, label").forEach(e=>{e.addEventListener("click",t=>{if(Math.random()>.5){t.preventDefault();const n=e.cloneNode(!0);n.style.position="absolute",n.style.left=`${Math.random()*80}vw`,n.style.top=`${Math.random()*80}vh`,n.style.opacity="0.7",n.style.zIndex="1000",n.style.pointerEvents="none",document.body.appendChild(n),setTimeout(()=>n.remove(),5e3)}})}),document.querySelectorAll('input[type="text"]').forEach(e=>{e.addEventListener("keydown",t=>{if(Math.random()>.85){t.preventDefault();const n=e.value,h=e.selectionStart;e.value=n.slice(0,h)+"oops"+n.slice(h)}Math.random()>.9&&e.value.length>0&&setTimeout(()=>{const n=e.selectionStart;e.value=e.value.slice(0,n-1)+e.value.slice(n)},100)})}),document.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.addEventListener("change",()=>{Math.random()>.6&&document.querySelectorAll('input[type="checkbox"]').forEach(n=>{n!==e&&(n.checked=!n.checked)})})}),document.querySelectorAll("select").forEach(e=>{e.addEventListener("focus",()=>{Math.random()>.7&&setTimeout(()=>{e.selectedIndex=Math.floor(Math.random()*e.options.length)},500)})}),document.addEventListener("mouseover",()=>{Math.random()>.95&&(document.body.style.cursor="wait",setTimeout(()=>document.body.style.cursor="",800))}),document.querySelectorAll("a").forEach(e=>{e.addEventListener("mouseenter",()=>{Math.random()>.6&&(e.style.position="relative",e.style.left=`${(Math.random()-.5)*100}px`,e.style.top=`${(Math.random()-.5)*50}px`,setTimeout(()=>{e.style.left="",e.style.top=""},1e3))})});let a=0;window.addEventListener("scroll",()=>{if(Math.random()>.5&&a<3){a++;const e=(Math.random()-.5)*300;window.scrollBy(0,e),setTimeout(()=>a--,1500)}}),document.addEventListener("keydown",e=>{if(e.key==="Tab"){const t=document.querySelectorAll('button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])');Math.random()>.5&&t.length>0&&(e.preventDefault(),t[Math.floor(Math.random()*t.length)].focus())}}),setInterval(()=>{Math.random()>.85&&(document.body.style.filter=`brightness(${.5+Math.random()*1.5})`,setTimeout(()=>document.body.style.filter="",300+Math.random()*500))},2e3);let s=document.title;document.addEventListener("visibilitychange",()=>{document.hidden?document.title=["Hey come back!","I miss you!","Where you going?","Don't leave me!"][Math.floor(Math.random()*4)]:document.title=s});let l=0;setInterval(()=>{Math.random()>.7&&l<20&&(console.error(["TypeError: Cannot read property 'nothing' of undefined","ReferenceError: x is not defined","SyntaxError: Unexpected token in JSON at position 0","404: Resource not found","NetworkError: Failed to fetch"][Math.floor(Math.random()*5)]),l++)},3e3);const u=new(window.AudioContext||window.webkitAudioContext);function r(){const e=u.createOscillator(),t=u.createGain();e.connect(t),t.connect(u.destination),e.frequency.value=800+Math.random()*400,t.gain.value=.05+Math.random()*.05,e.start(),e.stop(u.currentTime+.02+Math.random()*.03)}setInterval(()=>{Math.random()>.8&&r()},5e3),document.addEventListener("click",e=>{if(Math.random()>.7){const t=["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff"];for(let n=0;n<15;n++){const h=document.createElement("div");h.style.cssText=`
          position: fixed;
          width: 10px;
          height: 10px;
          background: ${t[Math.floor(Math.random()*t.length)]};
          left: ${e.clientX+(Math.random()-.5)*100}px;
          top: ${e.clientY+(Math.random()-.5)*100}px;
          z-index: 9999;
          pointer-events: none;
          animation: confettiFall ${1+Math.random()}s ease-out forwards;
        `,document.body.appendChild(h),setTimeout(()=>h.remove(),2e3)}}});const m=document.createElement("style");m.textContent=`
    @keyframes confettiFall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
  `,document.head.appendChild(m);function p(){const e=["Download complete!","Update available!","Battery low!","Connection lost!","New message received!"],t=document.createElement("div");t.style.cssText=`
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
    `,t.textContent=e[Math.floor(Math.random()*e.length)],document.body.appendChild(t),setTimeout(()=>{t.style.animation="slideOut 0.3s ease-out forwards",setTimeout(()=>t.remove(),300)},3e3)}setInterval(()=>{Math.random()>.6&&p()},8e3);const g=document.createElement("style");g.textContent=`
    @keyframes slideIn { from { transform: translateX(400px); } to { transform: translateX(0); } }
    @keyframes slideOut { from { transform: translateX(0); } to { transform: translateX(400px); } }
  `,document.head.appendChild(g);const y=document.createElement("div");y.style.cssText=`
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
  `,y.innerHTML=`
    <span>This site uses cookies to be annoying. <button id="accept-cookies">Accept</button></span>
  `,document.body.appendChild(y);let b=0;document.getElementById("accept-cookies").addEventListener("click",()=>{b++,b<3?(y.style.display="none",setTimeout(()=>{y.style.display="block"},2e3)):y.remove()}),setInterval(()=>{if(Math.random()>.85){const e=document.createElement("div");e.style.cssText=`
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
      `,document.body.appendChild(e),setTimeout(()=>e.remove(),100)}},4e3),setInterval(()=>{document.querySelectorAll("h1, h2, h3, label, .tip-annoy, #footer-weird, #subtitle, button, input, select, marquee, span").forEach(t=>{if(Math.random()>.93){const n=["0.8em","1em","1.3em","2em","2.5em"],h=["Comic Sans MS, Comic Sans, cursive","Impact, fantasy","monospace","serif","Arial Black, Arial, sans-serif"];t.style.fontSize=n[Math.floor(Math.random()*n.length)],t.style.fontFamily=h[Math.floor(Math.random()*h.length)],t.style.fontStyle=Math.random()>.5?"italic":"normal",t.style.fontWeight=Math.random()>.5?"bold":"normal",setTimeout(()=>{t.style.fontSize="",t.style.fontFamily="",t.style.fontStyle="",t.style.fontWeight=""},1800+Math.random()*1200)}})},1700),setInterval(()=>{if(Math.random()>.8){const e=document.createElement("div");e.style.cssText=`
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
      `,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3+Math.random()*2e3)}},4e3),setInterval(()=>{document.querySelectorAll("button, .tip-annoy, label, #beannoyed-title, #subtitle, #footer-weird, marquee, .spacer-annoy").forEach(t=>{Math.random()>.96&&!t.hasAttribute("data-annoy-draggable")&&(t.setAttribute("draggable","true"),t.setAttribute("data-annoy-draggable","1"),t.addEventListener("dragstart",n=>{n.dataTransfer.setData("text/plain","annoy"),t.style.opacity="0.4"}),t.addEventListener("dragend",()=>{t.style.opacity=""}),t.addEventListener("drop",n=>{n.preventDefault(),t.style.position="absolute",t.style.left=`${n.clientX-t.offsetWidth/2}px`,t.style.top=`${n.clientY-t.offsetHeight/2}px`}),t.addEventListener("dragover",n=>n.preventDefault()),setTimeout(()=>{t.removeAttribute("draggable"),t.removeAttribute("data-annoy-draggable")},4e3+Math.random()*3e3))})},2200),setInterval(()=>{if(Math.random()>.93){const e=2+Math.floor(Math.random()*3);for(let t=0;t<e;t++){const n=document.createElement("div");n.textContent=["Are you sure you want to be annoyed?","This is not a virus. Probably.","Click OK to continue being annoyed.","You can never close all of us!","Pop! Pop! Pop!"][Math.floor(Math.random()*5)],n.style.cssText=`
            position: fixed;
            left: ${10+Math.random()*75}vw;
            top: ${10+Math.random()*65}vh;
            min-width: 180px;
            min-height: 60px;
            background: #fffbe9;
            color: #222;
            border: 2.5px solid #bb10ac;
            border-radius: 13px;
            box-shadow: 0 4px 18px #e729d799;
            z-index: 10010;
            font-family: monospace;
            font-size: 1.1em;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.2em 1.5em;
            cursor: pointer;
            user-select: none;
            transition: opacity 0.2s;
          `,n.addEventListener("click",()=>{n.style.opacity="0",setTimeout(()=>n.remove(),200)}),document.body.appendChild(n),setTimeout(()=>{n.parentNode&&n.remove()},3500+Math.random()*2e3)}}},4200);const f=document.createElement("input");f.type="text",f.placeholder="Type something weird...",f.id="easter-egg-box",f.style.cssText=`
      position: fixed;
      bottom: 2.5em;
      right: 2.5em;
      z-index: 10020;
      padding: 0.7em 1.2em;
      border-radius: 13px;
      border: 2px solid #bb10ac;
      background: #fffbe9;
      color: #222;
      font-size: 1.1em;
      font-family: monospace;
      box-shadow: 0 2px 12px #e729d799;
      outline: none;
      transition: box-shadow 0.2s;
    `,document.body.appendChild(f),f.addEventListener("focus",()=>{f.style.boxShadow="0 0 18px #bb10ac99"}),f.addEventListener("blur",()=>{f.style.boxShadow="0 2px 12px #e729d799"}),f.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=f.value.trim().toLowerCase();t==="oops"?(alert("Well guess you made a mistake"),setTimeout(()=>window.close(),800)):t==="easteregg"?alert("Did you really think it was going to be that easy?"):t==="github"?(alert("NOOO MY SOURCE CODEEEEE"),setTimeout(()=>{window.location.href="https://github.com/NellowTCS/be-annoyed/"},900)):t==="google"?(alert("I'm not a search engine"),setTimeout(()=>{window.open("https://google.com","_blank")},700)):t==="annoy"?(alert("You have unlocked MAXIMUM ANNOYANCE MODE!"),document.body.style.animation="shake 0.2s infinite",setTimeout(()=>{document.body.style.animation=""},2e3)):t.length>0&&alert("No easter egg for: "+t),f.value=""}});const v=document.createElement("style");v.textContent="@keyframes shake { 0% { transform: translate(0, 0); } 25% { transform: translate(-6px, 2px); } 50% { transform: translate(5px, -3px); } 75% { transform: translate(-3px, 4px); } 100% { transform: translate(0, 0); } }",document.head.appendChild(v),document.addEventListener("keydown",e=>{if(!(["Tab","F5"].includes(e.key)||e.ctrlKey||e.metaKey||e.altKey)&&Math.random()>.93){e.stopImmediatePropagation(),e.preventDefault();const t=document.createElement("div");t.style.cssText=`
          position: fixed; left: 0; top: 0; width: 100vw; height: 100vh;
          z-index: 100000; pointer-events: none; background: transparent;`,document.body.appendChild(t),setTimeout(()=>t.remove(),60)}},!0),window.addEventListener("beforeunload",e=>{if(Math.random()>.5)return e.preventDefault(),e.returnValue="",""})}window.ANNOYANCE_ALLOWED?x():window._deferredStart=x;
//# sourceMappingURL=index-n7bg5vDS.js.map
