import { client } from '../../lib/sanity'

export async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch all comments
    const query = '*[_type == "comment"]'
    const comments = await client.fetch(query)
    return res.status(200).json(comments)
  }

  if (req.method === 'POST') {
    // Post a new comment
    const { username, content } = req.body
    const doc = {
      _type: 'comment',
      username,
      content,
      createdAt: new Date().toISOString(),
    }

    try {
      const createdComment = await client.create(doc)
      return res.status(200).json(createdComment)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create comment' })
    }
  }
}
