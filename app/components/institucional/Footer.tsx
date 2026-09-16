import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import Button from '../geral/Button';
import { navegacao, oficina } from '@/app/data/oficina';

export default function Footer() {
  return (
    <footer
      aria-labelledby='rodape-titulo'
      className='border-t border-white/10 bg-[#0b1015] px-5 pt-16 pb-6 text-white sm:px-10 lg:px-16 xl:px-40'
    >
      <div className='flex flex-col justify-between gap-6 border-b border-white/15 pb-10 lg:flex-row lg:items-center'>
        <div>
          <p className='section-eyebrow'>Vamos conversar</p>
          <h2 id='rodape-titulo' className='text-3xl font-black uppercase sm:text-4xl'>
            O próximo cuidado
            <br />
            <span className='text-secondary'>começa aqui.</span>
          </h2>
        </div>
        {oficina.whatsapp ? (
          <Button
            variant='custom'
            fontSize='base'
            uppercase={true}
            href={`https://wa.me/${oficina.whatsapp}`}
            target='_blank'
            rel='noopener noreferrer'
            className='w-fit rounded-xl bg-secondary px-6 py-3 font-black text-primary'
          >
            Conversar no WhatsApp
          </Button>
        ) : (
          <p className='max-w-xs text-sm leading-6 text-slate-400'>
            Contato de demonstração. O WhatsApp será disponibilizado em breve.
          </p>
        )}
      </div>
      <div className='grid gap-10 py-10 sm:grid-cols-2 xl:grid-cols-4'>
        <div>
          <p className='text-2xl font-black uppercase'>
            AJ <span className='text-secondary'>União</span>
          </p>
          <p className='mt-4 max-w-xs text-sm leading-6 text-slate-400'>
            Precisão no serviço. Atenção com você. Cuidado em cada quilômetro.
          </p>
          <div className='flex flex-col w-fit'>
            <Button
              href={oficina.instagram}
              variant='custom'
              fontSize='sm'
              uppercase={false}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visitar Instagram (abre em nova aba)'
              className='mt-5 inline-flex min-h-11 items-center gap-3 rounded-xl border border-white/20 px-4 py-2 text-white transition-colors hover:border-secondary hover:text-secondary'
            >
              <FaInstagram aria-hidden='true' className='size-5 text-[#E1306C]' />
              Instagram
            </Button>
            <Button
              href={oficina.facebook}
              variant='custom'
              fontSize='sm'
              uppercase={false}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visitar Instagram (abre em nova aba)'
              className='mt-5 inline-flex min-h-11 items-center gap-3 rounded-xl border border-white/20 px-4 py-2 text-white transition-colors hover:border-secondary hover:text-secondary'
            >
              <FaFacebook aria-hidden='true' className='size-5 text-[#1877F2]' />
              Facebook
            </Button>
          </div>
        </div>
        <nav aria-label='Navegação do rodapé'>
          <h3 className='mb-4 font-bold'>Explore</h3>
          <ul className='space-y-3 text-sm text-slate-300'>
            {navegacao.map(item => (
              <li key={item.href}>
                <a className='hover:text-secondary' href={item.href}>
                  {item.titulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className='mb-4 font-bold'>Onde estamos</h3>
          <address className='space-y-2 text-sm leading-6 text-slate-300 not-italic'>
            <p>
              {oficina.endereco}
              <br />
              {oficina.cidade}
            </p>
            <p>{oficina.telefone}</p>
          </address>
        </div>
        <div>
          <h3 className='mb-4 font-bold'>Horários</h3>
          {oficina.horarios.map(horario => (
            <p key={horario} className='mb-2 text-sm leading-6 text-slate-300'>
              {horario}
            </p>
          ))}
        </div>
      </div>
      <div className='flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs leading-5 text-slate-400'>
        <p>
          © {new Date().getFullYear()} {oficina.nome}. Todos os direitos reservados.
        </p>
        {oficina.demonstracao && <p>Versão demonstrativa: história, números, depoimentos e contatos são fictícios.</p>}
      </div>
    </footer>
  );
}
