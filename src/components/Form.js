import React, { Component } from 'react';

  const Form =(props)=>
      (
        <form onSubmit={props.getweather}>
          <input type="text" name="city" placeholder="city..."/>
          <input type="text"  name="country" placeholder="Country.."/>
          <button>Get Weather</button>
        </form>
     );

export default Form;
