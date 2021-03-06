import React from 'react';
import { dateData } from '../helpers/easier';

export default function InputDate() {
  const { dayNum, mounthsNum, years } = dateData;

  return (
    <>
      <select id="dayNum">
        {
          dayNum.map((each, index) => (
            <option key={ each } value={ index }>{each}</option>))
        }
      </select>
      <select id="mounthsNum">
        {
          mounthsNum.map((each, index) => (
            <option key={ each } value={ index }>{each}</option>))
        }
      </select>
      <select id="years">
        {
          years.map((each) => (
            <option key={ each } value={ each }>{each}</option>))
        }
      </select>
    </>
  );
}
