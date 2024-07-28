import { z } from 'zod';

export type Endpoint = 'prefectures/' | 'population/composition/perYear/'

export const prefectureObjectSchema = z.object({
    prefCode: z.number().int(),
    prefName: z.string()
});

export const prefectureResponseObjectSchema = z.object({
    message: z.string().or(z.null()),
    result: prefectureObjectSchema.array()
});

export const populationDataObjectSchema = z.object({
    year: z.number().int(),
    value: z.number().int(),
    rate: z.number().optional()
});

export const populationDatasObjectSchema = z.object({
    label: z.string(),
    data: populationDataObjectSchema.array()
});

export const populationResultObjectSchema = z.object({
    boundaryYear: z.number(),
    data: populationDatasObjectSchema.array()
});

export const populationResponseObjectSchema = z.object({
    message: z.string().or(z.null()),
    result: populationResultObjectSchema
});

export type PrefectureObject = z.infer<typeof prefectureObjectSchema>;

export type PrefectureResponseObject = z.infer<typeof prefectureResponseObjectSchema>;

export type PopulationDataObject = z.infer<typeof populationDataObjectSchema>;

export type PopulationDatasObject = z.infer<typeof populationDatasObjectSchema>;

export type PopulationResultObject = z.infer<typeof populationResultObjectSchema>;

export type PopulationResponseObject = z.infer<typeof populationResponseObjectSchema>;
