import { create, insertBatch, search } from '@lyrasearch/lyra'
import path from 'path'
import fs from 'fs'

async function main() {
  const dataFilePath = path.resolve(__dirname, '../data/articles.json')
  const data = fs.readFileSync(dataFilePath, {
    encoding: 'utf-8',
  })
  const docs = JSON.parse(data)

  const term = process.argv[2]

  const db = create({
    schema: {
      title: 'string',
      url: 'string',
    },
  })

  await insertBatch(db, docs)

  const searchResult = search(db, {
    term,
    properties: ['title'],
  })

  console.log(searchResult.hits)
}

main()
