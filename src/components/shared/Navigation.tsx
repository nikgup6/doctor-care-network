import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Stethoscope, 
  Calendar, 
  FileText, 
  Users, 
  MessageCircle, 
  Settings,
  LogOut,
  Menu,
  X,
  Heart,
  Activity
} from 'lucide-react';

interface NavigationProps {
  userRole?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ userRole }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavigationItems = () => {
    switch (userRole) {
      case 'patient':
        return [
          { icon: Activity, label: 'Dashboard', href: '/patient/dashboard' },
          { icon: FileText, label: 'Medical Profile', href: '/patient/profile' },
          { icon: FileText, label: 'Scan Reports', href: '/patient/scans' },
          { icon: Calendar, label: 'Appointments', href: '/patient/appointments' },
          { icon: MessageCircle, label: 'Chat', href: '/patient/chat' },
        ];
      case 'doctor':
        return [
          { icon: Activity, label: 'Dashboard', href: '/doctor/dashboard' },
          { icon: Calendar, label: 'Appointments', href: '/doctor/appointments' },
          { icon: FileText, label: 'Scan Reviews', href: '/doctor/scans' },
          { icon: Users, label: 'Patients', href: '/doctor/patients' },
        ];
      case 'receptionist':
        return [
          { icon: Activity, label: 'Dashboard', href: '/receptionist/dashboard' },
          { icon: Calendar, label: 'Appointment Queue', href: '/receptionist/queue' },
          { icon: Users, label: 'User Management', href: '/receptionist/users' },
          { icon: MessageCircle, label: 'Chat Support', href: '/receptionist/chat' },
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border shadow-[var(--shadow-soft)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gradient-to-br from-primary to-primary-light">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MediPortal</h1>
              <p className="text-xs text-muted-foreground">Healthcare Management</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          {userRole && (
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Button>
              ))}
            </div>
          )}

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            {userRole && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                >
                  <Settings className="h-4 w-4" />
                  <span className="text-sm">Settings</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex items-center space-x-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </Button>
              </>
            )}

            {/* Mobile menu button */}
            {userRole && (
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && userRole && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start flex items-center space-x-3 text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              ))}
              <hr className="my-3 border-border" />
              <Button
                variant="ghost"
                className="w-full justify-start flex items-center space-x-3 text-muted-foreground hover:text-foreground"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start flex items-center space-x-3 text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};