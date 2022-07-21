import React, { Component } from 'react'
import "./Component1.css"

export default class Component1 extends Component {
    constructor(props){
        super(props)
        this.state={
            uname:"",
            umail:"",
            upassword:"",
            uaddress:"",
            umobile:"",
            uimage:"",
            ubirth:"",
            passed1:"",
            color1:"",
            passed2:"",
            color2:"",
            passed3:"",
            color3:"",
            passed4:"",
            color4:"",
            passed5:"",
            color5:"",
            passed6:"",
            color6:"",
            passed7:"",
            color7:"",
            passed8:"",
            color8:"",
            radioval:"",
            checkval:"",
            checkarr:[],
            message1:"",
            message2:"",
            message3:"",
            flag1:0,
            info:"",
            val1:false,
            val2:false,
            val3:false,
            val4:false,
            val5:false
            

          
        }
    }

    box=(event)=>{
        if(event.target.value==="Cricket"){
            this.setState({val1:true})
        }
        if(event.target.value==="Singing"){
            this.setState({val2:true})
        }
        if(event.target.value==="Dancing"){
            this.setState({val3:true})
        }
        
        if(event.target.checked){
            this.setState({checkval:event.target.value})
            this.setState({checkarr:[...this.state.checkarr,this.state.checkval]})
        }

    }
    radio=(event)=>{
        if(event.target.value==="Male"){
            this.setState({val4:true})
            this.setState({val5:false})
        }
        if(event.target.value==="Female"){
            this.setState({val5:true})
            this.setState({val4:false})
        }
        if (event.target.checked){
            this.setState({radioval:event.target.value})}
    }
    reset=()=>{
        document.getElementById("name").value=""
        document.getElementById("mail").value=""
        document.getElementById("password").value=""
        document.getElementById("address").value=""
        document.getElementById("mobile").value=""
        document.getElementById("pic").value=""
        document.getElementById("dob").value=""
        this.setState({info:"",color1:"",color2:"",color3:"",color4:"",color5:"",color7:"",color8:"",message1:"",message2:"",message3:"",val1:false,val2:false,val3:false,val4:false,val5:false})

    }

   
    check=(event)=>{
        event.preventDefault()
    
        var name = document.getElementById("name").value
        var mail = document.getElementById("mail").value
        var password = document.getElementById("password").value
        var address = document.getElementById("address").value
        var mobile = document.getElementById("mobile").value
        var pic = document.getElementById("pic").value
        var date = document.getElementById("dob").value
        if(name=="" || mail==""||password==""||address==""||mobile==""||pic==""||date==""){
            this.setState({info:"Fields are Empty"})
            
        }
        if(name!="" && mail!=""&& password!=""&& address!=""&& mobile!="" && pic!="" && date!=""){
            this.setState({info:""})
        }
        if(!name.match(/^[a-zA-Z]+$/)){
            this.setState({flag1:1,color1:"red",passed1:"underline"})
        }
        if(name.match(/^[a-zA-Z]+$/)){
            this.setState({flag1:0,color1:"",passed1:"",uname:name}) 
        }
        if(!mail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            this.setState({flag1:1,color2:"red",passed2:"underline"})
        }
        if(mail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            this.setState({flag1:0,color2:"",passed2:"",umail:mail}) 
        }
        if(!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)){
            this.setState({flag1:1,color3:"red",passed3:"underline"})
        }
        if(password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)){
            this.setState({flag1:0,color3:"",passed3:"",upassword:password}) 
        }
        if(address==""){
            this.setState({flag1:1,color4:"red",passed4:"underline"})
        }
        if(address!==""){
            this.setState({flag1:0,color4:"",passed4:"",uaddress:address}) 
        }
        if(mobile.length!==10){
            this.setState({flag1:1,passed5:"underline",color5:"red"})
        }
        if(mobile.length===10){
           this.setState({flag1:0,passed5:"",color5:"",umobile:mobile})
        }
        if(this.state.radioval==""){
            this.setState({flag1:1,message1:"radio buttons are not selected"})
        }
        if(this.state.radioval!=""){
            this.setState({flag1:0,message1:""})
        }
        if(this.state.checkval==""){
            this.setState({flag1:1,message2:"checkbox are not selected"})
        }
        if(this.state.checkval!=""){
            this.setState({flag1:0,message2:""})
        }
        if(pic==""){
            this.setState({flag1:1,passed7:"underline",color7:"red"})
        }
        if(pic!=""){
           this.setState({flag1:0,passed7:"",color7:"",uimage:pic})
        }
        if(date==""){
            this.setState({flag1:1,passed8:"underline",color8:"red"})
        }
        if(date!=""){
           this.setState({flag1:0,passed8:"",color8:"",ubirth:date})
        }
        if(this.state.uname!=="" && this.state.umail!=="" && this.state.uaddress!=="" && this.state.umobile!=="" && this.state.upassword!==""  && this.state.uimage!=="" && this.state.ubirth!=="" && this.state.message1==="" && this.state.message2===""){
               this.setState({message3:"your data successfully updated"})
        }
 
     }
  render() {
    return (
      <div id="component1">
          <form onSubmit={this.check}>
              <h3 style={{textAlign:"CENTER"}}>***<span>Red</span> color denotes field has some error</h3>
          <table>
          <tr><td colSpan={2} style={{textAlign: "center",color:"red"}}>{this.state.info}</td></tr>
              <tr><td colSpan={2} style={{textAlign: "center",color:"red"}}>{this.state.message1}</td></tr>
              <tr><td colSpan={2} style={{textAlign: "center",color:"blue"}}>{this.state.message3}</td></tr>
              <tr><td colSpan={2} style={{textAlign: "center",color:"red"}}>{this.state.message2}</td></tr>
              <tr><td>Enter Your Name</td><td><input type="text" id="name" style={{textDecorationLine:this.state.passed1,color:this.state.color1,border:"1px solid" + this.state.color1}}/></td></tr>
              <tr><td>Enter Your Mail</td><td><input type="text" id="mail"  style={{textDecorationLine:this.state.passed2,color:this.state.color2,border:"1px solid" + this.state.color2}}/></td></tr>
              <tr><td>Enter Your Password</td><td><input type="password" id="password"  style={{textDecorationLine:this.state.passed3,color:this.state.color3,border:"1px solid" + this.state.color3}} /></td></tr>
              <tr><td>Enter Your Address</td><td><input type="text" id="address" style={{textDecorationLine:this.state.passed4,color:this.state.color4,border:"1px solid" + this.state.color4}} /></td></tr>
              <tr><td>Enter Your Mobile</td><td><input type="number" id="mobile"  style={{textDecorationLine:this.state.passed5,color:this.state.color5,border:"1px solid" + this.state.color5}}/></td></tr>
              <tr><td>Select Your Gender</td><td><input type="radio" name="gender" value="Male" onClick={this.radio} checked={this.state.val4}/>
                                        <label for="html">Male</label>
                                        <input type="radio"  name="gender" value="Female" onClick={this.radio}  checked={this.state.val5}/>
                                        <label for="css">Female</label><br/></td></tr>
              <tr><td>Choose Your Hobbies</td><td>
                <label for="vehicle1"> Cricket</label>
                <input type="checkbox" id="check1" name="vehicle1" value="Cricket" onClick={this.box} checked={this.state.val1}/>
                <label for="vehicle2"> Singing</label>
                <input type="checkbox" id="check2" name="vehicle2" value="Singing" onClick={this.box} checked={this.state.val2}/>
                <label for="vehicle3">Dancing</label>
                <input type="checkbox" id="check3" name="vehicle3" value="Dancing" onClick={this.box} checked={this.state.val3}/>

                  </td></tr>
              <tr><td>Choose Your Profile Pic</td><td><input type="file" id="pic" style={{textDecorationLine:this.state.passed7,color:this.state.color7}}/></td></tr>
              <tr><td>Select Your DOB</td><td><input type="date" id="dob" style={{textDecorationLine:this.state.passed8,color:this.state.color8}}/></td></tr>
              <tr><td colSpan={2} style={{textAlign:"CENTER",padding:3}}><input type="submit" value="Register" id="btn1"/><input type="button" value="Reset" id="btn2" onClick={this.reset}/></td></tr>
             
          </table>
          </form>
         
      </div>
    )
  }
}
