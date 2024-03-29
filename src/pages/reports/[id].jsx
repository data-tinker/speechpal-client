import {useEffect, useRef, useState} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { XMarkIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

export default function Report() {
  const router = useRouter();
  const { id } = router.query;
  const popupRef = useRef();

  const [report, setReport] = useState(null);
  const [selectedEdit, setSelectedEdit] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);
  const [showSuccessText, setShowSuccessText] = useState(false);

  const handleClick = (item) => {
    if (item.edit === selectedEdit) {
      setSelectedEdit(null); // hide the popup if the selected edit is clicked again
    } else {
      setSelectedEdit(item.edit);
    }
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setSelectedEdit(null);
    }
  };

  useEffect(() => {
    if (id) {
      axios.get(`https://api.speechpal.co/api/reports/${id}`)
        .then((response) => {
          setReport(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            setIsNotFound(true);
          } else {
            setIsError(true);
            console.error('Error fetching report:', error);
          }
        });
    }
  }, [id]);

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Report
          {report && (
            report.has_errors ? (
              <div className="inline-flex align-middle rounded-md ml-2">
                <div className="flex-shrink-0 cursor-pointer"
                     onMouseEnter={() => setShowErrorText(true)}
                     onMouseLeave={() => setShowErrorText(false)}
                >
                  <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                {showErrorText && (
                  <div className="ml-2 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-red-800">Click underlined phrases below</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="inline-flex align-middle rounded-md ml-2">
                <div className="flex-shrink-0 cursor-pointer"
                     onMouseEnter={() => setShowSuccessText(true)}
                     onMouseLeave={() => setShowSuccessText(false)}
                >
                  <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                {showSuccessText && (
                  <div className="ml-2 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-green-800">Well done, no errors</p>
                  </div>
                )}
              </div>
            )
          )}
        </h2>
        <div className="mt-6 leading-8">
          {report ? (
            <div>
              {report.report.map((item, index) => (
                  <span
                    key={index}
                    className={item.edit ? 'underline decoration-wavy decoration-red-600 cursor-pointer' : ''}
                    onClick={() => handleClick(item)}
                  >
                {item.sentence}{' '}
              </span>))}
            </div>
          ) : isError? (
            <div>Failed to load</div>
          ) : isNotFound? (
            <div>Not found</div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        {selectedEdit && (
          <div ref={popupRef} className="relative w-72 bg-white p-4 border border-gray-300 rounded shadow-lg">
            <button onClick={() => setSelectedEdit(null)} className="absolute top-0 right-0 p-1">
              <XMarkIcon className="h-6 w-6 text-gray-400 hover:text-gray-500" />
            </button>
            <pre className="whitespace-pre-wrap text-sm mt-2">{selectedEdit}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
