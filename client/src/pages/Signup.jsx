
const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">

      <div className="bg-card p-10 rounded-xl shadow w-96">

        <h2 className="text-3xl font-heading mb-6 text-dark">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-6 rounded"
        />

        <button className="w-full bg-primary py-3 rounded-lg font-body">
          Create Account
        </button>

      </div>
    </div>
  )
}

export default Signup;
