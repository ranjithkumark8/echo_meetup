import React from 'react';
import styles from '../../profile.module.css';
import {
  FaInstagram,
  FaTwitterSquare,
  FaFacebookSquare,
  FaYoutube,
} from 'react-icons/fa';
import { Footer } from '../../Footer';

import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../NavBar';

const Profile = () => {
  const loginDetails = useSelector((state) => state.authReducer.loginDetails);
  return (
    <div>
      <NavBar />
      <div className={styles.profile}>
        <div>
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <h1 style={{ padding: '7px 15px 4px', fontWeight: '600' }}>
              {loginDetails.name}
            </h1>
          </div>
          <div className={styles.profile_topbar}>
            <div>
              <h3>Location:</h3>
              <p style={{ color: '#1f24cc' }}>Banglore</p>
            </div>
            <div>
              <h3>Meetup member since:</h3>
              <p>February 2, 2021</p>
            </div>
            <div>
              <h3>Networks</h3>
              <span>
                <FaFacebookSquare
                  style={{
                    height: '1.6em',
                    width: '1.6em',
                    marginRight: '2px',
                  }}
                />
              </span>
              <span>
                <FaTwitterSquare
                  style={{
                    height: '1.6em',
                    width: '1.6em',
                    marginRight: '2px',
                  }}
                />
              </span>
              <span>
                <FaYoutube
                  style={{
                    height: '1.6em',
                    width: '1.6em',
                    marginRight: '2px',
                  }}
                />
              </span>
              <span style={{ marginRight: '0' }}>
                <FaInstagram style={{ height: '1.6em', width: '1.6em' }} />
              </span>
            </div>
          </div>
          <div className={styles.add_bio}>Add a bio</div>
          <div className={styles.profile_meetups}>
            <h1>Member of 0 Meetups</h1>
          </div>
          <div style={{ display: 'flex', borderBottom: '1px solid lightgray' }}>
            <img
              style={{
                width: '40px',
                height: '40px',
                marginTop: '15px',
                marginLeft: '3px',
              }}
              src='data:image/png;base64,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'
              alt=''
            />
            <h3 style={{ padding: '10px' }}>
              Bangalore Shopping Meetup Group <br />{' '}
              <p
                style={{
                  color: '#1f24cc',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                In Progress
              </p>
            </h3>
          </div>
          <div style={{ padding: '15px 20px' }}>
            Looking to post a greeting? Start a conversation instead.
          </div>
        </div>
        <div className={styles.profile_right}>
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <img
              style={{ margin: '10px 130px', width: '50px', height: '50px' }}
              src='data:image/png;base64,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'
              alt=''
            />
            <p
              style={{
                color: '#1f24cc',
                margin: '0px 80px',
                cursor: 'pointer',
              }}
            >
              Change your photo
            </p>
          </div>
          <div className={styles.profile_interest}>
            <p style={{ margin: '5px 120px' }}>Photos 1</p>
            <h2>Interests</h2>
            <p>hide interests on profile. Edit ?</p>
          </div>
          <div className={styles.interest_h2}>
            <div>
              <h2>What are your Interests ? </h2>
            </div>
            <div>
              <h3>TECH </h3>
            </div>
            <div>
              <h3>SOCIAL </h3>
            </div>
            <div>
              <h3>GAMING </h3>
            </div>
            <div>
              <h3>OUTDOOR </h3>
            </div>
            <div>
              <h3>CAMPING </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Profile };
