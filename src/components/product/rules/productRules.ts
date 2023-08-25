const trigger = "blur";

const productRules = {
    name:[
        {
        required: true,
        message:"Campo requerido ",
        trigger:trigger
        }
    ]
} as Record<string, any>
export default productRules