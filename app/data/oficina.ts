// Substitua os exemplos pelos dados aprovados pelo cliente antes de publicar.
export const oficina = {
  nome: 'AJ União',
  demonstracao: false,
  descricao:
    'Uma oficina feita por quem gosta de carros e valoriza pessoas. Nossa história começa com uma ideia simples: explicar cada cuidado e tratar cada veículo com atenção.',
  complemento:
    'Unimos experiência na manutenção automotiva e diagnóstico técnico para acompanhar você em cada quilômetro. Da revisão de rotina ao imprevisto, queremos que você entenda o que seu carro precisa.',
  endereco: 'Av. Cel. Procópio Gomes, 1067 - Bucarein ',
  cidade: 'Joinville — SC',
  mapaConsulta: 'Av. Cel. Procópio Gomes, 1067 - Bucarein, Joinville',
  mapaProvisorio: false,
  telefone: '(47) 99158-6910',
  // Número fictício sem destinatário válido. Substitua por DDI + DDD + número real.
  whatsapp: '5547991586910',
  horarios: ['Segunda a sexta: 8h às 18h', 'Sábado: 8h às 12h'],
  imagem: '/img/sobre/oficina-ilustrativa.png',
};

export const navegacao = [
  { href: '#inicio', titulo: 'Início' },
  { href: '#servicos', titulo: 'Serviços' },
  { href: '#como-funciona', titulo: 'Como funciona' },
  { href: '#sobre', titulo: 'Sobre' },
  { href: '#depoimentos', titulo: 'Depoimentos' },
  { href: '#faq', titulo: 'Dúvidas' },
  { href: '#contato', titulo: 'Endereço' },
];

export const numeros = [
  { valor: 30, sufixo: '+', titulo: 'anos de experiência' },
  { valor: 5000, sufixo: '+', titulo: 'veículos atendidos' },
  { valor: 1200, sufixo: '+', titulo: 'clientes na nossa história' },
];

// Depoimentos inteiramente fictícios; não foram extraídos do Google.
export const depoimentos = [
  {
    nome: 'Thiago A.',
    servico: 'Revisão preventiva',
    texto:
      'Ótimo atendimento, equipe atenciosa e serviço muito bem feito. Fiquei bastante satisfeito com o resultado e com a qualidade do trabalho. Recomendo!',
  },
  {
    nome: 'Ana R.',
    servico: 'Diagnóstico automotivo',
    texto:
      'Precisávamos verificar se havia algum problema no veículo que adquirimos e os mecânicos foram super profissionais, ágeis e nos informaram todos os problemas. Super recomendo!',
  },
  {
    nome: 'Killian H.',
    servico: 'Manutenção de freios',
    texto:
      'Atendimento 100%! Ótimos profissionais, cuidadosos no serviço, me atenderam em uma situação de urgência (antes de uma longa viagem), e resolveram o problema que outros não conseguiram resolver. Nota 1000, eu recomendo.',
  },
];

export const perguntas = [
  {
    pergunta: 'Preciso agendar antes de levar meu carro?',
    resposta:
      'Não é necessário agendar antes. Você pode vir diretamente até a oficina com o seu veículo. Nossa equipe fará o atendimento e avaliará o serviço necessário conforme a disponibilidade do momento.',
  },
  {
    pergunta: 'Posso pedir um orçamento antes do serviço?',
    resposta:
      'Sim. Conte o que você precisa para receber uma orientação inicial. Dependendo do problema, uma avaliação presencial será necessária para definir os serviços e o orçamento.',
  },
  {
    pergunta: 'Quais veículos a oficina atende?',
    resposta:
      'Atendemos veículos de passeio de diferentes marcas. Informe o modelo, o ano e a motorização para confirmar a disponibilidade do serviço.',
  },
  {
    pergunta: 'Quanto tempo demora uma revisão?',
    resposta:
      'O prazo depende do modelo do veículo, dos itens avaliados e da disponibilidade das peças. A previsão é combinada após a avaliação.',
  },
  {
    pergunta: 'Posso levar o carro sem saber qual é o problema?',
    resposta:
      'Pode, sim. Descreva os ruídos, as luzes no painel ou as mudanças que percebeu ao dirigir. Essas informações ajudam a orientar o diagnóstico.',
  },
  {
    pergunta: 'Quais são as formas de pagamento?',
    resposta:
      'Aceitamos PIX, dinheiro e cartões. Confirme com a equipe as condições disponíveis para o serviço escolhido.',
  },
];

// Um único destino para todos os botões. Ex.: 5547999999999 (DDI + DDD + número).
export const whatsappHref = oficina.whatsapp
  ? 'https://wa.me/' +
    oficina.whatsapp.replace(/\D/g, '') +
    '?text=' +
    encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da AJ União.')
  : '#contato';
