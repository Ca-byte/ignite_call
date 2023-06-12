import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmActions, ConfirmForm, ConfirmHeader, FormError } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'Name with minimum 3 characters.' }),
  email: z.string().email({ message: 'Enter a valid email.' }),
  notes: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>

export function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })
  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
  }
  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <ConfirmHeader>
        <Text>
          <CalendarBlank />
          February 12th of 2023
        </Text>
        <Text>
          <Clock />
          20:00h
        </Text>
      </ConfirmHeader>
      <label>
        <Text size="sm">Full name</Text>
        <TextInput placeholder="Your name" {...register('name')} />
        {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
      </label>
      <label>
        <Text size="sm">Email</Text>
        <TextInput
          type="email"
          placeholder="freddiemercury@email.com"
          {...register('email')}
        />
        {errors.email && (
          <FormError size="sm">{errors.email.message}</FormError>
        )}
      </label>
      <label>
        <Text size="sm">Notes</Text>
        <TextArea {...register('notes')} />
      </label>
      <ConfirmActions>
        <Button type="button" variant="tertiary">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirm
        </Button>
      </ConfirmActions>
    </ConfirmForm>
  )
}
