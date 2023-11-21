import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

import styled from "styled-components";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  gap: 8px;
  width: 320px;
  padding: 10px;
`;

export const Field = styled(FormikField)`
  padding: 8px;
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 14px;
  color: red;
`

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`