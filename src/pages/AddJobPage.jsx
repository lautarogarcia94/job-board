import { useState } from 'react';
import { addJob } from '../api/jobs';
import { useNavigate } from 'react-router-dom';
import Card from '../components/cards/Card';
import { toast } from 'react-toastify';
import ActionButton from '../components/ActionButton';
import { InputForm, SelectorForm, TextAreaForm } from '../components/forms/';
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
} from '../utils/jobFormUtils';

const AddJobPage = () => {
  const navigate = useNavigate();
  const [loadingCreate, setLoadingCreate] = useState(false);

  const [job, setJob] = useState({
    title: '',
    type: 'Full-Time',
    description: '',
    location: '',
    salary: 'Under $50K',
    company: {
      name: '',
      description: '',
      contactEmail: '',
      contactPhone: '',
    },
  });

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

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setLoadingCreate(true);

      await addJob(job);
      toast.success('Job created');
      navigate('/jobs');
    } catch (e) {
      toast.error('Something went wrong while creating the job');
      console.log('Error while deleting a job', e);
    } finally {
      setLoadingCreate(false);
    }
  };

  return (
    <section>
      <div className="container m-auto max-w-2xl py-24">
        <Card className="px-6 py-8 mb-4 border border-gray-200 m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <SelectorForm
              selectorParams={typeSelectorParam(job.type, onChangeEvent)}
            />

            <InputForm
              inputParams={titleInputParam(job.title, onChangeEvent)}
            />

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
              inputParams={companyNameInputParam(
                job.company.name,
                onChangeEvent
              )}
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
                loading={loadingCreate}
                normalText="Add Job"
                loadingText="Adding Job..."
              />
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default AddJobPage;
