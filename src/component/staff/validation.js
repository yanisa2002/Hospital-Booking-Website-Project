const validate = (allInfo, approve) => {
  let errors = {};

  if (allInfo.department == "") {
    errors["department"] = "กรุณาเลือกแผนก";
  }

  if (allInfo.comment != "" && !/^[ก-๏\s]{0,31}$/.test(allInfo.comment)) {
    errors["comment"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (approve == "") {
    errors["approve"] = "กรุณาเลือก";
  }

  return errors;
};

export default validate;
