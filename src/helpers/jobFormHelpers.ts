export const titleInputParam = (value: string) => ({
  labelTitle: 'Job Listing Name',
  value: value,
  required: true,
  id: 'title',
  placeholder: 'Job Name',
});

export const locationInputParam = (value: string) => ({
  labelTitle: 'Location',
  value: value,
  required: true,
  id: 'location',
  placeholder: 'Company Location',
});

export const companyNameInputParam = (value: string) => ({
  labelTitle: 'Company Name',
  value: value,
  required: true,
  id: 'company.name',
  placeholder: 'Company Name',
});

export const contactEmailInputParam = (value: string) => ({
  labelTitle: 'Contact Email',
  value: value,
  required: true,
  id: 'company.contactEmail',
  placeholder: 'Email address for applicants',
  type: 'email',
});

export const contactPhoneInputParam = (value: string) => ({
  labelTitle: 'Contact Phone',
  value: value,
  required: false,
  id: 'company.contactPhone',
  placeholder: 'Optional phone for applicants',
  type: 'tel',
});

export const typeSelectorParam = (value: string) => ({
  labelTitle: 'Job Type',
  value: value,
  required: true,
  id: 'type',
  options: ['Full-Time', 'Part-Time', 'Remote', 'Internship'],
});

export const salarySelectorParam = (value: string) => ({
  labelTitle: 'Job Type',
  value: value,
  required: true,
  id: 'type',
  options: [
    'Under $50K',
    '$50K - 60K',
    '$60K - 70K',
    '$70K - 80K',
    '$80K - 90K',
    '$90K - 100K',
    '$100K - 125K',
    '$125K - 150K',
    '$150K - 175K',
    '$175K - 200K',
    'Over $200K',
  ],
});

export const descriptionTextAreaParam = (value: string) => ({
  labelTitle: 'Description',
  value: value,
  id: 'description',
  placeholder: 'Add any job duties, expectations, requirements, etc',
  required: true,
});

export const companyDescriptionTextAreaParam = (value: string) => ({
  labelTitle: 'Companny Description',
  value: value,
  id: 'company.description',
  placeholder: 'What does your company do?',
  required: true,
});
