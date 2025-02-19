import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider, AppShell } from '@mantine/core';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import SkillsPage from './pages/SkillsPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'light',
        fontFamily: 'Arial, sans-serif',
        primaryColor: 'blue',
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Router>
        <AppShell
          header={<Header />}
          footer={<Footer />}
          padding="md"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/curriculo" element={<ResumePage />} />
            <Route path="/habilidades" element={<SkillsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AppShell>
      </Router>
    </MantineProvider>
  );
};

export default App;