import { array, object, string} from "yup";


const singleAddressSchema = object().shape({
    address: string().required("Address field is required")
});

const addressFormSchema = object().shape({
    data:array().of(singleAddressSchema)
});

export default addressFormSchema;