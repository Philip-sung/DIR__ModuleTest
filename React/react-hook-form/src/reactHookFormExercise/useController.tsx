import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type UseControllerType = {
  dataA: string;
  requiredDataB: string;
}

export const UseControllerExercise = () => {
  const { control, handleSubmit, formState } = useForm<UseControllerType>();

  const onSubmit: SubmitHandler<UseControllerType> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="dataA"
          control={control}
          defaultValue="A"
          render={({ field }) => <CustomTextField {...field}></CustomTextField>}
        />
        
        <Controller
          name="requiredDataB"
          control={control}
          rules={{required: true}}
          defaultValue="B"
          render={({ field }) => <CustomTextField {...field}></CustomTextField>}
        />
        {formState.errors.requiredDataB && "requiredDataB Field is required"}

        <input type="submit" />
      </form>
    </>
  );
};

const CustomTextField = (props: FieldValues) => {
  return <input {...props} type="text"></input>;
};
