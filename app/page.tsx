'use client';
import {useEffect,useState} from 'react';
import {ArrowDown,ArrowUpRight,Camera,Globe2,Instagram,Mail,Menu,Moon,Play,Sun,Video,X} from 'lucide-react';

const heroImages=[
'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2400&q=92',
'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2400&q=92',
'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2400&q=92',
'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2400&q=92',
'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2400&q=92'];
const services=['الإنتاج الإعلامي','التصوير والفيديو','وسائل التواصل الاجتماعي','الهوية والعلامة','الحملات الرقمية','صناعة المحتوى','الفعاليات والحملات','التجارب الرقمية'];
const projects=[
['منظور جديد','Film','https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&q=85'],
['تفاصيل تستحق التأمل','Photography','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&q=85'],
['مدينة تنبض بالحياة','Campaign','https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=85'],
['ثابت ومتحرك','Social','https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1400&q=85']];
export default function Home(){
 const [loading,setLoading]=useState(true),[slide,setSlide]=useState(0),[menu,setMenu]=useState(false),[dark,setDark]=useState(true);
 useEffect(()=>{const a=setTimeout(()=>setLoading(false),2400),b=setInterval(()=>setSlide(v=>(v+1)%5),5000);return()=>{clearTimeout(a);clearInterval(b)}},[]);
 return <main dir="rtl">
 {loading&&<div className="loader"><div className="beam"/><img src="/logo-transparent.png" alt="العصماء إعلام"/><p>نصنع الصورة. نحرك الفكرة.</p><div className="loadbar"><i/></div></div>}
 <header><a href="#home"><img className="logo" src="/logo-transparent.png" alt="العصماء إعلام"/></a><nav>{['الرئيسية','من نحن','خدماتنا','أعمالنا','معرض الوسائط','تواصل معنا'].map((n,i)=><a key={n} href={'#'+['home','about','services','work','wall','contact'][i]}>{n}</a>)}</nav><div className="actions"><button onClick={()=>setDark(!dark)}>{dark?<Sun/>:<Moon/>}</button><button><Globe2/> EN</button><a className="cta" href="#contact">ابدأ مشروعك <ArrowUpRight/></a><button className="hamb" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
 {menu&&<div className="mobile">{['الرئيسية','من نحن','خدماتنا','أعمالنا','تواصل معنا'].map(n=><a key={n} href="#contact" onClick={()=>setMenu(false)}>{n}</a>)}</div>}
 <section id="home" className="hero">{heroImages.map((im,i)=><div key={im} className={'slide '+(i===slide?'active':'')} style={{backgroundImage:`linear-gradient(90deg,rgba(1,6,16,.97),rgba(2,9,22,.7),rgba(1,6,16,.25)),url("${im}")`}}/>)}<div className="orbs"/><div className="heroContent"><span className="eyebrow">استوديو إبداعي · عجمان، الإمارات</span><h1>نمنح الأفكار<br/><em>حياةً وحركة.</em></h1><p>قصص تبقى في الذاكرة. تجارب تحرّك جمهورك. إبداع صُمم للمستقبل.</p><div className="heroButtons"><a className="glow" href="#contact">ابدأ مشروعك <ArrowUpRight/></a><a href="#work">استكشف أعمالنا <ArrowDown/></a></div></div><div className="dots">{heroImages.map((_,i)=><button key={i} className={i===slide?'on':''} onClick={()=>setSlide(i)}/>)}</div></section>
 <section className="stats"><div><b>100+</b><span>عميل وشريك</span></div><div><b>500+</b><span>مشروع ومحتوى</span></div><div><b>8+</b><span>سنوات خبرة</span></div><div><b>UAE</b><span>من عجمان إلى الإمارات</span></div></section>
 <section id="about" className="section about"><span>٠١ / الاستوديو</span><div><h2>نصنع حضوراً لا يُنسى.</h2><p>تجمع العصماء إعلام الاستراتيجية والإنتاج والخيال في مساحة إبداعية واحدة. من الفكرة الأولى حتى المشهد الأخير، نصنع محتوى يصل إلى الجمهور.</p></div></section>
 <section id="services" className="section dark"><div className="heading"><span>٠٢ / ماذا نقدم</span><h2>كل شيء يبدأ بفكرة.</h2></div><div className="cards">{services.map((s,i)=><a href="#contact" className="card" key={s}><small>0{i+1} / 08</small><div>{i%2?<Camera/>:<Video/>}</div><h3>{s}</h3><p>حلول إبداعية حديثة مصممة لتصل إلى جمهورك وتترك أثراً.</p><ArrowUpRight/></a>)}</div></section>
 <section id="work" className="section"><div className="heading"><span>٠٣ / أعمال مختارة</span><h2>أعمال تستحق المشاهدة.</h2></div><div className="projects">{projects.slice(0,3).map(p=><article key={p[0]}><div style={{backgroundImage:`url("${p[2]}")`}}/><small>{p[1]}</small><h3>{p[0]}</h3><ArrowUpRight/></article>)}</div></section>
 <section id="wall" className="section dark"><div className="heading"><span>٠٤ / معرض الوسائط</span><h2>معرض للأفكار.</h2></div><div className="wall">{projects.map(p=><article key={p[0]}><div style={{backgroundImage:`url("${p[2]}")`}}/><h3>{p[0]}</h3></article>)}</div></section>
 <section className="process section"><span>منهجنا</span><h2>من أول لقاء إلى آخر مشهد.</h2><div>{['نكتشف','نتخيل','نبدع','نطلق'].map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3><ArrowUpRight/></article>)}</div></section>
 <section id="contact" className="section contact"><div><span>٠٥ / لنتحدث</span><h2>لديك فكرة مشروع؟</h2><p>أخبرنا بما تود إنجازه، ولنحدد الخطوة التالية معاً.</p></div><form onSubmit={e=>e.preventDefault()}><input placeholder="اسمك"/><input type="email" placeholder="بريدك الإلكتروني"/><select><option>الخدمة المطلوبة</option>{services.map(s=><option key={s}>{s}</option>)}</select><textarea placeholder="أخبرنا عن مشروعك"/><button className="glow">إرسال الاستفسار <ArrowUpRight/></button></form></section>
 <footer><div><img className="footerLogo" src="/logo-transparent.png" alt="العصماء إعلام"/><p>تفكير إبداعي. أثر حقيقي.</p><p>عجمان، الإمارات العربية المتحدة</p></div><div>{['الرئيسية','من نحن','خدماتنا','أعمالنا','تواصل معنا'].map(x=><a key={x} href="#home">{x}</a>)}</div><div><a href="mailto:hello@alassmaamedia.com">hello@alassmaamedia.com</a><span>AJMAN · UAE</span></div></footer>
 </main>
}