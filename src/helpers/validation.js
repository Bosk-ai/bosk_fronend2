export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const handleCheckRequiredFileds = (
  data,
  requredFields,
  onShowErrors
) => {
  let emptyRequiredFields = [];

  Object.entries(data).forEach((field) => {
    if (
      requredFields.includes(field[0]) &&
      (!field[1] || field[1]?.length === 0)
    ) {
      emptyRequiredFields = [...emptyRequiredFields, field[0]];
    }
  });

  if (emptyRequiredFields.length > 0) {
    onShowErrors(emptyRequiredFields);
    return false;
  }

  return true;
};
