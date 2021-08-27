import React from 'react';
import Personaldetails from './Personaldetails';
import Companydetails from './Companydetails';
import Confirm from './Confirm';
import Success  from './Success';
 export class Mainpage extends React.Component{
    state={
        step:1,
        fullname:'',
        gender:'',
        country:'',
        state:'',
        phone:'',
        companyname:'',
        email:'',
        job:'',
        year:''

    };

    nextstep=()=>
    {
        const{ step}=this.state;
        this.setState({step:step+1});
    }

    prevstep=()=>
    {
        const{ step}=this.state;
        this.setState({step:step-1});
    }


    
    inputchange=input=>e=>
    {
        this.setState({[input]:e.target.value})
    }
    
    render()
    {
        const{step}=this.state;
        const {fullname,gender,country,state,phone,companyname,email,job,
        year}=this.state;
        const values = {fullname,gender,country,state,phone,companyname,email,job,year};
        
        switch(step){
            case 1:
                return(
                    <Personaldetails
                    nextstep={this.nextstep}
                    inputchange={this.inputchange}
                    values={values}
                    
                    />
                )

                case 2:
                    return(
                        <Companydetails
                        nextstep={this.nextstep}
                        prevstep={this.prevstep}
                        inputchange={this.inputchange}
                        values={values}
                        
                        />
                    )
    
                case 3:
                    return(
                    <Confirm
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    inputchange={this.inputchange}
                    values={values}
                  />
                    )
                case 4:
                    return <Success/>
        }
    }
}

export default Mainpage