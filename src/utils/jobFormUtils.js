export const titleInputParam = (value, onChangeEvent) => ({
  labelTitle: 'Job Listing Name',
  value: value,
  onChangeAction: onChangeEvent,
  required: true,
  id: 'title',
  placeholder: 'Job Name',
});

export const locationInputParam = (value, onChangeEvent) => ({
  labelTitle: 'Location',
  value: value,
  onChangeAction: onChangeEvent,
  required: true,
  id: 'location',
  placeholder: 'Company Location',
});

export const companyNameInputParam = (value, onChangeEvent) => ({
  labelTitle: 'Company Name',
  value: value,
  onChangeAction: onChangeEvent,
  required: true,
  id: 'company.name',
  placeholder: 'Company Name',
});

export const contactEmailInputParam = (value, onChangeEvent) => ({
  labelTitle: 'Contact Email',
  value: value,
  onChangeAction: onChangeEvent,
  required: true,
  id: 'company.contactEmail',
  placeholder: 'Email address for applicants',
  type: 'email',
});

export const contactPhoneInputParam = (value, onChangeEvent) => ({
  labelTitle: 'Contact Phone',
  value: value,
  onChangeAction: onChangeEvent,
  required: false,
  id: 'company.contactPhone',
  placeholder: 'Optional phone for applicants',
  type: 'tel',
});

export const typeSelectorParam = (value, onChangeEvent) => ({
  labelTitle: 'Job Type',
  value: value,
  onChangeAction: onChangeEvent,
  required: true,
  id: 'type',
  options: ['Full-Time', 'Part-Time', 'Remote', 'Internship'],
});

export const salarySelectorParam = (value, onChangeEvent) => ({
  labelTitle: 'Job Type',
  value: value,
  onChangeAction: onChangeEvent,
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

export const descriptionTextAreaParam = (value, onChangeEvent) => ({
  labelTitle: 'Description',
  value: value,
  onChangeAction: onChangeEvent,
  id: 'description',
  placeholder: 'Add any job duties, expectations, requirements, etc',
  required: true,
});

export const companyDescriptionTextAreaParam = (value, onChangeEvent) => ({
  labelTitle: 'Companny Description',
  value: value,
  onChangeAction: onChangeEvent,
  id: 'company.description',
  placeholder: 'What does your company do?',
  required: true,
});
