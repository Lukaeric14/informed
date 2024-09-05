import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase'; // Import Supabase client

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div style={{width: '100%', height: '100%', padding: 10, background: 'white', borderRadius: 15, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <img style={{width: 80, height: 80, position: 'relative', borderRadius: 999}} src={user.profilepicurl} />
          <div style={{color: '#333333', fontSize: 22, fontFamily: 'Open Sans', fontWeight: '600', height: 26.40, wordWrap: 'break-word'}}>{user.name}</div>
          <div style={{color: '#9CA3AF', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600', height: 19.20, wordWrap: 'break-word'}}>{user.company}</div>
          <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 9, paddingBottom: 9, background: '#F3F3F3', borderRadius: 5, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <div style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '500', height: 16.80, wordWrap: 'break-word'}}>Edit Profile</div>
          </div>
        </div>
      ) : (
        <div style={{width: '100%', height: '100%', padding: 10, background: 'white', borderRadius: 15, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <img style={{width: 80, height: 80, position: 'relative', borderRadius: 999}} src="/F111.png" />
          <div style={{color: '#333333', fontSize: 22, fontFamily: 'Open Sans', fontWeight: '600', height: 26.40, wordWrap: 'break-word'}}>Overhelmed?</div>
          <div style={{color: '#9CA3AF', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600', height: 19.20, wordWrap: 'break-word'}}>Personalize your vendor research</div>
          <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 9, paddingBottom: 9, background: '#F3F3F3', borderRadius: 5, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <div style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '500', height: 16.80, wordWrap: 'break-word'}}>Build my vendor list for me</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
