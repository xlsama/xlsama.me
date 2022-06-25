import type { NextPage } from 'next'
import css from './index.module.scss'

const Footer: NextPage = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        网站已运行0天0小时0分0秒
        <span className={css.kaomoji}>OvO</span>
      </div>
    </footer>
  )
}

export default Footer
