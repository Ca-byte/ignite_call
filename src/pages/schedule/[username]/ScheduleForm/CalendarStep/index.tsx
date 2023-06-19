import { Calendar } from '@/src/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { api } from '@/src/lib/axios'
import { useRouter } from 'next/router'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  // const [availability, setAvailability] = useState(null)

  const router = useRouter()
  const isDateSelected = !!selectedDate

  const username = String(router.query.username)

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const todayDate = selectedDate ? dayjs(selectedDate).format('MMMM DD') : null

  useEffect(() => {
    if (!selectedDate) {
      return
    }
    api
      .get(`/users/${username}/avalaibility`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })
      .then((response) => {
        console.log(response.data)
      })
  }, [selectedDate, username])

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />
      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay}, <span>{todayDate}</span>
          </TimePickerHeader>
          <TimePickerList>
            <TimePickerItem>09:00</TimePickerItem>
            <TimePickerItem>10:00</TimePickerItem>
            <TimePickerItem>11:00</TimePickerItem>
            <TimePickerItem>19:00</TimePickerItem>
            <TimePickerItem>20:00</TimePickerItem>
            <TimePickerItem>00:00</TimePickerItem>
            <TimePickerItem>09:00</TimePickerItem>
            <TimePickerItem>07:00</TimePickerItem>
            <TimePickerItem>06:00</TimePickerItem>
            <TimePickerItem>05:00</TimePickerItem>
            <TimePickerItem>03:00</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
