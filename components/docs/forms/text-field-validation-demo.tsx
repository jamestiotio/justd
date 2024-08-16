"use client"

import { Button, Form, TextField } from "ui"

export default function TextFieldValidationDemo() {
  return (
    <Form>
      <TextField isRequired label="Name" className="mb-2" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
