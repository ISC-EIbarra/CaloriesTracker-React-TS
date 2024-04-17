import Form from './components/Form';

function App() {
  return (
    <>
      <header className="bg-lime-600 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-2xl font-medium text-white">
            Contador de calorías
          </h1>
          <button className="text-white border rounded-3xl px-4 py-2 hover:bg-white hover:text-black transition-colors">
            Reiniciar Aplicación
          </button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
    </>
  );
}

export default App;
