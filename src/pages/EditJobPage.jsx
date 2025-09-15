import { Suspense, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Card from '../components/cards/Card';
import { useState } from 'react';
import { updateJob } from '../api/jobs';
import { toast } from 'react-toastify';
import ActionButton from '../components/ActionButton';
import {
  companyNameInputParam,
  contactEmailInputParam,
  contactPhoneInputParam,
  locationInputParam,
  salarySelectorParam,
  titleInputParam,
  typeSelectorParam,
  descriptionTextAreaParam,
  companyDescriptionTextAreaParam,
} from '../utils/jobFormUtils';
import { InputForm, SelectorForm, TextAreaForm } from '../components/forms/';

const EditJobPage = () => {
  const { jobPromise } = useLoaderData();
  const [job, setJob] = useState(null);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    jobPromise.then((loadedJob) => setJob(loadedJob));
  }, [jobPromise]);

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
      setLoadingUpdate(true);

      await updateJob(job);
      toast.success('Job updated');
      navigate(`/jobs/${job.id}`);
    } catch (e) {
      toast.error('Something went wrong while updating the job');
      console.log('Error while deleting a job', e);
    } finally {
      setLoadingUpdate(false);
    }
  };

  return (
    <>
      {!job ? (
        <section>
          <Spinner />
        </section>
      ) : (
        <section>
          <div className="container m-auto max-w-2xl py-24">
            <Card className="px-6 py-8 mb-4 border border-gray-200 m-4 md:m-0">
              <form onSubmit={submitForm}>
                <h2 className="text-3xl text-center font-semibold mb-6">
                  Edit Job
                </h2>
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
                  selectorParams={salarySelectorParam(
                    job.salary,
                    onChangeEvent
                  )}
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
                    loading={loadingUpdate}
                    normalText="Update Job"
                    loadingText="Updating Job..."
                  />
                </div>
              </form>
            </Card>
          </div>
        </section>
      )}
    </>
  );
};

export default EditJobPage;
