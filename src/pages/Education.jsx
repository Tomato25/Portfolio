import React from 'react'
import styled from 'styled-components';
import "./subsection.scss";

function Education() {
  return (
    <WrapEducation>
        <h1 className='subtitle'>Education</h1>
        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus quidem repudiandae ex saepe consequuntur suscipit praesentium amet odio officia?</p></div>
    </WrapEducation>
  )
}


 const WrapEducation = styled.div`
    height:100vh;
    width:50vw;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    align-items:center;
 `;




export default Education



