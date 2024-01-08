import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react';
import * as Yup from "yup";
import HoixiTextInput from '../utilities/customFormControls/HoixiTextInput';

export default function () {
    const initialValues = {
        title: 'test product',
        price: 10,
    }

    const schema = Yup.object({
        title: Yup.string().required("Ürün adı zorunlu"),
        price: Yup.number().required("Ürün fiyatı zorunludur")
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => { 
                console.log(values)
            }} >
            <Form className='ui form'>
                <HoixiTextInput name="title" placeholder="Ürün Adı"/>
                <HoixiTextInput name="price" placeholder="Ürün Fiyatı"/>               
                <Button color='green' type='submit'>Ekle</Button>
            </Form>
        </Formik>
    )
}
