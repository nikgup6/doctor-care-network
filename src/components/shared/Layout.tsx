import React from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  userRole?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, userRole }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation userRole={userRole} />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};