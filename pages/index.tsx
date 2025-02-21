import Link from 'next/link';

const Home = () => {
  const materias = [
    { nome: 'Biologia', id: 'biologia' },
    { nome: 'Matemática', id: 'matematica' },
    { nome: 'Português', id: 'portugues' },
    { nome: 'Redação', id: 'redacao' },
    { nome: 'Física', id: 'fisica' },
    { nome: 'Química', id: 'quimica' },
    { nome: 'Geografia', id: 'geografia' },
    { nome: 'História', id: 'historia' },
    { nome: 'Filosofia', id: 'filosofia' },
    { nome: 'Sociologia', id: 'sociologia' },
    { nome: 'Artes', id: 'artes' }
  ];

  return (
    <div className="home" style={{ height: '100vh', overflowY: 'auto', padding: '20px' }}>
      <h1>Boletim de Notas</h1>
      <ul>
        {materias.map((materia, index) => (
          <li key={index}>
            <Link id='link' href={`/tabela/${materia.id}`}>
              {materia.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
