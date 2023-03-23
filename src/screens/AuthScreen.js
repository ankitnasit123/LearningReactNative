import {View, Text, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Field, Formik} from 'formik';
import * as yup from 'yup';
import InputField from '../components/InputField';
import ErrorText from '../components/ErrorText';

const AuthScreen = () => {
  let initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };
  const [data, _data] = useState(initialValues);

  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={values => console.log(values)}
        validationSchema={yup.object().shape({
          name: yup.string().required('Please, provide your name!'),
          email: yup.string().email().required(),
          phoneNumber: yup.string().required(),
          password: yup
          .string()
          .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
          .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
          .matches(/\d/, "Password must have a number")
          .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
          .min(8, ({ min }) => `Password must be at least ${min} characters`)
          .required('Password is required'),
          confirmPassword: yup
          .string()
          .oneOf([yup.ref('password')], 'Passwords do not match')
          .required('Confirm password is required'),
        })}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          setFieldTouched,
          touched,
          isValid,
        }) => (
          <View>
            <InputField
              onChangeText={handleChange('name')}
              value={values.name}
              onBlur={() => setFieldTouched('name')}
              secureTextEntry={false}
              placeholder={'Enter name'}
            />
            {touched.name && errors.name && <ErrorText text={errors.name} />}
            <InputField
              onChangeText={handleChange('email')}
              value={values.email}
              onBlur={() => setFieldTouched('email')}
              secureTextEntry={false}
              placeholder={'Enter email'}
              keyboardType="email-address"
            />
            {touched.email && errors.email && <ErrorText text={errors.email} />}
            <InputField
              onChangeText={handleChange('phoneNumber')}
              value={values.phoneNumber}
              onBlur={() => setFieldTouched('phoneNumber')}
              secureTextEntry={false}
              placeholder={'Enter phone number'}
              keyboardType={'phone-pad'}
            />
            {touched.phoneNumber && errors.phoneNumber && (
              <ErrorText text={errors.phoneNumber} />
            )}
            <InputField
              onChangeText={handleChange('password')}
              value={values.password}
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={false}
              placeholder={'Enter password'}
            />
            {touched.password && errors.password && (
              <ErrorText text={errors.password} />
            )}
            <InputField
              onChangeText={handleChange('confirmPassword')}
              value={values.confirmPassword}
              onBlur={() => setFieldTouched('confirmPassword')}
              secureTextEntry={false}
              placeholder={'Enter confirm password'}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <ErrorText text={errors.confirmPassword} />
            )}
            <Button onPress={handleSubmit} disabled={!isValid} title="Submit" />
          </View>
        )}
      </Formik>
    </>
  );
};

export default AuthScreen;
