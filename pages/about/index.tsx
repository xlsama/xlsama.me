import Header from 'components/Header'
import Markdown from 'components/Markdown'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import css from './index.module.scss'

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
      <main className={css.about}>
        <Markdown>{data}</Markdown>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const res = await fetch('http://localhost:3000/api/post/about')
  const data = await res.json()

  return {
    props: data,
  }
}

export default About
