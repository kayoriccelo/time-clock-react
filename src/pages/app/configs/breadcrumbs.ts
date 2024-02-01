
const bcHome = {
    to: '/',
    title: 'Home',
    previous: []
}

const bcCompanyDetail = {
    to: '/registrations/company/detail',
    title: 'Details company',
    previous: [
        bcHome,
    ]
}

const bcCompanyEdit = {
    to: '/registrations/company/edit',
    title: 'Edit company',
    previous: [
        bcHome, 
        bcCompanyDetail
    ]
}

export const breadcrumbs = {
    home: bcHome,
    company: {
        detail: bcCompanyDetail,
        edit: bcCompanyEdit
    }
}