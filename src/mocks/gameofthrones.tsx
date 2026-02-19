export interface EnterpriseMock {
  id: number;
  title: string;
  series: string;
  imageUrl: string;
  status: 'ativo' | 'pendente' | 'em-andamento';
}

const baseData = [
  ['Game of Thrones', 'got', 0],
  ['A Casa do Dragão', 'hotd', 0],
  ['O Cavaleiro dos Sete Reinos', 'dunk', 2],
] as const;

const imgBase = 'https://beam-images.warnermediacdn.com/';
const imgs: Record<string, string> = {
  got: 'BEAM_LWM_DELIVERABLES/4f6b4985-2dc9-4ab6-ac79-d60f0860b0ac/d32d4bbefd5911e8f84e3f36db5cbc0f6473382e.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom',
  hotd: '2024-05/hlhui4espi.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com',
  dunk: 'BEAM_LWM_DELIVERABLES/3507a932-eace-46ea-bfe1-638ae819fa12/6c06190c-4675-4500-a135-a17882be5ba3?host=wbd-images.prod-vod.h264.io&partner=beamcom',
};

const statuses = ['ativo', 'pendente', 'em-andamento'] as const;

export const gameofthronesMock: EnterpriseMock[] = baseData.map((item, i) => ({
  id: i + 1,
  title: item[0],
  series: 'Game of Thrones',
  imageUrl: imgBase + imgs[item[1]],
  status: statuses[item[2]],
}));
