import { Prisma } from '@prisma/client'

const prismaError = (error : Prisma.PrismaClientKnownRequestError) => {
    if (error.code === 'P2002') {
        return {
            message : `Unique constraint failed on the fields.`,
            path : error.meta?.target,
        }
    }
    return {
        message : error.message,
        path : error.meta,
    }
}

export default prismaError;