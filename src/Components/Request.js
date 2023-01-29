import React, { useState } from "react";

const Request = () => {
  const [leaveDays, setLeaveDays] = useState([
    { absenceType: "Sick Leave", status: "Approved", absencePeriod: "Jan 1 - Jan 5", requestedDates: 5 },
    { absenceType: "Vacation", status: "Pending", absencePeriod: "Jan 15 - Jan 20", requestedDates: 6 },
    { absenceType: "Emergency Leave", status: "Declined", absencePeriod: "Jan 25 - Jan 28", requestedDates: 4 },
  ]);

  return (
    <table>
      <thead>
        <tr>
          <th>Absence Type</th>
          <th>Status</th>
          <th>Absence Period</th>
          <th>Requested Dates</th>
        </tr>
      </thead>
      <tbody>
        {leaveDays.map((leaveDay, index) => (
          <tr key={index}>
            <td>{leaveDay.absenceType}</td>
            <td>{leaveDay.status}</td>
            <td>{leaveDay.absencePeriod}</td>
            <td>{leaveDay.requestedDates}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Request;
