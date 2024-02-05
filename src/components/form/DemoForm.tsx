import {useForm, useFieldArray} from "react-hook-form"
import React, {useEffect} from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import AddFormFieldButton from "../Add/AddFormFieldButton";
import SingleInputAddressField from "./SingleInputAdressField";
import addressFormSchema from "./addressFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";


interface DemoFormProps {

}
const StyledForm = styled("form")`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
`
const DemoForm: React.FC<DemoFormProps> = () => {

    const {control, handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(addressFormSchema),
        mode:"onBlur"
    });
    const {fields, append} = useFieldArray({
        control,
        name: "data",
    })

    const handleAddField = () => {
        append({address:""});
    }

    useEffect(() => {
    console.log(fields.length)
    }, [fields]);

    return (
        <div>
            <AddFormFieldButton handleAdd={handleAddField}/>
            <StyledForm onSubmit={handleSubmit((data) => console.log(data))}>
                {fields.map((field, index) => {
                    return <SingleInputAddressField key={field.id}  control={control} index={index}/>;
                })}
                <Button type={"submit"} variant={"contained"}
                disabled={Boolean(errors?.data) || Boolean(fields.length <= 0)}
                >Submit</Button>
            </StyledForm>
        </div>
    )
}

export default DemoForm;