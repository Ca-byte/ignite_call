import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'
import { ConnectBox, ConnectItem } from './styles'
import { signIn } from 'next-auth/react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Connect your schedule!</Heading>
        <Text>
          Connect your calendar to automatically check for peak times and new
          events as scheduled.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={(e) => {
              e.preventDefault()
              signIn('google')
            }}
          >
            Connect
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit">
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
