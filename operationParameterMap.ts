type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1/referrals-POST': {
        parameters: [
            {
                name: 'referral_code'
            },
            {
                name: 'applicant'
            },
            {
                name: 'business'
            },
            {
                name: 'contact_preference'
            },
        ]
    },
    '/v1/referrals/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/referrals-GET': {
        parameters: [
            {
                name: 'cursor'
            },
        ]
    },
    '/v1/referrals/{id}/document_upload-POST': {
        parameters: [
            {
                name: 'type'
            },
            {
                name: 'id'
            },
        ]
    },
}