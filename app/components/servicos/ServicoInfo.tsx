import { IconType } from 'react-icons';

interface ServicoInfoProps {
  title: string;
  text: string;
  icon: IconType;
}

const ServicoInfo = ({ title, text, icon: Icon }: ServicoInfoProps) => {
  return (
    <div className='flex gap-4 items-center w-full max-w-80 min-w-0'>
      <div className='flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl'>
        <Icon className='size-10 sm:size-12 text-primary' />
      </div>
      <div className='min-w-0'>
        <h3 className='text-base leading-snug font-black uppercase'>{title}</h3>
        <p className='mt-2 text-base leading-6 text-slate-700'>{text}</p>
      </div>
    </div>
  );
};
export default ServicoInfo;
