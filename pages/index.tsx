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
    { nome: 'Filosofia/Sociologia', id: 'filosofia' },
  ];

  return (
    <div className="home">
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
