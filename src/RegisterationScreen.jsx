import "./RegisterationScreen.css";
import { useForm } from "react-hook-form";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import RadioInput from "./components/RadioInput/RadioInput";
import AgeInput from "./components/AgeInput/AgeInput";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      firstnameKana: "",
      lastnameKana: "",
      age: "",
      gender: "",
    },
  });
  return (
    <form
      className="register"
      onSubmit={handleSubmit(() => {
        alert("Completed!!!");
        reset();
      })}
    >
      <Title title="あなたの情報を入力してください" />
      <section>
        <Title
          title="名前"
          className="register__subtitle register__subtitle--margin-top"
        />
        <div className="name-input name-input-y-gap">
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
      <section>
        <Title title="年齢・性別" />
        <div className="gender">
          <div className="gender-input gender-input--margin-top">
            <label className="gender-input__label">
              性別
              <span className="require">必須</span>
            </label>
            <RadioInput label="男性" name="gender" register={register} />
            <RadioInput label="女性" name="gender" register={register} />
            <RadioInput
              label="無回答・その他"
              name="gender"
              register={register}
            />
            <AgeInput
              register={register}
              label="年齢"
              name="age"
              error={errors.age && errors.age.message}
            />
          </div>
        </div>
      </section>
      <div className="register__btn-group">
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
