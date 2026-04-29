(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&f(n)}).observe(document,{childList:!0,subtree:!0});function l(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(o){if(o.ep)return;o.ep=!0;const t=l(o);fetch(o.href,t)}})();function M(){Math.floor(Math.random()*5)===0&&location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),window.addEventListener("DOMContentLoaded",function(){document.getElementById("nav-delay-link")?.addEventListener("click",function(s){s.preventDefault(),this.textContent="Loading...",setTimeout(()=>{this.textContent="404?"},1450),setTimeout(()=>{this.textContent="Jam Info"},2800),x(),setTimeout(()=>{alert("Not found (probably).")},1150)}),document.getElementById("random-scroll-link")?.addEventListener("click",function(s){s.preventDefault(),window.scrollTo(0,Math.floor(Math.random()*window.innerHeight*2)),g()}),document.getElementById("rickroll-chance-link")?.addEventListener("click",function(s){s.preventDefault(),Math.random()<.14?location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ":alert("You're safe. This time.")})})}function g(){}function x(){}function w(){const s=document.getElementById("fake-progress-bar"),d=document.getElementById("fake-progress-text");let l=0;function f(){if(l<98){const o=Math.max(.2,2.5-l*.022)*(.7+Math.random()*.6);l=Math.min(l+o,98+Math.random()),s.style.width=l.toFixed(1)+"%",d.textContent=Math.floor(l)+"%"}else l=97.5+Math.random()*1.5,s.style.width=l.toFixed(1)+"%",d.textContent=Math.floor(l)+"%";setTimeout(f,700+Math.random()*900)}s&&d&&f()}function b(){const d=[],l=["#e729d7","#2e4bff","#66ccff","#bb10ac","#f6ad49","#b3c8ff","#ffc8fc","#b3ffdf"];for(let n=0;n<14;n++){const r=document.createElement("div");r.className="mouse-trail-annoy",r.style.opacity=(.18+.55*(n/14)).toFixed(2),r.style.pointerEvents="none",r.style.position="fixed",r.style.zIndex=9999,r.style.width=r.style.height=14+n*2.2+"px",r.style.borderRadius="50%";const u=l[n%l.length],c=l[(n+2)%l.length];r.style.background=`radial-gradient(circle at 60% 40%, #181828 0%, ${u} 55%, ${c} 100%)`,r.style.boxShadow=`0 0 16px 4px #181828cc, 0 0 10px 2px ${u}99, 0 0 2px 1px ${c}55`,r.style.transition="background 0.3s, box-shadow 0.3s",document.body.appendChild(r),d.push({el:r,x:0,y:0})}let f=window.innerWidth/2,o=window.innerHeight/2;window.addEventListener("mousemove",n=>{f=n.clientX,o=n.clientY});function t(){let n=f,r=o;for(let u=0;u<14;u++){const c=d[u];c.x+=(n-c.x)*(.22-u*.008),c.y+=(r-c.y)*(.22-u*.008),c.el.style.left=c.x-c.el.offsetWidth/2+"px",c.el.style.top=c.y-c.el.offsetHeight/2+"px",n=c.x,r=c.y}requestAnimationFrame(t)}t()}function E(){const s=new(window.AudioContext||window.webkitAudioContext);let d=!0;function l(){const t=document.getElementById("hover-sound");d&&(d=!1,t.currentTime=0,t.volume=.16,t.play().catch(()=>{}),setTimeout(()=>d=!0,600))}function f(){const t=document.getElementById("ping-sound");d&&(d=!1,t.currentTime=0,t.volume=.12,t.play().catch(()=>{}),setTimeout(()=>d=!0,570))}function o(){const t=s.createOscillator(),n=s.createGain();t.connect(n),n.connect(s.destination),t.frequency.value=800+Math.random()*400,n.gain.value=.05+Math.random()*.05,t.start(),t.stop(s.currentTime+.02+Math.random()*.03)}return{playAnnoySoundOnce:l,playPing:f,playNailTap:o}}const{playAnnoySoundOnce:T,playPing:k}=E();g=T;x=k;M();window.addEventListener("DOMContentLoaded",()=>{w(),b();const s=document.getElementById("marquee-annoy");setInterval(()=>{s.style.color=["#ac25aa","#4282ff","#41d752","#f6ad49","#9873fd","#bb0101"][Math.floor(Math.random()*6)],s.style.background=["#f7f7ff","#fff","#e9e9e8","#dfffef","#fffee7"][Math.floor(Math.random()*5)],Math.random()>.82&&(s.textContent=["Okay but why are you here?","Scroll for weird stuff.","BeAnnoyed. It’s the law.","Not optimal. Not sorry.","Why? Just, why?"][Math.floor(Math.random()*5)])},1300);const d=document.createElement("style");d.textContent="@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }",document.head.appendChild(d),document.querySelectorAll("button, .tip-annoy, label").forEach(e=>{e.addEventListener("click",i=>{if(Math.random()>.5){i.preventDefault();const a=e.cloneNode(!0);a.style.position="absolute",a.style.left=`${Math.random()*80}vw`,a.style.top=`${Math.random()*80}vh`,a.style.opacity="0.7",a.style.zIndex="1000",a.style.pointerEvents="none",document.body.appendChild(a),setTimeout(()=>a.remove(),5e3)}})}),document.querySelectorAll('input[type="text"]').forEach(e=>{e.addEventListener("keydown",i=>{if(Math.random()>.85){i.preventDefault();const a=e.value,h=e.selectionStart;e.value=a.slice(0,h)+"oops"+a.slice(h)}Math.random()>.9&&e.value.length>0&&setTimeout(()=>{const a=e.selectionStart;e.value=e.value.slice(0,a-1)+e.value.slice(a)},100)})}),document.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.addEventListener("change",()=>{Math.random()>.6&&document.querySelectorAll('input[type="checkbox"]').forEach(a=>{a!==e&&(a.checked=!a.checked)})})}),document.querySelectorAll("select").forEach(e=>{e.addEventListener("focus",()=>{Math.random()>.7&&setTimeout(()=>{e.selectedIndex=Math.floor(Math.random()*e.options.length)},500)})}),document.addEventListener("mouseover",()=>{Math.random()>.95&&(document.body.style.cursor="wait",setTimeout(()=>document.body.style.cursor="",800))}),document.querySelectorAll("a").forEach(e=>{e.addEventListener("mouseenter",()=>{Math.random()>.6&&(e.style.position="relative",e.style.left=`${(Math.random()-.5)*100}px`,e.style.top=`${(Math.random()-.5)*50}px`,setTimeout(()=>{e.style.left="",e.style.top=""},1e3))})});let o=0;window.addEventListener("scroll",()=>{if(Math.random()>.5&&o<3){o++;const e=(Math.random()-.5)*300;window.scrollBy(0,e),setTimeout(()=>o--,1500)}}),document.addEventListener("keydown",e=>{if(e.key==="Tab"){const i=document.querySelectorAll('button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])');Math.random()>.5&&i.length>0&&(e.preventDefault(),i[Math.floor(Math.random()*i.length)].focus())}}),setInterval(()=>{Math.random()>.85&&(document.body.style.filter=`brightness(${.5+Math.random()*1.5})`,setTimeout(()=>document.body.style.filter="",300+Math.random()*500))},2e3);let t=document.title;document.addEventListener("visibilitychange",()=>{document.hidden?document.title=["Hey come back!","I miss you!","Where you going?","Don't leave me!"][Math.floor(Math.random()*4)]:document.title=t});let n=0;setInterval(()=>{Math.random()>.7&&n<20&&(console.error(["TypeError: Cannot read property 'nothing' of undefined","ReferenceError: x is not defined","SyntaxError: Unexpected token in JSON at position 0","404: Resource not found","NetworkError: Failed to fetch"][Math.floor(Math.random()*5)]),n++)},3e3);const r=new(window.AudioContext||window.webkitAudioContext);function u(){const e=r.createOscillator(),i=r.createGain();e.connect(i),i.connect(r.destination),e.frequency.value=800+Math.random()*400,i.gain.value=.05+Math.random()*.05,e.start(),e.stop(r.currentTime+.02+Math.random()*.03)}setInterval(()=>{Math.random()>.8&&u()},5e3),document.addEventListener("click",e=>{if(Math.random()>.7){const i=["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff"];for(let a=0;a<15;a++){const h=document.createElement("div");h.style.cssText=`
          position: fixed;
          width: 10px;
          height: 10px;
          background: ${i[Math.floor(Math.random()*i.length)]};
          left: ${e.clientX+(Math.random()-.5)*100}px;
          top: ${e.clientY+(Math.random()-.5)*100}px;
          z-index: 9999;
          pointer-events: none;
          animation: confettiFall ${1+Math.random()}s ease-out forwards;
        `,document.body.appendChild(h),setTimeout(()=>h.remove(),2e3)}}});const c=document.createElement("style");c.textContent=`
    @keyframes confettiFall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
  `,document.head.appendChild(c);function v(){const e=["Download complete!","Update available!","Battery low!","Connection lost!","New message received!"],i=document.createElement("div");i.style.cssText=`
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
    `,i.textContent=e[Math.floor(Math.random()*e.length)],document.body.appendChild(i),setTimeout(()=>{i.style.animation="slideOut 0.3s ease-out forwards",setTimeout(()=>i.remove(),300)},3e3)}setInterval(()=>{Math.random()>.6&&v()},8e3);const p=document.createElement("style");p.textContent=`
    @keyframes slideIn { from { transform: translateX(400px); } to { transform: translateX(0); } }
    @keyframes slideOut { from { transform: translateX(0); } to { transform: translateX(400px); } }
  `,document.head.appendChild(p);const m=document.createElement("div");m.style.cssText=`
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
  `,m.innerHTML=`
    <span>This site uses cookies to be annoying. <button id="accept-cookies">Accept</button></span>
  `,document.body.appendChild(m);let y=0;document.getElementById("accept-cookies").addEventListener("click",()=>{y++,y<3?(m.style.display="none",setTimeout(()=>{m.style.display="block"},2e3)):m.remove()}),setInterval(()=>{if(Math.random()>.85){const e=document.createElement("div");e.style.cssText=`
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
      `,document.body.appendChild(e),setTimeout(()=>e.remove(),100)}},4e3)});
//# sourceMappingURL=index-SsYP54gI.js.map
