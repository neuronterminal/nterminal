import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MatrixBackground } from './components/MatrixBackground';
import { Navigation } from './components/Navigation';
import { SocialButtons } from './components/SocialButtons';
import { AppRoutes } from './routes';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Loading } from './components/Loading';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen relative">
          <MatrixBackground />
          <SocialButtons />
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 flex items-center justify-center p-4">
              <div className="w-full max-w-6xl">
                <Suspense fallback={<Loading />}>
                  <AppRoutes />
                </Suspense>
              </div>
            </main>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}