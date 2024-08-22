import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    document.getElementById('my_modal_3').close(); // Close modal on form submission
  };

  const closeModal = () => {
    document.getElementById('my_modal_3').close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Modal close button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email Field */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email">Email</label>
              <br />
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                className={`w-80 px-3 py-1 border rounded-md outline-none ${
                  errors.email ? 'border-red-500' : ''
                }`}
                {...register('email', { required: true })}
              />
              <br />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Password Field */}
            <div className="mt-4 space-y-2">
              <label htmlFor="password">Password</label>
              <br />
              <input
                id="password"
                type="password"
                placeholder="Enter your Password"
                className={`w-80 px-3 py-1 border rounded-md outline-none ${
                  errors.password ? 'border-red-500' : ''
                }`}
                {...register('password', { required: true })}
              />
              <br />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>

              <p>
                Not registered?{' '}
                <a href="/signup" className="underline text-blue-500 cursor-pointer">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
