export interface EnterpriseMock {
  id: number;
  title: string;
  series: string;
  imageUrl: string;
  status: 'ativo' | 'pendente' | 'em-andamento';
}

const baseData = [
  [
    'Peaky Blinders: O Homem Imortal',
    'https://rollingstone.com.br/wp-content/uploads/2025/12/Peaky-Blinders-O-Homem-Imortal-filme-que-continua-a-serie-com-Cillian-Murphy-ganha-data-de-estreia-1-1.jpg',
    'pendente',
    'Peaky Blinders',
  ],
  [
    'Devoradores de Estrelas',
    'https://cdn.ome.lt/ZhDU73YGEqa-nyDGvcv36SHZgGM=/570x0/smart/filters:format(webp)/uploads/conteudo/fotos/OMELETE_CAPA_-_2025-07-26T193850.053.png',
    'pendente',
    'Devoradores de Estrelas',
  ],
  [
    'Guerreiras do K-Pop',
    'https://rollingstone.com.br/wp-content/uploads/2026/03/Guerreiras-do-K-Pop-faz-historia-no-Oscar-2026-com-vitoria-em-Melhor-Cancao-Original-800x450.jpg',
    'pendente',
    'Guerreiras do K-Pop',
  ],
  [
    'Justiça Artificial',
    'https://m.media-amazon.com/images/S/pv-target-images/08def61c26e66ad21372e5f114a278e7b6e62210c6dcf60e392590afb5e95bd3.jpg',
    'pendente',
    'Justiça Artificial',
  ],
  [
    'Bailarina',
    'https://m.media-amazon.com/images/S/pv-target-images/fcb1373b253b3ece65e7153f526e962ccc3a1cb53f8ca9f138cd840903d996ea.jpg',
    'ativo',
    'John Wick',
  ],
  [
    'Anaconda',
    'https://upload.wikimedia.org/wikipedia/pt/9/99/Anaconda_2025.jpg',
    'ativo',
    'Anaconda',
  ],
] as const;

export const moviesMock: EnterpriseMock[] = baseData.map((item, i) => ({
  id: i + 1,
  title: item[0],
  imageUrl: item[1],
  status: item[2],
  series: item[3],
}));
