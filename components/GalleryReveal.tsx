'use client';

import { useEffect } from 'react';

export default function GalleryReveal({children}:{children:React.ReactNode}){
  useEffect(()=>{
    const items=Array.from(document.querySelectorAll<HTMLElement>('.galleryPhoto'));
    if(!('IntersectionObserver' in window)){
      items.forEach(item=>item.classList.add('is-visible'));
      return;
    }
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    items.forEach(item=>observer.observe(item));
    return ()=>observer.disconnect();
  },[]);
  return <>{children}</>;
}
