import {IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styled from "@emotion/styled";

interface AddFormFieldButtonProps {
    handleAdd: () => void;
}

const StyledButtonDiv = styled("div")`
display: flex;
    justify-content: center;
    flex-direction: row;
`

const AddFormFieldButton: React.FC<AddFormFieldButtonProps> = (props) => {
    const {handleAdd} = props;

    return (
        <StyledButtonDiv>
        <IconButton onClick={handleAdd}>
            <AddIcon/>
        </IconButton>
        </StyledButtonDiv>

    );
}

export default AddFormFieldButton;