import * as React from 'react';
import { useLogin } from '../hooks/auth';
import hero from '../images/hero.png';
// import Navbar from '../componets/Navbar';

const IndexPage = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const [userData, login, loading, error] = useLogin(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div
      className='bg-cover min-h-screen text-white flex flex-col justify-center space-y-10 px-10'
      style={{ backgroundImage: `url(${hero})` }}>
      {/* <Navbar /> */}
      <div className='space-y-4'>
        <h1 className='text-7xl uppercase'>srs</h1>
        <h2 className='text-4xl capitalize'>welcome back, trainer!</h2>
      </div>
      <p className='w-1/3'>
        Enter your login credentials below to access your account and start helping your clients
        achieve their fitness goals.
      </p>

      <form className='space-y-6 capitalize' onSubmit={handleSubmit}>
        <div className='space-y-2'>
          <label className='block' htmlFor='email-address'>
            email
          </label>
          <input
            id='email-address'
            type='email'
            className='border-2 border-white bg-transparent px-3 py-2'
            placeholder='Email'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className='space-y-2'>
          <label className='block' htmlFor='password'>
            password
          </label>
          <input
            id='password'
            type='password'
            className='border-2 border-white bg-transparent px-3 py-2'
            placeholder='Enter your password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        <button className='bg-blue-600 px-6 py-3 capitalize' type='submit'>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>

      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
