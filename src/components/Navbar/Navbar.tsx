import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaList } from 'react-icons/fa6';

import { useAuth } from '@/hooks/useAuth';

import SettingIcon from '../Icons/navbar/SettingIcon';
import LogOffIcon from '../Icons/navbar/LogOffIcon';
import ArrowIcon from '../Icons/navbar/ArrowIcon';
import navLinks from './navLinks';

import {
  ArrowBorder,
  ArrowWrapper,
  BottomWrapper,
  ContentWrapper,
  LogoffButton,
  NavbarContainer,
  NavbarHeader,
  NavIconsMenu,
  NavIconWrapper,
  NavLink,
  NavLinkText,
  NavWrapper,
} from './styles';

const Navbar = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const pathname = usePathname();

  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const navIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <NavbarContainer
      ref={navbarRef}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <NavbarHeader>
        <FaList color="white" size={28} onClick={() => setExpanded(false)} />
        {expanded && 'Salvei'}
      </NavbarHeader>

      <NavWrapper open={expanded}>
        <ContentWrapper>
          <ArrowWrapper>
            <ArrowBorder style={{ transform: 'rotate(180deg)' }}>
              <ArrowIcon />
            </ArrowBorder>
          </ArrowWrapper>

          <NavIconsMenu ref={navIconsRef}>
            {navLinks.map(({ href, icon, text }) => {
              return (
                <NavLink
                  key={href}
                  href={href}
                  selected={pathname.startsWith(href)}
                  onMouseEnter={() => null}
                  onMouseLeave={() => null}
                  onClick={() => {
                    if (pathname.startsWith(href)) setExpanded(!expanded);
                  }}
                >
                  <NavIconWrapper>{icon}</NavIconWrapper>

                  {expanded && (
                    <NavLinkText selected={pathname.startsWith(href)}>
                      {text}
                    </NavLinkText>
                  )}
                </NavLink>
              );
            })}
          </NavIconsMenu>

          <ArrowWrapper>
            <ArrowBorder>
              <ArrowIcon />
            </ArrowBorder>
          </ArrowWrapper>
        </ContentWrapper>

        <BottomWrapper>
          <LogoffButton
            selected={pathname.startsWith('/configuration')}
            onClick={() => router.push('/configuration')}
          >
            <NavIconWrapper>
              <SettingIcon />
            </NavIconWrapper>

            {expanded && (
              <NavLinkText selected={pathname.startsWith('/configuration')}>
                Configurações
              </NavLinkText>
            )}
          </LogoffButton>

          <LogoffButton onClick={() => logout()}>
            <NavIconWrapper>
              <LogOffIcon />
            </NavIconWrapper>

            {expanded && <NavLinkText>Sair</NavLinkText>}
          </LogoffButton>
        </BottomWrapper>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
