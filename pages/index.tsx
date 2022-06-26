import Markdown from 'components/Markdown'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import css from 'styles/Home.module.scss'

import path from 'path'
import { readFileSync } from 'fs'

type Props = {
  data: string
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>xlsama</title>
      </Head>
      <main className={css.home}>{data && <Markdown>{data}</Markdown>}</main>
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

export default Home
