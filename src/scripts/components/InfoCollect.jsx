import React from 'react';

class InfoCollect extends React.Component {

  render() {
    return (
    <div className='container'>
    <div className="row">
        <h1> Game Night
        </h1>
      </div>

    <h3>How Many Players?
      <span className="label-default"></span>
    </h3>
      <span className="caret"></span>
      <select className="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <h3>How Much Time?
        <span className="label-default"></span>
      </h3>
      <div className="dropdown">
        <span className="caret"></span>
        <select className="form-control">
          <option>1:00</option>
          <option>1:30</option>
          <option>2:00</option>
          <option>2:30</option>
          <option>3:00</option>
        </select>
        <h3>How Difficult?
          <span className="label-default"></span>
        </h3>
          <span className="caret"></span>
          <select className="form-control">
            <option>Beginner</option>
            <option>Easy</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Expert</option>
          </select>
        </div>
  </div>
);

  }
}

export default InfoCollect;
