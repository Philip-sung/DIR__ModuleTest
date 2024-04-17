import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

export const UseControllerExercise = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue="Controller Exercise DefaultValue"
          render={({ field }) => <CustomTextField {...field}></CustomTextField>}
        />
        <input type="submit" />
      </form>
    </>
  );
};

const CustomTextField = (props: { name: string }) => {
  return <input defaultValue={props.name} type="text"></input>;
};
