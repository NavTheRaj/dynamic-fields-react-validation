import {Control, Controller} from "react-hook-form";
import TextField from "@mui/material/TextField";
import React from "react";
import styled from "@emotion/styled";
import {Paper} from "@mui/material";

interface SingleInputAddressFieldProps {
    control: Control;
    index:number;
}

const StyledPaper = styled(Paper)`
    padding: 20px;
`

const SingleInputAddressField: React.FC<SingleInputAddressFieldProps> = (props) => {

    const {control,index} = props;

    return (
        <StyledPaper variant={"outlined"}>
            <Controller
                control={control}
                name={`data.${index}.address`}
                render={({field,fieldState}) => (
                    <TextField
                        placeholder={"Address"}
                        id="outlined-basic"
                        label="Address"
                        variant="outlined"
                        {...field}
                        error={Boolean(fieldState.error?.message)}
                        helperText={fieldState.error?.message}
                    />

                )}
            />
        </StyledPaper>
    );
}

export default SingleInputAddressField;


