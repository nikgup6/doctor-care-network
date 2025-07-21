import React, { useState } from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupForm } from '@/components/auth/SignupForm';
import medicalHero from '@/assets/medical-hero.jpg';

interface AuthPageProps {
  onAuthenticated: (role: string) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (email: string, password: string, role: string) => {
    // TODO: Replace with actual authentication logic once Supabase is connected
    console.log('Login attempt:', { email, role });
    // For now, simulate successful login
    onAuthenticated(role);
  };

  const handleSignup = (data: any) => {
    // TODO: Replace with actual signup logic once Supabase is connected
    console.log('Signup attempt:', data);
    // For now, simulate successful signup
    onAuthenticated(data.role);
  };

  return (
    <div className="min-h-screen flex">
      {/* Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${medicalHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/90" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center p-12 text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Your Health,<br />
            <span className="text-primary-light">Our Priority</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-md">
            Comprehensive medical portal connecting patients, doctors, and healthcare providers.
          </p>
          <div className="grid grid-cols-1 gap-4 text-left max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-lg">AI-Powered Diagnostics</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-lg">Seamless Appointment Booking</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-lg">Secure Medical Records</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-lg">Real-time Communication</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-background to-muted/50">
        <div className="w-full max-w-md">
          {/* Mobile Hero */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">MediPortal</h1>
            <p className="text-muted-foreground">Your comprehensive healthcare management system</p>
          </div>

          {/* Auth Forms */}
          {isLogin ? (
            <LoginForm
              onLogin={handleLogin}
              onSwitchToSignup={() => setIsLogin(false)}
            />
          ) : (
            <SignupForm
              onSignup={handleSignup}
              onSwitchToLogin={() => setIsLogin(true)}
            />
          )}

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              By continuing, you agree to our{' '}
              <a href="#" className="text-primary hover:text-primary-dark">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary hover:text-primary-dark">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};