import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css"

function Footer() {
    return (
        <React.Fragment>
             <MDBFooter style={{ backgroundColor:"#131921" }} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="row">
          <MDBCol md="3">
            <h5 className="title">Get to Know Us</h5>
            <p>About Us</p>
            <p>Careers</p>
            <p>Products</p>
            <p>Gifts</p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Contact with Us</h5>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Make Money with Us</h5>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon</p>
            <p>Advertise</p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Let Us Help You</h5>
            <p>Account</p>
            <p>Returns</p>
            <p>Help</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="last_part footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <a>Design and Developed by - Saurabh Kumar </a>
        </MDBContainer>
      </div>
    </MDBFooter>
        </React.Fragment>
    )
}

export default Footer
