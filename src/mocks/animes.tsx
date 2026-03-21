export interface EnterpriseMock {
  id: number;
  title: string;
  series: string;
  imageUrl: string;
  status: 'ativo' | 'pendente' | 'em-andamento';
}

const baseData = [
  ['One Piece', 'one', 2],
  ['Jujutsu Kaisen', 'jjk', 2],
  ['Kaiju N.° 8', 'num8', 2],
  ['Lord of Mysteries', 'lom', 2],
  ['Gachiakuta', 'gac', 0],
] as const;

const imgs: Record<string, string> = {
  one: 'https://m.media-amazon.com/images/S/pv-target-images/bfe50ab62f3e8d78e29b3fef0fb5d49d9ffd39f5a0c385e9a61050e3d5df4fbb._SX1080_FMjpg_.jpg',
  num8: 'https://m.media-amazon.com/images/S/pv-target-images/561f07750990eb2554ef81ce23dcb7321ee94cddc8ab795dc66d1bd2c0e1f5cb.jpg',
  gac: 'https://a.storyblok.com/f/178900/1064x1596/1fd33f9bbd/gachiakuta-key-visual.png/m/filters:quality(95)format(webp)',
  jjk: 'https://m.media-amazon.com/images/S/pv-target-images/4b4144f6f564c8df0f866ae266cd287a56a63c4593dc723af4a6278cfa1211e6._BR-6_AC_SX720_FMjpg_.jpg',
  lom: 'https://a.storyblok.com/f/178900/3840x2160/9b52442360/lordofmysteries_s1_baseasset_kv1_16x9_3840x2160_logoleft_copyright_en-us.jpg/m/1200x0/filters:quality(95)format(webp)',
};

const statuses = ['ativo', 'pendente', 'em-andamento'] as const;

export const animesMock: EnterpriseMock[] = baseData.map((item, i) => ({
  id: i + 1,
  title: item[0],
  series: 'Animes',
  imageUrl: imgs[item[1]],
  status: statuses[item[2]],
}));
