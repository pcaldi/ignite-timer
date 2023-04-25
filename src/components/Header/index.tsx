import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/LogoIgnite.svg'

import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Dois triângulos verdes" />
      <nav>
        <NavLink to={'/'} title="Home">
          <Timer size={24} />
        </NavLink>
        <NavLink to={'history'} title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
