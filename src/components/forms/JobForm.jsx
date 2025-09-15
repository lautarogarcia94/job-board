import { useState } from 'react';
import ActionButton from '../ActionButton';
import Card from '../cards/Card';

import {
  companyDescriptionTextAreaParam,
  companyNameInputParam,
  contactEmailInputParam,
  contactPhoneInputParam,
  descriptionTextAreaParam,
  locationInputParam,
  salarySelectorParam,
  titleInputParam,
  typeSelectorParam,
} from '../../utils/jobFormUtils';
import SelectorForm from './SelectorForm';
import InputForm from './InputForm';
import TextAreaForm from './TextAreaForm';

const JobForm = ({
  actionText,
  initialJob,
  onSubmit,
  isSubmitting,
  submittingButtonLabel,
}) => {
  const [job, setJob] = useState(initialJob);

  const onChangeEvent = ({ target: { name, value } }) => {
    if (name.startsWith('company.')) {
      const field = name.split('.')[1];
      setJob((prev) => ({
        ...prev,
        company: { ...prev.company, [field]: value },
      }));
    } else {
      setJob((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(job);
  };

  return (
    <Card className="px-6 py-8 mb-4 border border-gray-200 m-4 md:m-0">
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl text-center font-semibold mb-6">
          {actionText}
        </h2>

        <SelectorForm
          selectorParams={typeSelectorParam(job.type, onChangeEvent)}
        />

        <InputForm inputParams={titleInputParam(job.title, onChangeEvent)} />

        <TextAreaForm
          textAreaParams={descriptionTextAreaParam(
            job.description,
            onChangeEvent
          )}
        />

        <SelectorForm
          selectorParams={salarySelectorParam(job.salary, onChangeEvent)}
        />

        <InputForm
          inputParams={locationInputParam(job.location, onChangeEvent)}
        />

        <h3 className="text-2xl mb-5">Company Info</h3>

        <InputForm
          inputParams={companyNameInputParam(job.company.name, onChangeEvent)}
        />

        <TextAreaForm
          textAreaParams={companyDescriptionTextAreaParam(
            job.company.description,
            onChangeEvent
          )}
        />

        <InputForm
          inputParams={contactEmailInputParam(
            job.company.contactEmail,
            onChangeEvent
          )}
        />

        <InputForm
          inputParams={contactPhoneInputParam(
            job.company.contactPhone,
            onChangeEvent
          )}
        />

        <div>
          <ActionButton
            loading={isSubmitting}
            normalText={actionText}
            loadingText={submittingButtonLabel}
          />
        </div>
      </form>
    </Card>
  );
};

export default JobForm;
