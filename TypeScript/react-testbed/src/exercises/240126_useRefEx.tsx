import React, { useRef } from "react";

export function UseRefEx() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    if(inputRef.current !== null) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  }

  function handleReset() {
    if(inputRef.current !== null) {
      inputRef.current.disabled = true;
      inputRef.current.value = '';
    }
  }

  return (
    <>
      <span>useRef</span>
      <input disabled type="text" ref={inputRef} />
      <button onClick={handleFocus}>활성화</button>
      <button onClick={handleReset}>비활성화</button>
    </>
  );
}
