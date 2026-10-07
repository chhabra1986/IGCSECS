/* Figure helpers (inline SVG and HTML) */
const SV=(w,h,body)=>`<svg class="dg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" xmlns="http://www.w3.org/2000/svg" font-family="Archivo, Arial, sans-serif" font-size="13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
const TX=(x,y,t,a,ex)=>`<text x="${x}" y="${y}" text-anchor="${a||"middle"}" fill="currentColor" stroke="none"${ex?" "+ex:""}>${t}</text>`;
function ARW(x1,y1,x2,y2,w){const a=Math.atan2(y2-y1,x2-x1),s=w||8,p=(d)=>[x2-s*Math.cos(a+d),y2-s*Math.sin(a+d)];const[l,r]=[p(.45),p(-.45)];return`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><polygon points="${x2},${y2} ${l[0].toFixed(1)},${l[1].toFixed(1)} ${r[0].toFixed(1)},${r[1].toFixed(1)}" fill="currentColor"/>`}
// figure wrapper; alt = text description used for AI marking
function FIG(cap,svg,alt){const t=alt&&!alt.startsWith(cap)?cap+". "+alt:(alt||cap);return`<figure class="fig" data-alt="${String(t).replace(/"/g,"&quot;")}">${svg}<figcaption>${cap}</figcaption></figure>`}
// horizontal bar chart from divs
function HBAR(title,rows,unit,max){max=max||Math.max(...rows.map(r=>r[1]));return`<figure class="fig chart" data-alt="${title}: ${rows.map(r=>r[0]+" "+r[1]+(unit||"")).join("; ")}"><figcaption style="margin:0 0 6px">${title}</figcaption>${rows.map(r=>`<div class="bar"><span class="bl">${r[0]}</span><span class="bt"><span class="bf" style="width:${Math.max(2,r[1]/max*100).toFixed(1)}%"></span></span><span class="bv">${r[1]}${unit||""}</span></div>`).join("")}</figure>`}

function BLOCKS(items,cap,fb,alt){
  const w=Math.min(150,Math.floor(620/items.length)-20);let b="";items.forEach((t,i)=>{const x=10+i*(w+26);b+=`<rect x="${x}" y="22" width="${w}" height="46" rx="6"/>`+t.split("|").map((s,k,arr)=>TX(x+w/2,46+(k-(arr.length-1)/2)*15,s,"middle",'font-size="12"')).join("");if(i<items.length-1)b+=ARW(x+w+2,45,x+w+24,45,7)});
  const W=10+items.length*(w+26);if(fb){const xe=10+(items.length-1)*(w+26)+w/2,xs=10+w/2;b+=`<path d="M${xe},68 V96 H${xs} V72"/>`+ARW(xs,80,xs,70,7)+TX((xs+xe)/2,90,fb,"middle",'font-size="12"')}
  return FIG(cap,SV(W,fb?104:80,b),alt||cap+": "+items.map(s=>s.replace(/\|/g," ")).join(" → ")+(fb?" (feedback: "+fb+")":""));
}
function T2(rows,cap){return`<figure class="fig">${TBL(rows)}<figcaption>${cap}</figcaption></figure>`}
function TBL(rows){return`<table class="dt"><tr>${rows[0].map(c=>`<th>${c}</th>`).join("")}</tr>${rows.slice(1).map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table>`}
// line chart: xs = labels, series = [{n:name, v:[...], dash:bool}], y = {min,max,step,label}, xl = x-axis label
function LINE(cap,xs,series,y,xl,alt){
  const L=56,R=16,Tp=series.length>1?34:14,B=46,W=520,H=260+(series.length>1?20:0),pw=W-L-R,ph=H-Tp-B;const X=i=>L+(xs.length===1?pw/2:i*pw/(xs.length-1)),Y=v=>Tp+ph-(v-y.min)/(y.max-y.min)*ph;
  let b=`<line x1="${L}" y1="${Tp}" x2="${L}" y2="${Tp+ph}"/><line x1="${L}" y1="${Tp+ph}" x2="${L+pw}" y2="${Tp+ph}"/>`;
  for(let v=y.min;v<=y.max+1e-9;v+=y.step){b+=`<line x1="${L}" y1="${Y(v)}" x2="${L+pw}" y2="${Y(v)}" stroke-width=".5" stroke-dasharray="2 4"/>`+TX(L-6,Y(v)+4,+v.toFixed(3),"end",'font-size="11"')}
  const every=xs.length<=13?1:Math.ceil(xs.length/10);xs.forEach((x,i)=>{if(i%every===0||i===xs.length-1)b+=TX(X(i),Tp+ph+16,x,"middle",'font-size="11"')});
  b+=TX(L+pw/2,H-8,xl||"","middle",'font-size="12"')+TX(14,Tp+ph/2,y.label||"","middle",`font-size="12" transform="rotate(-90 14 ${Tp+ph/2})"`);
  series.forEach((s,k)=>{b+=`<polyline points="${s.v.map((v,i)=>v==null?"":X(i).toFixed(1)+","+Y(v).toFixed(1)).filter(Boolean).join(" ")}" stroke-width="2.2"${s.dash?` stroke-dasharray="${s.dash===true?"6 4":s.dash}"`:""}/>`+s.v.map((v,i)=>v==null?"":`<circle cx="${X(i).toFixed(1)}" cy="${Y(v).toFixed(1)}" r="2.6" fill="currentColor"/>`).join("")});
  if(series.length>1)series.forEach((s,k)=>{const lx=L+12+k*170;b+=`<line x1="${lx}" y1="12" x2="${lx+24}" y2="12" stroke-width="2.2"${s.dash?` stroke-dasharray="${s.dash===true?"6 4":s.dash}"`:""}/>`+TX(lx+30,16,s.n,"start",'font-size="11"')});
  return FIG(cap,SV(W,H,b),alt||`${cap}. ${series.map(s=>s.n+": "+xs.map((x,i)=>x+" = "+s.v[i]).join(", ")).join(". ")}`);
}
// vertical bar chart with optional line (e.g. climate graph): bars = [...], line = [...]
function CLIM(cap,months,rain,temp,alt){
  const L=50,R=50,Tp=14,B=40,W=520,H=250,pw=W-L-R,ph=H-Tp-B,rmax=Math.ceil(Math.max(...rain)/50)*50,tmin=Math.min(0,Math.floor(Math.min(...temp)/5)*5),tmax=Math.ceil(Math.max(...temp)/5)*5+5;
  const bw=pw/months.length;let b=`<line x1="${L}" y1="${Tp}" x2="${L}" y2="${Tp+ph}"/><line x1="${L+pw}" y1="${Tp}" x2="${L+pw}" y2="${Tp+ph}"/><line x1="${L}" y1="${Tp+ph}" x2="${L+pw}" y2="${Tp+ph}"/>`;
  rain.forEach((r,i)=>{const h=r/rmax*ph;b+=`<rect x="${(L+i*bw+3).toFixed(1)}" y="${(Tp+ph-h).toFixed(1)}" width="${(bw-6).toFixed(1)}" height="${h.toFixed(1)}" fill="currentColor" fill-opacity=".25" stroke-width="1"/>`+TX(L+i*bw+bw/2,Tp+ph+14,months[i],"middle",'font-size="11"')});
  for(let v=0;v<=rmax;v+=rmax/5)b+=TX(L-6,Tp+ph-v/rmax*ph+4,v,"end",'font-size="11"');
  const TY=t=>Tp+ph-(t-tmin)/(tmax-tmin)*ph;for(let v=tmin;v<=tmax;v+=5)b+=TX(L+pw+6,TY(v)+4,v,"start",'font-size="11"');
  b+=`<polyline points="${temp.map((t,i)=>(L+i*bw+bw/2).toFixed(1)+","+TY(t).toFixed(1)).join(" ")}" stroke-width="2.4"/>`+temp.map((t,i)=>`<circle cx="${(L+i*bw+bw/2).toFixed(1)}" cy="${TY(t).toFixed(1)}" r="3" fill="currentColor"/>`).join("");
  b+=TX(14,Tp+ph/2,"Rainfall / mm (bars)","middle",`font-size="11" transform="rotate(-90 14 ${Tp+ph/2})"`)+TX(W-10,Tp+ph/2,"Temperature / °C (line)","middle",`font-size="11" transform="rotate(90 ${W-10} ${Tp+ph/2})"`);
  return FIG(cap,SV(W,H,b),alt||`${cap}. Monthly rainfall (mm): ${months.map((m,i)=>m+" "+rain[i]).join(", ")}. Mean temperature (°C): ${months.map((m,i)=>m+" "+temp[i]).join(", ")}`);
}
// population pyramid: groups top→bottom oldest first; m/f = % of population
function PYR(cap,groups,m,f,alt){
  const W=520,rowh=16,H=groups.length*rowh+50,mid=W/2,max=Math.ceil(Math.max(...m,...f)),sc=(W/2-60)/max;let b="";
  groups.forEach((g,i)=>{const y=14+i*rowh;b+=`<rect x="${(mid-24-m[i]*sc).toFixed(1)}" y="${y}" width="${(m[i]*sc).toFixed(1)}" height="${rowh-3}" fill="currentColor" fill-opacity=".35" stroke-width=".8"/><rect x="${mid+24}" y="${y}" width="${(f[i]*sc).toFixed(1)}" height="${rowh-3}" fill="currentColor" fill-opacity=".15" stroke-width=".8"/>`+TX(mid,y+11,g,"middle",'font-size="10"')});
  const yb=14+groups.length*rowh+4;b+=`<line x1="${mid-24-max*sc}" y1="${yb}" x2="${mid-24}" y2="${yb}"/><line x1="${mid+24}" y1="${yb}" x2="${mid+24+max*sc}" y2="${yb}"/>`;
  for(let v=0;v<=max;v+=Math.max(1,Math.round(max/4))){b+=TX(mid-24-v*sc,yb+14,v,"middle",'font-size="10"')+TX(mid+24+v*sc,yb+14,v,"middle",'font-size="10"')}
  b+=TX(mid-24-max*sc/2,yb+30,"Males / % of population","middle",'font-size="11"')+TX(mid+24+max*sc/2,yb+30,"Females / % of population","middle",'font-size="11"');
  return FIG(cap,SV(W,H,b),alt||`${cap}. ${groups.map((g,i)=>`${g}: males ${m[i]}%, females ${f[i]}%`).join("; ")}`);
}
// fact file box
function FACT(cap,items){return`<figure class="fig fact"><ul>${items.map(x=>`<li>${x}</li>`).join("")}</ul><figcaption>${cap}</figcaption></figure>`}
// simple sketch map made of labelled zones: zones = [[x,y,w,h,label,shade]]
function MAP(cap,w,h,zones,extra,alt){
  let b=`<rect x="2" y="2" width="${w-4}" height="${h-4}" stroke-width="1"/>`;zones.forEach(z=>{b+=`<rect x="${z[0]}" y="${z[1]}" width="${z[2]}" height="${z[3]}" rx="10" fill="currentColor" fill-opacity="${z[5]||0.08}" stroke-width="1"/>`+z[4].split("|").map((s,k,a)=>TX(z[0]+z[2]/2,z[1]+z[3]/2+4+(k-(a.length-1)/2)*14,s,"middle",'font-size="11"')).join("")});
  b+=(extra||"")+`<path d="M${w-30},40 L${w-30},16" />`+ARW(w-30,40,w-30,14,7)+TX(w-30,52,"N","middle",'font-size="11" font-weight="700"');
  return FIG(cap,SV(w,h,b),alt||cap);
}
/* ---------- code blocks ---------- */
function escCode(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function dedent(s){s=String(s).replace(/^\n+/,"").replace(/\s+$/,"");const L=s.split("\n");const ind=Math.min(...L.filter(l=>l.trim()).map(l=>l.match(/^ */)[0].length));return L.map(l=>l.slice(ind)).join("\n")}
// pseudocode block; use <- for the assignment arrow, it is shown as ←
function C(x,numbered){let t=dedent(x).replace(/<-/g,"←");if(numbered)t=t.split("\n").map((l,i)=>String(i+1).padStart(2,"0")+"  "+l).join("\n");return`<pre class="code">${escCode(t)}</pre>`}
function I(x){return`<code class="i">${escCode(String(x).replace(/<-/g,"←"))}</code>`}
/* ---------- flowcharts (proper SVG: terminator, process, input/output, decision, arrows) ----------
   nodes: [{id, k:"t"|"p"|"io"|"d", x:"text|second line", next:id, yes:id, no:id, side:true}]
   Nodes are stacked in a main column in array order; side:true puts a node to the right of the
   node before it (used for a decision's side branch). Back edges loop round on the left,
   forward skips run down on the right. */
function FLOW(cap,nodes,alt){
  const FS=12.5,CW=7.1,LH=16,GAP=30,byId={};nodes.forEach(n=>byId[n.id]=n);
  const lines=n=>String(n.x).replace(/<-/g,"←").split("|");
  nodes.forEach(n=>{const L=lines(n),tw=Math.max(...L.map(l=>l.length))*CW;
    if(n.k==="d"){n.w=Math.max(130,tw*1.25+56);n.h=Math.max(62,L.length*LH+40)}
    else{n.w=Math.max(n.k==="t"?96:120,tw+(n.k==="io"?44:26));n.h=Math.max(34,L.length*LH+14)}});
  // rows
  let row=-1;nodes.forEach((n,i)=>{if(n.side&&i>0){n.row=nodes[i-1].row;n.col=1}else{n.row=++row;n.col=0}});
  const nrows=row+1,rowH=[];nodes.forEach(n=>{rowH[n.row]=Math.max(rowH[n.row]||0,n.h)});
  const rowY=[];let y=14;for(let r=0;r<nrows;r++){rowY[r]=y+rowH[r]/2;y+=rowH[r]+GAP}
  const H=y-GAP+14;
  const edgesOut=n=>n.k==="d"?[["Yes",n.yes],["No",n.no]]:(n.next?[["",n.next]]:[]);
  // lanes
  let backs=0,fwds=0;nodes.forEach(n=>edgesOut(n).forEach(([l,t])=>{const T=byId[t];if(!T)return;
    if(n.col===0&&T.col===0){if(T.row<n.row)n["lane_"+t]=-(++backs);else if(T.row>n.row+1)n["lane_"+t]=++fwds}}));
  const w0=Math.max(...nodes.filter(n=>n.col===0).map(n=>n.w)),w1=Math.max(0,...nodes.filter(n=>n.col===1).map(n=>n.w));
  const LANE=16,left=24+backs*LANE,x0=left+w0/2,x1=x0+w0/2+48+w1/2,rightEdge=(w1?x1+w1/2:x0+w0/2);
  const W=rightEdge+20+fwds*LANE+14;
  nodes.forEach(n=>{n.cx=n.col?x1:x0;n.cy=rowY[n.row]});
  let b="";const T=(x,y,t,ex)=>TX(x,y,escCode(t).replace(/←/g,'<tspan font-size="17" dy="1">←</tspan><tspan dy="-1"></tspan>'),"middle",`font-size="${FS}"`+(ex?" "+ex:""));
  const LBL=(x,y,t,a)=>t?TX(x,y,t,a||"start",'font-size="11.5" font-weight="700"'):"";
  // shapes
  nodes.forEach(n=>{const{cx,cy,w,h}=n,l=cx-w/2,t=cy-h/2;
    if(n.k==="t")b+=`<rect x="${l}" y="${t}" width="${w}" height="${h}" rx="${h/2}"/>`;
    else if(n.k==="p")b+=`<rect x="${l}" y="${t}" width="${w}" height="${h}"/>`;
    else if(n.k==="io"){const s=12;b+=`<path d="M${l+s},${t} H${l+w} L${l+w-s},${t+h} H${l} Z"/>`}
    else b+=`<path d="M${cx},${t} L${l+w},${cy} L${cx},${t+h} L${l},${cy} Z"/>`;
    const L=lines(n);L.forEach((s,k)=>{b+=T(cx,cy+4.5+(k-(L.length-1)/2)*LH,s,n.k==="t"?'font-weight="700"':"")});});
  // edges
  const pts=(arr)=>`<polyline points="${arr.map(p=>p.join(",")).join(" ")}" fill="none"/>`;
  const path=(arr)=>{const a=arr.slice(0,-1),z=arr[arr.length-2],e=arr[arr.length-1];return(a.length>1?pts(a):"")+ARW(z[0],z[1],e[0],e[1],7)};
  nodes.forEach(n=>{const outs=edgesOut(n);
    // which decision branch goes down: the one whose target is the next main-column row
    outs.forEach(([lab,tid])=>{const t=byId[tid];if(!t)return;
      const bot=[n.cx,n.cy+n.h/2],lft=[n.cx-n.w/2,n.cy],rgt=[n.cx+n.w/2,n.cy];
      if(n.col===0&&t.col===0&&t.row===n.row+1){ // straight down
        b+=path([bot,[t.cx,t.cy-t.h/2]])+LBL(n.cx+6,bot[1]+13,lab);
      }else if(n.col===0&&t.col===1&&t.row===n.row){ // across to side node
        b+=path([rgt,[t.cx-t.w/2,t.cy]])+LBL(rgt[0]+6,rgt[1]-6,lab);
      }else if(n.col===0&&t.col===0&&t.row<n.row){ // loop back on the left
        const X=24+(backs+n["lane_"+tid])*LANE;
        b+=path([lft,[X,lft[1]],[X,t.cy],[t.cx-t.w/2,t.cy]])+LBL((X+lft[0])/2,lft[1]-6,lab,"middle");
      }else if(n.col===0&&t.col===0){ // forward skip on the right
        const X=rightEdge+20+(n["lane_"+tid]-1)*LANE;
        b+=path([rgt,[X,rgt[1]],[X,t.cy],[t.cx+t.w/2,t.cy]])+LBL(rgt[0]+6,rgt[1]-6,lab);
      }else if(n.col===1&&t.col===0&&t.row>n.row){ // side node rejoins below
        b+=path([bot,[n.cx,t.cy],[t.cx+t.w/2,t.cy]])+LBL(n.cx+6,bot[1]+13,lab);
      }else if(n.col===1&&t.col===0){ // side node loops back up
        const top=[n.cx,n.cy-n.h/2];b+=path([top,[n.cx,t.cy],[t.cx+t.w/2,t.cy]]);
      }});});
  const desc=alt||nodes.map((n,i)=>{const nm={t:"terminator",p:"process",io:"input/output",d:"decision"}[n.k];const ix=id=>nodes.indexOf(byId[id])+1;
    const go=n.k==="d"?` (Yes → box ${ix(n.yes)}, No → box ${ix(n.no)})`:n.next?` → box ${ix(n.next)}`:"";return`Box ${i+1} [${nm}] ${String(n.x).replace(/\|/g," ").replace(/<-/g,"←")}${go}`}).join("; ");
  return FIG(cap,SV(Math.ceil(W),Math.ceil(H),b),`Flowchart: ${desc}`);
}
// keep old name working
function FC(title,nodes){return FLOW(title,nodes)}
/* ---------- logic gates ----------
   Circuit tree: "A" (input) or {g:"AND"|"OR"|"NOT"|"NAND"|"NOR"|"XOR", i:[...]} */
function LEVAL(n,env){if(typeof n==="string")return env[n];const v=n.i.map(x=>LEVAL(x,env));
  switch(n.g){case"NOT":return v[0]?0:1;case"AND":return v[0]&v[1];case"OR":return v[0]|v[1];case"NAND":return(v[0]&v[1])?0:1;case"NOR":return(v[0]|v[1])?0:1;case"XOR":return v[0]^v[1]}}
function LEXPR(n){if(typeof n==="string")return n;if(n.g==="NOT")return`NOT ${typeof n.i[0]==="string"?n.i[0]:"("+LEXPR(n.i[0])+")"}`;return`(${LEXPR(n.i[0])} ${n.g} ${LEXPR(n.i[1])})`}
function LINPUTS(n,s){s=s||new Set();if(typeof n==="string")s.add(n);else n.i.forEach(x=>LINPUTS(x,s));return[...s].sort()}
function TTROWS(n,ins){ins=ins||LINPUTS(n);const rows=[];for(let k=0;k<2**ins.length;k++){const env={};ins.forEach((v,j)=>env[v]=(k>>(ins.length-1-j))&1);rows.push([...ins.map(v=>env[v]),LEVAL(n,env)])}return rows}
// truth table HTML; blank=true leaves the output column empty (for questions)
function TT(n,out,blank,ins){ins=ins||LINPUTS(n);return TBL([[...ins,out||"X"],...TTROWS(n,ins).map(r=>r.map((v,i)=>i===r.length-1&&blank?"&nbsp;":String(v)))])}
function TTSTR(n,ins){ins=ins||LINPUTS(n);return TTROWS(n,ins).map(r=>r.slice(0,-1).join("")+"→"+r[r.length-1]).join(", ")}
function GATESHAPE(g,x,y){const w=46,h=34,t=y-h/2,b=y+h/2;let d="",out=x+w,bub=false;
  if(g==="AND"||g==="NAND"){d=`<path d="M${x},${t} H${x+w-h/2} A${h/2},${h/2} 0 0 1 ${x+w-h/2},${b} H${x} Z"/>`;bub=g==="NAND"}
  else if(g==="OR"||g==="NOR"||g==="XOR"){d=`<path d="M${x},${t} Q${x+w*.55},${t} ${x+w},${y} Q${x+w*.55},${b} ${x},${b} Q${x+12},${y} ${x},${t} Z"/>`;if(g==="XOR")d+=`<path d="M${x-7},${t} Q${x+5},${y} ${x-7},${b}"/>`;bub=g==="NOR"}
  else if(g==="NOT"){d=`<path d="M${x},${t+3} L${x+w-10},${y} L${x},${b-3} Z"/>`;out=x+w-10;bub=true}
  if(bub){d+=`<circle cx="${out+4}" cy="${y}" r="4"/>`;out+=8}
  return{svg:d,out};
}
function CIRCUIT(n,cap,outName){
  const leaves=[];let maxD=0;
  (function walk(m,d){if(typeof m==="string"){leaves.push(m);return}maxD=Math.max(maxD,d+1);m.i.forEach(x=>walk(x,d+1))})(n,0);
  const step=40,colW=96,x0=34;let yi=0,svg="";
  function place(m,d){ // returns {y, xOut}
    if(typeof m==="string"){const y=26+yi*step;yi++;svg+=TX(12,y+4,m,"middle",'font-weight="700"')+`<circle cx="24" cy="${y}" r="2" fill="currentColor"/>`;return{y,xOut:24}}
    const kids=m.i.map(c=>place(c,d+1));const y=kids.reduce((s,k)=>s+k.y,0)/kids.length;
    const x=x0+(maxD-d-1)*colW+30;const G=GATESHAPE(m.g,x,y);svg+=G.svg;
    const pins=m.g==="NOT"?[y]:[y-9,y+9];
    kids.forEach((k,j)=>{const py=pins[j],mx=x-14-(j*6);svg+=`<polyline points="${k.xOut},${k.y} ${mx},${k.y} ${mx},${py} ${x+(m.g==="XOR"?-4:0)},${py}" fill="none"/>`});
    return{y,xOut:G.out};
  }
  const r=place(n,0);const W=x0+maxD*colW+80;
  svg+=`<line x1="${r.xOut}" y1="${r.y}" x2="${W-24}" y2="${r.y}"/>`+TX(W-12,r.y+4,outName||"X","middle",'font-weight="700"');
  return FIG(cap,SV(W,Math.max(60,yi*step+12),svg),`${cap}: logic circuit equivalent to ${outName||"X"} = ${LEXPR(n)}`);
}
// compact gate symbol card (for "identify the gate" questions)
function GATECARD(g,cap){const G=GATESHAPE(g,40,30);return FIG(cap,SV(150,60,`<line x1="10" y1="21" x2="40" y2="21"/>${g==="NOT"?"":`<line x1="10" y1="39" x2="40" y2="39"/>`}${G.svg}<line x1="${G.out}" y1="30" x2="140" y2="30"/>`),cap+": a "+g+" gate symbol")}
