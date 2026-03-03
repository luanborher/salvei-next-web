export interface EnterpriseMock {
  id: number;
  title: string;
  series: string;
  imageUrl: string;
  status: 'ativo' | 'pendente' | 'em-andamento';
}

const baseData = [
  ['O Cavaleiro dos Sete Reinos', 'dunk', 0, 'Game of Thrones'],
  ['A Casa do Dragão', 'hotd', 0, 'Game of Thrones'],
  ['Game of Thrones', 'got', 0, 'Game of Thrones'],
  ['The Boys', 'tby', 0, 'The Boys'],
  ['Gen V', 'gev', 0, 'The Boys'],
  ['Fallout', 'flt', 0, 'Fallout'],
] as const;

const imgs: Record<string, string> = {
  hotd: 'https://beam-images.warnermediacdn.com/2024-05/hlhui4espi.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com',
  dunk: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/3507a932-eace-46ea-bfe1-638ae819fa12/6c06190c-4675-4500-a135-a17882be5ba3?host=wbd-images.prod-vod.h264.io&partner=beamcom',
  got: 'https://m.media-amazon.com/images/S/pv-target-images/40559b82ade761037bd5177f32eafb2a7dfc8b8161536b96a910d0703b3c522c.jpg',
  tby: 'https://m.media-amazon.com/images/S/pv-target-images/473fd8bc878799c1a035cb13c688edd9eb6d240d426abf34e0bf3c1dde95724b.jpg',
  gev: 'https://m.media-amazon.com/images/S/pv-target-images/d2407e43649b8beb608a0048dc344e8f95388a1e96e1ea4fb1209478fadf9f4c.png',
  flt: 'https://m.media-amazon.com/images/S/pv-target-images/a68dae2d49d655b17f082fa17b88d3238feba4cb22154e88c0426e1739342629.png',
};

const statuses = ['ativo', 'pendente', 'em-andamento'] as const;

export const seriesMock: EnterpriseMock[] = baseData.map((item, i) => ({
  id: i + 1,
  title: item[0],
  series: item[3],
  imageUrl: imgs[item[1]],
  status: statuses[item[2]],
}));
