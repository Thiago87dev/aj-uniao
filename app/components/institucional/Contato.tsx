import { oficina } from '@/app/data/oficina';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function Contato() {
  const consulta = encodeURIComponent(oficina.mapaConsulta);
  return (
    <section id='contato' aria-labelledby='contato-titulo' className='bg-[#141c26] px-5 py-16 text-white sm:px-10 lg:px-16 lg:py-24 xl:px-40'>
      <p className='section-eyebrow'>Contato e localização</p>
      <h2 id='contato-titulo' className='section-heading'>Estamos por perto.<br /><span className='text-secondary'>Conte com a gente.</span></h2>
      <div className='mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]'>
        <div className='min-w-0 space-y-7'>
          <div><h3 className='font-bold text-secondary'>Venha nos visitar</h3><address className='mt-2 text-sm leading-6 text-slate-300 not-italic'>{oficina.mapaProvisorio ? 'Centro — Joinville, SC' : <>{oficina.endereco}<br />{oficina.cidade}</>}</address>{oficina.mapaProvisorio && <p className='mt-2 text-xs leading-5 text-slate-400'>Localização provisória para demonstração. Não corresponde ao endereço da oficina.</p>}</div>
          <div><h3 className='font-bold text-secondary'>Horário de atendimento</h3>{oficina.horarios.map(horario => <p key={horario} className='mt-2 text-sm text-slate-300'>{horario}</p>)}</div>
          <div><h3 className='font-bold text-secondary'>Fale com a equipe</h3><p className='mt-2 text-sm text-slate-300'>{oficina.telefone}</p>{oficina.whatsapp ? <a href={`https://wa.me/${oficina.whatsapp}`} target='_blank' rel='noopener noreferrer' className='mt-4 inline-block rounded-xl bg-secondary px-5 py-3 text-sm font-black text-primary'>Conversar no WhatsApp</a> : <p className='mt-2 text-xs text-slate-400'>Telefone ilustrativo. Contato real em breve.</p>}</div>
        </div>
        <div className='min-w-0 overflow-hidden rounded-xl border border-white/15 bg-[#0b1015]'>
          <iframe title={`Mapa: ${oficina.mapaConsulta}`} src={`https://www.google.com/maps?q=${consulta}&output=embed`} loading='lazy' referrerPolicy='no-referrer-when-downgrade' allowFullScreen className='h-80 w-full border-0 sm:h-96' />
          <a href={`https://www.google.com/maps/search/?api=1&query=${consulta}`} target='_blank' rel='noopener noreferrer' className='flex items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-secondary'>Abrir no Google Maps<FaArrowUpRightFromSquare aria-hidden='true' className='shrink-0' /></a>
        </div>
      </div>
    </section>
  );
}
