import ActionButton from '../ActionButton';
import Card from '../cards/Card';
import SelectorForm from './SelectorForm';
import InputForm from './InputForm';
import TextAreaForm from './TextAreaForm';
import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Job, NewJob } from '../../types/job';

type JobFormProps = {
  actionText: string;
  initialJob: Job | NewJob;
  onSubmit: (job: Job | NewJob) => void;
  isSubmitting: boolean;
  submittingButtonLabel: string;
};

const JobForm = ({
  actionText,
  initialJob,
  onSubmit,
  isSubmitting,
  submittingButtonLabel,
}: JobFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Job | NewJob>({ defaultValues: initialJob });

  useEffect(() => {
    reset(initialJob);
  }, [initialJob, reset]);

  return (
    <Card className="px-6 py-8 mb-4 border border-gray-200 m-4 md:m-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl text-center font-semibold mb-6">
          {actionText}
        </h2>

        <SelectorForm
          name="type"
          label="Job Type"
          options={['Full-Time', 'Part-Time', 'Remote', 'Internship']}
          register={register}
          required
          errors={errors}
        />

        <InputForm
          name="title"
          label="Job Listing Name"
          placeholder="Job Name"
          register={register}
          required
          errorMessage={errors.title?.message as string}
        />

        <TextAreaForm
          name="description"
          label="Job Description"
          placeholder="Add any job duties, expectations, requirements, etc"
          register={register}
          required
          errorMessage={errors.description?.message as string}
        />

        <SelectorForm
          name="salary"
          label="Job Salary"
          options={[
            'Under $50K / Year',
            '$50K - 60K / Year',
            '$60K - 70K / Year',
            '$70K - 80K / Year',
            '$80K - 90K / Year',
            '$90K - 100K / Year',
            '$100K - 125K / Year',
            '$125K - 150K / Year',
            '$150K - 175K / Year',
            '$175K - 200K / Year',
            'Over $200K / Year',
          ]}
          register={register}
          required
          errors={errors}
        />

        <InputForm
          name="location"
          label="Location"
          placeholder="Company Location"
          register={register}
          required
          errorMessage={errors.location?.message as string}
        />

        <h3 className="text-2xl mb-5">Company Info</h3>

        <Controller
          name="company.name"
          control={control}
          rules={{ required: 'Company Name is required' }}
          render={({ field }) => (
            <InputForm
              field={{ ...field, ref: field.ref }}
              // field={field}
              label="Company Name"
              placeholder="Company Name"
              errorMessage={errors.company?.name?.message as string}
            />
          )}
        />

        <Controller
          name="company.description"
          control={control}
          rules={{ required: 'Company Description is required' }}
          render={({ field }) => (
            <TextAreaForm
              field={field}
              label="Company Description"
              placeholder="What does your company do?"
              errorMessage={errors.company?.description?.message as string}
            />
          )}
        />

        <Controller
          name="company.contactEmail"
          control={control}
          rules={{
            required: 'Contact Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Email must be a valid format: example@mail.com',
            },
          }}
          render={({ field }) => (
            <InputForm
              field={{ ...field, ref: field.ref }}
              // field={field}
              label="Contact Email"
              placeholder="Email address for applicants"
              type="email"
              errorMessage={errors.company?.contactEmail?.message as string}
            />
          )}
        />

        <Controller
          name="company.contactPhone"
          control={control}
          rules={{
            pattern: {
              value: /^[0-9+\-()\s]{7,15}$/,
              message:
                'Phone must be 7-15 digits and can include + - ( ) spaces',
            },
          }}
          render={({ field }) => (
            <InputForm
              field={{ ...field, ref: field.ref }}
              // field={field}
              label="Contact Phone"
              placeholder="Optional phone for applicants"
              type="tel"
              errorMessage={errors.company?.contactPhone?.message as string}
            />
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
