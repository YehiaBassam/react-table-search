import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div>
      <Spinner className="mx-2" animation="grow" variant="secondary" />
      <Spinner className="mx-2" animation="grow" variant="secondary" />
      <Spinner className="mx-2" animation="grow" variant="secondary" />
      <Spinner className="mx-2" animation="grow" variant="secondary" />
      <Spinner className="mx-2" animation="grow" variant="secondary" />
      <Spinner className="mx-2" animation="grow" variant="secondary" />
    </div>
  )
}

export default Loading;