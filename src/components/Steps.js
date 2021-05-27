import React from 'react'
import { Steps, Button, message } from 'antd';
import FileUpload from './FileUpload';
import EditableTable from './EdiTable';
import SelectionTransfer from './SelectionTransfer';

const { Step } = Steps;

const steps = [
  {
    title: 'Upload',
    content: <FileUpload/>,
  },
  {
    title: 'Select',
    content: <SelectionTransfer />,
  },
  {
    title: 'Validate',
    content: <EditableTable />,
  },
];



const StepsFlow = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default StepsFlow;