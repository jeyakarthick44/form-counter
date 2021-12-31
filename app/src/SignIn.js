import { Button } from "@chakra-ui/button";
import { Heading, VStack } from "@chakra-ui/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import React from 'react';

// import { useNavigate } from 'react-router-dom';


function SignIn() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validate = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
      phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone is required'),
  })

  const data={
    "name": "rohit",
    "email": "rroo@gmail.com",
    "password": "1234567890",
    "phoneNumber": "9876543210"
    }
    
    // const navigate = useNavigate()

  return (
    <>
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
      }}
      validationSchema={validate}
        onSubmit = {values => {
        if(values.name===data.name &&  values.email===data.email && values.password===data.password && values.phoneNumber===data.phoneNumber){
          console.log("user");
          alert("YOU ARE VALID USER")
        }else{
          alert("PLEASE ENTER CORRECT DETAILS")
          console.log("not a user")
        }
      }}
    >
      {formik => (
        <VStack
          as="form"
          mx="auto"
          w={{ base: "100%", md: 500 }}
          h="100vh"
          justifyContent="center"
          onSubmit={formik.handleSubmit}>
          <Heading>Login</Heading>
          <TextField name="name" placeholder="name" />
          <TextField name="email" type="email" placeholder="email"  />
          <TextField name="password" type="password" placeholder="password" />
          <TextField name="phoneNumber" type="phoneNumber" placeholder="phoneNumber" />
          <Button type="submit" variant="outline" colorScheme="teal">Login</Button>
        </VStack>
      )}
    </Formik>
    </>
  );
}

export default SignIn;




