import { IoGameController } from 'react-icons/io5';
import { GiStoneThrone, GiSkullCrossedBones } from 'react-icons/gi';
import { FaMasksTheater } from 'react-icons/fa6';
import { MdLocalMovies } from 'react-icons/md';

const navLinks = [
  {
    href: '/jogos',
    icon: <IoGameController size={26} />,
    text: 'Jogos',
  },
  {
    href: '/series',
    icon: <GiStoneThrone size={26} />,
    text: 'Séries',
  },
  {
    href: '/filmes',
    icon: <MdLocalMovies size={26} />,
    text: 'Filmes',
  },
  {
    href: '/sitcoms',
    icon: <FaMasksTheater size={26} />,
    text: 'Sitcoms',
  },
  {
    href: '/animes',
    icon: <GiSkullCrossedBones size={26} />,
    text: 'Animes',
  },
];

export default navLinks;
