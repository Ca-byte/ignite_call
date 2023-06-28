import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './style'
import Image from 'next/image'
import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Simplify your schedule | Ignite Call"
        description="Connect your calendar and let people book appointments in their free
      time."
      />
      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Hassle-free scheduling
          </Heading>
          <Text size="xl">
            Connect your calendar and let people book appointments in their free
            time.
          </Text>
          <ClaimUsernameForm />
        </Hero>
        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendar"
          />
        </Preview>
      </Container>
    </>
  )
}
