import * as Yup from 'yup';

import { RegisterFields, ValidationErrors } from '@/enums';
import { PATTERNS } from '@/constants/patterns';

const { FULL_NAME, EMAIL, BIRTH_DATE, COME_FROM } = RegisterFields;

export const YupSchema = Yup.object().shape({
  [FULL_NAME]: Yup.string()
    .required(ValidationErrors.REQUIRED_FIELD)
    .matches(PATTERNS.NAME, ValidationErrors.FULL_NAME_REQUIREMENTS),
  [EMAIL]: Yup.string()
    .required(ValidationErrors.REQUIRED_FIELD)
    .matches(PATTERNS.EMAIL, ValidationErrors.EMAIL_REQUIREMENTS),
  [BIRTH_DATE]: Yup.date<Date>()
    .nullable()
    .required(ValidationErrors.REQUIRED_FIELD)
    .max(new Date(), ValidationErrors.REQUIRED_FIELD)
    .test('minDate', ValidationErrors.BIRTH_DATE_MAX_REQUIREMENTS, (value, ctx) => {
      const dob = new Date(value);
      const minDate = new Date(1900, 0, 1);
      const validMinDate = dob >= minDate;

      return (
        validMinDate || ctx.createError({ message: ValidationErrors.BIRTH_DATE_MAX_REQUIREMENTS })
      );
    }),
  [COME_FROM]: Yup.string().required(ValidationErrors.REQUIRED_FIELD),
});
