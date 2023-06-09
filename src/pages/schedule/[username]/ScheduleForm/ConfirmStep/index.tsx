import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConnfirmActions, ConnfirmForm, ConnfirmHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'

export function ConfirmStep() {
  function handleConfirmScheduling() {}
  return (
    <ConnfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <ConnfirmHeader>
        <Text>
          <CalendarBlank />
          February 12th of 2023
        </Text>
        <Text>
          <Clock />
          20:00h
        </Text>
      </ConnfirmHeader>
      <label>
        <Text size="sm">Full name</Text>
        <TextInput placeholder="Your name" />
      </label>
      <label>
        <Text size="sm">Email</Text>
        <TextInput type="email" placeholder="freddiemercury@email.com" />
      </label>
      <label>
        <Text size="sm">Notes</Text>
        <TextArea />
      </label>
      <ConnfirmActions>
        <Button type="button" variant="tertiary">
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </ConnfirmActions>
    </ConnfirmForm>
  )
}
