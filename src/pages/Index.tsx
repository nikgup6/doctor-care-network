import React, { useState } from 'react';
import { AuthPage } from './auth/AuthPage';
import { Layout } from '@/components/shared/Layout';
import { PatientDashboard } from './patient/PatientDashboard';
import { DoctorDashboard } from './doctor/DoctorDashboard';
import { ReceptionistDashboard } from './receptionist/ReceptionistDashboard';

const Index = () => {
  const [currentUser, setCurrentUser] = useState<{role: string} | null>(null);

  const handleAuthenticated = (role: string) => {
    setCurrentUser({ role });
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <AuthPage onAuthenticated={handleAuthenticated} />;
  }

  const renderDashboard = () => {
    switch (currentUser.role) {
      case 'patient':
        return <PatientDashboard />;
      case 'doctor':
        return <DoctorDashboard />;
      case 'receptionist':
      case 'admin':
        return <ReceptionistDashboard />;
      default:
        return <PatientDashboard />;
    }
  };

  return (
    <Layout userRole={currentUser.role}>
      {renderDashboard()}
    </Layout>
  );
};

export default Index;
