import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  FileText, 
  Users, 
  Clock,
  CheckCircle,
  AlertTriangle,
  User,
  Activity
} from 'lucide-react';

export const DoctorDashboard: React.FC = () => {
  // Mock data - will be replaced with real data from Supabase
  const todayAppointments = [
    {
      id: 1,
      patient: 'John Doe',
      time: '9:00 AM',
      type: 'Follow-up',
      status: 'confirmed'
    },
    {
      id: 2,
      patient: 'Sarah Miller',
      time: '10:30 AM',
      type: 'Consultation',
      status: 'in_progress'
    },
    {
      id: 3,
      patient: 'Mike Johnson',
      time: '2:00 PM',
      type: 'Check-up',
      status: 'pending'
    }
  ];

  const pendingReviews = [
    {
      id: 1,
      patient: 'Emma Wilson',
      scanType: 'X-Ray Chest',
      priority: 'high',
      submittedAt: '2 hours ago'
    },
    {
      id: 2,
      patient: 'David Brown',
      scanType: 'Blood Test',
      priority: 'medium',
      submittedAt: '4 hours ago'
    },
    {
      id: 3,
      patient: 'Lisa Garcia',
      scanType: 'MRI Brain',
      priority: 'high',
      submittedAt: '6 hours ago'
    }
  ];

  const stats = [
    { label: 'Today\'s Appointments', value: '8', icon: Calendar, color: 'text-primary' },
    { label: 'Pending Reviews', value: '12', icon: FileText, color: 'text-warning' },
    { label: 'Patients This Week', value: '34', icon: Users, color: 'text-success' },
    { label: 'Completed Today', value: '5', icon: CheckCircle, color: 'text-accent' }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-2xl p-8 shadow-[var(--shadow-medical)]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Good morning, Dr. Johnson!</h1>
            <p className="text-lg text-primary-foreground/90">
              Ready to make a difference today. You have 8 appointments scheduled.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="p-4 bg-white/20 rounded-full">
              <Activity className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Appointments */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Today's Appointments</span>
                </CardTitle>
                <CardDescription>Your scheduled consultations for today</CardDescription>
              </div>
              <Button size="sm" variant="outline">
                View Schedule
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="p-4 border border-border rounded-lg hover:shadow-[var(--shadow-soft)] transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{appointment.patient}</h4>
                      <p className="text-sm text-muted-foreground">{appointment.type}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={
                      appointment.status === 'confirmed' ? 'default' : 
                      appointment.status === 'in_progress' ? 'secondary' : 'outline'
                    }
                    className={
                      appointment.status === 'confirmed' ? 'bg-success' :
                      appointment.status === 'in_progress' ? 'bg-warning' : ''
                    }
                  >
                    {appointment.status.replace('_', ' ')}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{appointment.time}</span>
                  </div>
                  <Button size="sm" variant="ghost">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Reviews */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-warning" />
                  <span>Pending Reviews</span>
                </CardTitle>
                <CardDescription>Scan reports awaiting your review</CardDescription>
              </div>
              <Button size="sm" className="bg-warning hover:bg-warning/90">
                Review All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingReviews.map((review) => (
              <div key={review.id} className="p-4 border border-border rounded-lg hover:shadow-[var(--shadow-soft)] transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-warning/10 rounded-full">
                      <FileText className="h-4 w-4 text-warning" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{review.patient}</h4>
                      <p className="text-sm text-muted-foreground">{review.scanType}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {review.priority === 'high' && (
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    )}
                    <Badge 
                      variant={review.priority === 'high' ? 'destructive' : 'secondary'}
                    >
                      {review.priority}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{review.submittedAt}</span>
                  <Button size="sm" variant="ghost">
                    Review Now
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-[var(--shadow-card)]">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used tools and features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex flex-col space-y-2" variant="outline">
              <Users className="h-6 w-6" />
              <span>Patient Records</span>
            </Button>
            <Button className="h-20 flex flex-col space-y-2" variant="outline">
              <FileText className="h-6 w-6" />
              <span>Medical Reports</span>
            </Button>
            <Button className="h-20 flex flex-col space-y-2" variant="outline">
              <Calendar className="h-6 w-6" />
              <span>Schedule Management</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};