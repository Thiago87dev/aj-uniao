import Image from 'next/image';
import { IconType } from 'react-icons';
import { IoIosArrowForward } from 'react-icons/io';

interface ServicoCardProps {
  title: string;
  title2: string;
  text: string;
  icon: IconType;
  img: string
}

const ServicoCard = ({ title, title2, text, icon:Icon, img }: ServicoCardProps) => {
  return (
    <div>
      <div className='group relative  border-primary border-4 w-110 h-35 rounded-2xl overflow-hidden bg-[#0b1015]'>
        <div className='absolute inset-y-0 right-0 w-[55%] group-hover:scale-110 transition-transform duration-300'>
          <Image
            alt='Diagnostico Computadorizado'
            src={img}
            fill
            className='object-center -scale-x-100 '
          />
        </div>
        
        <div className='absolute inset-0 bg-linear-to-r from-[#0b1015] via-[#0b1015]/90 to-transparent' />
        <div className='relative z-10 flex h-full items-center p-6'>
          <div className='flex items-start gap-5'>
            <div className='flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/40'>
              <Icon className='size-6 text-secondary' />
            </div>
            <div className='max-w-45'>
              <h3 className='text-sm font-semibold text-white'>
                {title} <br /> {title2}
              </h3>
              <p className='mt-3 text-xs text-foreground'>{text}</p>
              <IoIosArrowForward className='mt-3 size-4 text-secondary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicoCard;
