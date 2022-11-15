import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useLoadScript } from '@react-google-maps/api';

import useHttp from '../hooks/use-http';
import { getDataJobs } from "../lib/api";

import JobDetailsContainer from "../components/job_details/JobDetailsContainer";
import NoJobsFound from "../components/NoJobsFound";
import LoadingSpinner from "../UI/LoadingSpinner";

const API_KEY = process.env.React_App_GOOGLE_MAPS_API_KEY;

const JobDetailed = (props) => {
  const params = useParams();

  const { jobsId } = params;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
    language: "en",
  });

  const { sendRequest, status, data: loadedJob, error } = useHttp(getDataJobs, true);

  useEffect(() => {
    sendRequest(jobsId);

    props.onPageId(jobsId);
  }, [sendRequest, jobsId, props]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (!isLoaded) return <NoJobsFound />;

  return (<JobDetailsContainer dataJob={loadedJob} />);
};

export default JobDetailed;