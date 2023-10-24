const trigger = "blur";
const profileRules = {
  first_name: [
    {
      required: true,
      message: "Campo requerido",
      trigger: trigger,
    },
  ],
  last_name: [
    {
      required: true,
      message: "Campo requerido",
      trigger: trigger,
    },
  ],
  email: [
    {
      required: true,
      message: "Campo requerido",
      trigger: trigger,
    },
    {
      type: "email",
      message: "Por favor ingrese un correo electrónico válido",
      trigger: trigger,
    },
  ],
} as Record<string, any>;

export default profileRules;
