import 'server-only';
import { dadosReais } from './oficina-real';
import { dadosFicticios } from './oficina-ficticia';

export const demonstracao = false;
const dados = demonstracao ? dadosFicticios : dadosReais;

export const oficina = { ...dados.oficina, demonstracao };
export const numeros = dados.numeros;
export const depoimentos = dados.depoimentos;
export const perguntas = dados.perguntas;
export const navegacao = [
  {
    "href": "#inicio",
    "titulo": "Início"
  },
  {
    "href": "#servicos",
    "titulo": "Serviços"
  },
  {
    "href": "#como-funciona",
    "titulo": "Como funciona"
  },
  {
    "href": "#sobre",
    "titulo": "Sobre"
  },
  {
    "href": "#depoimentos",
    "titulo": "Depoimentos"
  },
  {
    "href": "#faq",
    "titulo": "Dúvidas"
  },
  {
    "href": "#contato",
    "titulo": "Endereço"
  }
];

export const whatsappHref = oficina.whatsapp
  ? 'https://wa.me/' + oficina.whatsapp.replace(/\D/g, '') + '?text=' +
    encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da ' + oficina.nome + '.')
  : '#contato';
