import { Calendar } from '@/src/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export function CalendarStep() {
  const isDateSelected = true
  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />
      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            Thurday <span>February 12th</span>
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
