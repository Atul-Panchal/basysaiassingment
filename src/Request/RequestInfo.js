import React from "react";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import "./RequestInfo.css";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
const RequestInfo = (props) => {
  const { pending } = props;
  return (
    <div className="requestinfo">
      <div className="request-content">
        <div className="name">{pending ? <b>Pending</b> : <b>Accepted</b>}</div>
        <div className="pending-action">
          {pending ? <PendingActionsIcon /> : <AssignmentTurnedInIcon />}
        </div>
      </div>
      <div className="request-content">
        <div className="req-detail">
          <b>Request ID:</b>200005
        </div>
        <div className="req-detail">
          <b>Date:</b>1/24/2023
        </div>
        <div className="req-detail">Medium Urgency</div>
      </div>
      <div className="request-content">
        <div className="service-ta">
          <b>Services</b>
        </div>
        <div className="service-info">-CPT 9221x2 visit Annualy</div>
        <div className="service-info">-CPT 9231x2 visit Annualy</div>
      </div>
      <div className="request-content">
        <div className="requested-by">
          <b>Requested By</b>
        </div>
        <div className="dr-name">Dr. Roger Lenon,MD</div>
      </div>
      <div className="request-content">
        {pending && <button class="approve-button">Approve</button>}
        <a className="view-details" href="/nothing">
          View Details
        </a>
      </div>
    </div>
  );
};

export default RequestInfo;
