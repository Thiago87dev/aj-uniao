import { FaWhatsapp } from 'react-icons/fa6';
import { oficina, whatsappHref } from '@/app/data/oficina';

export default function WhatsAppFlutuante() {
  const descricao = oficina.whatsapp ? 'Fale com a gente pelo WhatsApp' : 'WhatsApp: consulte as informações de contato';
  return (
    <a
      href={whatsappHref}
      aria-label={descricao}
      title={descricao}
      className='fixed right-4 bottom-[calc(2rem+env(safe-area-inset-bottom))] z-55 flex size-14 items-center justify-center rounded-full bg-[#128c48] text-white shadow-lg ring-1 ring-white/20 transition-colors hover:bg-[#0e713a] sm:right-10 sm:size-16'
    >
      <FaWhatsapp aria-hidden='true' className='size-8 sm:size-9' />
    </a>
  );
}
