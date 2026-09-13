import Button from '../geral/Button';
import { perguntas, whatsappHref } from '@/app/data/oficina';

export default function Faq() {
  return (
    <section id='faq' aria-labelledby='faq-titulo' className='grid gap-10 bg-[#f3f6fa] px-5 py-16 text-background sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16 lg:py-24 xl:px-40'>
      <div className='min-w-0'>
        <p className='section-eyebrow'>Perguntas frequentes</p>
        <h2 id='faq-titulo' className='section-heading'>Suas dúvidas.<br /><span className='text-primary'>Sem complicação.</span></h2>
        <p className='mt-6 max-w-sm leading-7 text-slate-600'>Reunimos algumas respostas para ajudar você a dar o próximo passo no cuidado com o seu carro.</p>
        <Button variant='custom' fontSize='base' uppercase={false} href={whatsappHref} className='mt-6 hidden lg:inline-block font-bold text-primary underline underline-offset-4'>Ainda tem uma dúvida? Fale com a gente.</Button>
      </div>
      <div className='min-w-0 divide-y divide-primary/15 border-y border-primary/15'>
        {perguntas.map(item => <details name='perguntas-oficina' key={item.pergunta} className='group py-1'>
          <summary className='flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-primary [&::-webkit-details-marker]:hidden'>
            {item.pergunta}<span aria-hidden='true' className='text-2xl font-normal transition-transform group-open:rotate-45'>+</span>
          </summary>
          <p className='pb-6 pr-4 leading-7 text-slate-600'>{item.resposta}</p>
        </details>)}
      </div>
      <Button variant='custom' fontSize='base' uppercase={false} href={whatsappHref} className='font-bold leading-7 text-primary underline underline-offset-4 lg:hidden'>Ainda tem uma dúvida? Fale com a gente.</Button>
    </section>
  );
}
