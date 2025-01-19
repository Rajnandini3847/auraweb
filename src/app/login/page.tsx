'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { signIn } from 'next-auth/react';


export default function LoginPage() {
  return (
    <>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/10">
        <div className="w-full max-w-md px-4">
          <Card className="w-full">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">Welcome to AURA</CardTitle>
              <CardDescription>
                Choose your preferred sign in method
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full"
                size="lg"
                onClick={() => signIn('auth0', { 
                  callbackUrl: '/',
                  authorizationParams: { screen_hint: 'login' }
                })}
              >
                Continue with Email
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full"
                size="lg"
                onClick={() => signIn('auth0', { 
                  callbackUrl: '/',
                  authorizationParams: { connection: 'google-oauth2' }
                })}
              >
                Continue with Google
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Button
                  variant="link"
                  className="pl-1"
                  onClick={() => signIn('auth0', { 
                    callbackUrl: '/',
                    authorizationParams: { screen_hint: 'signup' }
                  })}
                >
                  Sign up
                </Button>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

