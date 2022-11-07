import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {

  const colors = ['#75dddd', '#00C49F', '$FF8042', '#9368B7', '#AA3E98'];

  useEffect(() => {

    setData(() => getData());

  }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angularjs', 'AngularJS-Remote', 'Angular'];
    const mappedGenres = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary.split(/[!.,\s]/).includes(genre)).length;
      return { name: genre, value };
    });
    const data = mappedGenres.filter((genre) => genre.value !== 0);
    return data;
  };

  const [data, setData] = useState([]);

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={100} height={100} >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#fff"
          dataKey='value'
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />))}
        </Pie>
        <Legend verticalAlign='bottom' height={50} />
      </PieChart>
    </ResponsiveContainer>
  );
}
export default EventGenre;