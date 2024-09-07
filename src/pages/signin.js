'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase'; // Import Supabase client
import { useRouter } from 'next/router'; // Import useRouter from next/router

<script src="https://accounts.google.com/gsi/client" async></script>

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950); // Update state based on window width
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Log the data being sent to Supabase
      console.log('Signing in with:', { email, password });

      // Call Supabase signIn with email and password
      const response = await supabase.auth.signInWithPassword({
        email,
        password
      });

      // Log the entire response from Supabase
      console.log('Supabase response:', response);

      // Access user and session from the response data
      const user = response.data?.user;
      const session = response.data?.session;

      // Log user and session
      console.log('User:', user);
      console.log('Session:', session);

      if (response.error) {
        setError(response.error.message);
        setSuccess(null);
      } else {
        setSuccess('Sign in successful!');
        setError(null);

        // Check if user is created and session is available
        if (user && session) { // Ensure session is available
          localStorage.setItem('token', session.access_token); // Use optional chaining
          router.push('/'); // Redirect to home page
        } else {
          setError('User signed in but no session available.');
        }
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      setSuccess(null);
    }
  };

  return (
    <div style={{width: '100%', height: '100%', background: '#F6F6F6', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
          <div style={{height: 698, margin: '93px auto', background: 'white', boxShadow: '0px 27px 59px rgba(0, 0, 0, 0.03)', borderRadius: 20, overflow: 'hidden', border: '1px #E9E9E7 solid', justifyContent: 'center', alignItems: 'center', gap: '100p', paddingLeft: '50px', paddingRight: '25px', display: 'flex'}}>
              <div style={{width: 406, height: 656, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 21, display: 'inline-flex'}}>
                  <div style={{flex: '1 1 0', padding: 10}} />
                  <img style={{padding: 10, width: 220}} src="/logo-green.png" />
                  <div style={{textAlign: 'center', color: '#37352F', fontSize: 24, fontFamily: 'Open Sans', fontWeight: '700', Height: 28, wordWrap: 'break-word'}}>Welcome to Informed AI</div>
                  <div style={{width: '80%', height: 56, textAlign: 'center', color: '#37352F', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Get the answers you need to make informed decisions. Without speaking to salespeople.</div>
                  <form onSubmit={handleSignIn} style={{borderRadius: 5, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 10, width: '80%'}}>
                      <div style={{width: '99%', height: 37, borderRadius: 5, border: '1px #E9E9E7 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                          <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              style={{width: '90%', border: 'none', outline: 'none', marginLeft: '10px'}}
                              placeholder="Email"
                          />
                      </div>
                      <div style={{width: '99%', height: 37, borderRadius: 5, border: '1px #E9E9E7 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                          <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              style={{width: '90%', border: 'none', outline: 'none', marginLeft: '10px'}}
                              placeholder="Password"
                          />
                      </div>
                      {error && <p style={{color: 'red', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>{error}</p>}
                      {success && <p style={{color: 'green', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>{success}</p>}
                      <button type="submit" style={{width: '100%', height: 37, paddingLeft: 54, paddingRight: 54, paddingTop: 8, paddingBottom: 8, background: '#017F40', borderRadius: 5, justifyContent: 'center', alignItems: 'center', display: 'flex', borderWidth: 0}}>
                          <div style={{width: '100%', textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Sign In</div>
                      </button>
                  </form>
                  <div style={{height: 18, textAlign: 'center'}}>
                      <span style={{color: '#37352F', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Don't have an account? </span>
                      <button onClick={() => window.location.href = '/signup'} style={{background: 'none', border: 'none', color: '#017F40', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '600', cursor: 'pointer', padding: 0, margin: 0, textDecoration: 'underline'}}>Sign up</button>
                  </div>
                  <div style={{flex: '1 1 0', padding: 10}} />
                  <div style={{width: 406, height: 18, textAlign: 'center', color: '#7D7C78', fontSize: 11, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>By signing in, you agree to our Terms of Services & Privacy Policy</div>
              </div>
              {!isMobile && ( // Conditionally render the container based on screen size
              <img style={{width: 426, height: 656, borderRadius: 25, border: '1px #017F40 solid'}} src="/frame60887.png" />
            )}
              </div>
    </div>
)};

export default SignIn;
