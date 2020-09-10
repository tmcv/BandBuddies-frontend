import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MailSent() {
  return (
    <div>
      <h1>Your Message Has Been Sent!</h1>
      <NavLink to="/">Back to Home</NavLink>      
    </div>
  )
}
