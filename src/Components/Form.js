import React from "react";
import { useState } from "react";

function Form(){
  const[inputarr,setinputarr]=useState([

  ])
  const[inputData,SetInputData]=useState({
    leave:"",
    reason:"",
    comment:"",
    drange:""
  })

  function ChangeHandle(e){
    SetInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  let {leave,reason,comment,drange}=inputData;
  function ChangeHandlex(e){
      e.preventDefault();
      // eslint-disable-next-line no-undef
      setinputarr([...inputarr,{leave,reason,comment,drange,status: 'pending', approver: ''}])
      console.log(inputarr)
      console.log(inputData)
      SetInputData({leave:"",reason:"",comment:"",drange:""})
  }

  return(<div className="form">

<h2><center>Absence Request</center></h2>
<form>
<div className="form-group">
<div className="form-label">Leave Type :</div>
  <div className="form-input">
  <select name="leave" value={inputData.leave} onChange={ChangeHandle} >
      <option selected disabled></option>
      <option>Annual</option>
      <option>Casual</option>
      <option>Medical</option>
    </select>
  </div>

</div>

<div className="form-group">
  <div className="form-label">Reason:</div>
  <div className="form-input">
    <input type="text" name="reason" id="reason" value={inputData.reason} onChange={ChangeHandle}/>
  </div>
</div>
<div className="form-group">
  <div className="form-label">Comment:</div>
  <div className="form-input">
    <input type="text" name="comment" id="Comment" value={inputData.comment} onChange={ChangeHandle} />
  </div>
</div>
<div className="form-group">
  <div className="form-label">Date Range:</div>
  <div className="form-input">
    <input type="text" name="drange" id="Daterange" value={inputData.drange} onChange={ChangeHandle} />
  </div>
</div>
<br></br><center></center>
<div className="bottom-footer">
<center><button type="submit" className="submit" onClick={ChangeHandlex}>Submit</button></center>
</div>
</form><br></br>

  <table border="1" cellPadding="10">
    <thead>
      <tr>
        <th>Leave Type</th>
        <th>Range</th>
        <th>Status</th>
        <th>Approver</th>
      </tr>
    </thead>
    <tbody>
      {inputarr.map((info, ind) => (
        <tr key={ind}>
          <td>{info.leave}</td>
          <td>{info.drange}</td>
          <td>{info.status}</td>
          <td>{info.approver}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <br>
  </br>
  <h5>Do you want to cancel the accepted leave?
  </h5>
  <div className="drop">
  <select>
    <option className="hidden" selected disabled>Select Yes or No</option>
    <option>Yes</option>
    <option>No</option>
  </select></div>
</div>);
}

export default Form;