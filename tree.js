export default function initTree(){

const D=[
["قوى ت والجذر التربيعي للسالب",[
["قوى ت (الباقي على 4)","§ت²=-1 ، ت³=-ت ، ت⁴=1§. اقسم الأس على 4: باقي 0⇐1 ، باقي 1⇐ت ، باقي 2⇐-1 ، باقي 3⇐-ت","§ت¹⁰⁷§","107÷4 باقي 3 ⇐ §ت³ = -ت§"],
["أس زوجي وفردي","زوجي: يقبل القسمة على 4 ⇐ §1§ وإلا ⇐ §-1§ | فردي: نطلع §ت¹§ والباقي أس زوجي","§ت⁶¹§","§= ت⁶⁰ × ت = 1 × ت = ت§"],
["الأس السالب","زوّد على الأس مضاعف لـ4 (100، 200..) يخليه موجب، وبعدين قاعدة الفكة","§ت⁻⁶²§","§-62 + 64 = 2 ⇒ ت² = -1§"],
["4 قوى ورا بعض","لو مجموعين = صفر ، لو مضروبين = -1","§ت + ت² + ت³ + ت⁴§","§= ت - 1 - ت + 1 = 0§"],
["(1±ت) بأس زوجي","§(1+ت)² = 2ت ، (1-ت)² = -2ت§ (نقسم الأس نصفين ونحلها بسرعة)","§(1-ت)¹⁰§","§= ((1-ت)²)⁵ = (-2ت)⁵ = -32ت⁵ = -32ت§"],
["الجذر التربيعي للسالب","§√-أ = ت√أ§ (السالب جوه الجذر بره الجذر ت)","§√-5 × √-3§","§= ت√5 × ت√3 = ت²√15 = -√15§"]
]],
["العدد المركب وعملياته",[
["الصورة العامة","§أ + بت§: أ جزء حقيقي ، ب جزء تخيلي. (7ت جزؤه الحقيقي صفر ، و3 جزؤه التخيلي صفر)","عيّن الجزأين في §3 + 5ت§","الحقيقي = 3 ، التخيلي = 5"],
["تساوي عددين مركبين","§س + صت = أ + بت ⇐ س = أ ، ص = ب§ ، ولو §أ + بت = 0§ يبقى §أ = 0 ، ب = 0§","§2س + صت = 6 + √-9§","§√-9 = 3ت ⇒ 2س = 6 ⇒ س = 3§ ، §ص = 3§"],
["الجمع والطرح","حقيقي مع حقيقي وتخيلي مع تخيلي","§(3+5ت) - (2-7ت)§","§= 3 + 5ت - 2 + 7ت = 1 + 12ت§"],
["الضرب","وزّع زي الجبر وبعدين §ت² = -1§","§(1+ت)(2+3ت)§","§= 2 + 3ت + 2ت + 3ت² = 2 + 5ت - 3 = -1 + 5ت§"],
["مربع المجموع","فك عادي §(أ+ب)² = أ² + 2أب + ب²§","§(2+ت)²§","§= 4 + 4ت + ت² = 3 + 4ت§"],
["المرافق","مرافق §أ+بت§ هو §أ-بت§ (غيّر إشارة التخيلي فقط) ، وحاصل ضربهما §أ² + ب²§","مرافق §7+2ت§ وحاصل ضربهما","المرافق §7-2ت§ ، الضرب §= 49 + 4 = 53§"],
["المعكوس الجمعي","اعكس كل الإشارات (الحقيقي والتخيلي)","المعكوس الجمعي لـ §2+3ت§","§-2 - 3ت§"],
["القسمة","اضرب البسط والمقام في مرافق المقام","§(3-ت)/(2-ت)§","§= (3-ت)(2+ت)/(4+1) = (7+ت)/5 = 7/5 + (1/5)ت§"],
["قسمة عدد حقيقي","نفس الفكرة: مرافق المقام فوق وتحت","§26/(3-2ت)§","§= 26(3+2ت)/(9+4) = 2(3+2ت) = 6 + 4ت§"]
]],
["حل المعادلات في ك",[
["معادلة س² + أ = 0","§س² = -أ§ ثم جذر الطرفين §±§ (م.ح في ك مش في ح)","§س² + 36 = 0§","§س² = -36 ⇒ س = ±6ت§ ⇒ م.ح = §{6ت , -6ت}§"],
["القانون العام","§س = (-ب ± √(ب²-4أج)) / 2أ§","§س² + 3س + 4 = 0§","§(-3 ± √(9-16))/2 = (-3 ± ت√7)/2§"]
]],
["نوع الجذرين (المميز)",[
["المميز = ب² - 4أج","> 0: حقيقيان مختلفان | = 0: حقيقيان متساويان | < 0: مركبان غير حقيقيين","§س² - 3س + 1 = 0§","§المميز = 9 - 4 = 5 > 0§ ⇒ حقيقيان مختلفان"],
["المميز = صفر","جذران متساويان ⇒ ساوِ المميز بالصفر","جذرا §س² - 4س + ك = 0§ متساويان ، ك ؟","§16 - 4ك = 0 ⇒ ك = 4§"],
["جذران نسبيان","أ ، ب ، ج نسبية والمميز مربع كامل ⇒ حقيقيان نسبيان","بيّن أن جذري §س² - 8س + 15 = 0§ نسبيان","§المميز = 64 - 60 = 4§ (مربع كامل) ⇒ نسبيان"],
["مركبان غير حقيقيين","المميز §< 0§ ⇒ حل المتباينة لـ م","§س² - (2م-1)س + م² = 0§ ليس لها جذور حقيقية","§(2م-1)² - 4م² < 0 ⇒ -4م + 1 < 0 ⇒ م > 1/4§ ⇒ م ∈ §]1/4 , ∞[§"],
["حقيقيان / مترافقان","حقيقيان ⇐ المميز §≥ 0§ (يشمل المتساويين) | مترافقان ⇐ المميز §≤ 0§ بمعاملات نسبية","جذرا §س² - 2س + م = 0§ حقيقيان ، م ؟","§4 - 4م ≥ 0 ⇒ -4م ≥ -4 ⇒ م ≤ 1§"],
["إيجاد فترة (القسمة على سالب)","القسمة على سالب بتقلب اتجاه المتباينة","جذرا §2س² - 4س + ك = 0§ مركبان غير حقيقيين","§16 - 8ك < 0 ⇒ -8ك < -16 ⇒ ك > 2§ ⇒ ك ∈ §]2 , ∞[§"]
]],
["إشارة الجذرين والمنحنى",[
["مختلفان في الإشارة","§أ × ج < 0§ (المنحنى يقطع س موجب وسالب). خليك فاكر: §- × + = -§","جذرا §3س² - س + (أ-4) = 0§ مختلفان في الإشارة","§3(أ-4) < 0 ⇒ أ - 4 < 0 ⇒ أ < 4§"],
["متشابهان في الإشارة","§أ × ج > 0§ (موجبان معاً أو سالبان معاً)","جذرا §(ك-3)س² + 2س - 5 = 0§ متشابهان","§(ك-3)(-5) > 0 ⇒ ك - 3 < 0 ⇒ ك < 3§"],
["جذران تخيليان","§س² + ج = 0§ جذراها تخيليان لما §ج > 0§ (مفيش حد فيه س)","جذرا §س² + م - 2 = 0§ تخيليان","§م - 2 > 0 ⇒ م > 2§ (مثل ت ، 2ت ، -2ت)"],
["رأس المنحنى","نقطة تقاطع الصادات §(0 , ج)§ ، ورأس المنحنى §س = -ب/2أ§: على يمين محور الصادات ⇒ ب عكس أ | على يسار ⇒ ب مثل أ","منحنى §أ > 0§ ورأسه يمين محور الصادات ، إشارة ب ؟","§-ب/2أ > 0 وأ > 0 ⇒ ب < 0§"]
]],
["العلاقة بين الجذرين والمعاملات",[
["المجموع والضرب","§ل + م = -ب/أ§ ، §ل × م = ج/أ§","§2س² + 5س - 12 = 0§ المجموع والضرب","§المجموع = -5/2§ ، §الضرب = -12/2 = -6§"],
["مجموع الجذرين معلوم","طبّق §-ب/أ§ وساويها بالمعطى","مجموع جذري §4س² + بس - 5 = 0§ هو §-3/2§ ، ب ؟","§-ب/4 = -3/2 ⇒ ب = 6§"],
["حاصل الضرب معلوم","طبّق §ج/أ§ وساويها بالمعطى","حاصل ضرب جذري §2س² + 3س + ك = 0§ هو §5§","§ك/2 = 5 ⇒ ك = 10§"],
["أحد الجذرين معلوم","افرض الجذر الآخر §م§ وطبّق الضرب ثم المجموع","§س = 2§ أحد جذري §2س² + كس - 6 = 0§ ، الجذر الآخر و ك","الضرب: §2م = -6/2 = -3 ⇒ م = -3/2§ ، المجموع: §2 - 3/2 = 1/2 = -ك/2 ⇒ ك = -1§"],
["معكوس جمعي ⇒ ب = 0","لو أحد الجذرين = المعكوس الجمعي للآخر ⇒ §ب = 0§ (معامل س = صفر)","جذرا §2س² + (ك-3)س - 8 = 0§ أحدهما معكوس جمعي للآخر","§ب = 0 ⇒ ك - 3 = 0 ⇒ ك = 3§"],
["معكوس ضربي ⇒ أ = ج","لو أحد الجذرين = المعكوس الضربي للآخر ⇒ §أ = ج§","§3س² - 10س + (ك-2) = 0§ أحد جذريها معكوس ضربي للآخر","§أ = ج ⇒ ك - 2 = 3 ⇒ ك = 5§"],
["الجذر المركب","معاملات حقيقية وعندها جذر §أ+بت§ ⇒ الجذر الآخر المرافق §أ-بت§","§1+ت§ أحد جذري معادلة تربيعية ، الآخر ؟","§1-ت§"]
]]
];
const f=s=>s.split('§').map((x,i)=>i%2?'<bdi dir="ltr" class="m">'+x+'</bdi>':x).join('');
const ln=s=>s.replace(/§|<br>/g,'').length;
const NS='http://www.w3.org/2000/svg',svg=document.getElementById('s'),G=document.getElementById('g'),BG=document.getElementById('bg'),sc=document.getElementById('sc'),nx=document.getElementById('nx');
const E=(t,a,p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);(p||G).appendChild(e);return e};
const sides=[1,0,0,1,1,0],RH=300,acc=[0,0],pos=[];
D.forEach((l,i)=>{const s=sides[i];pos[i]={s,a:acc[s]};acc[s]+=l[1].length*RH+160});
const H=Math.max(...acc)+700,yb=H-330;pos.forEach(p=>p.y=yb-p.a);
const mx=(x,s)=>s?1400-x:x;
function FO(x,y,w,h,html,fs,col,p){const o=E('foreignObject',{x,y,width:w,height:h},p),d=document.createElement('div');
d.setAttribute('style',`width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;text-align:center;direction:rtl;font-size:${fs}px;line-height:1.35;color:${col};overflow:hidden`);d.innerHTML=html;o.appendChild(d)}
// scene
svg.setAttribute('viewBox',`0 0 1400 ${H}`);
let sd0=7;const rnd=()=>(sd0=(sd0*16807)%2147483647)/2147483647;
E('rect',{x:-4000,y:-4000,width:9400,height:H+8000,style:'fill:var(--bgc)'},BG);
E('rect',{x:-4000,y:H-140,width:9400,height:4200,fill:'#7cb862'},BG);
for(let k=0;k<14;k++)E('circle',{cx:-500+rnd()*2400,cy:H-140,r:50+rnd()*70,fill:k%2?'#5fa352':'#6db55c'},BG);
const TK=E('g',{},BG);TK.dataset.t=1;
function updTrunk(){const mY=Math.min(H-470,...st.map(g=>g.__y)),yt=mY-130;TK.innerHTML='';
[[700,yt+20,120],[590,yt+80,85],[810,yt+80,85],[700,yt+110,95],[520,yt+150,60],[880,yt+150,60]].forEach(c=>E('circle',{cx:c[0],cy:c[1],r:c[2],fill:'#5fae4e',opacity:.8},TK));
E('path',{d:`M530 ${H-110}C610 ${H-170} 650 ${H-300} 658 ${H-430}L666 ${yt+30}Q700 ${yt-20} 734 ${yt+30}L742 ${H-430}C750 ${H-300} 790 ${H-170} 870 ${H-110}C800 ${H-90} 600 ${H-90} 530 ${H-110}Z`,fill:'url(#tk)'},TK);
[680,700,720].forEach((x,i)=>E('path',{d:`M${x} ${yt+45}C${x+14} ${(yt+H)/3} ${x-14} ${(yt+H)*2/3} ${x+(i-1)*12} ${H-130}`,fill:'none',stroke:'#3d2410','stroke-width':3,opacity:.35},TK));
['M560 '+(H-105)+'C480 '+(H-90)+' 430 '+(H-80)+' 380 '+(H-70),'M840 '+(H-105)+'C920 '+(H-90)+' 970 '+(H-80)+' 1020 '+(H-70)].forEach(d=>E('path',{d,fill:'none',stroke:'#6b4220','stroke-width':16,'stroke-linecap':'round'},TK))}
const t1=E('text',{x:700,y:H-215,'text-anchor':'middle','font-size':52,'font-weight':800,fill:'#fbeed8',stroke:'#3d2410','stroke-width':1.2},BG);t1.textContent='الأعداد';
const t2=E('text',{x:700,y:H-155,'text-anchor':'middle','font-size':52,'font-weight':800,fill:'#fbeed8',stroke:'#3d2410','stroke-width':1.2},BG);t2.textContent='المركبة';t1.dataset.t=1;t2.dataset.t=1;
const FG=E('g',{},BG);
for(let k=0;k<150;k++){const x=-300+rnd()*2000,y=H-135+rnd()*120;E('path',{d:`M${x} ${y}q${(rnd()-.5)*14} -22 ${(rnd()-.5)*20} -${26+rnd()*20}`,fill:'none',stroke:k%3?'#3f8f4a':'#5aa94e','stroke-width':4,'stroke-linecap':'round'},FG)}
for(let k=0;k<45;k++){const x=-250+rnd()*1900,y=H-125+rnd()*105,c=['#f27aa8','#ffd04a','#ffffff','#ff8a5c','#c58af2'][k%5];E('line',{x1:x,y1:y,x2:x,y2:y-34,stroke:'#3f8f4a','stroke-width':4},FG);
for(let q=0;q<5;q++){const a=q*1.2566;E('circle',{cx:x+Math.cos(a)*9,cy:y-38+Math.sin(a)*9,r:7,fill:c},FG)}E('circle',{cx:x,cy:y-38,r:5,fill:'#f5b400'},FG)}
// camera
let vb={x:0,y:0,w:1,h:1},tg=null,lastLook=null;
function setVB(){svg.setAttribute('viewBox',`${vb.x} ${vb.y} ${vb.w} ${vb.h}`)}
function step(){if(!tg)return;let d=0;for(const k of['x','y','w','h']){vb[k]+=(tg[k]-vb[k])*.14;d+=Math.abs(tg[k]-vb[k])}setVB();if(d>.5)requestAnimationFrame(step);else{vb={...tg};setVB()}}
function look(cx,cy,w,now){lastLook=[cx,cy,w];const a=sc.clientWidth/sc.clientHeight;tg={x:cx-w/2,y:cy-w/a/2,w,h:w/a};if(now)vb={...tg};requestAnimationFrame(step)}
const fit=()=>{const mY=Math.min(H-470,...st.map(g=>g.__y))-200,a=sc.clientWidth/sc.clientHeight;look(700,(mY+H)/2,Math.max(1400,(H-mY+100)*a))};
const onResize=()=>lastLook&&look(...lastLook,true);addEventListener('resize',onResize);
// steps
const S=[];D.forEach((l,i)=>{S.push([0,i]);l[1].forEach((b,j)=>{S.push([1,i,j]);S.push([2,i,j])})});
let n=0;const st=[],TP={};
const hint=()=>{const s=S[n];return !s?'🍎 الشجرة كملت':s[0]==0?'🌿 فرع الدرس':s[0]==1?'🪵 فرع القانون':'🍃 ورقة المثال'};
function ui(){nx.textContent=n<S.length?'التالي ▶ '+hint()+' ('+n+'/'+S.length+')':hint();nx.disabled=n>=S.length;}
let saved=null;const showAll=()=>{saved=null;st.forEach(q=>q.style.display='')};
function focusLast(){const s=S[n-1];if(!s)return look(700,H-250,lastLook[2]);const P=pos[s[1]];look(s[0]==0?mx(345,P.s):mx(315,P.s),s[0]==0?P.y-30:P.y-175-RH*s[2],lastLook[2])}
function add(){const s=S[n];if(!s)return;showAll();const i=s[1],P=pos[i],sd=P.s,g=E('g',{class:'pop'});let cx,cy,w;g.dataset.l=i;if(s[0])g.dataset.j=s[2];
if(s[0]==0){const y=P.y;TP[i]=y;
const pt=(x,yy)=>mx(x,sd)+' '+yy,tip=30,tr=660;
E('path',{d:`M${pt(tip,y-26)}Q${pt(300,y-82)} ${pt(tr,y-34)}L${pt(tr,y+34)}Q${pt(300,y-38)} ${pt(tip,y-2)}Z`,fill:'url(#wd)',stroke:'#4a2c12','stroke-width':2},g);
E('circle',{cx:mx(60,sd),cy:y-40,r:60,fill:'#6fbf5a',opacity:.5},g);E('circle',{cx:mx(130,sd),cy:y-90,r:50,fill:'#5aa94e',opacity:.5},g);
const d=sd?`M740 ${y}Q1100 ${y-60} 1370 ${y-14}`:`M30 ${y-14}Q300 ${y-60} 660 ${y}`;
E('path',{id:'p'+i,d,fill:'none'},g);const t=E('text',{'font-size':32,'font-weight':800,fill:'#fff6e5'},g),tp=E('textPath',{href:'#p'+i,startOffset:'50%','text-anchor':'middle'},t);tp.textContent=D[i][0];
cx=mx(345,sd);cy=y-30;w=720}
else{const j=s[2],b=D[i][1][j],yc=P.y-175-RH*j,bh=250,lx=mx(620,sd);
const sx=sd?1400-600:330,sw=270,fx=sd?1400-320:30,fw=290;
if(s[0]==1){E('line',{x1:lx,y1:TP[i],x2:lx,y2:yc,stroke:'#7a4f26','stroke-width':22,'stroke-linecap':'round'},g);TP[i]=yc;
E('line',{x1:lx,y1:yc,x2:sd?sx:sx+sw,y2:yc,stroke:'#7a4f26','stroke-width':12,'stroke-linecap':'round'},g);
E('rect',{x:sx,y:yc-bh/2,width:sw,height:bh,rx:34,fill:'url(#wd)',stroke:'#4a2c12','stroke-width':2.5},g);
E('circle',{cx:sx+sw*(sd?.12:.88),cy:yc-bh/2+22,r:6,fill:'#5a3719',opacity:.5},g);
const t=b[0]+' — '+ln(b[1]);const fs=ln(b[1])<45?26:ln(b[1])<85?23:ln(b[1])<125?20:18;
FO(sx+14,yc-bh/2+10,sw-28,bh-20,'<b style="font-size:'+(fs+2)+'px;color:#ffe29a">'+b[0]+'</b>'+f(b[1]),fs,'#fff6e5',g)}
else{const L=ln(b[2]+b[3]),fs=L<45?25:L<80?22:L<120?19:17,y0=yc-bh/2,x0=fx;
E('line',{x1:sd?fx:fx+fw,y1:yc,x2:sd?sx+sw:sx,y2:yc,stroke:'#3f8f4a','stroke-width':8,'stroke-linecap':'round'},g);
E('path',{d:`M${x0} ${yc}C${x0+fw*.2} ${y0-bh*.14} ${x0+fw*.75} ${y0-bh*.1} ${x0+fw} ${yc}C${x0+fw*.75} ${y0+bh*1.1} ${x0+fw*.2} ${y0+bh*1.14} ${x0} ${yc}Z`,fill:'url(#lf)',stroke:'#3f8f4a','stroke-width':3},g);
E('path',{d:`M${x0+8} ${yc}L${x0+fw-8} ${yc}`,stroke:'#5aa94e','stroke-width':2,opacity:.5},g);
FO(x0+fw*.13,y0+bh*.06,fw*.74,bh*.88,'<b style="font-size:'+(fs-2)+'px;color:#2d6b36">مثال بالحل:</b><b>'+f(b[2])+'</b>'+f(b[3]),fs,'#123f17',g)}
cx=mx(315,sd);cy=yc;w=640}
g.__y=s[0]==0?TP[i]-100:TP[i]-170;st.push(g);n++;updTrunk();ui();look(cx,cy,lastLook[2])}
nx.onclick=add;
document.getElementById('bk').onclick=()=>{if(n){showAll();const g=st.pop();g.remove();n--;ui();const s=S[n-1];if(s){const P=pos[s[1]];look(s[0]==0?mx(345,P.s):mx(315,P.s),s[0]==0?P.y-30:P.y-175-RH*s[2],lastLook[2])}else look(700,H-250,lastLook[2]);updTrunk()}};
document.getElementById('rs').onclick=()=>{showAll();st.forEach(g=>g.remove());st.length=0;n=0;updTrunk();ui();look(700,H-250,lastLook[2])};
document.getElementById('ft').onclick=()=>{showAll();fit()};
const sync=()=>{lastLook=[vb.x+vb.w/2,vb.y+vb.h/2,vb.w]};
function zoomAt(cx,cy,k){const r=sc.getBoundingClientRect(),s=vb.w/r.width,x=vb.x+(cx-r.left)*s,y=vb.y+(cy-r.top)*s,w=Math.min(Math.max(vb.w*k,250),6000),s2=w/r.width;vb.w=w;vb.h=w*r.height/r.width;vb.x=x-(cx-r.left)*s2;vb.y=y-(cy-r.top)*s2;setVB();sync()}
svg.style.touchAction='none';const P2=new Map();
const mid=()=>{const a=[...P2.values()];return a.length>1?[(a[0][0]+a[1][0])/2,(a[0][1]+a[1][1])/2,Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1])]:[a[0][0],a[0][1],0]};
let ts=null;
svg.addEventListener('pointerdown',e=>{svg.setPointerCapture(e.pointerId);P2.set(e.pointerId,[e.clientX,e.clientY]);tg=null;ts=P2.size==1?[e.clientX,e.clientY]:null});
function tap(e){const el=document.elementFromPoint(e.clientX,e.clientY),g=el&&el.closest&&el.closest('[data-l]'),tk=el&&el.closest&&el.closest('[data-t]');if(!g&&tk){const sv=saved;showAll();sv?look(sv[0],sv[1],sv[2]):focusLast();return}if(!g)return;const i=+g.dataset.l,P=pos[i],a=sc.clientWidth/sc.clientHeight;
if(g.dataset.j===undefined){if(!saved)saved=[...lastLook];st.forEach(q=>q.style.display=q.dataset.l==i?'':'none');const y1=TP[i]-170,y2=P.y+90,h=y2-y1;look(mx(345,P.s),(y1+y2)/2,Math.max(700,(h+160)*a))}
else{showAll();look(mx(315,P.s),P.y-175-RH*(+g.dataset.j),640)}}
svg.addEventListener('pointermove',e=>{if(!P2.has(e.pointerId))return;const o=mid();P2.set(e.pointerId,[e.clientX,e.clientY]);if(ts&&(P2.size>1||Math.hypot(e.clientX-ts[0],e.clientY-ts[1])>8))ts=null;const m=mid(),r=sc.getBoundingClientRect();
if(P2.size>1&&o[2]>0&&m[2]>0)zoomAt(m[0],m[1],o[2]/m[2]);
const s=vb.w/r.width;vb.x-=(m[0]-o[0])*s;vb.y-=(m[1]-o[1])*s;setVB();sync()});
svg.addEventListener('pointerup',e=>{const t=ts&&P2.size==1;ts=null;P2.delete(e.pointerId);if(t)tap(e)});svg.addEventListener('pointercancel',e=>{ts=null;P2.delete(e.pointerId)});
svg.addEventListener('wheel',e=>{e.preventDefault();tg=null;zoomAt(e.clientX,e.clientY,e.deltaY>0?1.15:1/1.15)},{passive:false});
updTrunk();document.getElementById('dv').onclick=()=>document.getElementById('cd').classList.add('on');
document.getElementById('cx').onclick=()=>document.getElementById('cd').classList.remove('on');
document.getElementById('cd').onclick=e=>{if(e.target.id=='cd')e.target.classList.remove('on')};
ui();look(700,H-250,700,true);
return()=>removeEventListener('resize',onResize);

}
