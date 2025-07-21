import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Users, 
  MessageCircle, 
  Clock,
  UserPlus,
  AlertCircle,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';

export const ReceptionistDashboard: React.FC = () => {
  // Mock data - will be replaced with real data from Supabase
  const appointmentQueue = [
    {
      id: 1,
      patient: 'John Doe',
      doctor: 'Dr. Smith',
      scheduledTime: '9:00 AM',
      estimatedTime: '9:15 AM',
      status: 'waiting'
    },
    {
      id: 2,
      patient: 'Sarah Miller',
      doctor: 'Dr. Johnson',
      scheduledTime: '9:30 AM',
      estimatedTime: '9:45 AM',
      status: 'in_progress'
    },
    {
      id: 3,
      patient: 'Mike Wilson',
      doctor: 'Dr. Chen',
      scheduledTime: '10:00 AM',
      estimatedTime: '10:20 AM',
      status: 'delayed'
    }
  ];

  const recentInquiries = [
    {
      id: 1,
      patient: 'Emma Brown',
      type: 'Appointment Change',
      urgency: 'medium',
      time: '10 min ago'
    },
    {
      id: 2,
      patient: 'David Garcia',
      type: 'Insurance Query',
      urgency: 'low',
      time: '25 min ago'
    },
    {
      id: 3,
      patient: 'Lisa Johnson',
      type: 'Emergency Request',
      urgency: 'high',
      time: '1 hour ago'
    }
  ];

  const todayStats = [
    { label: 'Total Appointments', value: '24', icon: Calendar, color: 'text-primary' },
    { label: 'New Registrations', value: '6', icon: UserPlus, color: 'text-success' },
    { label: 'Pending Inquiries', value: '8', icon: MessageCircle, color: 'text-warning' },
    { label: 'Completed Today', value: '18', icon: CheckCircle, color: 'text-accent' }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-2xl p-8 shadow-[var(--shadow-medical)]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Reception Dashboard</h1>
            <p className="text-lg text-primary-foreground/90">
              Managing appointments and patient inquiries efficiently.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="p-4 bg-white/20 rounded-full">
              <Users className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {todayStats.map((stat, index) => (
          <Card key={index} className="shadow-[var(--shadow-card)]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`p-3 bg-muted rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Button className="h-24 flex flex-col space-y-3 bg-gradient-to-br from-accent to-success hover:from-success hover:to-accent text-accent-foreground">
          <UserPlus className="h-8 w-8" />
          <span className="font-semibold">Register New Patient</span>
        </Button>
        <Button className="h-24 flex flex-col space-y-3 bg-gradient-to-br from-primary to-primary-light hover:from-primary-dark hover:to-primary" variant="default">
          <Calendar className="h-8 w-8" />
          <span className="font-semibold">Schedule Appointment</span>
        </Button>
        <Button className="h-24 flex flex-col space-y-3" variant="outline">
          <MessageCircle className="h-8 w-8" />
          <span className="font-semibold">Patient Support</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Appointment Queue */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Appointment Queue</span>
                </CardTitle>
                <CardDescription>Real-time appointment status</CardDescription>
              </div>
              <Button size="sm" variant="outline">
                Manage Queue
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {appointmentQueue.map((appointment) => (
              <div key={appointment.id} className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{appointment.patient}</h4>
                    <p className="text-sm text-muted-foreground">with {appointment.doctor}</p>
                  </div>
                  <Badge 
                    variant={
                      appointment.status === 'waiting' ? 'secondary' :
                      appointment.status === 'in_progress' ? 'default' : 'destructive'
                    }
                    className={
                      appointment.status === 'waiting' ? 'bg-warning' :
                      appointment.status === 'in_progress' ? 'bg-success' : ''
                    }
                  >
                    {appointment.status.replace('_', ' ')}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-muted-foreground">
                      Scheduled: {appointment.scheduledTime}
                    </span>
                    <span className="text-muted-foreground">
                      Est: {appointment.estimatedTime}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost">
                      <Phone className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Mail className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Inquiries */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-warning" />
                  <span>Recent Inquiries</span>
                </CardTitle>
                <CardDescription>Patient support requests</CardDescription>
              </div>
              <Button size="sm" className="bg-warning hover:bg-warning/90">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentInquiries.map((inquiry) => (
              <div key={inquiry.id} className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted rounded-full">
                      <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{inquiry.patient}</h4>
                      <p className="text-sm text-muted-foreground">{inquiry.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {inquiry.urgency === 'high' && (
                      <AlertCircle className="h-4 w-4 text-destructive" />
                    )}
                    <Badge 
                      variant={
                        inquiry.urgency === 'high' ? 'destructive' :
                        inquiry.urgency === 'medium' ? 'secondary' : 'outline'
                      }
                      className={
                        inquiry.urgency === 'medium' ? 'bg-warning' : ''
                      }
                    >
                      {inquiry.urgency}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{inquiry.time}</span>
                  <Button size="sm" variant="ghost">
                    Respond
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Daily Summary */}
      <Card className="shadow-[var(--shadow-card)]">
        <CardHeader>
          <CardTitle>Daily Summary</CardTitle>
          <CardDescription>Overview of today's activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">24</h3>
              <p className="text-muted-foreground">Total Appointments</p>
              <p className="text-sm text-success">↑ 12% from yesterday</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">6</h3>
              <p className="text-muted-foreground">New Patients</p>
              <p className="text-sm text-success">↑ 20% from yesterday</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">95%</h3>
              <p className="text-muted-foreground">Patient Satisfaction</p>
              <p className="text-sm text-success">↑ 3% from last week</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};