import React from "react";
import "./Request.css";
import Card from "../ui/Card";
import RequestInfo from "./RequestInfo";

const Request = () => {
  return (
    <>
      <div className="request-body">
        <div className="user-bar">
          <div className="user-name">
            <div className="warning">
              *This is demo login with limited but essential functionality
            </div>
            <h1 className="name">Welcome Bayer!</h1>
          </div>
          <div className="user-functions">
            <a href="xyz.com">
              <i class="fa fa-search"></i>
            </a>
            <a href="xyz.com">
              <i class="fa fa-bell"></i>
            </a>
            <a href="xyz.com">
              <i class="fa-solid fb fa-circle-user"></i>
            </a>
            <a href="xyz.com">
              <i class=" fa fa-solid fa-arrow-right-from-bracket"></i>
            </a>
          </div>
        </div>
        <div className="manage-request-bar">
          <h2 className="name">Manage Requests</h2>
        </div>
        <div className="requests-body">
          <div className="pending-section">
            <h4 className="name" style={{ marginBottom: "5px" }}>
              Pending
            </h4>
            <div className="pending-scroll">
              <Card
                width={"93%"}
                height={"75px"}
                padding={"10px 25px"}
                margintop={"5px"}
                className={"onselect"}
              >
                <RequestInfo pending={true} />
              </Card>
              <Card
                width={"93%"}
                height={"75px"}
                padding={"10px 25px"}
                margintop={"5px"}
                className={"onselect"}
              >
                <RequestInfo pending={true} />
              </Card>
            </div>
          </div>
          <div className="accepted-section">
            <h4 className="name" style={{ marginBottom: "5px" }}>
              Accepted
            </h4>
            <div className="accepted-scroll">
              <Card
                width={"93%"}
                height={"75px"}
                padding={"10px 25px"}
                margintop={"5px"}
                className={"onselect"}
              >
                <RequestInfo pending={false} />
              </Card>
              <Card
                width={"93%"}
                height={"75px"}
                padding={"10px 25px"}
                margintop={"5px"}
                className={"onselect"}
              >
                <RequestInfo pending={false} />
              </Card>
              <Card
                width={"93%"}
                height={"75px"}
                padding={"10px 25px"}
                margintop={"5px"}
                className={"onselect"}
              >
                <RequestInfo pending={false} />
              </Card>
              <Card
                width={"93%"}
                height={"75px"}
                padding={"10px 25px"}
                margintop={"5px"}
                className={"onselect"}
              >
                <RequestInfo pending={false} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;
