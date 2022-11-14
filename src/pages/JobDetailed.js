import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Geocode from "react-geocode";

import { useLoadScript } from '@react-google-maps/api';

import JobDetailsContainer from "../components/job_details/JobDetailsContainer";
import Map from "../components/map/Map";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from '../hooks/use-http';
import NoJobsFound from "../components/NoJobsFound";
import { getDataJobs } from "../lib/api";

const API_KEY = process.env.React_App_GOOGLE_MAPS_API_KEY;

const JobDetailed = () => {
  const params = useParams();

  const { jobsId } = params;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
    language: "en",
  });

  const { sendRequest, status, data: loadedJob, error } = useHttp(getDataJobs, true);

  useEffect(() => {
    sendRequest(jobsId);
  }, [sendRequest, jobsId]);

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

  Geocode.setApiKey(API_KEY);
  
  Geocode.fromLatLng(loadedJob.location.lat, loadedJob.location.long).then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <section className="container-detail-job">
      <JobDetailsContainer dataJob={loadedJob}/>
      <Map centerPoint={loadedJob.location}/>
    </section>

  );
};

export default JobDetailed;