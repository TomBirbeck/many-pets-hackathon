import { useState } from 'react';
import './upload.css';
/* 
Plan:
Funtion that takes in:
- Website URL 
-Description 
-Designers name
-Keyword
-Picture
-Beginner,Mid-career and Experienced porject?


Function for button:
-Post to the data 

*/
// const NewPort = {
//     designers_name: "Dave",
//     site_url: "www.google.com",
//     site_image: "/logos/portfol-logo-p-red-L.png",
//     description: "second best one"

// }
function Upload({ upload }) {
  const [portfolio, setPortfolio] = useState({
    designers_name: '',
    site_url: '',
    site_image: '',
    description: '',
    experience_level: '',
  });
  //const [sentData, setSentData] = useState()
  //console.log('upload ' + upload)
  function eventHandleName(e) {
    const name = e.target.value;
    setPortfolio({
      ...portfolio,
      designers_name: name,
    });
  }
  function eventHandleDescription(e) {
    const desc = e.target.value;
    setPortfolio({
      ...portfolio,
      description: desc,
    });
  }
  function eventHandleKeyword(e) {
    const keyword = e.target.value;
    setPortfolio({
      ...portfolio,
      keyword: keyword,
    });
  }
  function eventHandleSiteUrl(e) {
    const url = e.target.value;
    setPortfolio({
      ...portfolio,
      site_url: url,
    });
  }
  function eventHandleImageUrl(e) {
    const img = e.target.value;
    setPortfolio({
      ...portfolio,
      site_image: img,
    });
    // console.log(img);
  }
  // console.log(portfolio);

  function handleClick(e) {
    e.preventDefault();
    // console.log("clicked");
    upload(portfolio);
    e.target.reset();
  }

  function handleChangeExperience(e) {
    const level = e.target.value;
    setPortfolio({
      ...portfolio,
      experience_level: level,
    });
    // console.log(e.target.value);
  }
  // function handleChange(e) {
  //   const name = e.target.name;
  //   const value = e.target.value === “B” ? evt.target.checked : evt.target.value;
  //   setState({
  //     ...state,
  //     [name]: value
  //   })
  // }

  return (
    <div className='Upload'>
      <h2>Upload your portfolio here</h2>

      <form onSubmit={handleClick}>
        <fieldset>
          <label htmlFor='creator name'>
            Creator{'\u2019'}s name:
            <input
              className='upload-input'
              type='text'
              id='creator name'
              onChange={eventHandleName}
              required
            />
          </label>
          <label htmlFor='description'>
            Description:
            <input
              className='upload-input'
              type='text'
              id='description'
              onChange={eventHandleDescription}
              required
            />
          </label>
          <label htmlFor='keyword'>
            Keyword:
            <input
              className='upload-input'
              type='text'
              id='keyword'
              onChange={eventHandleKeyword}
              required
            />
          </label>
          <label htmlFor='website'>
            Website URL:
            <input
              type='text'
              id='website'
              onChange={eventHandleSiteUrl}
              required
            />
          </label>
          <label htmlFor='image'>
            Image URL:
            <input
              type='text'
              id='image'
              onChange={eventHandleImageUrl}
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <div className='upload-radios'>
            <p className='radio-desc'>
              Please select the level of your project:
            </p>
            <label htmlFor='Beginners project'>
              <input
                type='radio'
                id='Beginners project'
                name='project'
                value='Beginner'
                onChange={handleChangeExperience}
                required
              />
              Beginners project
            </label>
            <label htmlFor='Mid-career project'>
              <input
                type='radio'
                id='Mid-career project'
                name='project'
                value='Mid-level'
                onChange={handleChangeExperience}
              />
              Mid-career project
            </label>
            <label htmlFor='Experienced project'>
              <input
                type='radio'
                id='Experienced project'
                name='project'
                value='Experienced'
                onChange={handleChangeExperience}
              />
              Experienced project
            </label>
          </div>
        </fieldset>
        <input className='upload-submit-btn' type='submit' value='Submit' />
      </form>
    </div>
  );
}
