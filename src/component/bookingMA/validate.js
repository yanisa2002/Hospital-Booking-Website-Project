const validateInfo = (allInfo, file) => {
  let errors = {};

  const thai_regex = /^[ก-๏]{0,31}$/;

  if (allInfo.firstname == "") {
    errors["Firstname"] = "กรุณากรอกชื่อ";
  } else if (!thai_regex.test(allInfo.firstname)) {
    errors["Firstname"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.lastname == "") {
    errors["Lastname"] = "กรุณากรอกนามสกุล";
  } else if (!/^[ก-๏\s]{0,31}$/.test(allInfo.lastname)) {
    errors["Lastname"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.idcard == "") {
    errors["IDCard"] = "กรุณากรอกเลขประจำตัวประชาชน";
  } else if (!/^\d+$/.test(allInfo.idcard)) {
    errors["IDCard"] = "กรุณากรอกเป็นตัวเลข";
  } else if (allInfo.idcard.length !== 13) {
    errors["IDCard"] = "กรุณากรอกให้ครบ 13 หลัก";
  }

  if (allInfo.hName == "") {
    errors["hName"] = "กรุณาเลือกโรงพยาบาล";
  }
  if (allInfo.bookDate == "") {
    errors["bookDate"] = "กรุณาเลือกวันที่";
  }
  if (allInfo.bookTime == "") {
    errors["bookTime"] = "กรุณาเลือกเวลา";
  }

  if (file == null) {
    errors["file"] = "กรุณาอัปโหลดใบนัด";
  }

  return errors;
};

export default validateInfo;
