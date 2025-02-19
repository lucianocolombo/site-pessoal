import axios from 'axios';

const api = axios.create({
    baseURL: 'https://portfolio-backend-uzwq.onrender.com/api', // URL do back-end no Render
});

export const fetchUsuarios = async () => {
    const response = await api.get('/usuarios');
    return response.data;
};

export const fetchHabilidades = async () => {
    const response = await api.get('/habilidades');
    return response.data;
};

export const fetchExperiencias = async () => {
    const response = await api.get('/experiencias');
    return response.data;
};

export const fetchFormacao = async () => {
    const response = await api.get('/formacao');
    return response.data;
};

export const fetchProjetos = async () => {
    const response = await api.get('/projetos');
    return response.data;
};