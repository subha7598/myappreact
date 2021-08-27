import React from 'react';


export class Companydetails extends React.Component{
      continue=e=>
      {
          e.preventDefault();
          this.props.nextstep();

      }
      back=e=>
      {
          e.preventDefault();
          this.props.prevstep();

      }
    render()
    {

        const {values,inputchange} = this.props;
                return(
                    <div className= "form-container">
                        <h1 className="header">Add your Company details</h1>
               <div className="form-group">
                <label htmlFor="companyname" className="col-form-label">CompanyName</label>
                <input type="text" name="companyname" className="form-control" onChange={inputchange('companyname')} value={values.companyname}/>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="col-form-label">Email</label>
                <input type="email" name="email" className="form-control" onChange={inputchange('email')} value={values.email}/>
            </div>

            <div className="form-group">
                <label htmlFor="job" className="col-form-label">Job Title</label>
                <input type="text" name="job" className="form-control" onChange={inputchange('job')} value={values.job}/>
            </div>
            <div className="form-group">
                <label htmlFor="year" className="col-form-label">Year of Experience</label>
                <input type="number" name="year" className="form-control" onChange={inputchange('year')} value={values.year}/>
            </div>
            
        
            
            <div className="row">
                <div className="col 5">
                <button className="btn btn-primary" onClick={this.back}>Back</button>
                </div>
           
            <div className="col 3 text-right">
            <button className="btn btn-primary" onClick={this.continue}>Next</button>
            </div>
                
            </div>
                    </div>
           
            
        )
    }
}

export default Companydetails;