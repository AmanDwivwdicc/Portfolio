function Contact() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-8">

      <div className="bg-zinc-900 p-10 rounded-3xl max-w-md w-full text-center">

        <img
          src="/profile2.png"
          alt="Aman"
          className="w-36 h-36 rounded-full mx-auto mb-6"
        />

        <h2 className="text-3xl font-bold mb-6">
          Aman Dwivedi
        </h2>

        <p className="mb-4">
          📞 +91 70674 33439
        </p>

        <p className="mb-4">
          📧 dwivediaman104@gmail.com
        </p>

        <a
  href="https://www.linkedin.com/in/aman-kumar-dwivedi-765079343/?skipRedirect=true"
  target="_blank"
  rel="noopener noreferrer"
  className="block mb-4 hover:text-cyan-400 transition"
>
  💼 LinkedIn
</a>

<a
  href="https://github.com/AmanDwivwdicc"
  target="_blank"
  rel="noopener noreferrer"
  className="block mb-4 hover:text-cyan-400 transition"
>
  💻 GitHub
</a>

      </div>

      <p className="mt-10 text-xl text-gray-400">
        Feel free to connect with me for your custom works.
      </p>

    </section>
  );
}

export default Contact;