
import {Button} from "react-bootstrap";

function DisabledButton({children,variant,OnClick,disabled}){
    return(
        <Button variant={variant} disabled={disabled} onClick={OnClick} >{children}</Button>
    );

}