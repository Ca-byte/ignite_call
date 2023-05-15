import { Button, TextInput } from '@ignite-ui/react'
import { Form, FormAnnotation, FormError, FormInputTip } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/router'

const claimUserNameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username need to have at least 3 letter.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'It is allowed only hifen and letters',
    })
    .transform((username) => username.toLocaleLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUserNameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUserNameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="Your Username"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Booking
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <FormError>
          {errors.username ? (
            errors.username.message
          ) : (
            <FormInputTip>Enter a chosen username</FormInputTip>
          )}
        </FormError>
      </FormAnnotation>
    </>
  )
}
