import { Fragment, useEffect, useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

import useHttp from '../hooks/use-http';
import { getDataJobs } from '../lib/api';

import JobList from "../components/job_board/JobsList";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoJobsFound from "../components/NoJobsFound";

const JobBoard = (props) => {
  const location = useLocation();

  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(parseInt(location.pathname.split("=")[1] || 1));

  const handleChange = (_, p) => {
    setPage(p);
  }

  const { sendRequest, status, data: loadedJobs, error } = useHttp(
    getDataJobs,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const sliceDataPage = (page, data, itemOnPage) => {
    const sliceData = data.slice((((page * itemOnPage) - 1) - 4), (page * itemOnPage));
    setJobs(sliceData);
  }

  useEffect(() => {
    if (loadedJobs) {
      sliceDataPage(page, loadedJobs, 5);
    }
  }, [page, loadedJobs]);



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

  if (status === 'completed' && (!loadedJobs || loadedJobs.length === 0)) {
    return <NoJobsFound />;
  }
console.log(jobs)
  return (
    <Fragment>
      <JobList jobs={jobs} page={page} />
      <Pagination
        count={(loadedJobs.length) / 5}
        page={page} shape="rounded"
        onChange={handleChange}
        className="pagination"
        renderItem={
          (item) => (
            <PaginationItem
              component={NavLink}
              to={`/job-board/page=${item.page}`}
              {...item}
            />
          )
        }
      />
    </Fragment>
  );
};

export default JobBoard;
