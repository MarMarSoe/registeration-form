export const requireValidator = () => {
  return {
    required: true,
  };
};

export const ageValidator = () => {
  return {
    pattern: {
      value: /^[0-9\b]+$/,
      message: "半角数字以外は使用できません",
    },
  };
};

export const characterCheckValidator = () => {
  return {
    pattern: {
      value: /^'?\p{L}+(?:['\s ]\p{L}+)*'?\s*$/u,
      message: "記号・数字は使用できません",
    },
  };
};

export const composeValidators = (...validators) => {
  return validators.reduce((acc, cur) => ({ ...acc, ...cur() }), {});
};
