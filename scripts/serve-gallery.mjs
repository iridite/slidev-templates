#!/usr/bin/env node

import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve } from 'node:path'

const root = resolve(new URL('..', import.meta.url).pathname)
const port = Number(process.env.PORT || process.argv[2] || 4173)
const host = process.env.HOST || '127.0.0.1'

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
}

const server = createServer((request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || `${host}:${port}`}`)
  const pathname = decodeURIComponent(url.pathname === '/' ? '/gallery/' : url.pathname)
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, '')
  let file = join(root, safePath)

  if (!file.startsWith(root)) {
    response.writeHead(403).end('Forbidden')
    return
  }

  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')

  if (!existsSync(file) || !statSync(file).isFile()) {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('Not found')
    return
  }

  response.writeHead(200, {
    'content-type': contentTypes[extname(file).toLowerCase()] || 'application/octet-stream',
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
  })
  createReadStream(file).pipe(response)
})

server.listen(port, host, () => {
  console.log(`Slidev Template Gallery: http://${host}:${port}/gallery/`)
})
