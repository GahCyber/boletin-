import React from 'react';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const data = {
  labels: ['Matéria 1', 'Matéria 2', 'Matéria 3', 'Matéria 4'], // Matérias ou datas
  datasets: [
    {
      label: 'Tais Rocha',
      data: [8],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
    },
    {
      label: 'Ana Beatriz',
      data: [5.5],
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1,
    },
    {
      label: 'Mariana de Moura',
      data: [5.5],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'Pedro Brito',
      data: [7.75],
      borderColor: 'rgb(153, 102, 255)',
      tension: 0.1,
    },
    {
      label: 'Maria Nunes',
      data: [2.5],
      borderColor: 'rgb(255, 159, 64)',
      tension: 0.1,
    },
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
        <Link href="/">
          <span className="back-link">Voltar para o Boletim</span>
        </Link>
      </header>

      <section className="content">
        <h2>Tabela de Notas de Filosofia</h2>
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
              <td>Tais Rocha</td>
              <th>8</th>
            </tr>
            <tr>
              <td>Ana Beatriz</td>
              <th>5.5</th>
            </tr>
            <tr>
              <td>Mariana de Moura</td>
              <th>5.5</th>
            </tr>
            <tr>
              <td>Pedro Brito</td>
              <th>7.75</th>
            </tr>
            <tr>
              <td>Maria Nunes</td>
              <th>2.5</th>
            </tr>
          </tbody>
        </table>

        {/* Adicionando o gráfico de desempenho */}

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
