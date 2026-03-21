export interface EnterpriseMock {
  id: number;
  title: string;
  series: string;
  imageUrl: string;
  status: 'ativo' | 'pendente' | 'em-andamento';
  platinum?: boolean;
}

const baseData = [
  ['God of War: Ragnarok', 'gow2', 2, false, 'God of War'],
  ['The Last of Us™ Parte II', 'tlo2', 1, false, 'The Last of Us'],
  ['Marvel’s Spider-Man 2', 'sm2', 1, false, 'Marvel Games'],
  ['God of War', 'gow1', 0, true, 'God of War'],
  ['Marvel’s Spider-Man', 'smr', 0, true, 'Marvel Games'],
  ['Marvel’s Spider-Man: Miles Morales', 'smm', 0, false, 'Marvel Games'],
  ['Hogwarts Legacy', 'hgl', 0, true, 'Harry Potter'],
  ['The Last of Us™ Part I', 'tlo', 0, false, 'The Last of Us'],
] as const;

const imgs: Record<string, string> = {
  gow1: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg',
  gow2: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1750909504',
  smr: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/QeJWAaLcYNOpCv7yCVZZEOY5.jpg?w=440',
  smm: 'https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S1_2560x1440-a0518b9f9f36a05294e37448df8a27a0',
  sm2: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/e66c4ae18c5d8e3986a24599b293162a6f5c9eba22968d2c.jpg',
  hgl: 'https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-aa80981dd7c9b3f26b12606974a76dba_2560x1440-aa80981dd7c9b3f26b12606974a76dba',
  tlo: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/ca6Dr3k7PXKaDgEbhN9eODeD.png',
  tlo2: 'https://cdn1.epicgames.com/offer/7713e3fa4b234e0d8f553044205d53b6/EGS_TheLastofUsPartIIRemastered_NaughtyDogLLCNixxesSoftwareIronGalaxy_S1_2560x1440-e93b7a99866b784c5fc948c1666df5e0',
};

const statuses = ['ativo', 'pendente', 'em-andamento'] as const;

export const gamesMock: EnterpriseMock[] = baseData.map((item, i) => ({
  id: i + 1,
  title: item[0],
  series: item[4],
  imageUrl: imgs[item[1]],
  status: statuses[item[2]],
  platinum: item[3],
}));
