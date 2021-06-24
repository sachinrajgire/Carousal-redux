import React from 'react';
import { useSelector } from 'react-redux'

const DataDance = () => {

  const posts = useSelector((state) => state.slideControl.posts)
  return (
    <div>
     {posts && posts.map(i=>{
            return (
              <ul>
                <li>{i.title}</li>
              </ul>
            )
          })}
    </div>
  );
};

export default DataDance;



// Unit Tests <<----
// Integraiton Tests


// Regression Testing <----
// End to End Testing
// Manual Testing  
// Smoke Testing
// Automated Testing using Selenium driver 