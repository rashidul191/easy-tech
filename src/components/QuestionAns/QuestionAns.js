import React from "react";

const QuestionAns = () => {
  return (
    <div className="container my-5">
      <div>
        <h3>How React Work??</h3>
        <p>
          Ans: React is a prevalent JavaScript library. At its very core, React
          basically maintains a tree. This tree is able to do efficient diff
          computations on the nodes. HTML code as a tree. In fact, that is
          precisely how the browser treats DOM. React allows you to effectively
          reconstruct DOM in JavaScript and push only those changes to the DOM
          which have actually occurred. JSX (JavaScript XML) is syntactic sugar
          there's nothing like JSX - neither to JavaScript nor to the browser.
          JSX is simply syntactic sugar for creating very specific JavaScript
          objects. ReactDOM in turn recursively creates nodes depending on their
          type property and appends them finally to the DOM.
        </p>
      </div>
      <div>
        <h3>Props VS State</h3>
        <p>
          Ans: Use state to store the data the current page needs in
          controller-view. Use props to pass data & event handlers down to child
          components. These lists should help guide you when working with data
          in your components. State and Props both are plain JS object.
          <h5>Props</h5>
          <ul>
            <li>Props are read-only.</li>
            <li> are immutable</li>
            <li>which lets React do fast reference checks</li>
            <li>are used to pass data down from the view-controller</li>
            <li>have better performance</li>
            <li>use this to pass data to child components</li>
          </ul>
          <h5>State</h5>
          <ul>
            <li>State changes can be asynchronous.</li>
            <li>it is mutable</li>
            <li>should be managed in the view-controller</li>
            <li>has worse performance</li>
            <li>should not be accessed from child components</li>
            <li>pass it down with props instead</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default QuestionAns;
