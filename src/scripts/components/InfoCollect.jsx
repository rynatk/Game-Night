import React from 'react';

class InfoCollect extends React.Component {

  render() {
    return (
    <div className='container'>
    <div className="row">
      <div className="jumbotron">
        <div className ='content'>
        <h2 className="text-center">Add New Game</h2>


      <p className="text-center">How Many Players</p>
      <span className="caret"></span>
      <select className="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <p className="text-center">How Much Time?</p>
      <div className="dropdown">
        <span className="caret"></span>
        <select className="form-control">
          <option>1:00</option>
          <option>1:30</option>
          <option>2:00</option>
          <option>2:30</option>
          <option>3:00</option>
        </select>
        <p className="text-center">How Difficult?</p>
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
  </div>
</div>
</div>
);

  }
}

export default InfoCollect;
