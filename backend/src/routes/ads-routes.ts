import { Router } from 'express'
import { db } from '../database/sqlite'
import { TimeAdapter } from '../helpers/time'

const time = new TimeAdapter()

export default (router: Router): void => {
  router.post('/ad/:gameId', async (req, res) => {
    const data = await db.ad.create({
      data: {
        ...req.body,
        hourStart: time.convertHoursToMinutes(req.body.hourStart),
        hourEnd: time.convertHoursToMinutes(req.body.hourEnd)
      }
    })
    const ad = {
      ...data,
      weekDays: data.weekDays.split(' '),
      hourStart: req.body.hourStart,
      hourEnd: req.body.hourEnd
    }
    return res.status(201).json(ad)
  })

  router.get('/ads/:gameId', async (req, res) => {
    const data = await db.ad.findMany({
      select: {
        id: true,
        name: true,
        yearsPlaying: true,
        useVoiceChannel: true,
        weekDays: true,
        hourStart: true,
        hourEnd: true
      },
      where: {
        game: {
          id: req.params.gameId
        }
      }
    })
    const ads = data.map(ad => ({
      ...ad,
      weekDays: ad.weekDays.split(' '),
      hourStart: time.convertMinutesToHourString(ad.hourStart),
      hourEnd: time.convertMinutesToHourString(ad.hourEnd)
    }))
    return res.status(200).json(ads)
  })

  router.get('/ads/:adId/discord', async (req, res) => {
    const data = await db.ad.findUnique({
      select: {
        discord: true
      },
      where: {
        id: req.params.adId
      }
    })
    return res.status(200).json(data)
  })
}
