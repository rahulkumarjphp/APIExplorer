import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProviders } from '../api';
import { Provider } from '../types';

const ProviderList: React.FC = () => {
    const [providers, setProviders] = useState<Provider[]>([]);

    useEffect(() => {
        const getProviders = async () => {
            const data = await fetchProviders();
            setProviders(Object.keys(data).map(key => ({ name: key, title: data[key].title })));
        };
        getProviders();
    }, []);

    return (
        <div>
            <h2>API Providers</h2>
            <ul>
                {providers.map(provider => (
                    <li key={provider.name}>
                        <Link to={`/provider/${provider.name}`}>{provider.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProviderList;