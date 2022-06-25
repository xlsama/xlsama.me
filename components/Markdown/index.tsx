import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import css from './index.module.scss'

type Props = {
  children: string
}

const Markdown: FC<Props> = ({ children, ...props }) => {
  return (
    <section className={css.markdown_container}>
      <ReactMarkdown linkTarget='_blank' {...props}>
        {children}
      </ReactMarkdown>
    </section>
  )
}

export default Markdown
