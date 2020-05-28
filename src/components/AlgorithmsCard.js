import React from "react";

function AlgorithmsCard(props) {
  const setBoolean = props.setBoolean;
  const setTransformBoolean = props.setTransformBoolean;
  const algorithmArray = props.algorithmArray;

  const handleBackClick = () => {
    setBoolean(false);
    setTransformBoolean(false);
  };

  return (
    <div className='algorithms-view-container'>
      <button onClick={() => handleBackClick()}>Back</button>
      {algorithmArray.map((challenge) => {
        return (
          <div className='algorithm'>
            <div className='challenge-title'>
              <p>{challenge.title}</p>
            </div>
            <div className='challenge-btns'>
              <div className='challenge-solution'>
                <a href={challenge.description}>Problem</a>
              </div>
              <div className='challenge-solution'>
                <a href={challenge.solution}>Solution</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AlgorithmsCard;
