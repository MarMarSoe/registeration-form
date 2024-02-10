import { useState } from "react";
import Input from "../Input";
import Title from "../Title";

const NameInput = ({ register, errors, isValid, isDirty }) => {
  return (
    <>
      <Title title="名前" className="register__subtitle--margin-top" />
      <Input register={register} label="姓" errors={errors} name="firstname" />
      {errors.firstname && (
        <p className="error-msg">{errors.firstname.message}</p>
      )}
      <Input register={register} label="名" errors={errors} name="lastname" />
      {errors.lastname && (
        <p className="error-msg">{errors.lastname.message}</p>
      )}
      <Input
        register={register}
        label="氏（カタカナ）"
        errors={errors}
        name="firstnameKana"
      />
      {errors.firstnameKana && (
        <p className="error-msg">{errors.firstnameKana.message}</p>
      )}

      <Input
        register={register}
        label="名（カタカナ）"
        errors={errors}
        name="lastnameKana"
      />
      {errors.lastnameKana && (
        <p className="error-msg">{errors.lastnameKana.message}</p>
      )}
    </>
  );
};

export default NameInput;
