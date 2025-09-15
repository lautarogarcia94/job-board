import { Suspense, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Card from '../components/cards/Card';
import { useState } from 'react';
import { updateJob } from '../api/jobs';
import { toast } from 'react-toastify';

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

                <div className="mb-4">
                  <label
                    htmlFor="type"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Job Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="border rounded w-full py-2 px-3"
                    value={job.type}
                    required
                    onChange={onChangeEvent}
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="title"
                  >
                    Job Listing Name
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="eg. Beautiful Apartment In Miami"
                    value={job.title}
                    required
                    onChange={onChangeEvent}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="Add any job duties, expectations, requirements, etc"
                    value={job.description}
                    onChange={onChangeEvent}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="salary"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Salary
                  </label>
                  <select
                    id="salary"
                    name="salary"
                    className="border rounded w-full py-2 px-3"
                    required
                    value={job.salary}
                    onChange={onChangeEvent}
                  >
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - 60K">$50K - $60K</option>
                    <option value="$60K - 70K">$60K - $70K</option>
                    <option value="$70K - 80K">$70K - $80K</option>
                    <option value="$80K - 90K">$80K - $90K</option>
                    <option value="$90K - 100K">$90K - $100K</option>
                    <option value="$100K - 125K">$100K - $125K</option>
                    <option value="$125K - 150K">$125K - $150K</option>
                    <option value="$150K - 175K">$150K - $175K</option>
                    <option value="$175K - 200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="Company Location"
                    required
                    value={job.location}
                    onChange={onChangeEvent}
                  />
                </div>

                <h3 className="text-2xl mb-5">Company Info</h3>

                <div className="mb-4">
                  <label
                    htmlFor="company.name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company.name"
                    name="company.name"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Company Name"
                    value={job.company.name}
                    onChange={onChangeEvent}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="company.description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Company Description
                  </label>
                  <textarea
                    id="company.description"
                    name="company.description"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="What does your company do?"
                    value={job.company.description}
                    onChange={onChangeEvent}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="company.contactEmail"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Contact Email
                  </label>
                  <input
                    type="email"
                    id="company.contactEmail"
                    name="company.contactEmail"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Email address for applicants"
                    required
                    value={job.company.contactEmail}
                    onChange={onChangeEvent}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="company.contactPhone"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="company.contactPhone"
                    name="company.contactPhone"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Optional phone for applicants"
                    value={job.company.contactPhone}
                    onChange={onChangeEvent}
                  />
                </div>

                <div>
                  <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {loadingUpdate ? (
                      <>
                        <Spinner
                          color="white"
                          size={15}
                          override={{
                            display: 'inline-block',
                            margin: 0,
                            marginRight: '0.5rem',
                          }}
                        />
                        Updating...
                      </>
                    ) : (
                      'Update Job'
                    )}
                  </button>
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
