import React, { Component ,useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers ,deleteContact ,editEmployee } from './actionPagi';
import { nanoid } from 'nanoid';
import ReactPaginate from "react-paginate";
import { Table } from 'react-bootstrap';
import {DELETE_CONTACT, USERS_ERROR} from '../action-types';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index:0,
      id: 0,
      name: "",
      country: "",
      tb1: false,
    };
  }
    componentDidMount() {
        this.props.getUsers(this.props.current)
       

    }
    render() {
        const mm = this.props.a;
        const totel = this.props.totel;
        const current = this.props.current;

       



        const handlePageClick = async (data) => {
           

            let currentpage = data.selected + 1;

            
            console.log(currentpage);

            this.props.getUsers(currentpage)
        };


const myyy=(id)=>{
        let jj=mm.filter((q,i)=>{
            return i !== id
        }).map((w)=>{
            return w
        })

  this.props.deleteContact(jj)
 
}
const editDetails = (data,i) => {
  this.setState({ tb1: true});
  this.setState({
    index:i,
    id: i+1,
    name: data.name,
    country: data.country
  })
}
const submitData = () => {
 
    const updatedDetails = {
      index:this.state.index,
      id: this.state.id,
      name: this.state.name,
      country: this.state.country,
    };
    console.log(updatedDetails)

    this.props.editEmployee(updatedDetails);
    this.setState({ tb1: false});
    clearData();
  
}
const handleNameChange = (e) => {
  this.setState({
    name: e.target.value
  });
}
 const clearData = () => {
  this.setState({
    id: 0,
    Name: "",
    country: ""
  });
}

const handleCountryChange = (e) => {
  this.setState({
    country: e.target.value
  });
}



        return (
            <div className='container'>
             {
               this.state.tb1?
               <div className="leftsection">
             Name : <input onChange={handleNameChange} value={this.state.name} type="text" placeholder="Employee Name" /> <br />
            Country  :  <input onChange={handleCountryChange} value={this.state.country} type="text" placeholder="Employee Department" /><br />
             <button onClick={submitData}>UPDATE</button>
          </div>
          :null
           }





      <Table striped bordered hover>
        <thead>
          <tr>
           <th>No.</th> 
          
            <th>Name</th>
            <th>country</th>
            
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>



          {
            mm.map((w , i)=>{
              
              
              

              return(
                <tr key={nanoid()}>
                     <td>{i+1}</td> 
            <td>{w.name}</td>
            <td>{w.country}</td>
            
            <td><a className='btn btn-primary'  onClick={() => editDetails(w,i)}>Edit</a></td>
            <td><a className='btn btn-primary'  onClick={() => myyy(i)}>Delete </a></td>
            
          </tr>
              )
            })
          }
          
         
        </tbody>
      </Table>


                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={totel}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />



            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    a: state.rA.users,
    totel: state.rB.totel,
    current: state.rB.currentPage

});






export default connect(mapStateToProps, { getUsers , deleteContact ,editEmployee})(users)