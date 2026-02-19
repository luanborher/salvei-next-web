import { IoGameController } from 'react-icons/io5';
import { GiStoneThrone } from 'react-icons/gi';

const navLinks = [
  {
    href: '/jogos',
    icon: <IoGameController size={26} />,
    text: 'Jogos',
  },
  {
    href: '/game-of-thrones',
    icon: <GiStoneThrone size={26} />,
    text: 'Game of Thrones',
  },
];

export default navLinks;
