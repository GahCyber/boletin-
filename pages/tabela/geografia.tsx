import React from 'react';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const data = {
  labels: ['Matéria 1', 'Matéria 2', 'Matéria 3', 'Matéria 4'], // Matérias ou datas
  datasets: [
    {
      label: 'Aluno 1',
      data: [8, 7.5, 9, 8], // Notas do aluno 1
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
    },
    {
      label: 'Aluno 2',
      data: [6, 6.5, 7, 6.8], // Notas do aluno 2
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1,
    },
    // Adicionar mais alunos aqui
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Desempenho dos Alunos',
    },
    legend: {
      position: 'top',
    },
  },
};


const Biologia = () => {
  return (
    <div className="tabela">
      <header className="header">
        <h1>Boletim de Notas - Geografia</h1>
        <Link href="/">
          <span className="back-link">Voltar para o Boletim</span>
        </Link>
      </header>

      <section className="content">
        <h2>Tabela de Notas de Geografia</h2>
        <table className="nota-table">
          <thead>
            <tr>
              <th>Nome do Aluno</th>
              <th>Nota 1</th>
              <th>Nota 2</th>
              <th>Nota 3</th>
              <th>Média</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aluno 1</td>
              <td>8</td>
              <td>7</td>
              <td>9</td>
              <td>8.0</td>
            </tr>
            <tr>
              <td>Aluno 2</td>
              <td>6</td>
              <td>6.5</td>
              <td>7</td>
              <td>6.8</td>
            </tr>
            {/* Adicione mais alunos aqui */}
          </tbody>
        </table>


        {/* Adicionando o gráfico de desempenho */}
        <h3>Desempenho dos Alunos</h3>
        <Line data={data} options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Desempenho dos Alunos',
            },
            legend: {
              position: 'top',
            },
          },
        }} />

      </section>
    </div>
  );
};

export default Biologia;
