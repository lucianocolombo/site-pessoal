import axios from 'axios';

const api = axios.create({
    baseURL: 'https://portfolio-backend-uzwq.onrender.com/api',
});

export const fetchUsuario = async () => {
    try {
        const response = await api.get('/usuarios');
        return response.data[0]; // Supondo que retorna um array com um único usuário
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        return null;
    }
};

export const fetchHabilidades = async () => {
    try {
        const response = await api.get('/habilidades');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar habilidades:', error);
        return [];
    }
};

export const fetchExperiencias = async () => {
    try {
        const response = await api.get('/experiencias');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar experiências:', error);
        return [];
    }
};

export const fetchEducacao = async () => {
    try {
        const response = await api.get('/educacao');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar educação:', error);
        return [];
    }
};

export const fetchProjetos = async () => {
    try {
        const response = await api.get('/projetos');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar projetos:', error);
        return [];
    }
};