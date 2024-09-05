import React from 'react';

const Profile = () => {
  return (
    <div style={{width: '100%', height: '100%', padding: 10, background: 'white', borderRadius: 15, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <img style={{width: 80, height: 80, position: 'relative', borderRadius: 999}} src="https://via.placeholder.com/80x80" />
      <div style={{color: '#333333', fontSize: 22, fontFamily: 'Open Sans', fontWeight: '600', Height: 26.40, wordWrap: 'break-word'}}>Luka Eric</div>
      <div style={{color: '#9CA3AF', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600', Height: 19.20, wordWrap: 'break-word'}}>Founder - Rhetora AI</div>
      <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 9, paddingBottom: 9, background: '#F3F3F3', borderRadius: 5, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
        <div style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '500', Height: 16.80, wordWrap: 'break-word'}}>Edit Profile</div>
      </div>
    </div>
  );
}

export default Profile;