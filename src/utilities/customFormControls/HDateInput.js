import { useField } from 'formik'
import React from 'react'
import { FormField,Label,Input } from 'semantic-ui-react'


export default function HDateInput({...props}) {

    const [field,meta] = useField(props);

    return (
        <FormField error={meta.touched && !!meta.error}>

        <Input type="date" {...field} {...props}/>
        {meta.touched && !!meta.error ? (
            <Label pointing basic color="red" content={meta.error}></Label>
          ) : null}
        </FormField>
    )
}

