import {date, object,string,TypeOf} from 'zod';

export const createuserSchema = object({
    body : object({
        email : string({
            required_error : 'email is required'
        }).email('email is not valid'),
        password : string({
            required_error : 'password is required'
        }).min(6,"password must be at least 6 characters"),
        passwordConfirm : string({
            required_error : 'passwordconfirm is required'
        }),
        profile : object({
            firstname : string({
                required_error : 'firstname is required'
            }),
            lastname : string({
                required_error : 'lastname is required'
            }),
            dob : string({
                required_error : 'date of birth is required'
            })
        }),
        // company : object({
        //     name : string({
        //         required_error : 'company name is required'
        //     }),
        //     address : string({
        //         required_error : 'company address is required'
        //     }),
        //     city : string({
        //         required_error : 'company city is required'
        //     }),
        //     state : string({
        //         required_error : 'company state is required'
        //     }),
        //     zip : string({
        //         required_error : 'company zip is required'
        //     }),
        //     country : string({
        //         required_error : 'company country is required'
        //     }),
        //     phone : string({
        //         required_error : 'company phone is required'
        //     }),
        //     website : string().nullish(),
        // })
    }).refine((data) =>  data.password === data.passwordConfirm , {
        message : 'password mismatch',
        path : ['passwordConfirmation']
    }),
})

export type createuserInput = TypeOf<typeof createuserSchema>["body"];



