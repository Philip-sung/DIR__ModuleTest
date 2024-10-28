type EnumLike<Data extends Record<string, unknown>> = Data[keyof Data];

export const GenerateMarginErrorType = {
  NETWORK_ERROR_IN_MARGIN_GENERATION: "networkErrorInMarginGeneration",
  UNKNOWN_ERROR_IN_MARGIN_GENERATION: "unknownErrorInMarginGeneration",
} as const;
export type GenerateMarginErrorType = EnumLike<typeof GenerateMarginErrorType>;

export const generateMarginErrorTypeGuard = (
  error: unknown
): error is Error & { message: GenerateMarginErrorType } => {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string" &&
    Object.values(GenerateMarginErrorType).includes(
      error.message as GenerateMarginErrorType
    )
  );
};

const e = new Error(GenerateMarginErrorType.NETWORK_ERROR_IN_MARGIN_GENERATION);
const f = new Error(GenerateMarginErrorType.UNKNOWN_ERROR_IN_MARGIN_GENERATION);
const g = new Error("GenerationError");

console.log(e);
console.log(generateMarginErrorTypeGuard(e));
console.log(generateMarginErrorTypeGuard(f));
console.log(generateMarginErrorTypeGuard(g));
console.log(generateMarginErrorTypeGuard("false"));
