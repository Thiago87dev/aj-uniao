import Button from "../geral/Button";

const Hero = () => {
  return (
    <div className='relative min-h-screen lg:px-40'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('img/hero/Gemini_Generated_Image_8sc9ab8sc9ab8sc9.jpg')" }}
      />
      <div className='absolute inset-0 bg-linear-to-r from-black via-black/90 lg:via-black/60 to-transparent' />
      <div className='relative z-10 flex h-screen items-center'>
        <div className='text-white flex flex-col sm:w-8/12 md:w-[80%] lg:w-4/5 xl:w-3/6 gap-10 px-10'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black lg:leading-15 uppercase'>
            Cuidados automotivos de alta precisão
          </h1>
          <p className='text-lg'>
            Sua oficina mecânica de confiança para diagnósticos avançados e manutenção profissional.
          </p>
          <Button title="agendar revisão"/>
        </div>
      </div>
    </div>
  );
};
export default Hero;
