import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BackLink = ({ linkTo, message }) => {
  return (
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to={linkTo}
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> {message}
        </Link>
      </div>
    </section>
  );
};

export default BackLink;
