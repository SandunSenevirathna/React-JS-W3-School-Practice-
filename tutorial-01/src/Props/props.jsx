import React from "react";

const PropsComponent = () => {
  const StudentData = (props) => {
    return <h3>this is {props.name} and age is {props.age}</h3>;
  };
  return (
    <div>
      <hr />
      <StudentData name="sandun" age='20' />
    </div>
  );
};

export default PropsComponent;
