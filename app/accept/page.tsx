export default function Accept() {
    // Define the image path
    const imagePath = '/gato_flores.jpeg';

    return (
        // Tailwind CSS classes are used here for styling
        <div className="bg-cover bg-center h-screen w-screen flex justify-center items-center" style={{ backgroundImage: `url(${imagePath})` }}>
            <p className="text-black text-4xl text-center p-0 lg:p-5">Gracias por aceptar!</p>
        </div>
    );
}
