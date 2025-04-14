import { FaPaperPlane } from "react-icons/fa6";

export default function NewsletterSection() {
  return (
    <div className="w-full mx-auto mb-10">
      <div className="bg-gray-800/60 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          S&apos;inscrire à notre Newsletter
        </h2>
        <p className="text-gray-300 mb-5 text-center">
          Soyez le premier à recevoir nos nouveaux posts.
        </p>
        <form action="#" method="GET" className="max-w-xl mx-auto">
          <div className="flex gap-3 p-2 w-full bg-white rounded-lg">
            <input
              type="email"
              name="email"
              placeholder="Entrez votre email"
              className="w-full bg-transparent border-0 outline-none text-gray-600 px-2"
            />
            <button
              type="submit"
              className="bg-primary rounded-lg px-5 py-2 text-white hover:bg-primary/80 transition-colors flex items-center gap-2"
            >
              <span className="hidden sm:inline">Envoyer</span>
              <FaPaperPlane />
            </button>
          </div>
        </form>
        <p className="text-gray-400 text-sm text-center mt-3">
          Cliquez sur Envoyer pour autoriser les mails.
        </p>
      </div>
    </div>
  );
}
