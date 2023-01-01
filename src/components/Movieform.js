import React, {useState} from 'react';

function Movieform({setMoviesList}) {
  const [isError, setIsError] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [formData, setFormData] = useState({ name: '', ratings: '', duration: '' });
  
  const submit = e => {
    e.preventDefault();
    if(checkValidations(formData)) {
      setMoviesList(oldValues => ([...oldValues, formData]));
      resetForm();
    }
  }
  
  const checkValidations = ({name, ratings, duration}) => {
    if(name) {
      if(ratings && ratings > 0 && ratings < 100) {
        if(duration) {
          const unit = duration.slice(-1);
          if(unit === 'm' || duration === 'h') {
            const validate = /^\d+$/.test(duration.slice(0, -1));
            if(validate) {
              return true;
            }   
          }
          return setErrorMessage('Please specify time in hours or minutes (e.g. 2.5h or 150m)');
        }
        return setErrorMessage('Duration field is required');
      }
      return setErrorMessage('Ratings should be between 0 and 100');
    }
    return setErrorMessage('Name field is required');
  }

  const setErrorMessage = message => {
    setValidationError(message);
    setIsError(true);
    return false;
  }

  const handleFormData = (field, value) => {
    setFormData(oldValues => ({...oldValues, [field]: value}));
    resetErrors();
  }

  const resetForm = () => {
    setFormData({name: '', ratings: '', duration: ''});
  }

  const resetErrors = () => {
    setErrorMessage('');
    setIsError(false);
  }

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={e => submit(e)}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              onChange={e => handleFormData('name', e.target.value)}
              value={formData.name}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              onChange={e => handleFormData('ratings', e.target.value)}
              value={formData.ratings}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              onChange={e => handleFormData('duration', e.target.value)}
              value={formData.duration}
            />
          </div>
          { isError &&
            <div 
              className='alert error mb-30'
              data-testid='alert'
            >
              {validationError}
            </div> 
          }
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform;
