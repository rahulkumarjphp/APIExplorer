import React from 'react';
import ProviderList from '../components/ProviderList';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>API Explorer</h1>
            <ProviderList />
        </div>
    );
};

export default HomePage;