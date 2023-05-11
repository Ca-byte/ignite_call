import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="Your Username" />
      <Button size="sm" type="submit">
        Booking
        <ArrowRight />
      </Button>
    </Form>
  )
}
