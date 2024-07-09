import React, { useState, useEffect } from 'react';
import LineChart from './charts/LineChart'; 
import BarChart from './charts/BarChart';
// import ScatterPlot from './charts/ScatterPlot'; 
import YearFilter from './filters/YearFilter';
import TopicFilter from './filters/TopicFilter';
// ... other filters
import api from '../services/api';

function Dashboard() {
    const [data, setData] = useState([]); 
    const [filteredData, setFilteredData] = useState([]); 
    const [year, setYear] = useState(null); 
    const [topics, setTopics] = useState([]); 
    // ... other filter states

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.getData(); 
            setData(response.data);
            setFilteredData(response.data); // Initial data is unfiltered
        };
        fetchData();
    }, []);

    // Filter data based on selected filters (e.g., year, topics)
    // ...

    return (
        <div className="dashboard">
            {/* Filters */}
            <YearFilter year={year} setYear={setYear} />
            <TopicFilter topics={topics} setTopics={setTopics} />
            {/* ... other filters */}

            {/* Charts */}
            <LineChart data={filteredData} />
            <BarChart data={filteredData} />
            {/* <ScatterPlot data={filteredData} />  */}
            {/* ... other charts */}
        </div>
    );
}

export default Dashboard;
