// Dashboard.tsx
import React from "react";

export const Dashboard: React.FC = () => {
  return (
    <div className="container-fluid">
      <h1 className="mt-4">Dashboard</h1>
      <p>
        Welcome to your Power Control Dashboard. Here you can manage all your
        electric-powered devices.
      </p>
      <div className="row">
        <Card
          title="Light Control"
          status="Off"
          description="Control your lights from here."
          link="lights.html"
        />
        <Card
          title="Energy Usage"
          status="2.5 kWh"
          description="Energy Consumed Today"
        />
        <Card
          title="Scheduled Events"
          status="No events scheduled"
          description="Upcoming Events"
        />
        <Card
          title="Notifications"
          status="No new notifications"
          description="Recent Alerts"
        />
      </div>
      <h2 className="mt-4">Appliance Control</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Appliance</th>
              <th>Status</th>
              <th>Power Rating (W)</th>
              <th>On Time (hrs)</th>
              <th>Off Time (hrs)</th>
              <th>Units Used (kWh)</th>
              <th>Cost (Tsh)</th>
            </tr>
          </thead>
          <tbody>{/* Dynamically populate rows */}</tbody>
        </table>
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  status: string;
  description: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ title, status, description, link }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card bg-light mb-3 shadow-sm uniform-card">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <h5 className="card-title">{status}</h5>
          <p className="card-text">{description}</p>
          {link && (
            <a href={link} className="btn btn-primary">
              Manage
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
