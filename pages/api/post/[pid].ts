import { readFileSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

const POSTS_DIR = path.resolve('_posts')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pid } = req.query
  const fileName = pid as string
  const data = readFileSync(path.join(POSTS_DIR, `${fileName}.md`)).toString()

  res.status(200).json({ data })
}
