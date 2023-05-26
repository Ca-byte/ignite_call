import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalContainer,
  IntervalInputs,
  IntervalItem,
  Intervalday,
} from './style'
import { ArrowRight } from 'phosphor-react'

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">We are almost there!</Heading>
        <Text>
          Set the range of times you are available on each day of the week.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </Header>
      <IntervalBox as="form">
        <IntervalContainer>
          <IntervalItem>
            <Intervalday>
              <Checkbox />
              <Text>Sunday</Text>
            </Intervalday>
            <IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInputs>
          </IntervalItem>
          <IntervalItem>
            <Intervalday>
              <Checkbox />
              <Text>Monday</Text>
            </Intervalday>
            <IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInputs>
          </IntervalItem>
        </IntervalContainer>
        <Button type="submit">
          Next step
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
