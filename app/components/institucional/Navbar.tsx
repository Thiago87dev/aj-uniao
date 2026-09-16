'use client';

import Button from '../geral/Button';

import { useRef, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { navegacao, oficina, whatsappHref } from '@/app/data/oficina';

export default function Navbar() {
  const [aberto, setAberto] = useState(false);
  const botao = useRef<HTMLButtonElement>(null);
  return (
    <header
      className='sticky top-0 z-50 border-b border-white/10 bg-[#0b1015] text-white'
      onKeyDown={event => {
        if (event.key === 'Escape' && aberto) {
          setAberto(false);
          botao.current?.focus();
        }
      }}
    >
      <nav
        aria-label='Navegação principal'
        className='relative mx-auto flex min-h-20 items-center justify-between gap-4 px-5 sm:px-10 lg:px-16 xl:px-40'
      >
        <a href='#inicio' aria-label={`${oficina.nome} — início`} onClick={() => setAberto(false)} className='shrink-0'>
          <span className='block text-2xl font-black uppercase tracking-tight'>
            AJ <span className='text-secondary'>União</span>
          </span>
          <span className='block text-[10px] uppercase tracking-[0.24em] text-slate-300'>Mecânica automotiva</span>
        </a>
        <div className='hidden items-center gap-5 text-sm font-semibold xl:flex'>
          {navegacao.map(item => (
            <a key={item.href} href={item.href} className='transition-colors hover:text-secondary'>
              {item.titulo}
            </a>
          ))}
          <Button
            variant='custom'
            fontSize='sm'
            uppercase={false}
            href={whatsappHref}
            className='rounded-xl bg-secondary px-4 py-3 font-bold text-primary'
          >
            Fale com a gente
          </Button>
        </div>
        <button
          ref={botao}
          type='button'
          aria-expanded={aberto}
          aria-controls='menu-mobile'
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto(!aberto)}
          className='flex size-11 items-center justify-center rounded-lg border border-white/20 xl:hidden'
        >
          {aberto ? <FaXmark aria-hidden='true' /> : <FaBars aria-hidden='true' />}
        </button>
        <div
          id='menu-mobile'
          hidden={!aberto}
          className='absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-white/10 bg-[#0b1015] px-5 py-5 shadow-xl xl:hidden'
        >
          {navegacao.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setAberto(false)}
              className='block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-white/10 hover:text-secondary'
            >
              {item.titulo}
            </a>
          ))}
          <Button
            variant='custom'
            fontSize='sm'
            uppercase={false}
            href={whatsappHref}
            onClick={() => setAberto(false)}
            className='mt-3 block rounded-xl bg-secondary px-4 py-3 text-center font-bold text-primary'
          >
            Fale com a gente
          </Button>
        </div>
      </nav>
    </header>
  );
}
