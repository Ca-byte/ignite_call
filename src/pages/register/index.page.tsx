import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, FormError, Header } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { api } from '@/src/lib/axios'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username need to have at least 3 letter.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'It is allowed only hifen and letters',
    })
    .transform((username) => username.toLocaleLowerCase()),
  name: z.string().min(3, { message: 'Name need to have at least 3 letter.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })
  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to Ignite Call</Heading>
        <Text>
          We need some information to create your profile! Oh, you can edit this
          information later.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">User Name</Text>
          <TextInput
            prefix="ignite.com/"
            placeholder="your username"
            {...register('username')}
          />
          {errors.username && (
            <FormError size="sm">{errors.username.message}</FormError>
          )}
        </label>
        <label>
          <Text size="sm">Full name</Text>
          <TextInput
            prefix="ignite.com/"
            placeholder="your beautiful name"
            {...register('name')}
          />
          {errors.name && (
            <FormError size="sm">{errors.name.message}</FormError>
          )}
        </label>
        <Button type="submit" disabled={isSubmitting}>
          Next step
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
