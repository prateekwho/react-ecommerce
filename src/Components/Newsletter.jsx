function Newsletter() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#3c3e41] py-16">
        <div className="text-center space-y-8">
          <h2 className="text-2xl font-bold text-white">Let's Keep In Touch</h2>
          <form className="flex flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-3 py-1 rounded-sm"
            />
            <button
              type="submit"
              className="bg-black text-white px-3 py-1 rounded-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
