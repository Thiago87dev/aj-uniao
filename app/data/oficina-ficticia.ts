import type { dadosReais } from './oficina-real';

// Conteúdo independente: nunca copiar dados reais para esta configuração.
export const dadosFicticios = {
  oficina: {
    nome: 'Auto Exemplo',
    marcaInicio: 'Auto',
    marcaDestaque: 'Exemplo',
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    descricao:
      'Uma oficina fictícia criada para demonstrar este projeto. Atendimento próximo e cuidado com cada detalhe do seu veículo.',
    complemento:
      'Este conteúdo é apenas ilustrativo: do diagnóstico à manutenção, apresentamos como uma oficina pode divulgar seus serviços.',
    endereco: 'Rua Exemplo, 123 — Centro',
    cidade: 'Cidade Exemplo — UF',
    mapaConsulta: 'Centro, Joinville, SC',
    mapaProvisorio: true,
    telefone: '(00) 00000-0000',
    telefone2: '(99) 99999-9999',
    whatsapp: '5500000000000',
    horarios: ['Segunda a sexta: 9h às 17h', 'Sábado: fechado'],
    imagem: '/img/sobre/oficina-ilustrativa.png',
    googleAvaliacoes: 'https://www.google.com/maps/',
  },
  numeros: [
    {
      valor: 10,
      sufixo: '+',
      titulo: 'anos de experiência',
    },
    {
      valor: 2000,
      sufixo: '+',
      titulo: 'veículos atendidos',
    },
    {
      valor: 800,
      sufixo: '+',
      titulo: 'clientes na nossa história',
    },
  ],
  depoimentos: [
    {
      nome: 'Cliente Exemplo 1',
      servico: 'Revisão preventiva',
      texto: 'Atendimento atencioso e explicações claras sobre a revisão. Depoimento fictício para demonstração.',
    },
    {
      nome: 'Cliente Exemplo 2',
      servico: 'Diagnóstico automotivo',
      texto: 'Gostei de entender os cuidados recomendados para o veículo. Depoimento fictício para demonstração.',
    },
    {
      nome: 'Cliente Exemplo 3',
      servico: 'Manutenção geral',
      texto: 'Uma experiência positiva do início ao fim do atendimento. Depoimento fictício para demonstração.',
    },
  ],
  perguntas: [
    {
      pergunta: 'Preciso agendar o atendimento?',
      resposta: 'Neste exemplo, você pode entrar em contato para combinar uma avaliação.',
    },
    {
      pergunta: 'Posso solicitar um orçamento?',
      resposta: 'Sim. Neste cenário ilustrativo, o orçamento é apresentado após a avaliação do veículo.',
    },
    {
      pergunta: 'Quais veículos são atendidos?',
      resposta: 'Neste exemplo, a oficina atende veículos de passeio. As condições são ilustrativas.',
    },
    {
      pergunta: 'Quanto tempo demora uma revisão?',
      resposta: 'O prazo depende dos serviços necessários. Combine a previsão com a equipe.',
    },
    {
      pergunta: 'Posso levar o carro sem saber o problema?',
      resposta: 'Sim. Descreva os sinais percebidos para orientar a avaliação.',
    },
    {
      pergunta: 'Quais são as formas de pagamento?',
      resposta: 'Para esta demonstração, usamos Pix e cartões como exemplos de pagamento.',
    },
  ],
} satisfies typeof dadosReais;
