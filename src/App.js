import './App.css';
import { useFormik } from 'formik'

function App() {


const formik = useFormik({
  initialValues:{
    name:'',
    email:'',
  },
  onSubmit:values=>{
    console.log('Form data' , values);
},
  validate:values=>{
    let errors = {};
    
    if(!values.name){
        errors.name = 'Required!'
    }

    if(!values.email){
        errors.email = 'Required!'
    }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)){
        errors.email = 'Invalid email format!'
    }

    return errors
  }
})

console.log('Errors' , formik.errors);
  
  return (
    <div className="App">
        <form onSubmit={formik.handleSubmit}>
                
                <label htmlFor='name'>Name &nbsp; 
                    {formik.errors.name && <div className="error">{formik.errors.name}</div>}
                </label>
                <input id='name' type='text' placeholder='Name' onChange={formik.handleChange} value={formik.values.name } />

                <label htmlFor='email'>Email &nbsp;
                    {formik.errors.email && <div className="error">{formik.errors.email}</div>}
                </label>
                <input id='email' type='email' placeholder='Email' onChange={formik.handleChange} value={formik.values.email } />


                <button type='submit'>Submit</button>
            </form>
    </div>
  );
}

export default App;
