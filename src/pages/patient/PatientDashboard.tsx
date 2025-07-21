import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  FileText, 
  Scan, 
  Activity, 
  Heart, 
  Clock,
  CheckCircle,
  AlertCircle,
  Plus
} from 'lucide-react';

export const PatientDashboard: React.FC = () => {
  // Mock data - will be replaced with real data from Supabase
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialization: 'Cardiology',
      date: '2024-01-25',
      time: '10:30 AM',
      status: 'confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialization: 'Dermatology',
      date: '2024-01-28',
      time: '2:15 PM',
      status: 'pending'
    }
  ];

  const recentScans = [
    {
      id: 1,
      type: 'X-Ray Chest',
      date: '2024-01-20',
      status: 'reviewed',
      findings: 'Normal'
    },
    {
      id: 2,
      type: 'Blood Test',
      date: '2024-01-18',
      status: 'pending_review',
      findings: 'Pending'
    }
  ];

  const healthMetrics = [
    { label: 'Blood Pressure', value: '120/80', status: 'normal' },
    { label: 'Heart Rate', value: '72 bpm', status: 'normal' },
    { label: 'Weight', value: '70 kg', status: 'normal' },
    { label: 'Temperature', value: '98.6°F', status: 'normal' }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-2xl p-8 shadow-[var(--shadow-medical)]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-lg text-primary-foreground/90">
              Your health journey continues here. Stay informed, stay healthy.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="p-4 bg-white/20 rounded-full">
              <Heart className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-[var(--shadow-medical)] transition-all duration-200 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Book Appointment</h3>
            <p className="text-sm text-muted-foreground">Schedule with specialists</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-[var(--shadow-medical)] transition-all duration-200 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="p-3 bg-accent/10 rounded-full inline-block mb-4">
              <Scan className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Scan Report</h3>
            <p className="text-sm text-muted-foreground">AI-powered analysis</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-[var(--shadow-medical)] transition-all duration-200 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="p-3 bg-success/10 rounded-full inline-block mb-4">
              <FileText className="h-6 w-6 text-success" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Medical Profile</h3>
            <p className="text-sm text-muted-foreground">View & update records</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-[var(--shadow-medical)] transition-all duration-200 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="p-3 bg-warning/10 rounded-full inline-block mb-4">
              <Activity className="h-6 w-6 text-warning" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Health Metrics</h3>
            <p className="text-sm text-muted-foreground">Track vital signs</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Appointments */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Upcoming Appointments</span>
                </CardTitle>
                <CardDescription>Your scheduled consultations</CardDescription>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary-dark">
                <Plus className="h-4 w-4 mr-2" />
                Book New
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{appointment.doctor}</h4>
                  <Badge 
                    variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                    className={appointment.status === 'confirmed' ? 'bg-success' : ''}
                  >
                    {appointment.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{appointment.specialization}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{appointment.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{appointment.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Scans */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-accent" />
                  <span>Recent Scans</span>
                </CardTitle>
                <CardDescription>Your latest medical reports</CardDescription>
              </div>
              <Button size="sm" variant="outline">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentScans.map((scan) => (
              <div key={scan.id} className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{scan.type}</h4>
                  {scan.status === 'reviewed' ? (
                    <CheckCircle className="h-5 w-5 text-success" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-warning" />
                  )}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{scan.date}</span>
                  <Badge 
                    variant={scan.status === 'reviewed' ? 'default' : 'secondary'}
                    className={scan.status === 'reviewed' ? 'bg-success' : 'bg-warning'}
                  >
                    {scan.findings}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Health Metrics */}
      <Card className="shadow-[var(--shadow-card)]">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-primary" />
            <span>Health Metrics</span>
          </CardTitle>
          <CardDescription>Your latest vital signs and measurements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-foreground mb-2">{metric.value}</p>
                <Badge variant="default" className="bg-success text-xs">
                  Normal
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};