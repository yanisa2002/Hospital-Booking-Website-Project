const validateInfo = (allInfo) => {
  
  let errors = {};
  
  const thai_regex = /^[ก-๏]{0,31}$/;
  if (allInfo.id_card == "") {
    errors["id_card"] = "กรุณากรอกเลขประจำตัวประชาชน";
  } else if (!/^\d+$/.test(allInfo.idcard)) {
    errors["id_card"] = "กรุณากรอกเป็นตัวเลข";
  } else if (allInfo.idcard.length !== 13) {
    errors["id_card"] = "กรุณากรอกให้ครบ 13 หลัก";
  }
  if (allInfo.title_name == "") {
    
    errors["title_name"] = "กรุณาเลือกคำนำหน้า";
  } 
  if (allInfo.birthday == "") {
    
    errors["birthday"] = "กรุณาเลือก";
  } 

  if (allInfo.first_name == "") {
    errors["first_name"] = "กรุณากรอกชื่อ";
  } else if (!thai_regex.test(allInfo.first_name)) {
    errors["first_name"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.last_name == "") {
    errors["last_name"] = "กรุณากรอกนามสกุล";
  } else if (!/^[ก-๏\s]{0,31}$/.test(allInfo.last_name)) {
    errors["last_name"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.gender == "") {
    errors["gender"] = "กรุณาเลือกเพศ";
  } 

  if (allInfo.nationality == "") {
    errors["nationality"] = "กรุณากรอกสัญชาติ";
  } else if (!/^[ก-๏\s]{0,31}$/.test(allInfo.nationality)) {
    errors["nationality"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.country == "") {
    errors["country"] = "กรุณากรอกประเทศ";
  } else if (!/^[ก-๏\s]{0,31}$/.test(allInfo.country)) {
    errors["country"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.province == "") {
    errors["province"] = "กรุณากรอกจังหวัด";
  } else if (!/^[ก-๏\s]{0,31}$/.test(allInfo.province)) {
    errors["province"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.religion == "") {
    errors["religion"] = "กรุณากรอกศาสนา";
  } else if (!/^[ก-๏\s]{0,31}$/.test(allInfo.religion)) {
    errors["religion"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.marital_status == "") {
    errors["marital_status"] = "กรุณาเลือกสถานะภาพสมรส";
  } 

  if (allInfo.blood_group == "") {
    errors["blood_group"] = "กรุณาเลือกกรุ๊ปเลือด";
  } 

  if (allInfo.occupation == "") {
    errors["occupation"] = "กรุณากรอกอาชีพ";
  } else if (!/^[ก-๏\s]{0,31}$/.test(allInfo.occupation)) {
    errors["occupation"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.mother_title_name == "") {
    errors["mother_title_name"] = "กรุณาเลือกคำนำหน้าชื่อมารดา";
  } 

  if (allInfo.mother_first_name == "") {
    errors["mother_first_name"] = "กรุณากรอกชื่อมารดา";
  } else if (!thai_regex.test(allInfo.mother_first_name)) {
    errors["mother_first_name"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.mother_last_name == "") {
    errors["mother_last_name"] = "กรุณากรอกนามสกุลมารดา";
  } else if (!/^[ก-๏\s]{0,31}$/.test(allInfo.mother_last_name)) {
    errors["mother_last_name"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.father_title_name == "") {
    errors["father_title_name"] = "กรุณาเลือกคำนำหน้าชื่อบิดา";
  } 

  if (allInfo.father_first_name == "") {
    errors["father_first_name"] = "กรุณากรอกชื่อมารดา";
  } else if (!thai_regex.test(allInfo.father_first_name)) {
    errors["father_first_name"] = "กรุณากรอกเป็นภาษาไทย";
  }

  if (allInfo.father_last_name == "") {
    errors["father_last_name"] = "กรุณากรอกนามสกุลบิดา";
  } else if (!/^[ก-๏\s]{0,31}$/.test(allInfo.father_last_name)) {
    errors["father_last_name"] = "กรุณากรอกเป็นภาษาไทย";
  }
  if (allInfo.allergy == "") {
    errors["allergy"] = "กรุณากรอกประวัติการแพ้ ไม่มีใส่:ไม่มี";
  } else if (!/^[ก-๏\s]{0,31}$/.test(allInfo.allergy)) {
    errors["allergy"] = "กรุณากรอกเป็นภาษาไทย";
  }



 

  return errors;
};

export default validateInfo;