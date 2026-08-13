'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { getT, locales } from '@/lib/i18n';

export default function SiteShell({lang, children}:{lang:string, children:React.ReactNode}){
  const tr=getT(lang); const pathname=usePathname(); const [open,setOpen]=useState(false);
  const rest=pathname.split('/').slice(2).join('/');
  const nav=[['',tr.home],['about',tr.about],['career',tr.career],['achievements',tr.achievements],['media',tr.media],['gallery',tr.gallery],['contact',tr.contact]];
  return <div dir={tr.dir} className="site-shell">
    <header className="header">
      <Link href={`/${lang}`} className="brand"><span>HG</span><b>Hassan Golestaneh</b></Link>
      <nav className="desktop-nav">{nav.map(([p,l])=><Link key={p} href={`/${lang}/${p}`.replace(/\/$/,'')}>{l}</Link>)}</nav>
      <div className="actions">
        <div className="langs">{locales.map(l=><Link key={l} className={l===lang?'active':''} href={`/${l}${rest?`/${rest}`:''}`}>{l==='fa'?'فا':l.toUpperCase()}</Link>)}</div>
        <button className="menuBtn" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
      </div>
    </header>
    {open&&<div className="mobile-panel">{nav.map(([p,l])=><Link onClick={()=>setOpen(false)} key={p} href={`/${lang}/${p}`.replace(/\/$/,'')}>{l}</Link>)}</div>}
    <main>{children}</main>
    <footer className="footer"><div><strong>{tr.footer}</strong><span>© {new Date().getFullYear()}</span></div><div className="socials"><a href="https://www.instagram.com/mrsportmodel/" target="_blank" rel="noreferrer" aria-label="Hassan Golestaneh on Instagram"><Instagram size={18}/>Instagram</a><a href="https://en.wikipedia.org/wiki/Hassan_Golestaneh" target="_blank" rel="noreferrer" aria-label="Hassan Golestaneh on Wikipedia"><ExternalLink size={18}/>Wikipedia</a><a href="https://www.imdb.com/name/nm13963676/" target="_blank" rel="noreferrer" aria-label="Hassan Golestaneh on IMDb"><ExternalLink size={18}/>IMDb</a></div></footer>
  </div>
}
