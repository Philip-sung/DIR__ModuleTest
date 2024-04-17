import { SubmitHandler, useForm } from "react-hook-form";

type QuickType = {
  formDataA: string;
  RequiredformDataB: string;
};

export const QuickStartExercise = () => {
  const { register, handleSubmit, watch, formState } = useForm<QuickType>();

  const onSubmit: SubmitHandler<QuickType> = (data) => console.log(data);

  console.log(watch("formDataA"));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={"A"} {...register("formDataA")} />
        <input
          defaultValue={"B"}
          {...register("RequiredformDataB", { required: true })}
        />
        {formState.errors.RequiredformDataB && "This Field is required"}
        <input type={"submit"} />
      </form>
    </>
  );
};
