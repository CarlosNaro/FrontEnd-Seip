import { modelChangePassword } from "../stores/modelPasswordStore";
const trigger = "blur";
const passwordRules = {
  current_password: [
    {
      required: true,
      message: "Campo Requerido",
      trigger: trigger,
    },
    {
      min: 6,
      message: "La contraseña debe tener al menos 6 caracteres",
      trigger: trigger,
    },
  ],
  new_password: [
    {
      required: true,
      message: "Campo requerido",
      trigger: trigger,
    },
    {
      min: 6,
      message: "La contraseña debe tener al menos 6 caracteres",
      trigger: trigger,
    },
  ],
  confirm_password: [
    {
      required: true,
      message: "Campo requeido",
      trigger: trigger,
    },
    {
      min: 6,
      message: "La contraseña debe tener al menos 6 caracteres",
      trigger: trigger,
    },
    {
      validator: (rule: any, value: string, callback: any) => {
        if (value != modelChangePassword.new_password) {
          callback(new Error("Las contraseñas no coinciden"));
        } else {
          callback();
        }
      },
      trigger: trigger,
    },
  ],
} as Record<string, any>;

export default passwordRules;
