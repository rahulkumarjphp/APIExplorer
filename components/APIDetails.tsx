import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPIList } from '../api';
import { API } from '../types';

const APIDetails: React.FC = () => {
    const { providerName } = useParams<{ providerName: string }>();
    const [apis, setApis] = useState<API[]>([]);

    useEffect(() => {
        const getAPIs = async () => {
            const data = await fetchAPIList(providerName);
            setApis(Object.values(data.apis));
        };
        getAPIs();
    }, [providerName]);

    return (
        <div>
            <h2>{providerName} APIs</h2>
            <ul>
                {apis.map((api, index) => (
                    <li key={index}>
                        <h3>{api.name}</h3>
                        <p>{api.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default APIDetails;