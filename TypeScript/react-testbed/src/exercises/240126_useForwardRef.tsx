import React, { useRef } from "react";

const Input = React.forwardRef<HTMLInputElement>((prop, ref) => {

    return (
        <input ref={ref} type={'text'}/>
    )
})

export const ForwardRef = () => {

    const ref = useRef<HTMLInputElement>(null)
    function handleFocus(){
        if(ref.current !== null){
            ref.current.disabled = false;
            ref.current.focus()
        }
    }

    function handleReset() {
        if(ref.current !== null){
            ref.current.disabled = true;
            ref.current.value = ''
        }
    }

    return(
        <>
            <span>Use Forward Ref</span>
            <Input ref={ref} />
            <button onClick={handleFocus}>활성화</button>
            <button onClick={handleReset}>비활성화</button>
        </>
    )
}

ForwardRef.displayName = "ForwardRef";