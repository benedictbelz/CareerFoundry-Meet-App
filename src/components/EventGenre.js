import React, { useEffect, useState} from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular JS'];
    const COLORS = ['#4a4a4a', '#686868', '#858585', '#a0a0a0', '#c9c9c9'];

    const getData = () => {
        let data = genres.map(genre => {
            const value = events.filter(event => event.summary.split(' ').includes(genre)).length;
            return { name: genre, value };
        });
        data = data.filter(data => data.value)
        return data;
    };

    useEffect(() => { setData(() => getData()) }, [events] );
    
    return (
        <ResponsiveContainer height={400}>
            <PieChart align="center">
                <Pie
                    data={data}
                    //cx={200}
                    //cy={200}
                    labelLine={false}
                    innerRadius={50}
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>

    );
}

export default EventGenre;