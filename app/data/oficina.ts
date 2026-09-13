// Substitua os exemplos pelos dados aprovados pelo cliente antes de publicar.
export const oficina = {
  nome: 'AJ União',
  demonstracao: true,
  descricao: 'Uma oficina feita por quem gosta de carros e valoriza pessoas. Nossa história começa com uma ideia simples: explicar cada cuidado e tratar cada veículo com atenção.',
  complemento: 'Unimos experiência na manutenção automotiva e diagnóstico técnico para acompanhar você em cada quilômetro. Da revisão de rotina ao imprevisto, queremos que você entenda o que seu carro precisa.',
  endereco: 'Rua Exemplo, 123 — Centro',
  cidade: 'Joinville — SC',
  mapaConsulta: 'Centro, Joinville, SC',
  mapaProvisorio: true,
  telefone: '(00) 00000-0000',
  // Número fictício sem destinatário válido. Substitua por DDI + DDD + número real.
  whatsapp: '5500000000000',
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
  { valor: 15, sufixo: '+', titulo: 'anos de experiência' },
  { valor: 5000, sufixo: '+', titulo: 'veículos atendidos' },
  { valor: 1200, sufixo: '+', titulo: 'clientes na nossa história' },
];

// Depoimentos inteiramente fictícios; não foram extraídos do Google.
export const depoimentos = [
  { nome: 'Mariana S.', servico: 'Revisão preventiva', texto: 'Gostei da atenção desde a primeira conversa. Explicaram os cuidados que o carro precisava de um jeito fácil de entender.' },
  { nome: 'Ricardo M.', servico: 'Diagnóstico automotivo', texto: 'Consegui entender a origem do problema e o serviço indicado. Um atendimento cuidadoso que faz a diferença.' },
  { nome: 'Camila A.', servico: 'Manutenção de freios', texto: 'Levei o carro antes de viajar e fui muito bem atendida. É bom poder tirar as dúvidas e sair mais tranquila.' },
];

export const perguntas = [
  { pergunta: 'Preciso agendar antes de levar meu carro?', resposta: 'Recomendamos agendar para organizar a avaliação e conferir a disponibilidade da equipe. Entre em contato e conte qual serviço você procura ou o que está acontecendo com o veículo.' },
  { pergunta: 'Posso pedir um orçamento antes do serviço?', resposta: 'Sim. Conte o que você precisa para receber uma orientação inicial. Dependendo do problema, uma avaliação presencial será necessária para definir os serviços e o orçamento.' },
  { pergunta: 'Quais veículos a oficina atende?', resposta: 'Neste exemplo, atendemos veículos de passeio de diferentes marcas. Informe o modelo, o ano e a motorização para confirmar a disponibilidade do serviço.' },
  { pergunta: 'Quanto tempo demora uma revisão?', resposta: 'O prazo depende do modelo do veículo, dos itens avaliados e da disponibilidade das peças. A previsão é combinada após a avaliação.' },
  { pergunta: 'Posso levar o carro sem saber qual é o problema?', resposta: 'Pode, sim. Descreva os ruídos, as luzes no painel ou as mudanças que percebeu ao dirigir. Essas informações ajudam a orientar o diagnóstico.' },
  { pergunta: 'Quais são as formas de pagamento?', resposta: 'Neste exemplo, aceitamos Pix e cartões. Confirme com a equipe as condições disponíveis para o serviço escolhido.' },
];

// Um único destino para todos os botões. Ex.: 5547999999999 (DDI + DDD + número).
export const whatsappHref = oficina.whatsapp
  ? 'https://wa.me/' + oficina.whatsapp.replace(/\D/g, '') + '?text=' + encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da AJ União.')
  : '#contato';
