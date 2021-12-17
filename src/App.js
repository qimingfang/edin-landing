import React from 'react';
import './App.css';

function MouseScoll () {
  return (
    <div className="mouse">
      <div className="scroll"></div>
    </div>
  )
}

function App() {
  return (
    <>
      <div className="container-fluid">
        <section className="box-intro">
            <div className="table-cell">
                <h1 className="box-headline letters rotate-2">
                    <span className="box-words-wrapper">
                        <b className="is-visible">&nbsp;music.</b>
                        <b>&nbsp;design.</b>
                        <b>&nbsp;tech.</b>
                    </span>
            </h1>
                <h5>welcome to classical effect</h5>
            </div>
        </section>
      </div>
    </>
  );
}

export default App;
