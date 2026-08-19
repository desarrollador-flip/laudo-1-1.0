export type FormField = 'name' | 'age' | 'phone' | 'state' | 'email';

export interface ContactFormValues {
    name: string;
    age: string;
    phone: string;
    state: string;
    email: string;
}

export interface UtmParams {
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    timestamp?: number;
}

export interface FormPayload {
    name: string;
    phone: string;
    email: string;
    state: string;
    age: string;
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
}

export interface ApiResponse {
    message?: string;
    data?: unknown;
    error?: string;
}

export type ContactFormErrors = Partial<Record<FormField, string>>;
