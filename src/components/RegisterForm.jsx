import Title from "./Title";
import "./RegisterForm.css";
import GenderAgeInput from "./AgeGender/GenderAgeInput";
import { useForm } from "react-hook-form";
import Input from "./Input";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      firstnameKana: "",
      lastnameKana: "",
      age: "",
    },
  });
  return (
    <form
      className="register"
      onSubmit={handleSubmit((data) => {
        alert("Completed!!!");
      })}
    >
      <Title title="あなたの情報を入力してください" />
      <section>
        <Title title="名前" className="register__subtitle--margin-top" />
        <div className="form-input ">
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
        </div>
      </section>
      {/* <NameInput register={register} errors={errors} /> */}
      <GenderAgeInput
        label="性別"
        name="gender"
        register={register}
        errors={errors}
      />
      <div className="register__btn-group register__btn-group--margin-top">
        <button
          className={`register__submit-btn ${
            isValid ? "active-next-btn" : ""
          } `}
          disabled={!isValid}
        >
          次へ
        </button>
        <button className="register__return-btn">戻る</button>
      </div>
    </form>
  );
};

export default RegisterForm;
