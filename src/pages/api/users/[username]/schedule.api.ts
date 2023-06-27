import { prisma } from '@/src/lib/prisma'
import { z } from 'zod'
import { NextApiRequest, NextApiResponse } from 'next'
import dayjs from 'dayjs'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const username = String(req.query.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return res.status(400).json({ message: 'User does not exists.' })
  }
  const createSchedulingBody = z.object({
    name: z.string(),
    email: z.string().email(),
    notes: z.string(),
    date: z.string().datetime(),
  })

  const { name, email, notes, date } = createSchedulingBody.parse(req.body)

  const schedulingDate = dayjs(date).startOf('hour')
  if (schedulingDate.isBefore(new Date())) {
    return res.status(400).json({
      message: 'Date is outdated ',
    })
  }

  const conflictScheduling = await prisma.scheduling.findFirst({
    where: {
      user_id: user.id,
      date: schedulingDate.toDate(),
    },
  })
  if (conflictScheduling) {
    return res.status(400).json({
      message: 'There is another scheduling at the same time ',
    })
  }

  await prisma.scheduling.create({
    data: {
      name,
      email,
      notes,
      user_id: user.id,
      date: schedulingDate.toDate(),
    },
  })

  return res.status(201).end()
}
