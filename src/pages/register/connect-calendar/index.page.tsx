import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight, Check } from 'phosphor-react'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function ConnectCalendar() {
  const router = useRouter()
  const session = useSession()

  const isSignIn = session.status === 'authenticated'

  async function handleSignInCalendar() {
    await signIn('google')
  }
  const hasAuthError = !!router.query.error
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
          {isSignIn ? (
            <Button size="sm" disabled>
              Connected
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleSignInCalendar}
            >
              Connect
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>
        {hasAuthError && (
          <AuthError size="sm">
            Oh no! Failed to connect to Google! We need to give a permission to
            access to the calendar.
          </AuthError>
        )}
        <Button type="submit" disabled={!isSignIn}>
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
