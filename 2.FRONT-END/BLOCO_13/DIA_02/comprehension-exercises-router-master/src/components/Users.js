// arquivo Users.js
import React from 'react';

const Users = (props) => {
  const { greetingMessage } = props;
  const { id } = props.match.params;
  return (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users { id } component </p>
  </div>
  )
};

export default Users;

