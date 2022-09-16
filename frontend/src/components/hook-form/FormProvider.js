import { FormProvider as Form } from "react-hook-form";


export default function FormProvider({children, onSubmit, methods}) {
    return (
        <Form>
            <form action="" onSubmit={onSubmit}>{children}</form>
        </Form>
    )
}