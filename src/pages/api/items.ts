import type { APIRoute } from 'astro'
import db from '../../db'

export const GET: APIRoute = async () => {
  // Query all items from the database
  const items = db.query('SELECT * FROM items').all()

  return new Response(JSON.stringify({ items }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
