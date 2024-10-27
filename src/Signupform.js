import React from 'react';
import { Button } from 'semantic-ui-react'; // Importing Button from Semantic UI

const SignupForm = () => (
  <div className="signup-section">
    <h3>Sign up for Daily Insider</h3>
    <input type="email" placeholder="Enter your email" />
    <Button primary>Subscribe</Button>
  </div>
);

export default SignupForm;