'use client';

import { useEffect, useRef, useState } from 'react';
import { numeros, oficina } from '@/app/data/oficina';

export default function Numeros() {
  const container = useRef<HTMLDivElement>(null);
  const [progresso, setProgresso] = useState(1);
  useEffect(() => {
    const elemento = container.current;
    const movimento = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!elemento || movimento.matches || !('IntersectionObserver' in window)) return;
    let frame = 0;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      const inicio = performance.now();
      const animar = (agora: number) => {
        const tempo = Math.min((agora - inicio) / 1600, 1);
        setProgresso(1 - Math.pow(1 - tempo, 3));
        if (tempo < 1) frame = requestAnimationFrame(animar);
      };
      frame = requestAnimationFrame(animar);
    }, { threshold: 0.25 });
    const parar = () => {
      if (movimento.matches) { cancelAnimationFrame(frame); observer.disconnect(); setProgresso(1); }
    };
    observer.observe(elemento);
    movimento.addEventListener('change', parar);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); movimento.removeEventListener('change', parar); };
  }, []);
  return (
    <div ref={container} className='mt-14 rounded-2xl bg-primary p-6 sm:p-10'>
      <dl className='flex justify-around flex-col gap-8 sm:gap-0 sm:flex-row'>
        {numeros.map(item => <div key={item.titulo} className='text-center sm:text-left'>
          <dt className='text-sm text-blue-100'>{item.titulo}</dt>
          <dd className='mt-2 text-4xl font-black tabular-nums text-secondary sm:text-5xl'>
            <span aria-hidden='true'>{Math.round(item.valor * progresso).toLocaleString('pt-BR')}{item.sufixo}</span>
            <span className='sr-only'>{item.valor.toLocaleString('pt-BR')}{item.sufixo}</span>
          </dd>
        </div>)}
      </dl>
      {oficina.demonstracao && <p className='mt-6 text-xs text-blue-100'>Números ilustrativos para demonstração.</p>}
    </div>
  );
}
