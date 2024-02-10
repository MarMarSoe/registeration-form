import Title from "./Title";
import "./RegisterForm.css";
import NameInput from "./Name/NameInput";
import GenderAgeInput from "./AgeGender/GenderAgeInput";
import { useForm } from "react-hook-form";

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
      <NameInput register={register} errors={errors} />
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
