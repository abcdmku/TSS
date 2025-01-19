import { ZodError, ZodTypeDef, z } from 'zod';

export function validate<T, T2 extends ZodTypeDef>(
  objectValidator: z.ZodType<T, T2>
) {
  return (data: unknown): ValidatedReturnType<T> => {
    try {
      return {
        parsed: objectValidator.parse(data),
        error: undefined,
      };
    } catch (error) {
      if (error instanceof ZodError)
        return {
          error,
          parsed: undefined,
        };
      throw error;
    }
  };
}

export type ValidatedReturnType<T> =
  | {
      error: ZodError;
      parsed: undefined;
    }
  | {
      error: undefined;
      parsed: T;
    };
