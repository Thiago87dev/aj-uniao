import { FaLaptopMedical } from 'react-icons/fa';
import { MdOutlineCarRepair } from 'react-icons/md';
import { GiCarWheel } from 'react-icons/gi';
import { PiEngineFill } from 'react-icons/pi';
import { FaOilCan, FaScrewdriverWrench } from 'react-icons/fa6';

export const conteudoCard = [
  {
    id: 1,
    title: 'Diagnóstico',
    title2: 'Computadorizado',
    text: 'Identificação precisa de falhas com tecnologia avançada.',
    icon: FaLaptopMedical,
    img: '/img/servicos/diagnostico_computadorizado.png',
  },
  {
    id: 2,
    title: 'Revisão',
    title2: 'Completa',
    text: 'Mais segurança e desempenho para o seu veículo.',
    icon: FaScrewdriverWrench,
    img: '/img/servicos/revisao_completa.png',
  },
  {
    id: 3,
    title: 'Troca de Óleo',
    title2: 'e Filtros',
    text: 'Proteção e maior vida útil para o motor.',
    icon: FaOilCan,
    img: '/img/servicos/troca_de_oleo.png',
  },
  {
    id: 4,
    title: 'Freios',
    title2: 'e Suspensão',
    text: 'Mais estabilidade e segurança em todas as suas viagens.',
    icon: GiCarWheel,
    img: '/img/servicos/freios.png',
  },
  {
    id: 5,
    title: 'Injeção',
    title2: 'Eletrônica',
    text: 'Ajuste preciso para melhor desempenho e economia.',
    icon: PiEngineFill ,
    img: '/img/servicos/injecao_eletronica.png',
  },
  {
    id: 6,
    title: 'Alinhamento',
    title2: 'e Balanceamento',
    text: 'Mais conforto, durabilidade dos pneus e direção segura.',
    icon: MdOutlineCarRepair,
    img: '/img/servicos/alinhamento.png',
  },
];