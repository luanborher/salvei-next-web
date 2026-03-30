export interface EnterpriseMock {
  id: number;
  title: string;
  series: string;
  imageUrl: string;
  status: 'ativo' | 'pendente' | 'em-andamento';
}

const baseData = [
  ['Modern Family', 'tmf', 1],
  ['Brooklyn Nine-Nine', 'b99', 0],
  ['Big Bang: A Teoria', 'bbt', 0],
  ['The Office', 'tof', 0],
  ['Friends', 'fds', 0],
  ['How I Met Your Mother', 'hmy', 0],
] as const;

const imgs: Record<string, string> = {
  bbt: 'https://m.media-amazon.com/images/S/pv-target-images/7b982e06d08c1909f755785795fadde07545fc829a1525f27981c7fa5e1be5b3.jpg',
  b99: 'https://m.media-amazon.com/images/S/pv-target-images/f1d33ac4ade0e2f033583e16e5d4472ab35bf408be9429481f4d7cfda924d14b.jpg',
  tof: 'https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg',
  fds: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/52dae4c7-2ab1-4bb9-ab1c-8100fd54e2f9/07da7aca-c0f3-11f0-b033-0affc374d9d9?host=wbd-images.prod-vod.h264.io&partner=beamcom',
  hmy: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8436a6b7-df2e-45db-865a-124b55cd2424/compose?aspectRatio=1.78&format=webp&width=1200',
  tmf: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/77daa47b-1d60-450f-849a-e10cad30f871/compose?aspectRatio=1.78&format=webp&width=1200',
};

const statuses = ['ativo', 'pendente', 'em-andamento'] as const;

export const sitcomsMock: EnterpriseMock[] = baseData.map((item, i) => ({
  id: i + 1,
  title: item[0],
  series: 'Sitcoms',
  imageUrl: imgs[item[1]],
  status: statuses[item[2]],
}));
