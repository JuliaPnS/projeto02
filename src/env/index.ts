import 'dotenv/config'
import { z } from 'zod'

//Schema -> especifica o formato de dado

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
    DATABASE_URL: z.string(),
    PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success == false) {
    console.error('Invalid Envriment Variable', _env.error.format())

    throw new Error('Invalid Envriment Variable.')
}

export const env = _env.data