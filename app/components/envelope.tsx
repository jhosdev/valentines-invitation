'use client'
import { useRouter } from 'next/navigation';

//👇 Import Open Sans font
import { Open_Sans } from 'next/font/google';

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const Envelope = () => {
  const router = useRouter(); // Using useRouter for navigation

  // Function to handle click event
  const handleAcceptClick = () => {
    router.push('/accept'); // Navigate to the "accept" route
  };

  return (
    <div className="envelope absolute bottom-0 mb-8 z-20 py-10 px-20 rounded-lg shadow-xl animate-fadeUp" style={{ transition: 'all 0.5s ease-out', background: 'linear-gradient(to right, #f0e4d7 0%, #f5f5f5 100%)' }}>
      <p className="text-4xl mb-4 font-sans text-gray-800">
        Hola mi leona,
        <br/>
        ¿Te gustaría ser mi cita de San Valentín?
      </p>
      <div className="flex space-x-4 justify-center">
        <button className="font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50" type="button" onClick={handleAcceptClick} style={{ background: 'linear-gradient(to right, #e0eafc 0%, #cfdef3 100%)', color: '#333', border: '1px solid #ccc' }}>
          Sí
        </button>
        <button className="font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50" type="button" style={{ background: 'linear-gradient(to right, #fcb6b6 0%, #fecce3 100%)', color: '#333', border: '1px solid #ccc' }}>
          No
        </button>
      </div>
    </div>
  );
}