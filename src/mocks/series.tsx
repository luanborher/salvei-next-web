export interface EnterpriseMock {
  id: number;
  title: string;
  series: string;
  imageUrl: string;
  status: 'ativo' | 'pendente' | 'em-andamento';
}

const baseData = [
  [
    'Peaky Blinders',
    'https://m.media-amazon.com/images/S/pv-target-images/5c3e0d6b9ad0460aa7e63bb1e1d56c4b75722a98f467f5aa8d22650c27a71e1b.jpg',
    'em-andamento',
    'Peaky Blinders',
  ],
  [
    'Dexter',
    'https://rollingstone.com.br/wp-content/uploads/dexter-poster-foto-divulgacao-showtime.jpg',
    'em-andamento',
    'Dexter',
  ],
  [
    'O Cavaleiro dos Sete Reinos',
    'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/3507a932-eace-46ea-bfe1-638ae819fa12/6c06190c-4675-4500-a135-a17882be5ba3?host=wbd-images.prod-vod.h264.io&partner=beamcom',
    'ativo',
    'Game of Thrones',
  ],
  [
    'A Casa do Dragão',
    'https://beam-images.warnermediacdn.com/2024-05/hlhui4espi.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com',
    'ativo',
    'Game of Thrones',
  ],
  [
    'Game of Thrones',
    'https://m.media-amazon.com/images/S/pv-target-images/40559b82ade761037bd5177f32eafb2a7dfc8b8161536b96a910d0703b3c522c.jpg',
    'ativo',
    'Game of Thrones',
  ],
  [
    'The Boys',
    'https://m.media-amazon.com/images/S/pv-target-images/473fd8bc878799c1a035cb13c688edd9eb6d240d426abf34e0bf3c1dde95724b.jpg',
    'ativo',
    'The Boys',
  ],
  [
    'Gen V',
    'https://m.media-amazon.com/images/S/pv-target-images/d2407e43649b8beb608a0048dc344e8f95388a1e96e1ea4fb1209478fadf9f4c.png',
    'ativo',
    'The Boys',
  ],
  [
    'Fallout',
    'https://m.media-amazon.com/images/S/pv-target-images/a68dae2d49d655b17f082fa17b88d3238feba4cb22154e88c0426e1739342629.png',
    'ativo',
    'Fallout',
  ],
] as const;

export const seriesMock: EnterpriseMock[] = baseData.map((item, i) => ({
  id: i + 1,
  title: item[0],
  imageUrl: item[1],
  status: item[2],
  series: item[3],
}));
