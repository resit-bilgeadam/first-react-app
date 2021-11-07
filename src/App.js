// import keywordu ile export edilmiş değişkenleri başka dosyadan çağırabiliriz
import Counter from './components/Counter';
import Todos from './components/Todos';

function App() {
  return (
    <div className='container'>
      <h1>First React App</h1>

      <hr />

      <Counter />

      <hr/>

      <Todos/>
    </div>
  );
}

// export keywordu ile bu dosyadaki herhangi bir değişkeni dışarıdan erişilebilir
// yani dışa aktarmış oluruz
export default App;
