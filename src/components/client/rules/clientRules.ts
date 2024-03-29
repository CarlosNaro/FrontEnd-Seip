const trigger = "blur";
const clientRules = {
  name: [
    {
      required: true,
      message: "campo requerido",
      trigger: trigger,
    },
  ],

  document: [
    {
      validator: (rule: any, value: any, callback: any) => {
        const stringValue = !value ? null : value.toString();
        if (value != null && value != "") {
          if (typeof value != "number") {
            callback(new Error("El documento debe ser numérico"));
          } else if (stringValue.length != 8) {
            callback(
              new Error("El documento debe contener exactamente 8 dígitos")
            );
          } else {
            callback();
          }
        } else {
          callback();
        }
      },
      trigger: trigger,
    },
  ],

  phone: [
    {
      validator: (rule: any, value: any, callback: any) => {
        const stringValue = !value ? null : value.toString();
        if (value != null && value != "") {
          if (typeof value != "number") {
            callback(new Error("El documento debe ser numérico"));
          } else if (stringValue.length != 9) {
            callback(new Error("El campo debe contener exactamente 9 dígitos"));
          } else {
            callback();
          }
        } else {
          callback();
        }
      },
      trigger: trigger,
    },
  ],
} as Record<string, any>;
export default clientRules;
