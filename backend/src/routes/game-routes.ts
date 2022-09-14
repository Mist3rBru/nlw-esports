import { Router } from 'express'
import { db } from '../database/sqlite'

export default (router: Router): void => {
  router.get('/games', async (req, res) => {
    const data = await db.game.findMany({
      include: {
        _count: {
          select: {
            ads: true
          }
        }
      }
    })
    const games = data.map(d => ({
      ...d,
      ads: d._count.ads,
      _count: undefined
    }))
    return res.status(200).json(games)
  })

}
