import { useState } from "react";
import Input from "../Input";
import Title from "../Title";

const NameInput = ({ register, errors }) => {
  return (
    <>
      <Title title="名前" className="register__subtitle--margin-top" />
      <Input
        register={register}
        label="姓"
        error={errors.firstname && errors.firstname.message}
        name="firstname"
      />
      <Input
        register={register}
        label="名"
        errors={errors}
        name="lastname"
        error={errors.lastname && errors.lastname.message}
      />
      <Input
        register={register}
        label="氏（カタカナ）"
        error={errors.firstnameKana && errors.firstnameKana.message}
        name="firstnameKana"
      />
      <Input
        register={register}
        label="名（カタカナ）"
        error={errors.lastnameKana && errors.lastnameKana.message}
        name="lastnameKana"
      />
    </>
  );
};

export default NameInput;
