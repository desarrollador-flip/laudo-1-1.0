export type FormField = 'name' | 'age' | 'phone' | 'state' | 'email';

export interface ContactFormValues {
    name: string;
    age: string;
    phone: string;
    state: string;
    email: string;
}

export type ContactFormErrors = Partial<Record<FormField, string>>;
