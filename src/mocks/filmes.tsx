export interface EnterpriseMock {
  id: number;
  title: string;
  series: string;
  imageUrl: string;
  status: 'ativo' | 'pendente' | 'em-andamento';
}

const baseData = [
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
] as const;

export const moviesMock: EnterpriseMock[] = baseData.map((item, i) => ({
  id: i + 1,
  title: item[0],
  imageUrl: item[1],
  status: item[2],
  series: item[3],
}));
