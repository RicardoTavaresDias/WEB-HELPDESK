import z from "zod"
import { dayjs } from "@/lib/dayjs"

export const calledSchema = z.object({
  title: z.string().min(1, { message: "Campo obrigatório" }),
  description: z.string().min(1, { message: "Campo obrigatório" }).max(300, { message: "Maximo 300 caracteres" }),
  category: z.object({
    id: z.string(),
    titleService: z.string(),
    price: z.string()
  }, { message: "Categoria de serviço é obrigatória" }),
  date: z.string()
    .min(1, { message: "Campo obrigatório" })
    .refine((value) => dayjs(value).isSame(dayjs(), "day") || dayjs(value).isAfter(dayjs(), "day"), { message: "Informe data atual ou data superior de hoje"}),
  hour: z.string().min(1, { message: "Campo obrigatório" })
})
.refine(date => {
  if(dayjs(dayjs().format(`${date.date}T${date.hour}`)).isSameOrBefore(dayjs(), "hour")){
    return false
  }
  return true
}, {
  path: ["hour"], 
  message: "Informe uma data e hora iguais ou posteriores ao momento atual" 
})


export type CalledSchemaType = z.infer<typeof calledSchema>
