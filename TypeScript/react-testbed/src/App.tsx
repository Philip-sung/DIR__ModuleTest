import React from "react";

import { UseRefEx } from "./exercises/240126_useRefEx";
import { ForwardRef } from "./exercises/240126_useForwardRef";
import { BasicButton } from "./exercises/240129_imagoDesignSystem";
import { Ricon } from "./exercises/240129_Ricon";
import { Stack } from "@mui/material";
import { MyButton } from "./exercises/240129_mouseEvent";
import { Ticon } from "./exercises/240129_Ticon";
import { UnitBox } from "./module/240129_Wrapper";

function App() {

  const MyTest = Object.assign({})

  return (
    <>      
      <UnitBox boxName="MouseEvent" date="2024.01.29">
        <MyButton />
      </UnitBox>

      <UnitBox boxName="Ticon(JSX)" date="2024.01.29">
        <Ticon
          icon="ri-list-unordered"
          svgProps={{
            width: '50px',
            height: '50px',
            fill: 'white',
          }}
        />
      </UnitBox>
      
      <UnitBox boxName="Ricon" date="2024.01.29">
        <Ricon
          icon="ri-list-unordered"
          svgProps={{
            width: '50px',
            height: '50px',
            fill: 'white',
          }}
        />
      </UnitBox>
      
      <UnitBox boxName="Button with Icon" date="2024.01.29">
        <BasicButton startIcon={<Ricon icon="ri-file-edit-line" />}>Test Button</BasicButton>
      </UnitBox>

      <UnitBox boxName="UseForwardRef" date="2024.01.26">
        <ForwardRef />
      </UnitBox>

      <UnitBox boxName="UseRef" date="2024.01.26">
        <UseRefEx />
      </UnitBox>
    </>
  );
}

export default App
