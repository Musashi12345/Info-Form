import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
 

  return (
    

      <form class="container" id="survey-form" action="api/user" method="post">
      <h1 id="title" className="text-center">Info Form</h1>
        <div className="form-group">
          <label id="name-label" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            required
          />
          <label id="name-label" htmlFor="name">What languages do you speak?</label>
          <input
            type="text"
            name="lang"
            id="lang"
            className="form-control"
            placeholder="Enter your lang"
            required
          />
          <label id="name-label" htmlFor="name">Tell me about yourself?</label>
          <textarea
            type="textarea"
            name="code"
            id="code"
            className="form-control"
            placeholder="Enter your hobbies"
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" id="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    
  );
}

export default App;
