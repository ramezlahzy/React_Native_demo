import { useEffect, useState } from "react";
import {
  View,
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  IconButton,
  Pressable,
  Button,
} from "native-base";


import { useDispatch } from "react-redux";
import { Formik } from "formik";
import Dialog from "react-native-dialog";

import * as formFields from "../components/FormFields";
import CaseValidationSchema from '../validations/ValidationSchema'
import caseFormModel from "../validations/FormModel";
export default function FilterForm(props) {
  const dispatch = useDispatch();
  const { formId, formField } = caseFormModel;
  const [data, setData] = useState([]);
 
  useEffect(() => {
  }, []);

  // const fetchServerData = () => {
  //   dispatch(getTravel()).then((res) => {
  //     setData(res.payload);
  //   });
  // };
  const _handleSubmit = (values) => {

  }

  return (
    <Formik
      initialValues={{
      }}
      validationSchema={CaseValidationSchema[0]}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
      onSubmit={_handleSubmit}
    
    >
      {(formik) => (
        <View>
          <Box px={3} safeAreaTop>
            <Stack space={4}>
              <formFields.UnderlinedTextInput
                name={caseFormModel.formField.city.name}
                label={caseFormModel.formField.city.label}
                onTextChange={(itemValue) =>{}
                }
                error={formik.errors.advocateName}
                isInvalid={formik.errors.advocateName ? true : false}
              />
                         </Stack>
          </Box>
        </View>
      )}
    </Formik>
  );
}
