import type { NextPage } from 'next'
import css from './index.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menus = [
  {
    title: '首页',
    path: '/',
  },
  {
    title: '关于我',
    path: '/about',
  },
]

const Header: NextPage = () => {
  const { asPath } = useRouter()

  return (
    <header className={css.header}>
      <nav className={css.site_nav}>
        <ul className={css.nav_menu}>
          {menus.map(menu => (
            <li
              className={`${css.menu_item} ${asPath === menu.path ? css.active : ''}`}
              key={menu.title}
            >
              <Link href={menu.path}>
                <a>{menu.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
