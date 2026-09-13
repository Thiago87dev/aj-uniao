interface ButtonProps {
    title: string
}

const Button = ({title}: ButtonProps) => {
  return (
    <button className='bg-secondary text-primary w-60 max-w-full rounded-xl px-4 py-2 font-black uppercase cursor-pointer hover:bg-secondary/88 hover:text-primary/88 active:scale-98'>
      {title}
    </button>
  );
};
export default Button;
