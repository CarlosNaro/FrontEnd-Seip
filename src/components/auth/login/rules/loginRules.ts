const trigger = "blur";

const loginRules = {
  username: [
    {
      required: true,
      message: "Por favor ingrese Usuario",
      trigger: trigger,
    },
  ],
  password: [
    {
      required: true,
      message: "Por favor ingrese su contraseña",
      trigger: trigger,
    },
    {
      min: 6,
      message: "La contraseña debe tener al menos 6 caracteres",
      trigger: trigger,
    },
  ],
} as Record<string, any>;

export default loginRules;
