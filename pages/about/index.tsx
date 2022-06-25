import Header from 'components/Header'
import Markdown from 'components/Markdown'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import css from './index.module.scss'

import path from 'path'
import { readFileSync } from 'fs'

type Props = {
  data: string
}

const About: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>关于我</title>
      </Head>
      <Header />
      <main className={css.about}>{data && <Markdown>{data}</Markdown>}</main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const filePath = path.resolve('_posts', 'about.md')
  const data = readFileSync(filePath).toString()

  return {
    props: { data },
  }
}

export default About
