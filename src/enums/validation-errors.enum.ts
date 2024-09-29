enum ValidationErrors {
  REQUIRED_FIELD = 'Field is required',
  FULL_NAME_REQUIREMENTS = "2-20 latin characters, spaces, symbols ( - ' .)",
  EMAIL_REQUIREMENTS = 'Please enter a valid email address',
  BIRTH_DATE_FUTURE_BUG_REQUIREMENTS = 'You can`t be born in the future!',
  BIRTH_DATE_MAX_REQUIREMENTS = 'Should not be earlier than 01-01-1900',
  BIRTH_DATE_MIN_REQUIREMENTS = 'Should be greater than 18',
  COME_FROM_REQUIREMENTS = 'Select one',
}

export { ValidationErrors };
