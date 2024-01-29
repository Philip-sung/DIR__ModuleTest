import { ButtonProps, Button } from "@imago-cloud/design-system";

export const BasicButton = (props: ButtonProps<'button'>): JSX.Element => (
    <Button onClick={()=>{alert("Hi")}} color="primary" size="48" variant="contained" hover_color="black" {...props}>{props.children}</Button>
)